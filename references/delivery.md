# Plan, build, and prove

Read the coverage section before proposing a solution (Gate 2); read the rest
after Gate 2, before producing the approved design documents or implementation.
Apply the boundaries in [SKILL.md](../SKILL.md#mandatory-phase-boundaries): intent
confirmation, completed online research, and solution approval are all required.

For a new project, module, or refactor, establish the overall coverage and
contracts below before selecting delivery slices. If this round is design-only,
deliver the approved design depth and verify coverage, contracts, sources, and
failure scenarios. Record runtime tests as pending rather than starting
implementation. The build-specific guidance below applies only when
implementation is approved; both delivery types require record reconciliation.

## Cover the system before slicing

Map each required capability family to its owner/boundary, inputs and outputs,
dependencies or extension ports, acceptance scenario, and evidence state
(sourced, inferred, open, needs experiment). Keep this matrix in the task or
feature record.

Connect the major parts with the contracts that matter: interface and data
ownership, identity, schemas, versioning, extension ports; authority, permissions,
isolation, trust; time, concurrency, ordering, cancellation, transactions, retry;
persistence, recovery, migrations or reset, lifecycle; resource budgets, streaming,
networking, caching, content and tool pipelines; diagnostics, test seams, target
platforms, failure behavior. A module box does not establish its contract. Use
representative end-to-end scenarios to expose unresolved gaps before approval, and
track unproven thresholds with a hypothesis, decisive check, pass/fail target, and
fallback.

## Plan by observable outcome

Use coherent end-to-end slices that establish useful behavior. For each material
slice, identify:

- the outcome and acceptance criteria it advances;
- prerequisites and adopted assumptions;
- the smallest credible verification method;
- how to revert or isolate the change if its hypothesis fails;
- the result that would invalidate the current decision.

Keep the plan in the existing task or feature record. Detail risky sequencing,
migrations, and public boundaries; leave replaceable implementation details until
needed. A broad setup batch that demonstrates no useful outcome is not a first
slice. The first slice does not reduce the requested scope.

## Build and reconsider

Implement within established boundaries and preserve unrelated work. Keep changes
small enough to understand, verify, and revert without relying on destructive
cleanup. Do not promise rollback for an irreversible operation; resolve that
commitment before performing it under the applicable approval rules.

Check research triggers when a slice introduces a new dependency, subsystem, or
other affected choice. Stop dependent implementation when evidence invalidates a
decision, reopen affected research and the relevant approval gate before changing
dependent documents or code. Do not restart unrelated settled work or patch around
a false premise.

## Verify against the agreed result

Run proportionate checks that establish the acceptance criteria: targeted tests,
reproduction steps, diagnostics, interaction, screenshots, or runtime inspection.
Build and typecheck results cannot establish interactive or integration behavior.
For subjective criteria, obtain the planned review evidence and identify any
required user judgment still pending.

Record the tested revision/build or working-tree state, the checks actually run,
their results, and uncovered criteria. Written but unexecuted tests are not proof.
Fix in-scope defects and rerun affected checks; do not repeat broad checks without
a new reason. Do not lower acceptance criteria or redefine success to hide a
failure. Changes to the intended result return to shaping and its decision rules.

Continue through the requested scope. When required runtime access is unavailable,
finish independent work and report the affected outcomes as unverified, without
claiming full completion.

Reconcile the records described in [documentation.md](documentation.md) after each
completed slice and before final delivery. Report what now works, actual
verification evidence, remaining limitations, and any required user action.
