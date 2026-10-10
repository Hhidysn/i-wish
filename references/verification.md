# Independent verification

Read when choosing checks, before dispatching an evaluator, and at closeout.
Requirements are the oracle; execution determines the result. Define observable
acceptance and feasible checks before producing; no separate mandatory pre-production
test round.

## Acceptance authorship

After the artifact forms, dispatch a fresh author different from the producer. First
inputs: approved behavior and acceptance, public interfaces, failure rules, harness
and fixtures, runnable entry. Exclude implementation, producer reasoning, self-check
verdicts and suggested assertions. Freeze requirement-derived normal, boundary,
error, state and recovery, and integration cases before exposure to the work.

Then map cases to the harness and write meaningful tests, checks or scenarios. Use
the existing infrastructure; static, visual, document or configuration work may need
interaction, rendered inspection or read-through rather than new automated tests.
Producer self-checks remain supplemental. Lite may combine this author's later review
in the same call; full uses separate requirements and standards review contexts.

Respect [agents.md](agents.md): native read-only authors return exact patches; primary
applies and runs them. Record author, applier and executor separately. Execution-only
harness adjustments are allowed; expectation, fixture or semantic changes return to
the author. Resolve disputes against approved behavior and record reasons. Product
fixes go to the writer.

Prefer a reproduced pre-fix failure and post-fix pass when feasible. Authored tests,
unexecuted patches, mock-only checks and dry runs do not establish real behavior.
Run the smallest checks that cover acceptance; broaden only for new failure or risk.

Write each planned check as `Run:` the operation, `Expected:` the observable result,
then `Observed:` what actually happened. A claim without a completed observation is
not evidence.

## Reviews

Pin the candidate and the change range, including relevant untracked changes.
Requirements and standards receive separate verdicts; one pass cannot cancel the
other's failure. Full uses separate fresh reviewer contexts; lite may use one
independent reviewer for both axes after behavior-derived checks are frozen. Neither
replaces the user check. Recheck affected fixes, not settled unrelated modules.

The changed range must not lower thresholds, delete or skip checks, or add empty
implementations. Compare against the approved baseline; without a target, measure the
baseline first and only improve.

## Minimal-context user check

Separate new identity, uninvolved in producing, testing or reviewing. Inputs: user
job, visible rules, ordinary launch, install or help material, the real entry, isolated
synthetic data or account, environment limits and an identifiable candidate. No source,
internal design, developer conclusions, test cases, hidden expected observations or a
step-by-step successful route. Log any later information supplied.

Let it discover and complete the job through the real UI, CLI, API, document or
deliverable, then explore a relevant mistake and recovery. Record attempts, confusion,
observations, outcome and reproducible defects; captures when useful. Primary maps
observations to acceptance after the first report; missing observations remain missing
evidence.

Use real declared dependencies for the claimed scope. Isolate state when checks and
the user run concurrently, otherwise serialize interactions. Unsupported tools,
hardware or history isolation leave the corresponding check unverified. An agent
experience is a user simulation, not personal human judgment. Wait for human sign-off
only when agreed acceptance or authorization requires it.

## Evidence, invalidation and completion

For each criterion record:

```text
Acceptance ID / check / role identity / supplied inputs
Design and contract versions / candidate identity / environment and data
Run / Expected / Observed / artifact or reproduction
Passed / failed / not-run / stale / explicit exception
Uncovered behavior / next action
```

A commit identifies a clean, fully committed tested tree only. For dirty or non-Git
work, fingerprint the tested files, relevant untracked checks and the artifact, or use
an equivalent reproducible identity. A document, rendered output or remote
configuration snapshot needs its own identity. Establish which candidate the evaluator
actually used; a hash alone does not prove execution.

Changes invalidate affected evidence. Rerun it on the changed candidate; retain
unaffected evidence only with applicability explained. Build or typecheck proves its
own surface, not an integrated journey. Final checks cover changed and uncovered
cross-system paths; completed modules alone cannot prove integration.

Close acceptance-blocking defects; other improvements are separate work. Repeated
failure without new evidence needs diagnosis or a changed approach. Never weaken
criteria, average verdicts or turn missing capability into a pass. Design-only: check
coverage, contracts, sources and failure scenarios; runtime stays pending. Completion
requires requested scope, current required checks, closed blockers, reconciled records
and use or recovery guidance; otherwise report partial delivery.
