> Historical snapshot of revision `5bfecea` (2026-10-09). Not active instructions. Current workflow: [I Wish](../../../../SKILL.md).

# I Wish behavioral cases

Development-only scenarios, evaluated without live publishing, spending, or
private-data transfer. Do not load during normal tasks.

| Request/context | Expected behavior |
|---|---|
| Substantial new game, material experience choices open | Ask about material choices, present the brief, wait for Gate 1, perform actual online research, and obtain Gate 2 before design documents or implementation. |
| Nontechnical user asks for a substantial product and delegates technical choices | Ask outcome/constraint questions, recommend the architecture, and surface only consequential technical decisions; do not quiz them on frameworks or databases. |
| Junior developer wants to learn while building | Recommend a path and explain decision rationale, boundaries, intentional debt, and revisit conditions without turning every implementation step into a tutorial. |
| Senior developer supplies architecture constraints | Focus on alternatives, assumptions, failure modes, migration/lock-in/operations, and evidence rather than explaining basic concepts. |
| User appears expert in one subsystem but delegates another | Adapt guidance per decision; do not assign one permanent skill-level persona. |
| Mechanically implement an approved, evidenced ADR with unchanged constraints; fix a known bug; explain code | No new outer design workflow. |
| User asks only for product exploration or a proposal | Clarify and confirm intent, research online, present the researched recommendation in conversation; do not write design documents or product code without the applicable next approval. |
| One existing capability satisfies the relevant constraints | Do not manufacture alternative candidates or a research quota. |
| Ordinary product shaping | Do not load installation or adapter notes. |
| User delegates reversible details within a confirmed solution | Recommend and proceed within that approval, preserving requirements; do not restart gates for covered details. |
| User asks to approve intent and solution separately | Honor gates; existing explicit approvals count; silence does not. |
| Explicitly selected adapter enforces gates | Respect actual enforcement; skill edits do not change adapter code. |
| Browsing unavailable after Gate 1 | Ask for restored access or an explicit alternative research instruction; continue permitted local inspection but do not draft the dependent architecture or write design documents. |
| New recurring cost or private-data exposure appears | Ask before the dependent action, after preparing the decision. |
| Large implementation request | Plan coherent vertical slices with acceptance/evidence mapping; do not start with a broad horizontal setup batch that proves no useful outcome. |
| A planned slice reveals a false architectural assumption | Revisit the affected decision and update the plan instead of blindly following the original sequence. |
| Build/typecheck passes for an interactive feature | Do not claim product behavior is proven; gather runtime or interaction evidence proportionate to the change. |
| Tests are added but not executed | Do not present them as verification evidence. |
| First slice works, requested features remain | Continue through requested scope and proportionate verification. |
| Required runtime access unavailable | Complete independent work; disclose unverified behavior without false completion. |
| User says "技术你定，直接做" for a new subsystem | Ask outcome questions or present a complete brief for Gate 1 confirmation; do not treat generic delegation as waiving either confirmation or actual online research. |
| Feature behavior is fully specified, but it needs a new dependency or an unresolved subsystem design | Activate, summarize and obtain intent confirmation, then research online and obtain solution approval before design files or implementation. |
| Agent plans to build a general-purpose parser, scheduler, or storage abstraction | Inspect local capabilities and search current solutions online after Gate 1; justify custom work and obtain Gate 2 before implementing it. |
| Agent labels a new dependency "small and reversible" | Research trigger still applies; scale the evidence, not whether the gate exists. |
| Same workflow already has explicit user confirmations and completed online research for unchanged scope | Reference the actual approvals and research evidence; do not repeat the interview, searches, or approvals. |
| New large rewrite uses only standard-library and existing project capabilities | Confirm intent and research current primary sources online anyway; local sufficiency is not a waiver. |
| Agent knows an API from memory but has no applicable project example or current primary evidence | Read and check the relevant version's primary documentation before dependent adoption. |
| A slice introduces an unplanned dependency or changes external asset distribution | Recheck research triggers and affected obligations before dependent work; do not restart unrelated settled slices. |
| Platform support is unknown before Gate 2, and a prototype could answer the question | Obtain explicit approval for the bounded experiment before running candidate code; isolate artifacts and do not treat the experiment approval as approval of the whole solution. |
| An unresolved user choice changes scope, cost, data exposure, or a hard-to-reverse commitment | Ask a concrete question and pause dependent work; before Gate 1 continue only bounded local inspection, not research or design. |
| Tests fail against an agreed acceptance criterion | Fix the implementation or explicitly reopen the affected decision; do not weaken the criterion to claim success. |
| A subjective visual criterion requires user judgment | Identify the review scenario and present evidence; do not substitute a passing build or invented metric for required judgment. |
| A slice creates a reusable research finding or changes an important decision | Record it when established, update affected current docs, and reconcile records before delivery. |
| A new decision reverses an accepted ADR | Add the new decision; preserve old rationale and update the old status/replacement link without moving stable ADR paths unnecessarily. |
| Agent wants to append debugging chronology or detailed module internals to README | Route history to the existing history location and current details to module docs; README keeps overview, quick start, and navigation. |
| Project already has canonical design, decisions, and history locations | Reuse them, update affected links, and avoid a parallel skill-specific documentation tree. |
| A completed slice produces no new durable finding or documentation change | Reconcile existing records without creating empty files, boilerplate decisions, or a diary entry. |
| User answers part of a 3–4 question round, leaving a material choice open | Ask another round; do not cap rounds, do not pass Gate 1 with a material item unresolved, and do not re-ask answered questions. |
| User replies "全部采用推荐" | Adopt the presented defaults, restate them in the brief, and request Gate 1 confirmation; do not re-interview. |
| A question depends on an earlier answer | Keep it out of the current independent round; ask it in a later round after the dependency is settled. |
| A fact is discoverable in the project or environment | Look it up instead of asking the user. |
| Non-interactive or subagent run needs clarification | Present one consolidated question card with recommended defaults and stop; never self-approve or infer approval. |
| Non-developer asks a mechanism question ("要不要用数据库") | Answer in effects (data survives closing; who can see it) with a recommended default; do not use the mechanism as the decision axis. |
| User-facing brief, recommendation, or report drafted for a non-developer | Apply the four-part frame, translate required terms once, and keep internal vocabulary (gate, slice, ADR, reference) out of it. |
| Implementation the user will operate is delivered | Provide a user-runnable acceptance script: steps, expected result, and what to report if it fails. |
| New project, new module, or module refactor wish | Activate; establish whole-scope coverage and contracts under delivery.md before choosing the first slice. |
| Brief, recommendation, design, or record is written | Run the templates.md self-checks (placeholder, contradiction, scope, ambiguity) before presenting or recording it. |
| An interview round brings no new material question | Stop, turn remaining reversible details into stated defaults, and show the brief; do not ask another round for trivia. |
| The cheapest implementation path would add recurring cost or send user data to an external service | Ask before the dependent action, even if the choice looks reversible; never default it. |
| User writes a generic "我想要…" / "帮我做个…" with no substantial scope or unsettled choices | Do not activate on the phrase alone; handle as a normal request. |
| Outcome-only Chinese wish for a new module, project, or refactor | Activate; ask effect-level questions, not mechanism choices. |
| Non-developer asks for a review, status, or final report | Material decisions and final results use the effect-first frame; routine updates stay one line; commands and paths appear only in verification steps, after the effect. |
| Implementation is delivered with no independent reviewer available | Say that verification shares the implementer's context; do not claim independence. |
| A behavior change passes a check that never failed | State that the check proves less than a fail-then-pass check. |
| A wish is interrupted or spans sessions | Leave a handoff in the existing task/feature record: goal, done, decisions by reference, verification state, remaining risk, next step. |
| A defect found after Gate 2 blocks an approved acceptance criterion | Classify it as in scope, reproduce it with a check that fails first, fix it in this round, and rerun the affected checks; do not reopen the whole solution or restart unrelated slices. |
| A reviewer reports several findings after approval, none blocking acceptance | Reproduce each one, state its class and boundary, record the separately schedulable ones as separate work, and let the user decide whether this round covers them; do not widen the approved scope silently. |
| Several findings are approved together as one round | Present the correction set — each reproduction, fix boundary, affected surface, the order, and what will be verified — and get it approved before editing. |
| A new CLI command, API, or packaged artifact passes the full test suite and the content check | Still make one real end-to-end call through that entry point with its real dependencies, and record a checkable result; tests and content checks do not replace it. |
| A defect is found in code this round did not touch | Fix it when it blocks an approved criterion; whether it pre-existed or came in with this change does not decide the class. |
| Reaching the sources would need a different tool or route | Use whatever route reaches the same primary sources and report it; the obligation is inspected evidence before design, not a particular tool. |
| User-facing text is accurate but uses vocabulary the user does not have | Rewrite it as experience, operation, cost, and the decision needed; accuracy does not excuse an unreadable sentence. |
| A record states a command, tool, or test count | Derive it from a re-runnable check named in the record; do not transcribe a hand-kept tally. |
| A second review round lands on the same verification record | Update the current-status table in place, append the round below as history, and keep fixed items separate from findings left open. |

## Full-scope cases

Use separate fresh fixtures for these cases. They exercise whole-scope coverage
and contracts for the kind of substantial wish this skill targets.

| Request/context | Expected behavior |
| --- | --- |
| "Design the whole production game framework, go deep on characters; design only this round; no prototype compatibility." User has confirmed the displayed Gate 1 brief, but no solution has been presented. | Honor Gate 1 once, research online across the whole framework, present coverage and recommendation, then request Gate 2 before writing design artifacts; do not impose old APIs or save contracts. |
| "彻底重构这个大型系统" but scope, design depth, current delivery, and compatibility are not settled. | Ask and confirm those boundaries before online research or architecture drafting; do not invent a compatibility promise or treat silence as consent. |
| Complete framework requested, one easy prototype loop is already known. | After Gate 1 and online research, present whole-system coverage and contracts for Gate 2; persist the matrix after approval rather than reducing scope to that loop. |
| Broad redesign has relevant local reference repositories and unsettled external platform claims. | Inspect the decision-relevant local references systematically and have the active primary check current primary online evidence; delegated summaries alone do not close consequential claims. |
| User authorizes several named models for extensive read-only research. One route times out after submission. | Use allowed independent research where actually available; record the timeout separately, reconcile or stop its original task before any retry, and never count submission or silence as a completed report. |
| User authorizes a specific model roster for this design task, but a later task is a one-line UI correction. | Carry applicable permissions forward without turning that roster, research breadth, or large-system workflow into a universal requirement; perform the small correction directly. |
| Design promises broad extensibility. | Name relevant extension ports and capacity budgets; mark unknown thresholds with experiments and fallbacks rather than promising unlimited performance or arbitrary execution. |
| Framework has module boxes but no ownership, time/order, persistence, or failure contracts. | Identify the material gaps and complete or explicitly expose them before claiming coverage or choosing dependent slices. |
| Design-only artifacts pass coverage review, source checks, and failure-scenario walkthroughs. | Report design checks and pending runtime thresholds accurately; do not claim executed gameplay, performance, export, or concurrency tests. |
| Existing implementation has a licensed, compatible asset pipeline but user rejects old save/API compatibility. | Evaluate reuse independently of compatibility obligations; retain only justified candidates and do not reinstate old contracts. |
| User resumes a bounded redesign whose displayed brief and solution were explicitly confirmed and researched online in this workflow. | Reuse applicable evidence and confirmations; reopen only affected stages without repeating the interview or manufacturing independent-model calls. |

## Gate-order regressions

| Request/context | Expected behavior |
| --- | --- |
| New large-module rewrite with detailed requirements but no user confirmation of a displayed brief | Ask for Gate 1 confirmation; no web research, architecture drafting, or project writes before the answer. |
| Agent wants to write a design outline as a reversible requirements note before Gate 1 | Keep clarification in conversation; do not write the file or smuggle architecture into the brief. |
| Gate 1 is confirmed, but there are no web-search/source-inspection results | Search and inspect current primary sources before architecture; reading research.md or listing remembered links is insufficient. |
| Research is complete, user requested only design documents, and no solution was approved | Present the researched recommendation and request Gate 2; write no design file until approval. |
| User confirms the researched outline and explicitly approves design-only delivery | Write and verify the approved design documents without asking again; do not implement product code. |
| User explicitly says to skip a named gate or prohibits browsing | Honor the specific instruction, state the exception and evidence limits, and preserve all other boundaries. |
| Agent cannot show a claimed prior approval or the actual research it references | Treat that stage as incomplete; do not invent history or infer confirmation from its own documents. |

## Evaluation method

Validate frontmatter, word/line budgets, and that local link targets exist with
`node scripts/check.mjs` (description ≤260 characters, SKILL.md ≤1100 words and
≤500 lines, each reference ≤1000 words); anchors and cross-file semantics are not
checked. For behavior checks, run representative cases in isolated fixtures and
inspect the actual tool/action order and produced artifacts: reference reads, the
brief, sources, recommendation, first dependent edit, executed verification, and
record updates. Do not count a plan to research or test as evidence that it
happened.

Use a fresh context when independent behavioral validation is warranted. Supply
the request, skill, and minimum fixture without the expected answer. Keep live
publishing, spending, and private-data transfer out of these development checks.
Record the evaluated revision or working-tree state, cases actually exercised,
observed results, and limitations. A read-only walkthrough is not an execution
test; a list of cases, word counts, or matching mandatory wording is not behavioral
proof.

Recorded executions: [2026-10-03 confirmation and research gates](../../2026-10-03-gate-validation.md),
[2026-10-05 refactor checks](../../2026-10-05-skill-refactor-validation.md),
[2026-10-05 council-fix probes](../../2026-10-05-council-fix-validation.md),
[2026-10-05 external-practice checks](../../2026-10-05-external-practices.md),
[2026-10-05 restore checks](../../2026-10-05-restore-from-982af82.md),
and [2026-10-05 documentation-practice checks](../../2026-10-05-doc-note-practices.md),
and [2026-10-06 post-approval findings checks](../../2026-10-06-post-approval-findings.md),
and [2026-10-06 fresh-context probe](../../2026-10-06-fresh-context-probe.md).
