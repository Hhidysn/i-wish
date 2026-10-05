---
name: i-wish
description: Shapes a new module, new project, or module refactor into a confirmed, researched, approved result before design or implementation. Use when architecture or reuse choices are open or delegated (e.g. 从零做一个 / 新增模块 / 整体重构); not for small edits.
---

# I Wish

Turn a wish into a result the user has understood, approved, and can verify.
Deliver only the requested kind of result: research, design, or implementation.
Use for a new project, module, or module refactor whose solution is not settled;
skip small edits and mechanical implementation of an established, evidenced design.

**Clarify → Gate 1: confirm intent → Research online → Recommend → Gate 2:
confirm solution → Deliver → Prove → Preserve.**

Use [templates.md](references/templates.md) for briefs, recommendations,
conclusions, reports, and records; user-facing text follows the contract below.

## Mandatory phase boundaries

These gates apply whenever I Wish applies, including design-only work; the agent
cannot waive them because a task looks clear, choices are delegated, local code
looks sufficient, or a document is reversible. An explicit user instruction to
change or skip a stage takes precedence; state that exception and its scope.
Generic "技术你定", "直接做", or "use your judgment" delegates choices, not these
gates. Rationale:
[0001-confirm-before-design.md](docs/decisions/0001-confirm-before-design.md).

| Current state | Allowed next work | Not yet allowed |
| --- | --- | --- |
| Intent not confirmed | Bounded local read-only inspection; user-facing clarification and intent summary | Public research, architecture drafting, design documents, project writes |
| Gate 1 passed, research incomplete | Actual web search, primary-source inspection, relevant local inspection, research findings in the conversation | Selecting the solution, architecture/design drafting, project writes |
| Research complete, solution not confirmed | Evidence-backed recommendation and reviewable outline in the conversation; Gate 2 question | Writing project/design documents, scaffolding, dependency installation, implementation |
| Gate 2 passed | Approved documentation or implementation, verification, and record updates | Work outside the approved delivery and authorization boundaries |

Keep pre-approval briefs and evidence in the conversation; do not disguise an
architecture proposal as a note, plan, or preparation. A pre-Gate-2 prototype
needs explicit authorization for that bounded experiment, isolated from the active
project, and does not approve the remaining solution.

Explicit approvals of this same brief/solution count; identify the approved
artifact and user confirmation. An agent-authored brief, old ADR, detailed
request, or silence is not approval. Do not re-ask for an unchanged approved
stage; preserve host permissions throughout. Unapproved spending or private-data
exposure needs explicit authorization before the dependent action, even when
reversible.

## Speak to the user in effects, not mechanism

Read [plain-language.md](references/plain-language.md) before the first
user-facing question, brief, or recommendation. The always-on contract:

- Cover what you will see, how you operate it, cost and limits (money, privacy,
  learning, maintenance), and what must be decided now — with a recommended default.
- Explain the effect before the name; translate a required term once ("database =
  your data survives closing the app") and keep it consistent.
- Keep internal vocabulary (gate, slice, ADR, reference) out of non-developer text.
- Label uncertainty as verified, inferred, or unverified, with how it will be checked.
- Mirror the user's language and register; switch to technical language for a
  developer, per decision, without assigning a fixed persona.

## Clarify and confirm intent

Read [shaping.md](references/shaping.md) before clarification; for games also read
[game-projects.md](references/game-projects.md). Inspect relevant project facts,
then interview in rounds of 3–4 same-layer, independent questions. Keep asking
while material answers are missing; there is no round limit, because questions
saved for later cause rework. Each question offers options, a recommended default,
and the consequence of choosing wrong; the round offers "全部采用推荐". Ask about
outcomes and consequential boundaries, not discoverable facts or unfamiliar
mechanisms.

The brief must state outcome, required scope, constraints, acceptance criteria
and checks, non-goals, adopted assumptions, unresolved choices, this round's
delivery kind, and the compatibility boundary. Recommend defaults for reversible
details without inventing requirements.

**Gate 1:** show the brief and explicitly ask for confirmation. All material open
choices must be resolved before it passes; wait for the answer, and do not
research or design before it.

## Research online before designing

After Gate 1, read [research.md](references/research.md), search current
solutions with a web tool, and open relevant primary sources before drafting.
Local inspection and memory complement this work, not
replace it. Prior research in the same workflow can count when its sources, tool
evidence, and applicability are checked. Research applies to every new workflow,
including design-only work and wishes that add no external dependency.

Produce the research conclusion in the conversation: candidates, source links,
check dates and versions, supported claims, recommendation and trade-offs,
remaining uncertainty, and the first decisive validation. No link or model quota
is required. Missing web access means this gate is
incomplete: disclose it and ask the user to restore access or explicitly choose a
different research path.

## Recommend and confirm the solution

Use the research to present a reviewable recommendation: experience and structure,
reuse/repair/replace/custom choices, alternatives, costs and obligations, remaining
risks, and the proposed delivery scope and verification. For a new project, module,
or refactor, build the whole-scope coverage described in
[delivery.md](references/delivery.md#cover-the-system-before-slicing) before
selecting the first slice. Present in complexity-scaled sections; ask for
correction where a section is load-bearing.

**Gate 2:** ask the user to approve or change the recommendation and delivery
scope. For design-only work, approval authorizes the agreed design documents and
depth, not product code. For implementation, it authorizes the agreed build scope.
Wait for an explicit answer before writing either deliverable.

## Deliver, prove, and preserve

After Gate 2, read [delivery.md](references/delivery.md) before delivering the
approved design or implementation, and [documentation.md](references/documentation.md)
before writing project records. Persist the confirmed brief, approvals, research,
and decisions in existing records without duplicating them.

Build and verify coherent slices when implementation is approved; the first slice
does not reduce overall scope. For design-only work, check coverage, contracts,
source traceability, and failure scenarios; report runtime behavior as unverified.
Run the templates.md self-checks before showing or recording any brief,
recommendation, design, or report.

New scope or acceptance changes reopen Gate 1; a new dependency, subsystem,
architecture boundary, general-purpose custom capability, unsupported API claim,
or license/distribution change reopens affected research. A changed approved
solution reopens Gate 2 before dependent documents or code. Continue unaffected
approved work.

Match acceptance to fresh evidence. Do not weaken criteria to hide failure, count
unexecuted tests as verification, or treat a build as proof of interactive behavior.
Reconcile affected records after each completed slice. Completion requires the
approved deliverable, its acceptance evidence, and updated records; report missing
evidence and incomplete required outcomes honestly.
