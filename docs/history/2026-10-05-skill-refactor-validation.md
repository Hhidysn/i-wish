# Batched-interview and effect-language refactor checks

Date: 2026-10-05
Base revision: `e1f58b8` plus the working-tree refactor described in
[decision 0002](../decisions/0002-batched-interview-and-effect-language.md).
This is a document and consistency check, not a behavioral model run.

Runtime snapshot SHA-256:
`4e6f0cd65efec21da6a5d94765c58f721acc6a661bebbe0d0dee3f6ff678b45f`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files.

## Checks run

| Check | Observed result |
| --- | --- |
| `node scripts/check.mjs` | Pass after this record was added: frontmatter valid, description 241/260 characters, all budgets ok, no broken local links |
| Budgets | `SKILL.md` 1093/1100 words, 135/500 lines; references 220–805 words each against 1000 |
| Reference wiring | `large-systems.md` deleted; SKILL.md, delivery, game-projects, README, README.zh-CN updated; new `plain-language.md` and `templates.md` linked |
| Eval walkthrough | The ten added cases and the renamed full-scope cases map to explicit rules: batched rounds and no round limit (shaping), "全部采用推荐" (shaping, templates), internal vocabulary (SKILL.md, plain-language), user-runnable acceptance script (plain-language, templates), non-interactive stop (shaping, host-adapters), self-checks (delivery), whole-scope coverage (SKILL.md, research, delivery) |
| Git review | Only the intended files changed; `references/large-systems.md` deleted; no unrelated edits |

## What this does not prove

The checks establish structure, budgets, and internal consistency only. They do
not show that a given model follows the batched interview, the effect-language
contract, or the templates across hosts. Those remain specified cases in
[cases.md](2026-10-09-runtime-before-refactor/evals/cases.md), not executed results. No fresh-context
behavioral run was performed in this round, and no installed host copy was
synchronized.

Later revision: `host-adapters.md` was removed and its install note moved to
README; the self-checks moved to `templates.md` (decision 0003).
