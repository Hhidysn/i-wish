# Restore confirmation gates before design

Date: 2026-10-03
Status: Accepted
Mandatory gate semantics restored and enforced by [0010](0010-restore-mandatory-gates.md); mode routing remains under [0009](0009-lite-full-progressive-orchestration.md).

## Context

The user reported that a large-module rewrite activated I Wish but proceeded to
design documents without questions or web research. In `bc67d39`, clarification
depended on the agent identifying an unresolved choice, local evidence could
satisfy research, and the final entry gate applied to implementation. Those rules
permitted the reported ordering even though evidence requirements were present.

The user requested restoring the strong gates from the earlier workflow
(`982af82`) while consolidating pending large-system guidance. This supersedes the
optional-approval policy in `bc67d39`; that earlier policy has no separate ADR.

## Decision

Use the phase boundaries in [SKILL.md](../../SKILL.md#mandatory-gates):
user-facing clarification and confirmed intent, actual online research, then a
reviewable recommendation and explicit solution approval before design documents
or implementation. Detailed input and delegated technical choices do not replace
confirmation. Existing explicit approvals of unchanged stages remain valid, and
explicit user instructions can change the workflow.

Keep pre-approval material in the conversation. Preserve the documentation rules
and retain large-system guidance for delivery depth, compatibility, capability
coverage, and contracts. Keep model transport mechanics in host guidance instead
of expanding the portable skill around a particular agent roster.

## Consequences and validation

New wishes normally require two user confirmations. This interaction cost is
intentional: the user owns both success criteria and solution acceptance.
Research and recommendation can remain concise; fixed interview, source, and
model quotas are unnecessary. Design-only approval does not authorize product code.

These are behavioral instructions, not tool-level enforcement. Validate the order
with isolated forward tests, not only wording checks. Revisit if actual traces
still show design or writes preceding the required confirmation and evidence.
See the [behavioral cases](../history/2026-10-09-runtime-before-refactor/evals/cases.md#gate-order-regressions) and
[bounded validation run](../history/2026-10-03-gate-validation.md).
