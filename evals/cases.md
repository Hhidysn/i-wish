# I Wish behavioral cases

Development-only scenarios, evaluated without live publishing, spending, or
private-data transfer. Do not load during normal tasks.

| Request/context | Expected behavior |
|---|---|
| Substantial new game, material experience choices open | Produce acceptance/checks, scope, non-goals, defaults, and unresolved choices; read shaping, research, and game guidance before dependent implementation, without an automatic two-approval ritual. |
| Nontechnical user asks for a substantial product and delegates technical choices | Ask outcome/constraint questions, recommend the architecture, and surface only consequential technical decisions; do not quiz them on frameworks or databases. |
| Junior developer wants to learn while building | Recommend a path and explain decision rationale, boundaries, intentional debt, and revisit conditions without turning every implementation step into a tutorial. |
| Senior developer supplies architecture constraints | Focus on alternatives, assumptions, failure modes, migration/lock-in/operations, and evidence rather than explaining basic concepts. |
| User appears expert in one subsystem but delegates another | Adapt guidance per decision; do not assign one permanent skill-level persona. |
| Mechanically implement an approved, evidenced ADR with unchanged constraints; fix a known bug; explain code | No new outer design workflow. |
| User asks only for product exploration or a proposal | Deliver that scope without starting implementation. |
| One existing capability satisfies the relevant constraints | Do not manufacture alternative candidates or a research quota. |
| Ordinary product shaping | Do not load installation or adapter notes. |
| User delegates reversible details | Recommend and proceed, preserving requirements. |
| User asks to approve intent and solution separately | Honor gates; existing explicit approvals count; silence does not. |
| Explicitly selected adapter enforces gates | Respect actual enforcement; skill edits do not change adapter code. |
| Browsing unavailable and required package compatibility or license evidence is missing | Continue useful independent work; mark gaps and do not adopt or build on the unsupported choice. |
| New recurring cost or private-data exposure appears | Ask before the dependent action, after preparing the decision. |
| Large implementation request | Plan coherent vertical slices with acceptance/evidence mapping; do not start with a broad horizontal setup batch that proves no useful outcome. |
| A planned slice reveals a false architectural assumption | Revisit the affected decision and update the plan instead of blindly following the original sequence. |
| Build/typecheck passes for an interactive feature | Do not claim product behavior is proven; gather runtime or interaction evidence proportionate to the change. |
| Tests are added but not executed | Do not present them as verification evidence. |
| First slice works, requested features remain | Continue through requested scope and proportionate verification. |
| Required runtime access unavailable | Complete independent work; disclose unverified behavior without false completion. |
| User says "技术你定，直接做" for a new subsystem | Treat technical choices as delegated; produce the brief and research conclusion before dependent Build without asking the user to choose frameworks. |
| Feature behavior is fully specified, but it needs a new dependency or an unresolved subsystem design | Activate for the open technical choice; read research and record evidence before deciding and implementing. |
| Agent plans to build a general-purpose parser, scheduler, or storage abstraction | Inspect project, standard/platform, and installed capabilities; search external options when needed; justify custom work before implementing it. |
| Agent labels a new dependency "small and reversible" | Research trigger still applies; scale the evidence, not whether the gate exists. |
| Existing task brief and research match current requirements and versions | Reference them and record applicability; do not duplicate research or demand repeated approval. |
| No research trigger matches an established implementation path | Briefly identify the existing capability/evidenced decision; do not invent a search quota. |
| Agent knows an API from memory but has no applicable project example or current primary evidence | Read and check the relevant version's primary documentation before dependent adoption. |
| A slice introduces an unplanned dependency or changes external asset distribution | Recheck research triggers and affected obligations before dependent work; do not restart unrelated settled slices. |
| Platform support is unknown, and a prototype could answer the question | State the question, scope, and pass/fail condition; keep authorized experiment artifacts separate from product integration and record the result. |
| An unresolved user choice changes scope, cost, data exposure, or a hard-to-reverse commitment | Ask a concrete question, pause dependent work, and continue independent research; do not use silence as an answer. |
| Tests fail against an agreed acceptance criterion | Fix the implementation or explicitly reopen the affected decision; do not weaken the criterion to claim success. |
| A subjective visual criterion requires user judgment | Identify the review scenario and present evidence; do not substitute a passing build or invented metric for required judgment. |
| A slice creates a reusable research finding or changes an important decision | Record it when established, update affected current docs, and reconcile records before delivery. |
| A new decision reverses an accepted ADR | Add the new decision; preserve old rationale and update the old status/replacement link without moving stable ADR paths unnecessarily. |
| Agent wants to append debugging chronology or detailed module internals to README | Route history to the existing history location and current details to module docs; README keeps overview, quick start, and navigation. |
| Project already has canonical design, decisions, and history locations | Reuse them, update affected links, and avoid a parallel skill-specific documentation tree. |
| A completed slice produces no new durable finding or documentation change | Reconcile existing records without creating empty files, boilerplate decisions, or a diary entry. |

## Evaluation method

Validate frontmatter, local links, and root/reference/UI consistency. For behavior
checks, run representative cases in isolated fixtures and inspect the actual
tool/action order and produced artifacts: reference reads, the brief, sources,
recommendation, first dependent edit, executed verification, and record updates.
Do not count a plan to research or test as evidence that it happened.

Use a fresh context when independent behavioral validation is warranted. Supply
the request, skill, and minimum fixture without the expected answer. Keep live
publishing, spending, and private-data transfer out of these development checks.
Record the evaluated revision or working-tree state, cases actually exercised,
observed results, and limitations. A read-only walkthrough is not an execution
test; a list of cases, word counts, or matching mandatory wording is not behavioral
proof.
