> Historical snapshot of revision `5bfecea` (2026-10-09). Not active instructions. Current workflow: [I Wish](../../../../SKILL.md).

# Research online before designing

Read after Gate 1, and again whenever evidence invalidates an approved decision.
The obligation is to settle the design decisions with current primary evidence
before drafting. How the sources are reached does not matter; what matters is that
they were actually inspected. Local inspection complements this work, never
replaces it.

## Decide what has to be researched

Decompose the wish into the decisions the solution must settle, then research each
at the depth its reversibility deserves. Hard to reverse, or touching security,
data, public formats, licensing, platforms, recurring cost, or a large amount of
future content: inspect primary sources. Replaceable commodity choices: settle
them just in time. For a new project, module, or refactor, cover the whole agreed
scope, not the first feature that is easy to build.

Start from acceptance criteria and constraints, never from a favored package name.
Inspect project code and decisions, platform and standard-library capabilities,
installed dependencies, official documentation, release notes, repositories, and
license files. Search snippets, invented citations, and memory are not sources.

Compare candidates only on dimensions that can change the recommendation:
acceptance coverage, compatibility, integration and maintenance cost, performance,
security, permissions, native binaries, supply chain, verification effort,
licensing, operating cost, data exposure, and replacement difficulty. Include
custom implementation when it reduces total complexity, and state why the
alternatives fail a constraint or cost more overall. Do not pad the list, and do
not invent alternatives to a capability that already fits.

## Apply what you find

- Never adopt a candidate whose identity, license, maintenance, or compatibility
  is known only from memory.
- Flag copyleft, non-commercial, no-derivatives, source-available, marketplace,
  custom, and unclear terms, and carry attribution, NOTICE, and source-offer duties
  into the project and release documents. Learning from an article grants no right
  to copy its code or assets.
- Keep queries and reviewer briefs de-identified. Never send private project or
  user data to an external service without explicit authorization.
- Screen candidates remotely; pull one into a temporary directory outside the
  project only when local inspection would change the decision, then clean up.
- When no independent reviewer is available, freeze the first proposal and attack
  its weakest assumption. A challenge ends in a revision, more research, or a
  disclosed risk — never in a vote.
- A delegated research task counts only once its report arrives and its
  decision-driving sources have been checked. A timeout or silence is not a
  finding; reconcile or stop the orphaned task before retrying.

## Show the conclusion, then close the gate

Put the conclusion in the conversation before proposing a solution: the decisions
it must satisfy; the candidates and why each was kept or dropped; the sources
actually inspected, with check dates and versions, and which claim each supports;
the recommendation, its trade-offs, and continuing obligations; verified facts,
inferences, and unknowns, clearly separated; and the first check that would prove
or falsify the choice.

Research is sufficient when the constraints that drive the recommendation rest on
inspected evidence and the remaining uncertainty has a practical validation path.
A missing fact that could disqualify adoption — license permission, required
platform support — blocks dependent design and implementation. Track unproven
thresholds with a hypothesis, a decisive check, a pass/fail target, and a fallback.

When the sources cannot be reached, say what could not be checked and ask for
access or an explicit alternative. Do not quietly fall back to local-only
research, draft the dependent design, or count an uncertainty label as a passed
gate. A user-directed exception changes the workflow, not the quality of evidence.
