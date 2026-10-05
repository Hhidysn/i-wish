# Batch the interview and speak in effects

Date: 2026-10-05
Status: Accepted

## Context

I Wish targets substantial work: a new project, a new module or subsystem, or a
module refactor. Several problems limited that:

- Clarification had been compressed to "a concise batch" after the initial
  `181640d` interview contract (3–6 same-layer independent questions per round,
  at most three normal rounds plus one focused round, recommended answers,
  "全部采用推荐") was simplified away. The user reported that the smaller
  interview deferred material questions and caused rework.
- User-facing text had no contract, so non-developers received mechanism
  vocabulary. Documentation rules covered routing but not writing, templates, or
  shared vocabulary.
- `large-systems.md` was a conditional depth route, but I Wish's target scenarios
  are exactly that route, so the condition added indirection instead of filtering.
- The frontmatter description carried policy ("Skip small edits…") that does not
  help skill selection, and the body repeated the no-waiver rationale four times.

## Decision

- Interviews run in rounds of 3–4 same-layer independent questions with no round
  limit: continue while a material answer is missing, because late discovery
  causes rework. Each question carries options, a recommended default, and the
  consequence of choosing wrong; each round offers "全部采用推荐". Facts are
  looked up; decisions are asked.
- Add an always-on effect-language contract in `SKILL.md` plus
  `references/plain-language.md`: four-part frame (what you see / how you
  operate it / cost and limits / what you must decide now), effect before name,
  no internal vocabulary, labeled uncertainty, register mirrors the user.
- Add `references/templates.md` for the question card, Gate 1 brief, research
  conclusion, Gate 2 recommendation, completion report, ADR, and feature/research
  notes; add writing rules and a glossary route to `documentation.md`.
- Merge `large-systems.md` into the phase references (Gate 1 boundaries into
  `shaping.md`, whole-scope research into `research.md`, coverage matrix and
  contracts into `delivery.md`) and delete it.
- Trim the `description` to the selection signal (what + when + boundary) and
  enforce budgets in `scripts/check.mjs`: description ≤260 characters, `SKILL.md`
  ≤1100 words and ≤500 lines, each reference ≤1000 words, no broken relative links.

The gates, the online-research obligation, and ADR 0001 semantics are unchanged.

## Sources checked (2026-10-05)

- Agent Skills specification: `description` ≤1024 characters; startup loads only
  name and description per skill — <https://agentskills.io/specification>
- Skill authoring best practices: third-person what+when description, SKILL.md
  under 500 lines — <https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices>
- Claude Code structured questions: 4-option-per-question limit, unavailable in
  Task subagents — <https://code.claude.com/docs/en/agent-sdk/user-input>,
  <https://github.com/anthropics/claude-code/issues/12420>
- `grilling` interview primitive: recommended answer per question, facts looked
  up, no action before shared understanding — local
  `~/.codex/skills/grilling/SKILL.md` (Matt Pocock, MIT)
- Superpowers brainstorming: multiple choice preferred, four spec self-checks —
  <https://github.com/obra/superpowers>
- The 3–4 question rounds and no-round-limit rule come from this repository's
  `181640d` interview contract and the user's rework report; they are not
  external claims.

## Consequences and validation

Clarification takes more rounds when the wish is ambiguous; this cost is accepted
to avoid rework, and recommended defaults plus "全部采用推荐" keep it cheap.
`shaping` and `delivery` grow; the per-file word budgets and the check script
contain that. The shorter description relies on trigger phrases and explicit
`$i-wish`; its boundary with brainstorming-style skills is stated in the
description itself.

Validation: `scripts/check.mjs` output, local link resolution, and an eval-case
walkthrough, recorded in
[the 2026-10-05 validation note](../history/2026-10-05-skill-refactor-validation.md).
Cross-model behavior remains a specified eval, not an executed result.
