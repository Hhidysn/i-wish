# Council fixes: interview stop, effect scope, no host file

Date: 2026-10-05
Status: Accepted

## Context

An advisor council (Pass 1 independent reports, Pass 2 cross-examination) reviewed
the refactor from decision 0002. It confirmed the design and found text-level
defects: a leftover "concise batch" interview paragraph; interview termination
resting on judgment alone; the effect-language frame required for every status
while banning paths and commands that acceptance steps need; template field names
in engineering vocabulary; a delivery reference whose read timing hid the coverage
rules until after Gate 2; a Gate 1 template field inviting unresolved material
choices; an eval asserting retry reconciliation the portable text never stated;
and a link checker described more strongly than it works.

The owner decided: remove the Gate 1 example question; delete `host-adapters.md`
and keep only a short host-generic install note in README; and run fresh
behavioral traces with weak models.

## Decision

- Interview: a round that brings no new material question ends the interview;
  remaining reversible details become stated defaults; an item that changes cost,
  spending, data exposure, or an irreversible commitment is never defaulted;
  interview completion is not approval. The no-round-cap rule stands.
- Effect language: the four-part frame applies where the user must decide, pay,
  expose data, or act, and to final results; routine updates stay brief; commands,
  paths, and test names are allowed in verification steps, after the effect;
  `plain-language.md` becomes a required read before the first user-facing output.
- Templates: user-facing field names in the user's words; layouts are optional;
  self-checks move from `delivery.md` to `templates.md`; `delivery.md` states that
  its coverage section is read before Gate 2.
- `host-adapters.md` is deleted. README carries a short install/discovery note;
  the single-owner rule and unavailable-review disclosure move to `shaping.md`;
  browsing, question-tool, and runtime degradations stay in `research.md`,
  `shaping.md`, and `delivery.md`.
- No new mandatory templates, no model rosters, no state machines, and no
  semantic link validator.

## Consequences and validation

Seven references remain; `scripts/check.mjs` enforces the budgets and link
existence. Four weak-model probes at the fixed revision passed: interview stop
without trivia rounds, no defaulting of recurring cost or data egress, an honest
stop when web research was unavailable, and a plain-language completion report
that passed the self-check. Two OpenAI models failed at launch on this host's
model route and were re-run on other models. Details, limits, and run ids:
[2026-10-05 council-fix checks](../history/2026-10-05-council-fix-validation.md).
Behavior is sampled, not proven across models.
