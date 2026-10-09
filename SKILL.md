---
name: i-wish
description: Shape an unsettled project, module, or major refactor through confirmed intent, research, audited design, and independent verification. Lite for bounded demos; full for complex or consequential work. Skip routine fixes and settled implementation.
---

# I Wish

**Intent → confirm → research → design + challenge → approve → plan → build → independently verify → deliver.**

Deliver the requested research, design, or implementation. Primary owns decisions,
coordination and completion; the host owns tools, model routing and permissions.
Default: subagent-capable host; fresh contexts, verified capabilities.

## Route and reads

Announce mode and reason. Honor explicit preferences; risk controls remain required.
Escalate affected scope when lite cannot cover its obligations; retain valid consent.
For full/formal projects, retain full across modules and verification unless the
user explicitly changes mode; a small ticket does not downgrade the project.

| Mode | Fit | Read before recommending the approach |
| --- | --- | --- |
| Lite | One bounded user journey, few dependencies, reversible choices | [lite.md](references/lite.md) |
| Full | Coupled modules, multiple milestones, consequential data/permissions, migration, concurrency or lasting contracts | [full.md](references/full.md) |

Before intent confirmation, read this entry only; games add [their guide](references/game-projects.md). Defer
mode/shared reads until their phase. Read [agents.md](references/agents.md) before
first dispatch, [research.md](references/research.md) during research,
[verification.md](references/verification.md) before detailing the evidence plan or verifying,
[records.md](references/records.md) when saving or resuming work.
Use [plain-language.md](references/plain-language.md) only when examples help.
Do not preload all references or development evals.

## Shape

Inspect relevant local facts. Ask only consequential missing questions; batch
independent choices with recommended effects and costs. Reuse answers; stop when
user-owned material choices are settled. Technical unknowns become research questions.

Brief: outcome/audience, scope/non-goals, constraints/compatibility, observable
acceptance and feasible checks, delivery type/depth, defaults and open choices.
Preserve must-haves. Speak in the user's language: effects, operation, cost/limits,
needed decision. Label facts verified, inferred or unverified; preserve conditions,
ownership and pass criteria when shortening prose.

## Mandatory phase boundaries

**Mandatory in lite, full and design-only.** Clear requests, delegated choices,
demos, reversibility, local sufficiency or no new dependency waive neither gate.

**Gate 1:** show the brief; resolve material user-owned choices; ask for confirmation;
**stop and wait for the user's explicit answer**.

| State | Allowed | Forbidden |
| --- | --- | --- |
| Intent unconfirmed | Bounded local read-only inspection; clarification | Public research, external proposals, architecture, project writes |
| Gate 1 passed; research incomplete | Actual online search, primary-source inspection; findings | Solution selection/design drafting; project writes |
| Research complete; Gate 2 unpassed | Evidenced recommendation, independent challenge and approval question in conversation | Design files, scaffolding, dependency installation, code |
| Gate 2 passed | Approved delivery/checks | Unapproved scope/effects |

**Research:** complete actual online search and primary-source inspection before new
design. Local inspection supplements it; reuse only valid inspected prior evidence.
Missing access leaves research incomplete unless the user authorizes a scoped alternative.

**Gate 2:** present the researched, independently challenged solution and delivery
scope; ask for approval; **stop and wait for explicit user confirmation** before
writing either design documents or implementation. Design-only approval covers agreed depth, not code.

Reuse actual approval of the same brief/solution; identify the evidence. Detailed
requests, old ADRs, agent summaries, silence and “技术你定” are not approval.
Explicit instructions to skip/combine named stages override only the stated scope;
record that exception, never generalize it. An explicitly authorized isolated probe
approves only itself.

## Continue and complete

Internal refinements, task splits and acceptance-blocking fixes proceed within
consent. Changed outcome/acceptance, approved cost/data/compatibility or major
commitment: confirm only the affected delta. New decisions or failed assumptions:
refresh affected research/design/audit; block dependents, continue unaffected work.

Use independently authored post-code checks and separate fresh user experience
verification. Coder self-tests remain supplemental. Missing required research,
independence or runtime evidence stays pending; report partial completion.

Completion: requested scope, current checks, closed blockers, reconciled records,
use/recovery instructions and remaining limits. Never weaken criteria to hide failure.
