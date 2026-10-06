# Post-approval finding checks

Date: 2026-10-06
Base revision: `f01424e` plus the working-tree changes from decision 0007.

Runtime snapshot SHA-256:
`f83d3842e9f3b6e1eacbb0f813877848098abd58b26f599f961fe47f89918b0b`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files.

## Evidence

Source: the wish that motivated this round — repackaging an existing tool as a
standalone npm command under the constraint "keep all capability, change only
packaging". Observed in that task:

| Observation | Detail |
| --- | --- |
| Post-approval findings | 8 defects across 3 review rounds, none matching an existing reopen trigger; each round improvised as a conversation |
| Entry-point gap | 489 passing tests plus a packaged-content check passed while the new convenience command could not complete a task longer than 120 s; only a real dispatch exposed it |
| Record drift | the verification record appended a section per round, and a command count transcribed from memory was wrong once |

## Document checks

| Check | Observed result |
| --- | --- |
| `node scripts/check.mjs` | Pass: frontmatter valid, description 241/260 characters, all budgets ok, no broken local links |
| Budgets | SKILL.md 1086/1100 (was 1094), delivery.md 936/1000 (was 692), documentation.md 912/1000 (was 855), templates.md 441/1000 (was 413); research.md, shaping.md, plain-language.md, game-projects.md unchanged |
| Diff review | Changed: `SKILL.md`, `references/delivery.md`, `references/documentation.md`, `references/templates.md`, `evals/cases.md`, decision 0007, this note |
| Added eval cases | 6 rows: post-approval classification, correction-set approval, entry-point evidence, countable claims, multi-round record |

## What this does not prove

The change is text and structure only. No behavioral run in a fresh context tested
whether an agent classifies a post-approval finding, states a correction set before
editing, makes a real entry-point call, or derives a count from a re-runnable
check. Independent fresh-context validation was not run in this round, so the six
new cases are recorded as expectations, not as observed behavior.
