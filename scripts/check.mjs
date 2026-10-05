#!/usr/bin/env node
// Development check for the I Wish skill: frontmatter, word/line budgets, links.
// Usage: node scripts/check.mjs
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const budgets = {
  descriptionChars: 260,
  skillWords: 1100,
  skillLines: 500,
  referenceWords: 1000,
};
const failures = [];

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git" || entry.name === "node_modules") return [];
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

const countWords = (text) => (text.trim() ? text.trim().split(/\s+/).length : 0);

const skillPath = join(root, "SKILL.md");
const skillText = readFileSync(skillPath, "utf8");
const frontmatter = skillText.match(/^---\r?\n([\s\S]*?)\r?\n---/);

if (!frontmatter) {
  failures.push("SKILL.md: missing YAML frontmatter");
} else {
  const name = frontmatter[1].match(/^name:\s*(.+)$/m)?.[1].trim() ?? "";
  const description = frontmatter[1].match(/^description:\s*(.+)$/m)?.[1].trim() ?? "";
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) failures.push(`SKILL.md: invalid name "${name}"`);
  if (name !== "i-wish") failures.push(`SKILL.md: name should match the directory, got "${name}"`);
  if (!description) failures.push("SKILL.md: missing description");
  if (description.length > budgets.descriptionChars) {
    failures.push(`SKILL.md: description ${description.length} chars > ${budgets.descriptionChars}`);
  }
  if (/[<>]/.test(description)) failures.push("SKILL.md: description contains XML-like markup");
  console.log(`description: ${description.length}/${budgets.descriptionChars} chars`);
}

const rows = [];
const checkBudget = (file, label, limit) => {
  const text = readFileSync(file, "utf8");
  const words = countWords(text);
  const lines = text.split(/\r?\n/).length - 1;
  rows.push({ label, words, lines, limit, ok: words <= limit });
  if (words > limit) failures.push(`${label}: ${words} words > ${limit}`);
};
checkBudget(skillPath, "SKILL.md", budgets.skillWords);
const skillLines = skillText.split(/\r?\n/).length - 1;
if (skillLines > budgets.skillLines) failures.push(`SKILL.md: ${skillLines} lines > ${budgets.skillLines}`);

const referenceDir = join(root, "references");
for (const entry of readdirSync(referenceDir).sort()) {
  if (!entry.endsWith(".md")) continue;
  checkBudget(join(referenceDir, entry), `references/${entry}`, budgets.referenceWords);
}

console.log("\nfile                                     words  lines  budget");
for (const row of rows) {
  console.log(
    `${row.label.padEnd(40)} ${String(row.words).padStart(5)} ${String(row.lines).padStart(6)}  ${row.ok ? "ok" : "OVER"}`,
  );
}

const linkPattern = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
for (const file of walk(root).filter((path) => path.endsWith(".md"))) {
  const dir = dirname(file);
  for (const match of readFileSync(file, "utf8").matchAll(linkPattern)) {
    const target = match[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const clean = decodeURIComponent(target.split("#")[0]);
    if (!clean) continue;
    if (!existsSync(resolve(dir, clean))) {
      failures.push(`${relative(root, file)}: broken link -> ${target}`);
    }
  }
}

if (failures.length > 0) {
  console.log("\nFAIL");
  for (const failure of failures) console.log(`- ${failure}`);
  process.exit(1);
}
console.log("\nOK: frontmatter, budgets, and local links pass.");
