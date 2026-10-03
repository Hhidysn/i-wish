# Shape the wish

Read before preparing the task brief. Start with the user's request, existing
requirements, project conventions, and relevant prior decisions. Reuse settled
answers; do not ask the user to retrieve facts available in the project.

## Produce a checkable brief

Record the intended experience and audience, required scope and constraints,
observable acceptance criteria, explicit non-goals, adopted default assumptions,
and unresolved choices. "No unresolved choices" is a valid result when supported
by the available context. Use a short existing feature or task document rather
than creating duplicate requirements. For conversation-only exploration, the
summary can stay in the response.

Pair each material acceptance criterion with a feasible check before planning
implementation. Describe an observable outcome rather than "works well" or an
implementation task such as "add a database." For subjective results, identify
the review scenario and what the user will judge; do not invent an automated
proxy that cannot establish the desired experience.

Distinguish confirmed requirements, delegated defaults, and unresolved choices.
Do not turn an assumption into a user requirement or omit a necessary feature
merely to make the first slice small.

## Resolve only the choices that need an answer

Ask when an unresolved choice materially changes scope, cost, data exposure, or
a difficult-to-reverse commitment. Explain the consequence, recommend an option,
and pause dependent work while continuing useful independent inspection or
research. Batch independent questions when helpful.

Choose and state reasonable defaults for reversible details within the existing
authorization. Do not require ritual approval of the brief. Preserve an explicit
user-requested interview or staged approval process, and count existing answers
and approvals. Silence does not resolve a required choice.

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
approval of unrelated scope, spending, or data exposure. Delegation does not
remove the research gate. If later evidence changes an acceptance criterion or
invalidates an assumption, revise the brief explicitly and resolve any newly
material user choice before dependent work.
