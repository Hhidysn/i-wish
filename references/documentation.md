# Preserve decisions and current documentation

Read before writing project decisions or documentation. Use the project's
existing conventions and canonical files first. The locations below are defaults
when no convention exists; create only files that have useful content. Start with
one feature note when that is sufficient, and split it only when needed. Do not
create a parallel I Wish history tree or duplicate the same evidence across files.

## Route content by its purpose and lifecycle

| Content | Default location | Maintenance rule |
| --- | --- | --- |
| Current overview, quick start, documentation navigation | `README.md` | Keep concise and true of the implemented product; link to details. |
| Current architecture, module behavior, interfaces, operational constraints | `docs/design/<module>.md` or existing usage docs | Describe implemented behavior and update in place; keep proposed changes in the active task/feature record. |
| Important decisions and why alternatives were rejected | `docs/decisions/NNNN-<title>.md` | One durable decision per record; preserve original rationale, update status and replacement links. |
| Reusable research evidence | `docs/research/<topic>.md` or the relevant decision/feature note | Include check date, versions, sources, recommendation, and unresolved assumptions. |
| Active scope, slices, and verification progress | Existing task/feature record | Keep current; link to canonical requirements and evidence rather than copying them. |
| Superseded designs, completed temporary plans, iteration records | Existing history directory, otherwise `docs/history/` | Archive useful history and repair incoming links; keep it out of current usage/design docs. |
| User-facing release changes | Existing `CHANGELOG.md` | Follow its conventions; use commits for implementation chronology rather than duplicating a work diary. |

Accepted decisions retain their original context and reasoning. If a decision is
reversed, write a new record that identifies what it supersedes; update the old
record's status and link to its replacement. Correct factual errors transparently
without rewriting history to make an earlier decision appear different.

Keep decision records at stable paths. Archive superseded narrative designs or
temporary plans when they otherwise obscure current behavior; do not move every
old ADR or research source merely because it has a successor. Label stale research
and link to replacement evidence when it changes an active recommendation.

Before adding to README, ask both:

1. Does this describe the currently implemented product?
2. Is it needed for the overview, quick start, or navigation?

If either answer is no, place it in the appropriate task, topic, decision, or
history record. Current implementation details still belong in topic documents.
Keep each fact in one canonical place and link to it elsewhere.

## Preserve during work, reconcile before completion

Record important decisions when made, including the constraints, alternatives,
evidence, consequences, and conditions for revisiting them. Preserve useful
research when it informs a decision; do not wait until final delivery to recover
it from the conversation. Update current docs alongside behavior changes.

After each completed slice and before reporting completion, check that:

- affected current docs match the implementation and verification evidence;
- new decisions, research conclusions, and reusable failure lessons have a home;
- superseded guidance is labeled or archived and relevant links are updated;
- remaining uncertainty, incomplete acceptance, and continuing obligations are
  visible without presenting planned behavior as already implemented.

If no durable fact or affected documentation changed, no new record is needed.
Preserve reproducible findings and decision reasons, not raw dialogue, secrets,
or every intermediate attempt. Make only task-related documentation changes;
this check does not authorize reorganizing unrelated project history.
