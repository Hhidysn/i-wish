# Restore research depth and interview checks from 982af82

Date: 2026-10-05
Status: Accepted

## Context

The owner compared the current references with commit `982af82`
(`references/interview.md` and `references/research.md`) and found the older
research guide more detailed. The comparison showed that several research rules
and interview aids had been lost during the 2026-10-05 refactor rather than
intentionally replaced: research depth per decision, security and supply-chain
comparison dimensions, license classes and duties, de-identified queries,
local-source hygiene, the adversarial pass when no independent reviewer exists,
the technical-subsystem question set, conflict handling, the pre-send round
check, per-option visible effects, and the Gate 2 reversibility and first-slice
fields.

## Decision

Restore them in compact form:

- `research.md`: research depth by decision reversibility; add security,
  permissions, native binaries, and supply chain to the comparison dimensions;
  flag copyleft, non-commercial, no-derivatives, source-available, marketplace,
  custom, and unclear license terms and carry attribution/NOTICE/source-offer
  duties into project and release docs; never adopt from memory alone; keep
  research queries and reviewer briefs de-identified; screen candidates remotely
  before downloading and clean up; run an explicit adversarial pass on the
  weakest assumptions when no independent reviewer is available.
- `shaping.md`: technical-subsystem question set, conflict handling, and the
  pre-send round check.
- `templates.md`: per-option visible effects and recommendation reasons in the
  question card; "hardest to reverse" and "first slice must prove" in Gate 2.

Two superseded rules stay retired: rounds of 3–6 with a three-round soft cap (the
owner replaced them with 3–4 per round and no round cap), and the long two-track
and local-download passages that are already covered in compact form.

## Consequences and validation

`research.md` is 970/1000 words and `shaping.md` 916/1000; `SKILL.md` is
unchanged. The restored rules are text-only; behavior across models was not
re-tested. Checks and the snapshot digest are recorded in the
[2026-10-05 restore note](../history/2026-10-05-restore-from-982af82.md).
