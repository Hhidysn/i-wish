# Classify post-approval findings and verify new entry points for real

Date: 2026-10-06
Status: Accepted

## Context

A real wish (repackaging an existing tool as a standalone command, with "keep all
capability, change only packaging") ran through the whole workflow. Three gaps
appeared in use:

- Eight defects were reported after Gate 2, by external review and by real use,
  across three rounds. None was new scope, a new dependency, or a changed
  solution, so none matched the existing reopen triggers, and the workflow said
  nothing about the class they did belong to. Each round was improvised as a
  conversation.
- The decisive defect of that task was invisible to 489 passing tests and to a
  packaged-content check: the new convenience command could not complete a task
  longer than two minutes. Only a real end-to-end dispatch exposed it.
- The verification record grew by appending a section per review round, and one
  transcribed count in it was wrong (a command count stated from memory instead of
  from the command that lists them).

## Decision

- `delivery.md` gains "Handle findings that appear after approval": a three-way
  classification (blocks an approved criterion / separately schedulable / changes
  the solution), reproduce-before-fix, and approval of the correction set before
  editing.
- `delivery.md` requires at least one real end-to-end call through a new
  user-facing entry point, with a checkable result, as acceptance evidence that a
  test suite and a content check cannot replace.
- `templates.md` adds the Gate 2 line "本轮明确不改" and a correction-set layout;
  the feature/task note gains a current-status table and a fixed/open split.
- `documentation.md` requires countable claims to come from a named re-runnable
  check, and multi-round records to keep one current-status table with each round
  appended as history.
- `SKILL.md` states the defect rule in one sentence inside the existing reopen
  paragraph, holding its word budget at 1086/1100 by reclaiming redundant wording
  elsewhere.

Rejected: reopening Gate 1 for every post-approval defect — strongest case: a
defect is a change to the intended result, so intent should be reconfirmed.
Rejected because it would stall in-scope fixes behind an interview the user did
not ask for while the approved outcome stays the same.

Rejected: treating every finding as separate work — strongest case: it keeps each
round clean and leaves scheduling to the user. Rejected because a defect that
blocks an approved acceptance criterion must be fixed for the approved result to
exist at all.

Rejected: relying on the test suite and content checks as entry-point evidence —
strongest case: they are cheap, repeatable, and already in the workflow. Rejected
because that evidence passed while the new entry point was unusable beyond two
minutes.

Do nothing and keep improvising each round — strongest case: the improvisation
worked, and the user approved each fix set in one line. Rejected because the
classification stayed invisible to the user, and the stale counts in the record
show what improvisation costs.

## Consequences and validation

- Each round now states its classification and an approved correction set, so the
  user can decline work without the agent stalling or widening scope silently.
- Reference budgets stay inside `check.mjs` limits: delivery.md 936/1000,
  documentation.md 912/1000, templates.md 441/1000, SKILL.md 1086/1100.
- Ongoing cost: `delivery.md` grows by about a third, and the new rules are prose
  checked only for structure, so model behavior was not re-tested.
- Checks and their limits:
  [2026-10-06 post-approval findings checks](../history/2026-10-06-post-approval-findings.md).
