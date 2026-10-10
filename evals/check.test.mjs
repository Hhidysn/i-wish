import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { after, test } from 'node:test';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const checker = fileURLToPath(new URL('../scripts/check.mjs', import.meta.url));
const roots = [];
const references = {
  lite: 'Lite Guide', full: 'Full Workflow', agents: 'Agent Roles', research: 'Research',
  verification: 'Verification', records: 'Records', 'plain-language': 'Plain Language',
};

function put(root, name, content) {
  const file = join(root, name);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
}
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'i-wish-check-'));
  roots.push(root);
  put(root, 'SKILL.md', [
    '---', 'name: i-wish',
    'description: Turn an idea into a researched and verified project plan.',
    '---', '', '# i-wish', '', 'A bounded fixture for static checks.',
    '', '[Lite workflow](references/lite.md#lite-guide)', '',
  ].join('\n'));
  put(root, 'agents/openai.yaml', [
    'interface:', '  short_description: "Guide projects from first idea to verified delivery"',
    '  default_prompt: "Use $i-wish to plan this project."', '',
  ].join('\n'));
  for (const [name, title] of Object.entries(references))
    put(root, `references/${name}.md`, `# ${title}\n\nFixture reference for ${name}.\n`);
  put(root, 'LICENSE', 'MIT\n');
  // Seed report evidence paths so the fixture exercises populated evidenceFiles.
  put(root, 'scripts/check.mjs', 'fixture checker evidence\n');
  put(root, 'evals/cases.md', 'fixture case evidence\n');
  put(root, 'evals/check.test.mjs', 'fixture test evidence\n');
  return root;
}
function run(...args) {
  return spawnSync(process.execPath, [checker, ...args], { encoding: 'utf8' });
}
function checked(root) {
  const result = run('--root', root, '--json');
  assert.equal(result.error, undefined, result.error?.message);
  assert.notEqual(result.status, null, result.stderr);
  return { result, report: JSON.parse(result.stdout) };
}
after(() => {
  const tempParent = resolve(tmpdir());
  for (const root of roots) {
    const target = resolve(root);
    const rel = relative(tempParent, target);
    if (
      !rel ||
      rel === '..' ||
      rel.startsWith(`..${sep}`) ||
      isAbsolute(rel) ||
      rel.includes(sep) ||
      !basename(target).startsWith('i-wish-check-')
    ) {
      throw new Error(`Refusing recursive cleanup outside owned fixtures: ${target}`);
    }
    rmSync(target, { recursive: true, force: true });
  }
});

test('valid package reports static evidence and stable identity', () => {
  const root = fixture();
  const first = checked(root);
  assert.equal(first.result.status, 0, first.result.stdout);
  assert.equal(first.report.ok, true);
  assert.equal(first.report.kind, 'static-packaging-only');
  assert.equal(first.report.units, 'whitespace words, not model tokens');
  assert.deepEqual(first.report.failures, []);
  assert.equal(first.report.metrics.length, 8);
  assert.ok(first.report.metrics.every(row => row.path && Number.isInteger(row.words) &&
    Number.isInteger(row.budget) && /^[a-f0-9]{64}$/.test(row.sha256)));
  assert.match(first.report.runtimeSHA256, /^[a-f0-9]{64}$/);
  assert.deepEqual(Object.keys(first.report.evidenceFiles).sort(),
    ['evals/cases.md', 'evals/check.test.mjs', 'scripts/check.mjs']);
  assert.equal(checked(root).report.runtimeSHA256, first.report.runtimeSHA256);
});

test('word budget and metadata violations fail', () => {
  const over = fixture();
  put(over, 'SKILL.md', `${readFileSync(join(over, 'SKILL.md'), 'utf8')}${'word '.repeat(601)}`);
  const overResult = checked(over);
  assert.equal(overResult.result.status, 1);
  assert.ok(overResult.report.failures.some(f => f.includes('SKILL.md:') && f.includes('> 600')));

  const bad = fixture();
  const skill = readFileSync(join(bad, 'SKILL.md'), 'utf8')
    .replace('name: i-wish', 'name: another-name')
    .replace(/^description:.*$/m, `description: ${'x'.repeat(261)}`);
  put(bad, 'SKILL.md', skill);
  const ui = readFileSync(join(bad, 'agents/openai.yaml'), 'utf8')
    .replace(/short_description: "[^"]*"/, 'short_description: "Too short"');
  put(bad, 'agents/openai.yaml', ui);
  const badResult = checked(bad);
  assert.equal(badResult.result.status, 1);
  assert.ok(badResult.report.failures.some(f => f.includes('expected name i-wish')));
  assert.ok(badResult.report.failures.some(f => f.includes('over 260')));
  assert.ok(badResult.report.failures.some(f => f.includes('short description')));
});

test('missing LICENSE fails', () => {
  const root = fixture();
  rmSync(join(root, 'LICENSE'));
  const { result, report } = checked(root);
  assert.equal(result.status, 1);
  assert.ok(report.failures.includes('missing LICENSE'));
});

test('broken local targets and fenced fake anchors fail', () => {
  const broken = fixture();
  put(broken, 'SKILL.md', `${readFileSync(join(broken, 'SKILL.md'), 'utf8')}\n[Missing](references/absent.md)\n`);
  const brokenResult = checked(broken);
  assert.equal(brokenResult.result.status, 1);
  assert.ok(brokenResult.report.failures.some(f => f.includes('broken link')));

  const fake = fixture();
  put(fake, 'references/lite.md', '# Lite Guide\n\n```\n## Imaginary\n```\n');
  put(fake, 'SKILL.md', `${readFileSync(join(fake, 'SKILL.md'), 'utf8')}\n[Fake](references/lite.md#imaginary)\n`);
  const fakeResult = checked(fake);
  assert.equal(fakeResult.result.status, 1);
  assert.ok(fakeResult.report.failures.some(f => f.includes('missing heading anchor')));
});

test('runtime reference links cannot escape the fixture root', () => {
  const root = fixture();
  put(root, 'references/lite.md', `${readFileSync(join(root, 'references/lite.md'), 'utf8')}\n[Outside](../../outside.md)\n`);
  const { result, report } = checked(root);
  assert.equal(result.status, 1);
  assert.ok(report.failures.some(f => f.includes('runtime link escapes package')));
});

test('unknown and incomplete CLI options exit 2', () => {
  assert.equal(run('--unknown').status, 2);
  assert.equal(run('--root').status, 2);
});

test('active runtime edits change the fingerprint', () => {
  const root = fixture();
  const before = checked(root).report.runtimeSHA256;
  put(root, 'references/lite.md', `${readFileSync(join(root, 'references/lite.md'), 'utf8')}An active runtime edit.\n`);
  assert.notEqual(checked(root).report.runtimeSHA256, before);
});

test('history-only edits do not change the runtime fingerprint', () => {
  const root = fixture();
  put(root, 'docs/history/notes.md', 'Historical note, first version.\n');
  const before = checked(root).report.runtimeSHA256;
  put(root, 'docs/history/notes.md', 'Historical note, revised version.\n');
  assert.equal(checked(root).report.runtimeSHA256, before);
});

test('nested reference edits change the runtime fingerprint', () => {
  const root = fixture();
  const path = 'references/nested/detail.md';
  put(root, path, '# Detail\n\nInitial nested reference.\n');
  const before = checked(root).report;
  assert.ok(before.metrics.some(row => row.path === path));

  put(root, path, '# Detail\n\nRevised nested reference.\n');
  assert.notEqual(checked(root).report.runtimeSHA256, before.runtimeSHA256);
});

test('nested runtime reference links cannot escape the fixture root', () => {
  const root = fixture();
  put(root, 'references/nested/detail.md', '# Detail\n\n[Outside](../../../outside.md)\n');
  const { result, report } = checked(root);
  assert.equal(result.status, 1);
  assert.ok(report.failures.some(f => f.includes('runtime link escapes package')));
});

test('UI prompt edits change metadata fingerprint without changing runtime fingerprint', () => {
  const root = fixture();
  const before = checked(root).report;
  const ui = readFileSync(join(root, 'agents/openai.yaml'), 'utf8')
    .replace('Use $i-wish to plan this project.', 'Use $i-wish to produce a researched and verified project plan.');
  put(root, 'agents/openai.yaml', ui);

  const after = checked(root).report;
  assert.notEqual(after.metadataSHA256, before.metadataSHA256);
  assert.equal(after.runtimeSHA256, before.runtimeSHA256);
});
