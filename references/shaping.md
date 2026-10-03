# Shape the wish

Read before clarification and Gate 1. Inspect the user's request, existing
requirements, project conventions, and relevant prior decisions using bounded
local read-only access. Reuse known facts; ask the user about intent and choices,
not facts available in the project. Do not draft architecture during this phase.

## Produce a checkable brief

Record the intended experience and audience, required scope and constraints,
observable acceptance criteria, explicit non-goals, adopted default assumptions,
and unresolved choices. Include this round's requested deliverable and compatibility
boundary. Present this brief in the conversation before Gate 1; persist it only
after Gate 2. Existing documents inform the brief but cannot substitute for user
confirmation of the current wish.

Pair each material acceptance criterion with a feasible check before planning
implementation. Describe an observable outcome rather than "works well" or an
implementation task such as "add a database." For subjective results, identify
the review scenario and what the user will judge; do not invent an automated
proxy that cannot establish the desired experience.

Distinguish confirmed requirements, delegated defaults, and unresolved choices.
Do not turn an assumption into a user requirement or omit a necessary feature
merely to make the first slice small.

For redesigns, distinguish compatibility obligations from possible reuse. Existing
code, saves, interfaces, and deployment choices are evidence to inspect, not an
automatic requirement to preserve. Follow an explicitly authorized replacement
boundary; include it in the confirmation instead of silently preserving the old
system or assuming a rewrite authorizes deleting it.

## Ask, then obtain explicit confirmation

Ask a concise batch covering unanswered outcomes, scope, cost, data exposure, or
hard-to-reverse choices. Explain consequences and recommend defaults. Follow up
only where answers materially change the brief; avoid a fixed question quota.
Before Gate 1, independent preparation is limited to local read-only inspection.

Choose and state reasonable defaults for reversible details within the existing
authorization. Even when the initial request answers every question, show the
brief and ask the user to confirm or correct it. This confirmation question is
the minimum clarification interaction; the agent cannot decide it is unnecessary.

Gate 1 passes only when the user explicitly confirms the presented intent and
material choices are resolved. An earlier confirmation of the same brief can be
referenced without asking again. Distinguish that from a detailed initial request,
an agent-written summary, or generic delegation. Silence is not confirmation.
If a gate pauses work, identify the applicable skill rule and the concrete brief
awaiting the user's answer.

## Adapt technical guidance

Adapt responsibility and explanation to the current decision:

- When the user delegates technical choices, ask about outcomes such as offline
  use, collaboration, privacy, or ongoing cost. Recommend an implementation
  rather than asking them to choose unfamiliar frameworks or databases.
- When the user wants to learn, explain the important trade-offs and what would
  justify revisiting a decision. Keep implementation moving.
- When the user supplies technical constraints, focus on relevant alternatives,
  assumptions, and operational consequences.

A user may want different levels of control in different areas. Do not assign
a fixed expertise profile. Surface costly hidden choices without transferring
low-level decisions back to someone who has delegated them.

Treat answers such as "都可以" as delegation of the choice being discussed, not
approval of unrelated scope, spending, or data exposure. Delegation does not waive
confirmation or online research. If later evidence changes scope, acceptance, or
a material assumption, revise the affected brief and return to Gate 1 before
dependent design or implementation; unchanged approvals remain valid.
