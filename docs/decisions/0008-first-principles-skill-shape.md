# Optimize the skill from its first principles

Date: 2026-10-06
Status: Accepted
Partially superseded by: current layout, budgets and conditional reads are governed by [0009](0009-lite-full-progressive-orchestration.md). Original rationale below is historical.

## Context

The owner asked to optimize I Wish from first principles, after a real task
exposed three drifts:

- `research.md` carried the *route to evidence* (download placement, volume
  choice, cleanup procedure) at the same weight as the obligation it serves. The
  owner's statement: "核心是先调研后设计，用什么方式联网根本不重要."
- `plain-language.md` read as a compliance list of five coverage points rather
  than one rule. The owner's statement: "核心是不对用户说看不懂的话，要从体验和
  功能，成本去描述."
- A defect found in code the round did not touch could be argued out of scope.
  The owner's statement: "源码有问题当然要修复，不管是新带入的还是原来有的."

## Decision

- `SKILL.md` opens with the four conditions of a good result — the user agreed to
  what will exist, knows why it was chosen, can check that it works, and can
  operate it — and states that each gate secures one of them. The gates, the phase
  table, and their non-waiver wording are unchanged.
- `research.md` is rewritten around one obligation: settle the design decisions
  with inspected current primary evidence before drafting. The route to a source is
  explicitly not the point. Depth follows reversibility; comparison dimensions,
  license duties, de-identified queries, remote screening, the adversarial pass,
  and delegated-task integrity survive as compact rules (994 -> 593 words).
- `plain-language.md` is rewritten around one rule: the user must be able to
  understand what they are approving and what it costs, in their own words.
  Experience, operation, cost, and the decision needed follow from it, with the
  mechanism-question mapping and calibration kept as usable examples (520 -> 457).
- `delivery.md` states that a defect is fixed whoever introduced it: origin
  decides nothing, and a pre-existing defect that blocks an approved criterion is
  in scope like any other.
- Deliberately unchanged: the interview rules (0002, 0003), the ADR fields and
  record routing (0006), the coverage-and-contracts matrix, the record rules added
  by 0007, and the check budgets.

Rejected: rewriting all seven references from first principles — strongest case:
one consistent derivation. Rejected because five of them were built from these
same principles within the last month, and rewriting deliberately-decided content
without evidence of harm is churn, not optimization.

Rejected: deleting `plain-language.md` and keeping only the `SKILL.md` bullets —
strongest case: one source of truth, less duplication. Rejected because the
examples and the mechanism-question mapping are what make the rule usable, and the
`SKILL.md` budget cannot hold them.

Rejected: reducing `SKILL.md` to principles alone and letting the agent derive the
gates — strongest case: it would read as reasoning rather than compliance.
Rejected because 0001 exists precisely because the gates were dropped when they
were treated as optional; a derivation invites discretion about whether to apply
them.

Do nothing — strongest case: the skill works, and every edit risks hardening that
took four decisions to build. Rejected because the two named references had drifted
into mechanism, and a defect that predates the round could still be argued away.

## Consequences and validation

- Reference words fall from about 5,900 to 4,582; `SKILL.md` is 1078/1100 and
  every reference stays inside its budget.
- The rule set is smaller and each rule now traces to one of four stated
  conditions, so a user can ask "why are you asking me twice" and get an answer.
- Ongoing cost: `research.md` no longer spells out the download procedure, so a
  future round that pulls candidate code into the project has less guidance to
  follow; the one-line rule and this record are the replacement.
- Narrowing of 0005 is noted in that record. The change is text and structure
  only: behavior across models was not re-tested. Checks and limits:
  [2026-10-06 first-principles checks](../history/2026-10-06-first-principles.md).
