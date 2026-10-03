# Large systems and complete replacements

Read for a large interconnected system, complete framework design, or replacement
of a core. This adds depth to the core gates; it never permits starting design
before confirmed intent and completed online research.

## Clarify the delivery and compatibility boundaries

Include these in the Gate 1 brief and user-facing confirmation:

| Boundary | What must be explicit |
| --- | --- |
| Requirement scope | Intended experience, capability families, audience, non-goals, and material constraints. |
| Design depth | Conceptual outline, module design, implementable interfaces/schemas, or another agreed level; areas needing deeper treatment. |
| This round's delivery | Research, proposal, design documents, experiments, implementation, or a combination; artifacts and acceptance evidence expected now. |
| Compatibility | What must survive, if anything: behavior, saves, schemas, APIs, assets, deployment, or integrations. |

Reuse supplied facts and explicit confirmations of the same brief, but do not
self-approve a new wish because these fields appear complete. A clean replacement
without old-prototype compatibility is a real boundary: inspect the old system
for lessons and reuse candidates without reinstating its contracts. Replacement
design does not itself authorize deleting the implementation.

## Research the whole scope

After Gate 1, use [research.md](research.md) and map research to the agreed
capability families. Inspect relevant local code, tests, decisions, reference
projects, libraries, and pipelines. Search current approaches online and inspect
primary sources across the material decision areas before architecture drafting.

Use authorized specialists when they improve coverage; the active primary checks
decision-driving source evidence and owns synthesis. Follow the host's delegation
and timeout procedures, not a fixed model roster or call count. A submitted task,
silence, or a timeout is not a completed finding. Additional research explicitly
requested by the user remains part of scope.

Compare reuse, repair, replacement, and custom approaches against the same brief.
Evidence depth follows decision risk and system coverage, not a quota of links or
models. Do not reduce research to the first feature the agent knows how to build.

## Cover the system before selecting slices

After research, prepare a reviewable coverage outline in the Gate 2 recommendation.
Map each required capability family to its owner/boundary, inputs and outputs,
dependencies or extension ports, acceptance scenario, and evidence state. Use
states such as sourced, inferred, open, or needs experiment. Persist and expand
this matrix to the approved design depth only after Gate 2.

Connect the major parts with the relevant contracts:

- interface/data ownership, identity, schemas, versioning, and extension ports;
- authority, permissions, isolation, and trust boundaries;
- time, scheduling, concurrency, ordering, cancellation, transactions, and retry;
- persistence, recovery, migrations or reset policy, and lifecycle;
- resource budgets, streaming, networking, caching, and content/tool pipelines;
- diagnostics, test seams, target platforms, and failure/recovery behavior.

A module box alone does not establish its contract. Use representative end-to-end
scenarios to reveal interactions and expose unresolved gaps before approval.
Interpret broad extensibility goals as named extension ports and explicit budgets,
not unlimited performance or unrestricted code execution. Track unproven thresholds
with a hypothesis, workload/platform, decisive check, pass/fail target, and fallback.
Documentation or model agreement cannot prove those thresholds.

Sequence the agreed whole by risk and dependencies under [delivery.md](delivery.md).
The first slice is a way to deliver and validate the system, not a reduction of
its scope to a convenient demo.

## Deliver the approved kind of result

For design-only work, Gate 2 approves the outline, artifacts, and depth. Deliver
the overall design, relevant alternatives, contracts, coverage matrix, unresolved
thresholds, and validation sequence. Check requirement coverage, source traceability,
interface consistency, and failure scenarios. Report these as design checks, not
executed gameplay, performance, export, or concurrency tests.

For implementation, preserve whole-system coverage while building and verifying
slices. Report the actual revision or working-tree state and distinguish artifacts,
implemented behavior, executed checks, and unverified criteria. Preserve records
under [documentation.md](documentation.md), reopening affected gates when needed.
