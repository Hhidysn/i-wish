---
name: i-wish
description: Shape a substantial product, major feature, subsystem, or redesign into a researched and verified result when product, architecture, or reuse choices remain open or delegated, even if the desired behavior is clear. Skip small edits and mechanical implementation of an established, evidenced design.
---

# I Wish

Turn a wish into explicit success criteria, an evidenced solution, and a verified
result. If the request is only for exploration or a proposal, deliver that scope.

**Shape → Research → Decide → Plan → Build → Prove → Preserve → Loop.**

Evidence gates apply within the requested scope. They do not require automatic
approval at every phase. Honor existing authorization and explicitly requested
approval gates, including those of an explicitly selected workflow. Delegating
technical choices does not waive research or verification.

## Shape the wish

Before preparing the task brief, you must read
[shaping.md](references/shaping.md) and inspect relevant existing context.
Produce or reference a brief with:

- the intended outcome, required scope, and constraints;
- observable acceptance criteria and how each will be checked;
- explicit non-goals;
- adopted default assumptions;
- unresolved choices, if any, and the work that depends on them.

Ask when an unresolved choice materially changes scope, cost, data exposure, or
a difficult-to-reverse commitment. Pause only work dependent on that answer.
Use reasonable defaults for delegated, reversible details. The brief is required;
a new interview or approval of an already settled brief is not.

## Research before deciding

Check these triggers before selecting a solution and whenever the plan changes:

- introducing or replacing a dependency, framework, or external service;
- adding a subsystem or changing an architecture boundary;
- preparing to build a general-purpose capability that may already exist;
- using an API or platform capability without an applicable verified project
  example or current primary evidence;
- incorporating external code/assets or changing their distribution or license
  obligations.

When any trigger holds, you must read [research.md](references/research.md) and
record its research conclusion before finalizing the affected decision or
starting dependent implementation. Search existing solutions before choosing
custom implementation; include custom work as a candidate when justified.
Existing research can satisfy the gate after checking its continued applicability.
When no trigger holds, briefly identify the established capability or evidenced
decision being followed; do not waive a matching trigger as "not consequential."

For game-specific work, read [game-projects.md](references/game-projects.md).

## Decide, plan, and build

Before Build, you must read [delivery.md](references/delivery.md). Dependent
implementation may start only when:

- the brief defines acceptance, boundaries, and adopted assumptions;
- applicable research has an evidenced recommendation and recorded uncertainty;
- choices requiring user input and requested approvals are resolved;
- the next coherent end-to-end slice and its verification method are identified.

Record the brief and gate evidence in existing task, feature, or decision
documents; one short feature note is enough when none fits. Link to current design
docs rather than mixing pending plans into them. Keep conversation-only exploration
in the conversation unless saving it was requested.

If a condition is missing, continue independent inspection, research, or a bounded
experiment with a stated question and pass/fail condition. An experiment does not
authorize integrating an unvalidated candidate or bypassing a requested gate.
Implement and verify coherent slices within the established scope. New triggers
or invalidated assumptions reopen the affected decision before dependent work.

## Prove and preserve

Map acceptance criteria to fresh, proportionate evidence. A successful build
alone does not prove interactive behavior; written but unexecuted tests are not
verification. Do not weaken acceptance criteria to make a failed result pass.
A working first slice is a milestone, not completion of the requested scope.

Before recording project decisions or updating project documentation, you must
read [documentation.md](references/documentation.md). Record decisions when made,
update current documentation as implementation changes, and reconcile records
after each completed slice and before final delivery. Preserve reusable findings
and superseded designs in their appropriate locations; keep README focused on
the current overview, quick start, and navigation.

Completion requires the requested scope, evidence for its material acceptance
criteria, and updated affected documentation and decision records. Continue
independent work when checks are unavailable, but report unverified required
outcomes as incomplete. State remaining limitations and evidence gaps honestly.
