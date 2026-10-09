# Require alternatives and costs in decision records

Date: 2026-10-05
Status: Accepted
Retained in: compact record guidance under [0009](0009-lite-full-progressive-orchestration.md). Original rationale below is historical.

## Context

The owner asked how to split documentation after reviewing
`czm15053/write-notes-like-deepseek`, a decision-note system with lifecycle
directories and note classes. The comparison produced two practices worth
adopting and four structural choices not worth adopting. The adopted practices:
a decision record must list the alternatives actually considered, stating each
one's strongest case before the reason it lost; and its consequences must name
ongoing costs and limitations, not only benefits. A direction that was separately
proposed and then dropped also needs a home — a rejected record or the surviving
record's alternatives — instead of living only in conversation.

## Decision

- `templates.md`'s ADR template gains `Alternatives considered` (strongest case
  first, doing nothing included), states the decision in present tense once
  implemented, separates consequences from validation, and allows
  `Status: Rejected`.
- `documentation.md` writing rules require those fields and record that a dropped
  direction is marked rejected or folded into the surviving record.
- Not adopted: the four lifecycle directories (`proposed/` conflicts with "no
  project writes before Gate 2", and status moves break stable paths), the six
  note classes (`feature`, `bug-fix`, `simplification`, `architecture`,
  `process`, `testing`), date-prefixed decision filenames, and archived-note hash
  checks.

## Consequences and validation

`templates.md` grows to 413/1000 words and `documentation.md` to 855/1000;
`SKILL.md` and the phase references are unchanged. The change is text-only. The
checks and snapshot digest are recorded in the
[2026-10-05 documentation-practice note](../history/2026-10-05-doc-note-practices.md).
