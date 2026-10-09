# Independent verification

Read when choosing checks, before evaluator dispatch, and at closeout. Requirements
are the oracle; execution determines the result. Define observable acceptance and
feasible checks before coding; no additional mandatory test-author round then.

## Post-code test author

After coding, dispatch a fresh author different from the coder. First inputs:
approved behavior/acceptance, public interfaces, failure rules, harness/fixtures
and runnable entry. Exclude implementation, coder reasoning, self-test verdicts,
and suggested assertions. Freeze requirement-derived normal, boundary, error,
state/recovery and integration cases **before implementation exposure**.

Then map cases to the harness and write meaningful tests/scenarios. An explicit
white-box pass may add coverage; it cannot silently replace baseline expectations.
Use existing infrastructure; static/visual changes may need interaction/rendered
inspection rather than new automated tests. Coder TDD/self-tests remain useful
but supplemental. Lite may combine this author's later code review in the same
call; full uses separate requirements and standards review contexts.

Respect [agents.md](agents.md): native read-only authors return exact patches;
primary applies and runs them. Record author, applier and executor separately.
Execution-only harness adjustments are allowed; expectation or fixture semantics
changes return to the author. Resolve spec/test disputes against approved behavior;
record reasons. Product fixes go to the writer.

Prefer reproduced pre-fix failure and post-fix pass when feasible. Authored tests,
unexecuted patches, mock-only checks and dry runs do not establish real behavior.
Run the smallest checks that cover acceptance; broaden only for new failure/risk.

## Reviews

Pin candidate and change range including relevant untracked changes. Requirements
and standards receive separate verdicts; one pass cannot cancel the other failure.
Full uses separate fresh reviewer contexts. Lite may use one independent reviewer
for both axes after behavior-derived tests are frozen. Neither replaces UX.
Recheck affected fixes, not settled unrelated modules.

## Minimal-context user E2E

Separate new agent, uninvolved in development/testing/review. Inputs: user job,
visible rules, ordinary launch/install/help material, real entry, isolated
synthetic data/account, environment limits and identifiable candidate.
No source, internal design, developer conclusions, test cases, hidden expected
observations or step-by-step successful route. Log any later information supplied.

Let it discover and complete the job through the real UI/CLI/API, then explore a
relevant mistake/recovery. Record attempts, confusion, observations, outcome and
reproducible defects; captures when useful. Primary maps observations to acceptance
after the first report; missing observations remain missing evidence.

Use real declared dependencies for the claimed scope. Isolate state when tests
and UX run concurrently; otherwise serialize interactions. Unsupported tools,
hardware or history isolation leave the corresponding check unverified.
Agent experience evidence is a user simulation, not personal human judgment.
Wait for human sign-off only when agreed acceptance or authorization requires it.

## Evidence, invalidation and completion

For each criterion record:

```text
Acceptance ID / check / role-identity / supplied inputs
Design-contract versions / candidate-build identity / environment-data
Actual command or interactions / observed result / artifact-reproduction
Passed / failed / not-run / stale / explicit exception
Uncovered behavior / next action
```

A commit identifies a clean fully committed tested tree only. Dirty/non-Git work:
fingerprint tested files, relevant untracked tests/fixtures and artifact, or use an
equivalent reproducible build identity. Also establish which candidate the evaluator
actually used; a hash alone does not prove execution.

Changes invalidate affected evidence. Rerun it on the changed candidate; retain
unaffected evidence only with applicability explained. Build/typecheck proves its
own surface, not an integrated user journey. Final checks cover changed/uncovered
cross-system paths; completed modules alone cannot prove integration.

Close acceptance-blocking defects; other improvements are separate work. Repeated
failure without new evidence needs diagnosis or changed approach. Never weaken
criteria, average verdicts or turn missing capability into a pass.
Design-only: check coverage/contracts/sources/failure scenarios; runtime pending.
Completion requires requested scope, current required checks, closed blockers,
reconciled records and use/recovery guidance; otherwise report partial delivery.
