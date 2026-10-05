# Adopt independent verification, fresh-context slices, and handoffs

Date: 2026-10-05
Status: Accepted

## Context

The owner asked to compare I Wish with an external six-stage workflow article
(czm, "From AI writing code to an AI workflow": Brainstorm / Design / Plan /
Execute / Verify / Ship) and apply what fits. The article's skeleton matches I
Wish, but its human gates per stage are developer-team gates. Three of its
practices have independent primary sources and fit the non-developer audience:

- two-axis independent verification: the article's code-review section separates
  spec compliance from standards, never merges them, and runs them in separate
  contexts;
- fresh-evidence discipline: Superpowers' verification-before-completion requires
  running the check and reading output before claiming success, and the article's
  RED -> CHANGE -> GREEN loop shows a check failing first;
- slice sizing and handoff: the article cites Chroma's Context Rot report
  (2025-07-14, 18 frontier models; longer input degrades unevenly) for keeping a
  slice inside one fresh context, and Matt Pocock's handoff skill for
  reference-not-copy handoffs.

The owner also asked the workflow line to name the post-approval stages Plan,
Execute, Verify, and Ship.

## Decision

- `delivery.md` requires two separate verification axes where an independent
  reviewer is available (confirmed intent and acceptance vs project standards),
  forbids merging or averaging them, and requires disclosing when verification
  shares the implementer's context.
- `delivery.md` prefers fail-then-pass evidence for behavior changes and defect
  fixes, and gives slices blocking prerequisites, shared groundwork first, and a
  one-fresh-context size.
- `templates.md` adds a completion-report line for how to undo or roll back, and a
  cross-session handoff template that references existing records instead of
  copying and keeps secrets out; `documentation.md` routes handoffs to the
  existing task/feature record.
- `SKILL.md` names the post-approval stages `Plan -> Execute -> Verify -> Ship`,
  the section heading becomes "Plan, execute, verify, and ship", and both READMEs
  mirror the names.

Rejected: per-stage user approval gates (design/plan/ship), importing the
standalone skill chain, and heavyweight per-stage documents.

## Consequences and validation

`SKILL.md` grows by four words and reference budgets stay within `check.mjs`
limits. The new rules are text-only and structurally checked; behavior across
models was not re-tested. Sources and check results are recorded in the
[2026-10-05 external-practice note](../history/2026-10-05-external-practices.md).
