# Delivery guide

Use for substantial implementation work after the wish and consequential
decisions are coherent enough to act.

The core rule is: **no material slice without proof.** A successful build proves
that the project builds; it does not prove that the product works.

## Plan by outcome

Prefer vertical slices that establish a meaningful user-visible or architectural
outcome instead of large horizontal batches of setup work.

For each material slice, identify only what is needed to execute and judge it:

- the outcome the slice should establish;
- the acceptance criteria it advances;
- important assumptions or dependencies;
- the smallest credible evidence that would prove it;
- any condition that would invalidate the current design and force a revisit.

Do not over-plan replaceable details. Plan deeply where sequencing, migrations,
public interfaces, irreversible data changes, or risky integration make mistakes
expensive.

## Build coherently

Implement one coherent end-to-end slice before expanding breadth. Keep changes
bounded enough to understand and verify, but do not fragment the work into tiny
steps that never demonstrate useful behavior.

When implementation reveals that an assumption is wrong, return to the relevant
decision. Do not preserve a plan merely because it was written earlier.

Use existing project patterns and suitable installed dependencies before adding
new infrastructure. Preserve unrelated user work.

## Prove the result

Map acceptance criteria to fresh evidence. Use the strongest practical signal
for the changed surface: targeted tests, reproduction steps, typecheck, lint,
build, diagnostics, screenshots, interactive use, logs, or runtime inspection.

Static checks are not substitutes for runtime evidence when behavior is
interactive or integration-dependent. A test that was written but not executed
is not verification.

Fix in-scope defects revealed by verification and rerun affected checks. Report
the tested revision or build, what was executed, the result, and any behavior
that remains unverified.

Completion means the requested scope is implemented, relevant acceptance
criteria have corresponding evidence, and remaining limitations are reported
accurately.
