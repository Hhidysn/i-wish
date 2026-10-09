# 2026-10-09 mode refactor validation

Subsequent user review exposed mandatory-gate regression not covered by this run.
The earlier conclusion is limited accordingly; current correction and evidence:
[gate regression validation](2026-10-09-gate-regression-validation.md).

Authorization: user confirmed current-repository scope and explicitly authorized
research, final design and edits, skipping another solution confirmation.
Only primary wrote files; all native specialists were read-only.

## Current status

| Work | Result | Evidence / limit |
| --- | --- | --- |
| Public source comparison | Complete; failed DPF fetch excluded | [Research](../research/workflow-comparison.md) |
| Independent architecture/design challenge | Reconciled | Astra proposal, Luna proposal, Sol audit; [decision](../decisions/0009-lite-full-progressive-orchestration.md) |
| Current skill, modes, contracts, docs/history | Implemented | [Current design](../design/workflow.md) |
| Independent test authorship | Complete | Native `independent_tests`; baseline cases supplied before source inspection; primary saved exact author code/assertions and author-provided cleanup/regression additions |
| CLI test execution | Passed: 11 tests, 0 failed | `node --test evals/check.test.mjs`; temporary synthetic fixtures, no network/models |
| Static package / skill metadata | Passed | `node scripts/check.mjs --json`; `python -X utf8 .../skill-creator/scripts/quick_validate.py <repo>` |
| Requirements review | Passed after focused correction | `requirements_review`, initial conditional finding then read-only recheck |
| Standards review | Passed after focused corrections | `quality_review`, independent context; rechecked exact changed surfaces |
| Fresh-context interpretation probes | Executed; targeted initial failures repaired | Rounds below; no product runtime pass inferred |
| Complete product development / browser E2E / efficiency benchmark | Not run | Outside this skill-text/checker validation; no fabricated coverage |

## Tested identities and commands

Original baseline: revision `5bfecea`; [frozen entry](2026-10-09-runtime-before-refactor/entry.md).
All seven archived references match the original after stripping history banners;
entry additionally redirects its historical ADR link. Only one file named
`SKILL.md` remains in this repository; archive `entry.md` avoids duplicate discovery.

Final active instruction identity:
`a68b0e36b737a7dc0eb0acc7a0735cae8c3ddde9f1e9b1f9b38654dcb0132340`.
UI metadata identity:
`853d3a142eca62f08f71c63ceaa41af6930911d74273bbe5af944cdef16274ab`.
The checker also emits per-file identities for itself, cases and CLI tests.
Final reproducible static report: [check-report.json](2026-10-09-check-report.json).
Runtime identity covers entry plus recursive Markdown references; UI has its own
identity. History/docs are not included in runtime identity.

Commands executed on this working tree:

```text
node --test evals/check.test.mjs
node scripts/check.mjs
node scripts/check.mjs --json
python -X utf8 <skill-creator>/scripts/quick_validate.py <repo-root>
rg --files -g SKILL.md
git diff --check
```

The 11 tests include CLI exits, metadata/budget rejection, missing files/license,
real versus fenced anchors, runtime escapes, stable/changed fingerprints, nested
references and UI metadata. They are checker behavior tests, not workflow prose
matches. S02's full list of negative variants is broader than the executed test
subset; no claim that every designed scenario was executed.

Initial Windows validator run failed under the local GBK default; UTF-8 mode
succeeded without changing the host configuration. The command above uses
placeholders for the local skill and repository paths. Tests were authored by the
independent agent, saved/applied/executed by primary; authored patches alone were
never counted as passes. The checker was reviewed separately from these tests.

## Review corrections

| Finding | Correction | Closure evidence |
| --- | --- | --- |
| Fully-done predecessor requirement can deadlock integration | Typed dependency outputs, executable contract/stub for construction, real producer for acceptance; group cyclic integration | Design audit reconciled; resume probe |
| Audit reuse could cover unseen details | Explicit version/contracts/assumptions/coverage key; audit uncovered decisions | Full guide and Spec review |
| Deferred disqualifying facts could permit adoption | License/support/trust unknowns block dependent design/adoption | Research/full guide; resume probe |
| Resume wording could block research needed to obtain evidence | Kind-specific readiness; missing evidence blocks consumers, not investigation | Spec recheck pass; R ready/X blocked |
| Nested reference not hashed or containment checked | Recursive active refs, containment before file reads | Independently authored nested regression tests pass |
| UI prompt identity absent | Separate metadataSHA256 | Independent prompt-edit regression passes |
| Archive discovered as second skill | Rename to entry.md; repair links and baseline lookup | `rg` returns root only; Standards recheck pass |
| Current evals describe old rules | Replace with independent cases; preserve original in history | Standards recheck pass |

## Fresh-context probes

Each native probe used `fork_turns=none`, the exact source path, raw scenario facts
and bounded local-read permission. No expected answer, prior verdict or other
probe output was supplied. Source/role permissions stayed read-only. Reports of
reads are evaluator observations; no token/timing benchmark was collected.

First candidate identity:
`7da984cab9b890d38df52282fa7519ed1d2971d08f0302907d2700700f356670`.

- `probe_demo`: low-risk vocabulary demo, no prior approval. Selected lite,
  presented a brief and asked about answer data; read entry + lite. It opened lite
  before confirmation, showing the intake loading instruction needed sharpening.
- `probe_resume`: approved formal project with license investigation R, adopting
  task X, unrelated U and cyclic service/client integration. R ready, X blocked;
  U not blocked by R; shared contract/stub permits construction, real producer
  required for acceptance. Reused approvals. Read entry/full/research/verification/
  records. Its post-confirmation rules were unchanged by later intake/mode edits,
  so these observations remain applicable to the final candidate.
- `probe_verification`: formal CSV build. Produced correctly isolated test and UX
  packets, but explicitly chose lite for the narrow task. **Mode continuity failed**;
  this result is not counted as a final-mode pass.

Corrections: explicit pre-confirmation entry-only reads (game guide exception),
and full/formal mode persists across modules/verification unless user changes it.
Independent author added I07/I08 regression scenarios.

Final candidate identity is the active identity above:

- `probe_demo_final`: read **entry only**; short outcome summary and one meaningful
  choice about wrong words within/extra to the next day's five. It deferred lite
  reads until recommending the approach. No research, writes or approval simulated.
- `probe_verification_final`: read entry/agents/verification, no lite guide or
  explicit downgrade. Test author packet freezes behavior-derived cases before
  implementation exposure; native author returns patches; applier/executor recorded.
  Separate UX packet excludes source, internal designs, test expectations and success
  route, requires actual candidate and isolated state. Missing definitions/build
  identity remain pending. This probes the requested packets, not scheduling or
  execution of every full-review role.

These are actual rule-interpretation runs, not end-to-end software builds. No
subagent research, code generation, browser, acceptance execution or user approval
was simulated as completed in them. Open multi-model brainstorming, all milestone
paths, full runtime R01/R02 and cross-host transport are not exhaustively tested.
The newly authored I07/I08 general scenarios have only the related targeted probes,
not every variation. Required personal/hardware judgments remain outside this run.

## Size and remaining limits

`node scripts/check.mjs --json` recomputes baseline and final whitespace words:
entry **1078 → 510** (about 53% fewer); active instruction total **5660 → 3953**
(about 30% fewer). The final demo intake observed only the entry. These are instruction
size/read-set observations; they do not prove elapsed-time, token or defect savings.

No host configuration, global skill installation or publication performed.
The current change is uncommitted; use content identities, not HEAD alone, to
identify the tested state. No known acceptance blocker remains for the scoped
skill refactor and checker; the unexecuted full workflow/efficiency outcomes above
remain unverified.
