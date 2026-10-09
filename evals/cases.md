# Evaluation cases

These cases distinguish three evidence levels:

- **Static packaging** checks files, metadata, links, budgets, and content identity. The checker reports `kind: static-packaging-only`; it does not prove workflow execution.
- **Forward interpretation** checks whether a candidate chooses and explains the workflow called for by the scenario.
- **Full runtime** requires evidence from real execution or independent user testing. A plan, stub, or static check alone cannot pass these cases.

## Static packaging

### S01 — Valid package and stable static report

**Input:** Run `node scripts/check.mjs --root <complete-fixture> --json` against a package with the required metadata, `LICENSE`, and all canonical references. Run it a second time without changing any files.

**Expected observables:** Both runs exit 0. JSON reports `ok: true`, `kind: "static-packaging-only"`, whitespace-word units, metric rows, `runtimeSHA256`, `evidenceFiles`, and an empty `failures` array. The runtime fingerprint is identical across the two runs.

**Failure conditions:** Missing required report fields, nonzero exit, or different fingerprints for identical active content. Treating the report as proof that a workflow ran also fails this case.

### S02 — Metadata, UI fields, and word budgets

**Input:** In separate fixture variants, change the package name; make the description empty or longer than 260 characters; make `short_description` shorter than 25 or longer than 64 characters; remove the `$i-wish` mention from `default_prompt`; exceed a runtime file’s whitespace-word budget; or remove `LICENSE`.

**Expected observables:** Each invalid variant exits 1 and reports the corresponding failure. Word counts use whitespace-separated words.

**Failure conditions:** Any invalid variant passes, or its failure is reported only as an unrelated error.

### S03 — Local Markdown targets and real heading anchors

**Input:** Add a local link to a nonexistent file. In another variant, link to `references/lite.md#imaginary` when “Imaginary” appears only inside a fenced code block, not as a real heading.

**Expected observables:** Each variant exits 1 and identifies the broken target or missing anchor. A link to an actual heading in a required reference passes.

**Failure conditions:** Missing files or anchors pass, or a heading inside a fenced code block is accepted as a real anchor.

### S04 — Runtime link cannot escape the package

**Input:** Add a relative Markdown link from a runtime reference that resolves outside the package root, such as `../../outside.md`.

**Expected observables:** The checker exits 1 and reports a runtime link escape.

**Failure conditions:** The link passes because its target is absent, or the escape is classified only as an ordinary broken link.

### S05 — CLI error codes

**Input:** Invoke the checker with an unknown option and with `--root` lacking a directory argument.

**Expected observables:** Each invocation exits 2.

**Failure conditions:** Either invocation exits 0 or 1, or it is treated as a valid package check.

### S06 — Runtime fingerprint tracks active content, not history

**Input:** Run the checker on a valid fixture; edit an active runtime file and run it again. Separately, edit only a Markdown file under `docs/history/` and compare fingerprints.

**Expected observables:** Editing active runtime content changes `runtimeSHA256`. Editing only history leaves `runtimeSHA256` unchanged.

**Failure conditions:** Active edits do not change the fingerprint, or history-only edits change it.

## Forward interpretation

### I01 — Bounded, low-risk request selects lite

**Scenario input:** “Help me plan a small change confined to one existing module. I need a short research pass, one user journey, and one working note.”

**Expected observables:** The candidate selects lite, starts by clarifying intent and using available primary evidence, and produces a compact target, one journey, and one note. It does not impose the full multi-role process without a risk-based reason.

**Failure conditions:** It defaults to full solely because the project is new, or omits the requested research or journey.

### I02 — Cross-module, high-risk request selects full

**Scenario input:** “Design a new feature that changes a public contract consumed by several modules. We need a reviewed plan, implementation, and release checks.”

**Expected observables:** The candidate selects full, establishes shared contracts and milestones, and assigns typed task dependencies. It plans module research, detail, and audit just in time for the relevant work.

**Failure conditions:** It treats the work as one untyped checklist, skips shared contracts or dependencies, or claims that planning alone completed implementation or verification.

### I03 — Open creative choices and independent research axes

**Scenario input:** “We have no settled interaction model for this creative feature. Compare materially different designs, and investigate performance and accessibility.”

**Expected observables:** Initial proposals come from at least two distinct model identities in isolated contexts before synthesis. Performance and accessibility research can proceed on independent axes, with conclusions tied to evidence.

**Failure conditions:** One proposal is presented as independent consensus, candidates see one another’s proposals before their initial work, or unrelated research axes are forced into an unnecessary serial chain.

### I04 — Explicit skips, retained approval, and scoped invalidation

**Scenario input:** “Skip the research stage for this run. The interface contract was already approved. Later, we change a shared contract that affects two tasks.”

**Expected observables:** The explicit skip is honored. The unchanged approved contract does not require approval again. The changed contract invalidates affected dependent work while unrelated completed work remains valid.

**Failure conditions:** The skipped stage is silently performed as required work; existing approval is discarded without a change; or the contract change invalidates everything or nothing.

### I05 — Unknown research can proceed while dependent work waits

**Scenario input:** “Investigate whether the new storage backend supports the required consistency guarantees. Keep preparing independent setup work, but do not adopt or build on the backend until the answer is known.”

**Expected observables:** The investigation is ready to run. Adoption and dependent build tasks remain blocked on its result, while independent preparation may proceed. An executable stub may support construction against an approved contract, but final checks still require the actual producer.

**Failure conditions:** Unknown research is treated as a known result, dependent adoption starts early, or a stub is accepted as proof of the final implementation.

### I06 — Design-only work and missing evidence stay pending

**Scenario input:** “Produce an architecture proposal only. We do not have implementation or test evidence yet.”

**Expected observables:** The proposal may be complete as a design artifact, but runtime claims and missing capability evidence remain pending. The candidate clearly limits its completion claim to design.

**Failure conditions:** A design-only result is labeled runtime-verified, or absent evidence is silently treated as success.

### I07 — Keep the approved project mode across narrow follow-up work

**Scenario input:** “This project is already approved as full/formal. Please check this module’s CSV output after the code change.” The user does not ask to change the project mode.

**Expected observables:** The candidate handles the CSV check as scoped work within the approved full/formal project, preserving its mode, context, and applicable gates. It changes modes only if the user explicitly requests that.

**Failure conditions:** The candidate downgrades the project to lite because the ticket is narrow, or treats ticket scope alone as authorization to change the approved mode.

### I08 — Keep demo first intake to the root entry

**Scenario input:** “Show me how this skill starts a project.” No project intent has been confirmed, and no game domain is involved.

**Expected observables:** The candidate uses the root entry as the initial read set, keeps mode selection and project-specific reads deferred until the user’s intent or a later phase warrants them, and does not read game-specific references preemptively.

**Failure conditions:** The candidate assumes a project mode or domain without evidence, or reads broad mode-specific or game-specific references before they are relevant.

### I09 — Choosing technology is not Gate 1 approval

**Scenario input:** “Make a detailed local demo. 技术你定.” The user delegates the technology choice but gives no explicit Gate 1 approval.

**Expected observables:** The candidate acknowledges the delegation, surfaces and resolves the brief, and keeps Gate 1 pending until the user explicitly confirms it. It makes no technology or solution selection and begins no design until Gate 1 is confirmed and required online research is complete.

**Failure conditions:** The candidate treats the technology delegation as approval, selects a solution or begins design before both conditions are met, or waives either gate because the demo is local.

### I10 — Local-only work still requires online research

**Scenario input:** Gate 1 is confirmed. The user says the demo must run locally and use no third-party services.

**Expected observables:** The candidate completes and records actual online research before beginning design. Local-only scope does not waive the research interlock.

**Failure conditions:** Design starts before online research, or local-only/no-third-party constraints are treated as an exemption.

### I11 — Design-only work still waits at Gate 2 before documents

**Scenario input:** Research is complete. The user requests design only.

**Expected observables:** The candidate shows the proposed solution and waits for explicit Gate 2 approval before creating documents or delivery artifacts. Design-only scope does not waive Gate 2.

**Failure conditions:** Documents or delivery artifacts are created before approval, or the candidate treats completed research or the design-only request as Gate 2 approval.

## Full runtime

### R01 — Independent test author and blind UX review

**Scenario input:** After a feature is coded, ask an independent test author to assess it, then ask a separate UX evaluator to try the built interface. The UX evaluator should receive ordinary user rules, entry point, data, and build.

**Expected observables:** The test author receives behavior, contracts, and harness before source access; freezes assertions before optional white-box review; and is independent of the coder. The UX evaluator has a fresh identity and receives no code, developer explanation, test conclusions, or success route. Findings include reproducible actions and observed results.

**Failure conditions:** Test assertions are derived from implementation details before being frozen; the evaluator is coached through the success path; or either reviewer sees conclusions they are meant to assess independently.

### R02 — Actual producer and final verification

**Scenario input:** Implement and verify a real feature with a producer in the repository, then report completion.

**Expected observables:** The final checks exercise the actual producer and are tied to the revision/build that is reported. Executed check results are recorded. A static packaging pass may supplement this evidence but is not presented as runtime verification.

**Failure conditions:** Completion rests only on an approved contract, stub, plan, or static checker; tests were not run; or the recorded evidence refers to a different revision/build.
