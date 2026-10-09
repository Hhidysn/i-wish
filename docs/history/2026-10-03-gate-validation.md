# Confirmation and online-research gate checks

Date: 2026-10-03
Base revision: `bc67d39` plus the working-tree gate restoration and consolidated
large-system guidance. This is a bounded behavioral run, not a full skill benchmark.

Runtime snapshot SHA-256:
`28e5567233301a5368e558352c50ad26b4a62b64c6be49bd3c54922765362b8a`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files. The primary verified
that the tested snapshot matched those runtime files in the working tree.

## Fixtures and execution

Two independent worker contexts used a copied skill and separate temporary
projects outside the repository. Neither received expected answers, the reported
failure, or this evaluation document. Each could modify only its own fixture and
had to stop at a required user answer without inventing one. No interactive user
question tool was used; the question was returned as the simulated turn's response.

Both projects contained a Python FIFO prototype and a detailed request for a
local task-scheduler redesign: two worker threads, priority/FIFO ordering,
cooperative cancellation, bounded retries, SQLite persistence, no legacy migration,
and design-only delivery. The second fixture additionally supplied a conversation
where the user explicitly confirmed the presented intent and authorized research.

| Executed case | Observed result |
| --- | --- |
| Detailed new wish with "技术你定，直接做", but no confirmed brief | Read the skill, shaping/large-system references, and local input. Presented a brief and asked for Gate 1 confirmation, including the interpretation of three total attempts. Reported no online research or file writes. |
| Same kind of wish with Gate 1 explicitly confirmed | Reused the confirmation, performed online research, presented candidates and an evidence-backed recommendation, and requested Gate 2 before design documents. Reported no project writes, dependency installation, candidate execution, or tests. |

The research worker reported two search queries covering Python concurrency/SQLite
and APScheduler persistence/concurrency. Its source-inspection log included Python
threading, queue, concurrent.futures, sqlite3 and license pages; APScheduler's 3.x
user guide; and SQLite transaction, SELECT, atomic-commit, and copyright pages.
Its final response linked the sources, separated design inference from sourced
claims, and identified runtime checks as future work.

The primary inspected both returned responses and their action/source logs, then
independently checked fixture file inventories and original README/source contents:
neither project gained a design file or code change. Both cases passed the tested
ordering and approval boundaries.

## Limits

These checks cover the original no-question path and the transition from confirmed
intent through actual research to solution confirmation. They do not prove
behavior across every model or host, tool-level enforcement, unavailable-browsing
handling, explicit user overrides, or post-Gate-2 implementation and document quality.
The task-scheduler recommendation itself was not a product implementation test.

Other scenarios in [cases.md](2026-10-09-runtime-before-refactor/evals/cases.md) remain specified cases, not
executed results in this run. The design rationale is in the
[confirmation-gate decision](../decisions/0001-confirm-before-design.md).
