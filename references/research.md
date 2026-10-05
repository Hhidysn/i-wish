# Research online before designing

Read after Gate 1 and whenever affected research is reopened under
[SKILL.md](../SKILL.md#research-online-before-designing). Every new I Wish workflow
requires actual current-source online research before architecture/design drafting,
including design-only work and requests that introduce no external dependency.
Do not choose the architecture first and add supporting links afterward.

Decompose the wish into the decisions the solution must settle. Research deeply
when a decision is hard to reverse or affects security, data, public formats,
architecture, recurring cost, platforms, performance, licensing, or much future
content; handle replaceable commodity parts just in time. Start from requirements
and acceptance criteria, not a favored package name.

For a new project, new module, or module refactor, research and compare against
the whole agreed scope: map each required capability family to its decision and
evidence instead of reducing research to the first feature the agent knows how to
build. Use authorized specialists when they improve coverage; the lead checks
decision-driving sources and owns synthesis. A submitted task, silence, or a
timeout is not a completed finding; reconcile or stop an orphaned task through
the host's controls before retrying.

## Inspect existing solutions first

Start from acceptance criteria and project constraints. Inspect relevant project
code and decisions, standard-library/platform/engine capabilities, official
routes, and installed dependencies. Use web/search tools to search current
approaches and reusable solutions, then open relevant primary documentation,
repositories, releases, or license files. Even when a local or platform capability
looks sufficient, check its current primary sources and relevant alternatives
online. Local inspection alone does not satisfy this stage. Search snippets,
invented citations, and model memory are not source inspection.

Compare plausible solution classes only on dimensions that can change the
recommendation: acceptance coverage, compatibility, integration and maintenance
cost, performance, security, permissions, native binaries, supply chain,
verification effort, licensing, operating cost, data exposure, and replacement
difficulty. Include custom implementation when it can reduce
total complexity. Explain why available solutions fail relevant constraints or
cost more overall before choosing custom work. Do not pad a candidate list or
require alternatives to an already evidenced, adequate capability.

Evaluate existing code by the same criteria. Reuse what fits; attempt a bounded
repair when evidence favors it; replace a core that blocks the intended
experience instead of accumulating patches after the repair hypothesis fails.

## Record the evidence and recommendation

Produce a concise research conclusion in the conversation before proposing the
solution. After Gate 2, preserve it in an existing decision/feature document or
research note under [documentation.md](documentation.md). Include:

- the decision and acceptance constraints it must satisfy;
- candidates considered, including reuse, repair, replacement, or custom work
  where applicable, and decision-relevant reasons for selection or rejection;
- actual web searches performed, inspected primary-source links, check dates,
  relevant versions/revisions, and which claim each source supports; add local
  source paths for project-specific evidence;
- the recommendation, material trade-offs, and continuing obligations;
- verified facts, inferences, and unresolved assumptions, clearly distinguished;
- what the first slice or bounded experiment must prove, its pass/fail condition,
  and what failure would require reconsidering.

Use current primary evidence for external claims driving adoption, such as
official documentation, release notes, source repositories, and license files.
For project claims, cite the inspected code, manifests, decisions, or executed
checks. Reuse completed online research from this workflow when its inspected
sources, actual tool evidence, requirements, versions, and obligations still apply;
reference that evidence rather than repeating searches. A historical ADR or local
note alone does not waive online research for a new wish. Recheck changed claims.

Separate learning from reuse: a talk, article, or observed product behavior can
inform a design without granting rights to copy its code or assets. Check actual
license and distribution obligations before incorporating external artifacts.
Flag copyleft, non-commercial, no-derivatives, source-available, marketplace,
custom, and unclear terms; carry attribution, NOTICE, source-offer, and
provenance duties into project and release docs. Never adopt a candidate whose
identity, license, maintenance, or compatibility is known only from memory.

Keep research queries and reviewer briefs de-identified; never send private
project or user data to an external service without explicit authorization.

When no independent reviewer is available, freeze the first proposal and run an
explicit adversarial pass against its weakest assumptions; decide by evidence,
not by vote. A challenge must end in a revision, more research, or a disclosed
risk.

## Close the gate or isolate the unknown

Research is sufficient when the constraints driving the recommendation have
evidence from inspected sources, the conclusion is shown, and remaining uncertainty has a practical
validation path. Track unproven thresholds with a hypothesis, workload or
platform, decisive check, pass/fail target, and fallback; documentation or model
agreement cannot prove them. A missing fact that could disqualify adoption, such as license
permission or required platform support, keeps dependent adoption and product
design and implementation blocked. A bounded implementation risk may be tested in
an approved first slice with an explicit failure condition and reversible approach.

When online tools or required sources are unavailable, report what could not be
checked and ask for restored access or an explicit alternative research instruction.
Do not silently switch to local-only research, draft the dependent design, or count
an uncertainty label as a passed gate. Continue permitted local inspection while
waiting. A user-directed exception changes the workflow, not the evidence quality;
report the resulting limits.

Before Gate 2, a prototype or running candidate code requires explicit approval
of that bounded experiment. State its question, scope, and pass/fail condition;
keep it outside the active project and report what it established. Screen
candidates remotely first; download a shortlist only when local inspection
changes the decision, pinned and outside the project. Disclose large downloads
and clean up.

After the research conclusion, present the recommendation in plain language and
obtain Gate 2 approval before writing design documents or implementation. New
triggers or contrary evidence reopen only affected decisions and slices, following
the confirmation rules in SKILL.md.
