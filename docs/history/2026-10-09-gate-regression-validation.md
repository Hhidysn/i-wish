# 2026-10-09 mandatory-gate regression

User found weakened gates in the previous compact entry. Native read-only
`gate_regression_audit` confirmed three losses: mandatory pass/wait for the brief,
online-research completion before design, and explicit approval of solution/scope
before design/project writes. Primary restored these in the canonical entry and
synchronized README, UI prompt, lite/full/research guidance and current design.

The earlier user skip applied only to the previous refactor's solution confirmation;
no skill-wide waiver was authorized. Correction is within the already-requested
strong-gate behavior. Native agents did not edit files.

## Behavioral checks

New `fork_turns=none` probes received raw scenario facts and local-read-only scope;
no expected answer, previous verdicts, evals or project designs. They did not perform
network requests, writes, agent dispatch or simulated approvals/results.

| Probe | Observed result | Actual reads |
| --- | --- | --- |
| gate1_probe: fully specified local demo, 技术你定, write code | Gate 1 pending; brief + confirmation question; stopped; no research/design/writes | Entry only |
| research_gate_probe: Gate 1 confirmed, standard library/current code only, no prior research | Research incomplete; bounded primary-source research next; architecture/Gate 2/writes pending | Entry, lite, research |
| gate2_probe: research complete, design-only, reversible Markdown, no shown solution approval | Gate 2 pending; conversation recommendation/challenge/approval before document write | Entry only |

Research completeness in probe 3 was supplied scenario state, not an actual new
research claim. These runs prove observed next-action interpretation, not full
product development or all possible instruction variants.

Independent test author `independent_tests` supplied I09–I11 and the revised
650-word overflow check. Its initial I09 wording incorrectly allowed technology
selection; primary requested oracle reconciliation, and the author returned the
corrected behavior-before-selection case. Primary saved the author's final cases
and assertions; author/applier/executor roles remained distinct.

## Static checks and state

Run the same targeted CLI tests after the budget change, static package validation,
UTF-8 skill metadata validation and diff whitespace check. Record final fingerprints
and actual results below. Gate behavior is never inferred from matching prose.
The previous source/record identities remain historical; this correction produces
new instruction and UI identities.

## Executed results

- `node --test evals/check.test.mjs`: 11 tests passed, 0 failures.
- `node scripts/check.mjs` / `--json`: passed budgets, metadata, local links/anchors and package containment.
- Skill Creator's `quick_validate.py` completed successfully in UTF-8 mode against the repository.
- `git -c core.autocrlf=false diff --check`: passed.

Final static evidence: [gate-check-report.json](2026-10-09-gate-check-report.json).

Active instruction identity: `9c0d5cdfd4633bf696e0e90b81f51d2d50e8f7ac3b448ce74dedeba39a45f163`.
UI identity: `35e66772c8aa1143b624506ddfb8c22f151bac510e013bc2cd63c8e5ea26bfac`.
Entry: 649 words; active instructions: 4120 words.

These identities match the unchanged runtime guides used by the three fresh probes.
The working tree remains uncommitted; HEAD alone does not identify this state.
Earlier refactor reports remain historical and are not overwritten as if they
had covered this regression. No product/browser E2E or transport benchmark run.

Final independent static recheck: `gate_regression_audit` passed with no blocker.
It inspected the restored stop/wait, four-state table, online-research completion,
scoped exceptions and README/metadata/reference consistency; it did not claim to
have executed the primary's behavioral probes or CLI tests.
