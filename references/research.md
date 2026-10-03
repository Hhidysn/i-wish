# Research before deciding

Read when a research trigger in [SKILL.md](../SKILL.md#research-before-deciding)
holds. Research must inform the recommendation before it is finalized; do not
select an architecture from memory and add supporting links afterward.

## Inspect existing solutions first

Start from acceptance criteria and project constraints. Inspect relevant project
code and decisions, standard-library/platform/engine capabilities, official
routes, and installed dependencies. Then search maintained external solutions
when these do not establish a suitable path. Open the actual sources; search
snippets and model memory alone do not establish adoption claims.

Compare plausible solution classes only on dimensions that can change the
recommendation: acceptance coverage, compatibility, integration and maintenance
cost, performance, verification effort, licensing, operating cost, data exposure,
and replacement difficulty. Include custom implementation when it can reduce
total complexity. Explain why available solutions fail relevant constraints or
cost more overall before choosing custom work. Do not pad a candidate list or
require alternatives to an already evidenced, adequate capability.

Evaluate existing code by the same criteria. Reuse what fits; attempt a bounded
repair when evidence favors it; replace a core that blocks the intended
experience instead of accumulating patches after the repair hypothesis fails.

## Record the evidence and recommendation

Produce a concise research conclusion in an existing decision/feature document
or an appropriate research note. Follow
[documentation.md](documentation.md) before writing project records. Include:

- the decision and acceptance constraints it must satisfy;
- candidates considered, including reuse, repair, replacement, or custom work
  where applicable, and decision-relevant reasons for selection or rejection;
- evidence links or local source paths, the date checked, relevant versions or
  revisions, and which claim each source supports;
- the recommendation, material trade-offs, and continuing obligations;
- verified facts, inferences, and unresolved assumptions, clearly distinguished;
- what the first slice or bounded experiment must prove, its pass/fail condition,
  and what failure would require reconsidering.

Use current primary evidence for external claims driving adoption, such as
official documentation, release notes, source repositories, and license files.
For project claims, cite the inspected code, manifests, decisions, or executed
checks. An existing record can satisfy the gate if its requirements, versions,
compatibility, and obligations still apply; record that applicability check
instead of duplicating the research. Recheck facts that may have changed.

Separate learning from reuse: a talk, article, or observed product behavior can
inform a design without granting rights to copy its code or assets. Check actual
license and distribution obligations before incorporating external artifacts.

## Close the gate or isolate the unknown

Research is sufficient when the constraints driving the recommendation have
evidence, the conclusion is recorded, and remaining uncertainty has a practical
validation path. A missing fact that could disqualify adoption, such as license
permission or required platform support, keeps dependent adoption and product
implementation blocked. A bounded implementation risk may be tested in the first
slice with an explicit failure condition and a reversible approach.

When evidence is unavailable, continue independent work and label the gap; do
not treat the lack of browsing as a passed research gate. Use a bounded prototype
when it can answer a specific question within existing authorization. State the
question, pass/fail condition, and scope before running it, and keep experimental
artifacts separate from product integration. Download source only when local
inspection adds value, keeping temporary research copies outside the project.

Present the recommendation in plain language. Resolve choices requiring user
input under the core decision boundary, then proceed within existing approval.
New triggers or contrary evidence reopen only the affected decisions and slices.
