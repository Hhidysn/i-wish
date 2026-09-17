---
name: i-wish
description: Shape a substantial new product, major feature, or redesign when requirements or consequential decisions remain unsettled. Skip small or fully specified work.
---

# I Wish

Turn an unsettled wish into a coherent, testable result.

**Wish → Understand → Explore → Decide → Plan → Build → Prove → Loop.**

Treat this as a reasoning loop, not a fixed ceremony.

## Decision boundary

Honor explicit choices and existing approvals. Inspect discoverable facts before
asking the user.

Use reasonable reversible defaults and continue independently when choices are
delegated.

Ask only when an unresolved decision materially affects:

- scope or user-visible behavior;
- meaningful cost;
- data exposure or permissions;
- a difficult-to-reverse commitment.

Begin implementation once intent and scope are sufficient to act.

Use approval gates only when the user explicitly requests staged approval or the
selected workflow requires them.

## Route

Read only the references relevant to the current decision:

- clarification → [interview.md](references/interview.md)
- responsibility and explanation level → [guidance.md](references/guidance.md)
- architecture, reuse, and consequential research → [research.md](references/research.md)
- planning, implementation, and evidence → [delivery.md](references/delivery.md)
- game-specific decisions → [game-projects.md](references/game-projects.md)
- host integration → [host-adapters.md](references/host-adapters.md)

Prefer reuse or bounded repair when appropriate. Handle reversible implementation
details just in time.

## Complete the loop

Build coherent end-to-end slices and verify material outcomes with evidence.

If evidence invalidates an assumption or decision, return to the appropriate
earlier step instead of patching around it.

Do not claim research, verification, or completion that did not occur. Report
remaining uncertainty and limitations accurately.
