---
name: i-wish
description: Shape a substantial product, major feature, subsystem, or redesign through user clarification, confirmed intent, current web research, and confirmed solution before writing design documents or implementation. Use when product, architecture, or reuse choices remain open or delegated, even if desired behavior is clear. Skip small edits and mechanical implementation of an established, evidenced design.
---

# I Wish

Turn a wish into a result the user has understood, approved, and can verify.
Deliver only the requested kind of result: research, design, or implementation.

**Clarify → Gate 1: confirm intent → Research online → Recommend → Gate 2:
confirm solution → Deliver → Prove → Preserve.**

## Mandatory phase boundaries

These gates are the default whenever I Wish applies, including design-only work.
The agent cannot waive them because the task seems clear, choices are delegated,
local code looks sufficient, or writing a document is reversible. An explicit
user instruction to change or skip a stage takes precedence; state that exception
and its scope. Generic "技术你定", "直接做", or "use your judgment" delegates choices
but does not explicitly waive these gates.

| Current state | Allowed next work | Not yet allowed |
| --- | --- | --- |
| Intent not confirmed | Bounded local read-only inspection; user-facing clarification and intent summary | Public research, architecture drafting, design documents, project writes |
| Gate 1 passed, research incomplete | Actual web search, primary-source inspection, relevant local inspection, research findings in the conversation | Selecting the solution, architecture/design drafting, project writes |
| Research complete, solution not confirmed | Evidence-backed recommendation and reviewable outline in the conversation; Gate 2 question | Writing project/design documents, scaffolding, dependency installation, implementation |
| Gate 2 passed | Approved documentation or implementation, verification, and record updates | Work outside the approved delivery and authorization boundaries |

Keep pre-approval briefs and evidence in the conversation. Do not disguise an
architecture proposal as a "requirements note", "plan", or "preparation" to cross
a boundary. Running candidate code or doing a prototype before Gate 2 requires
explicit authorization for that bounded experiment, in isolation from the active
project; it does not approve the remaining solution.

Existing explicit approvals of this same brief/solution count. Identify the
approved artifact and user confirmation; an agent-authored brief, old ADR, detailed
initial request, or silence alone is not approval. Do not ask again for an
unchanged, explicitly approved stage. Preserve host permissions throughout.

## Clarify and confirm intent

You must read [shaping.md](references/shaping.md) before clarification. For a
large interconnected system, complete framework, or core replacement, also read
[large-systems.md](references/large-systems.md). For games, read
[game-projects.md](references/game-projects.md). These add depth without replacing
the gates.

Inspect relevant project facts, then ask a concise user-facing batch about the
outcomes and consequential boundaries still needing answers. If the request
already supplies them, present your understanding and ask the user to confirm or
correct it. Do not silently declare that clarification is unnecessary.

The brief must state outcome, required scope, constraints, acceptance criteria
and checks, non-goals, adopted assumptions, and unresolved choices. Include this
round's delivery and compatibility boundaries. Recommend defaults for reversible
details without inventing requirements or making the user choose unfamiliar tools.

**Gate 1:** show the brief and explicitly ask for confirmation, for example
"确认以上需求后，我再开始联网调研；有哪些需要修改？" Wait for the user's answer.
Do not research or design before this confirmation. Resolve material open choices
before treating the gate as passed.

## Research online before designing

After Gate 1, you must read [research.md](references/research.md), use a web/search
tool to search current solutions, and open relevant primary sources before
drafting the architecture or design. Local inspection and remembered knowledge
complement this work; they do not replace it. Prior completed research in the same
workflow can count when its sources, tool evidence, and applicability are checked.

Produce the research conclusion in the conversation: candidates, actual source
links, check dates and versions, supported claims, recommendation and trade-offs,
remaining uncertainty, and the first decisive validation. No link/model quota is
required. Missing web access means this gate is incomplete: disclose it and ask
the user to restore access or explicitly choose a different research path. Continue
only work permitted by the current phase, not dependent design or implementation.

## Recommend and confirm the solution

Use the research to present a reviewable recommendation: experience and structure,
reuse/repair/replace/custom choices, alternatives, costs and obligations, remaining
risks, and the proposed delivery scope and verification. For large systems, cover
the agreed whole before selecting a convenient first slice.

**Gate 2:** ask the user to approve or change the recommendation and delivery
scope. For design-only work, approval authorizes the agreed design documents and
depth, not product code. For implementation, it authorizes the agreed build scope.
Wait for an explicit answer before writing either deliverable.

## Deliver, prove, and preserve

After Gate 2, you must read [delivery.md](references/delivery.md) before delivering
the approved design or implementation, and [documentation.md](references/documentation.md)
before writing project records. Persist the confirmed brief, approvals, research,
and decisions in existing task/feature/decision documents without duplicating them.

Build and verify coherent slices when implementation is approved. A first slice
does not reduce overall scope. For design-only work, check coverage, contracts,
source traceability, and failure scenarios; do not claim runtime verification.

New scope or acceptance changes reopen Gate 1; a new dependency, subsystem,
architecture boundary, general-purpose custom capability, unsupported API claim,
or license/distribution change reopens affected research. A changed approved
solution reopens Gate 2 before dependent documents or code. Continue unaffected
approved work; do not restart the entire workflow for reversible implementation
details already covered by the solution.

Match acceptance to fresh evidence. Do not weaken criteria to hide failure, count
unexecuted tests as verification, or treat a build as proof of interactive behavior.
Record decisions when made, reconcile affected docs after each completed slice,
and keep README to current overview, quick start, and navigation. Completion
requires the approved deliverable, its acceptance evidence, and updated affected
records. Report missing evidence and incomplete required outcomes honestly.
