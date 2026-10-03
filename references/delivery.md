# Plan, build, and prove

Read before Build. Apply the entry conditions in
[SKILL.md](../SKILL.md#decide-plan-and-build); a plan or user approval alone does
not replace missing research evidence.

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
decision, update the relevant brief/research/plan, and resolve the decision before
continuing. Do not restart unrelated settled work or patch around a false premise.

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
