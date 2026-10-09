> Historical snapshot of revision `5bfecea` (2026-10-09). Not active instructions. Current workflow: [I Wish](../../../../SKILL.md).

# Shape the wish

Read before clarification and Gate 1. Inspect the user's request, existing
requirements, project conventions, and relevant prior decisions using bounded
local read-only access. Reuse known facts; ask the user about intent and choices,
not facts available in the project. Do not draft architecture during this phase.

One outer workflow owns the wish. If the user explicitly invoked another
end-to-end workflow, settle which one owns the outer loop before inspection or
writes; do not run two interviews. When independent review or a required tool is
unavailable, disclose the gap instead of claiming coverage.

## Interview in rounds of 3–4

Ask rounds of three or four same-layer, mutually independent questions. A question
whose answer depends on another belongs in a later round. A round that brings no
new material question ends the interview: turn the remaining reversible details
into stated defaults and show the brief. Before that point there is no round
limit, because questions saved for later cause rework.

Material means the answer changes outcome, scope, acceptance, cost, privacy, an
irreversible commitment, or compatibility. Never close by defaulting an item that
changes cost, spending, data exposure, or an irreversible commitment: ask, with
the effect and a recommended default. Interview completion is not approval; Gate 1
still needs explicit confirmation.

Cover layers in order: desired experience and audience; scope and non-goals;
operating context such as platform, offline use, collaboration, privacy, and data
exposure; cost and constraints; observable acceptance. Do not let a scope or
solution decision masquerade as an experience question.

For a technical subsystem, ask what it enables, what the user repeatedly does
with it, who it serves, and which visible moment proves it works. If answers
conflict, name the conflict and ask one focused question.

Before sending a round, check that a non-developer can answer without research,
options describe effects rather than technologies, recommendations follow known
preferences, and no question depends on another's answer.

Each question offers concrete options where possible, a recommended default, and
the consequence of choosing wrong. Close the round with "全部采用推荐" (adopt all
recommended defaults) as a one-line answer. Ask decisions, not facts: look up what
the project, environment, or tools can answer. Never make the user choose an
unfamiliar mechanism before research; translate it into its visible effect and
recommend it (see [plain-language.md](plain-language.md)).

Without an interactive user or structured question tool, send one consolidated
Markdown question card with defaults, then stop and wait; never self-approve.

## Produce a checkable brief

Record the intended experience and audience, required scope and constraints,
observable acceptance criteria, explicit non-goals, adopted default assumptions,
and unresolved choices. Include this round's requested deliverable and
compatibility boundary:

| Boundary | What must be explicit |
| --- | --- |
| Requirement scope | Intended experience, capability families, audience, non-goals, material constraints |
| Delivery kind this round | Research, proposal, design documents, experiments, implementation, or a combination; artifacts and acceptance evidence expected now |
| Design depth | Conceptual outline, module design, implementable interfaces/schemas, or another agreed level; areas needing deeper treatment |
| Compatibility | What must survive, if anything: behavior, saves, schemas, APIs, assets, deployment, integrations |

A clean replacement without old-prototype compatibility is a real boundary:
inspect the old system for lessons and reuse candidates without reinstating its
contracts. Replacement design does not authorize deleting the implementation.

Pair each material acceptance criterion with a feasible check before planning
implementation. Describe an observable outcome rather than "works well" or an
implementation task such as "add a database." For subjective results, identify the
review scenario and what the user will judge; do not invent an automated proxy
that cannot establish the desired experience.

Distinguish confirmed requirements, delegated defaults, and unresolved choices.
Do not turn an assumption into a user requirement or omit a necessary feature
merely to make the first slice small.

Capture the user's own words for things during the interview; after Gate 2, record
the mapping to canonical terms in the project glossary under
[documentation.md](documentation.md).

## Adapt explanation per decision

A user may want different levels of control in different areas; do not assign a
fixed expertise profile. When the user delegates technical choices, ask about
outcomes and recommend an implementation rather than transferring the choice
back. When the user wants to learn, explain the important trade-offs and what
would justify revisiting a decision. When the user supplies technical constraints,
focus on relevant alternatives, assumptions, and operational consequences.
Effect-first wording and per-register examples: [plain-language.md](plain-language.md).

Treat answers such as "都可以" as delegation of the choice being discussed, not
approval of unrelated scope, spending, or data exposure. Delegation does not waive
confirmation or online research.

## Obtain explicit confirmation at Gate 1

Show the brief even when the initial request answers every question, and ask the
user to confirm or correct it. This confirmation question is the minimum
clarification interaction; the agent cannot decide it is unnecessary. Before
Gate 1, independent preparation is limited to local read-only inspection.

Gate 1 passes only when the user explicitly confirms the presented intent and
every material open choice is resolved. An earlier confirmation of the same brief
can be referenced without asking again. Distinguish that from a detailed initial
request, an agent-written summary, or generic delegation. Silence is not
confirmation. If a gate pauses work, identify the applicable skill rule and the
concrete brief awaiting the user's answer.

If later evidence changes scope, acceptance, or a material assumption, revise the
affected brief and return to Gate 1 before dependent design or implementation;
unchanged approvals remain valid.
