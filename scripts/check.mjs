#!/usr/bin/env node
// Static packaging checks and content identities, not workflow execution evidence.
// Usage: node scripts/check.mjs [--root DIR] [--json]
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, realpathSync, statSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);
let root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let json = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--json') json = true;
  else if (args[i] === '--root' && args[i + 1] && !args[i + 1].startsWith('--')) root = resolve(args[++i]);
  else { console.error(`Unknown or incomplete option: ${args[i]}`); process.exit(2); }
}
const budgets = new Map([
  ['SKILL.md', 600], ['references/lite.md', 420], ['references/full.md', 1000],
  ['references/agents.md', 700], ['references/research.md', 550],
  ['references/verification.md', 800], ['references/records.md', 450],
  ['references/plain-language.md', 220],
]);
const failures = [];
const metrics = [];
const sha = value => createHash('sha256').update(value).digest('hex');
const words = value => value.trim() ? value.trim().split(/\s+/u).length : 0;
const within = (base, target) => {
  const rel = relative(base, target);
  return !isAbsolute(rel) && rel !== '..' && !rel.startsWith(`..${sep}`);
};
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  if (['.git', 'node_modules'].includes(entry.name) || entry.isSymbolicLink()) return [];
  const path = join(dir, entry.name);
  return entry.isDirectory() ? walk(path) : [path];
});
const slug = value => value.toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu, '').replace(/\s/g, '-');
const anchors = text => {
  const seen = new Map();
  const result = new Set();
  let inFence = false;
  for (const line of text.split(/\r?\n/u)) {
    if (/^\s*(?:```|~~~)/u.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const heading = line.match(/^#{1,6}\s+(.+?)(?:\s+#+)?$/u);
    if (!heading) continue;
    const base = slug(heading[1].trim());
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    result.add(count ? `${base}-${count}` : base);
  }
  for (const match of text.matchAll(/<(?:a|[a-z][\w-]*)\b[^>]*\bid=["']([^"']+)["'][^>]*>/giu)) result.add(match[1]);
  return result;
};
const read = path => readFileSync(path, 'utf8');
const field = (text, key) => {
  const value = text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim() ?? '';
  return value.replace(/^(["'])(.*)\1$/u, '$2');
};
try {
  const main = read(join(root, 'SKILL.md'));
  const front = main.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u)?.[1];
  if (!front) failures.push('SKILL.md: missing frontmatter');
  else {
    if (field(front, 'name') !== 'i-wish') failures.push('SKILL.md: expected name i-wish');
    const description = field(front, 'description');
    if (!description || description.length > 260 || /[<>]/u.test(description)) failures.push('SKILL.md: invalid description or over 260 characters');
  }
  const ui = read(join(root, 'agents/openai.yaml'));
  if (!ui.match(/default_prompt:\s*["'][^\n]*\$i-wish/u)) failures.push('agents/openai.yaml: default prompt must mention $i-wish');
  const blurb = ui.match(/short_description:\s*["']([^\n]*?)["']/u)?.[1] ?? '';
  if (blurb.length < 25 || blurb.length > 64) failures.push('agents/openai.yaml: short description must be 25–64 characters');
  if (!existsSync(join(root, 'LICENSE'))) failures.push('missing LICENSE');

  const runtime = new Set(budgets.keys());
  if (existsSync(join(root, 'references'))) {
    for (const path of walk(join(root, 'references')).filter(path => path.endsWith('.md'))) runtime.add(relative(root, path).replaceAll('\\', '/'));
  }
  const fingerprint = createHash('sha256');
  for (const path of [...runtime].sort()) {
    const absolute = join(root, path);
    if (!existsSync(absolute)) { failures.push(`missing ${path}`); continue; }
    if (!within(realpathSync(root), realpathSync(absolute))) { failures.push(`${path}: runtime file escapes package`); continue; }
    const content = read(absolute);
    const count = words(content);
    const budget = budgets.get(path) ?? 700;
    metrics.push({ path, words: count, budget, sha256: sha(content) });
    fingerprint.update(path).update('\0').update(content).update('\0');
    if (count > budget) failures.push(`${path}: ${count} words > ${budget}`);
    if (/\[TODO:[^\n]*\]/u.test(content)) failures.push(`${path}: unfinished scaffold`);
  }
  for (const file of walk(root).filter(path => path.endsWith('.md'))) {
    const rel = relative(root, file).replaceAll('\\', '/');
    for (const match of read(file).matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/gu)) {
      const target = match[1];
      if (/^[a-z][a-z\d+.-]*:/iu.test(target)) continue;
      const [path, fragment] = target.split('#');
      const destination = path ? resolve(dirname(file), decodeURIComponent(path)) : file;
      if (runtime.has(rel) && !within(realpathSync(root), existsSync(destination) ? realpathSync(destination) : destination)) {
        failures.push(`${rel}: runtime link escapes package: ${target}`);
        continue;
      }
      if (!existsSync(destination)) { failures.push(`${rel}: broken link: ${target}`); continue; }
      if (fragment && destination.endsWith('.md') && statSync(destination).isFile() && !anchors(read(destination)).has(decodeURIComponent(fragment))) failures.push(`${rel}: missing heading anchor: ${target}`);
    }
  }
  const snapshot = join(root, 'docs/history/2026-10-09-runtime-before-refactor');
  const oldMain = join(snapshot, 'entry.md');
  const stripBanner = text => text.replace(/^> Historical snapshot[^\n]*\n\n/gmu, '');
  const baseline = existsSync(oldMain) ? {
    entryWords: words(stripBanner(read(oldMain))),
    runtimeWords: [oldMain, ...walk(join(snapshot, 'references')).filter(path => path.endsWith('.md'))].reduce((sum, path) => sum + words(stripBanner(read(path))), 0),
  } : null;
  const evidenceFiles = ['scripts/check.mjs', 'evals/cases.md', 'evals/check.test.mjs'];
  const evidence = Object.fromEntries(evidenceFiles.filter(path => existsSync(join(root, path))).map(path => [path, sha(read(join(root, path)))]));
  const report = { ok: failures.length === 0, kind: 'static-packaging-only', units: 'whitespace words, not model tokens', metrics, runtimeWords: metrics.reduce((sum, row) => sum + row.words, 0), runtimeSHA256: fingerprint.digest('hex'), metadataSHA256: sha(ui), evidenceFiles: evidence, baseline, failures };
  if (json) console.log(JSON.stringify(report, null, 2));
  else {
    for (const row of metrics) console.log(`${row.path}: ${row.words}/${row.budget}`);
    console.log(`Runtime: ${report.runtimeWords} words; SHA256 ${report.runtimeSHA256}`);
    if (baseline) console.log(`Previous entry/runtime: ${baseline.entryWords}/${baseline.runtimeWords} words`);
    for (const failure of failures) console.error(`FAIL: ${failure}`);
    console.log(report.ok ? 'PASS: static metadata, budgets, local links and anchors. Workflow behavior is not established.' : 'FAIL: static packaging');
  }
} catch (error) {
  failures.push(error.message);
  if (json) console.log(JSON.stringify({ ok: false, kind: 'static-packaging-only', failures }, null, 2));
  else console.error(`FAIL: ${error.message}`);
}
if (failures.length) process.exitCode = 1;
