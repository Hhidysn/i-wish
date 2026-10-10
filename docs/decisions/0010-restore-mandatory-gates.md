# Restore explicit mandatory gates after compacting

Date: 2026-10-09
Status: Accepted

## Context

The owner identified a regression after the lite/full refactor: two mandatory
confirmations became “by default”; the entry lost stop/wait pass conditions and
merged research and design into one permitted phase. Root-only intake could therefore
bypass constraints before reading references. The prior review and probes did not
fully cover these negative cases. The primary introduced this regression.

The previous user-directed skip covered that refactor's solution approval only;
it did not authorize weaker skill policy. This change restores established behavior,
not a new architecture or a new approval loop for the correction.

## Decision

[Entry](../../SKILL.md#mandatory-gates) explicitly owns both mandatory
gates for lite, full and design-only. Gate 1 requires the shown brief, resolved
material user choices, and explicit user confirmation: stop/wait. Before it:
bounded local read-only inspection and clarification only.

Actual online search and primary-source inspection complete before solution
selection/design drafting. Local sufficiency, standard-library work, no new
third-party dependency or reversible demo do not waive this obligation. Valid
prior inspected evidence can be reused; missing access stays incomplete without
an explicit scoped user alternative.

After research, present a recommendation, obtain independent challenge and resolve
blockers. Gate 2 requires explicit user approval of the shown solution and delivery
scope: stop/wait before design/project files, scaffolding, installation or code.
Design-only approval covers agreed design depth, not product code.

Detailed requests, delegation, old ADRs, agent summaries and silence are not user
approval. Reuse actual unchanged-stage approval with its evidence. Named-stage
user exceptions remain bounded to the stated scope; an explicitly authorized
isolated probe approves only itself. The existing lite/full depth, progressive
modules and independent verification roles remain.

README, metadata, mode/research guidance and current design now state this contract.
ADR 0001 once again points directly at the active rule. This supersedes only the
weakened boundary wording in ADR 0009, whose orchestration decisions stand.

## Alternatives and consequences

- Leave “by default” and rely on downstream references: fewer entry words;
  rejected because pre-confirmation entry-only use never reads those constraints.
- Compress or omit stop/wait and forbidden actions: shorter text; rejected because
  the concrete pass/stop conditions are the purpose of the gates.
- Repeat a full gate policy in every reference: harder to miss locally; rejected
  because multiple canonical policies drift. Modes explicitly inherit root gates.

Entry budget becomes 650 words instead of 600 to preserve the hard constraints;
independent author updated the overflow test without weakening gate acceptance.
Two user confirmations remain an intentional interaction cost; scoped explicit
exceptions and existing approvals prevent needless repetition.

Validation: [regression record](../history/2026-10-09-gate-regression-validation.md).
Static budgets/links do not prove agent compliance; fresh negative probes test
Gate 1, research completion and Gate 2 separately.
