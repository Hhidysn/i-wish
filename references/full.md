# Full

Whole outcome first; module details when needed. Inherit mandatory Gate 1/Gate 2,
stop/wait and online-research completion rules from the entry; roles from [agents.md](agents.md), evidence from
[verification.md](verification.md). Use ordinary project records, not a new runtime.

## Global design

Map every required capability to owner/module, inputs/outputs, dependencies,
acceptance IDs and evidence state. Cover all requested outcomes before the first
increment. Fix shared obligations at their appropriate depth:

- interface/schema versions, data and authority ownership, compatibility;
- trust/permissions/privacy, lifecycle, failure/recovery/migration;
- ordering/concurrency/cancellation/retry, resource limits and test seams.

Run representative cross-module success and failure scenarios against contracts.
Defer replaceable internals; unknown record: question, owner, decisive check,
pass/fail target, fallback, deadline and blocked work. Adoption-disqualifying
unknowns (identity, license, required platform or trust support) block dependent
design/adoption, not merely coding. An owner/deadline does not settle the answer.
Performance hypotheses can proceed only within an authorized experiment/fallback.

Open creative choices use distinct-model independent proposals, then focused
comparison/discussion. Split genuine research axes among bounded read-only
researchers in parallel where supported; verify decisive primary sources.

Freeze the global recommendation; obtain an independent adversarial audit.
Resolve blockers before dependent approval/work. Audit key: design version,
named contracts, assumptions, reviewed decisions and unresolved findings.
Present experience, architecture, alternatives, reuse/custom choices, obligations,
unknowns, first integrated proof, roadmap and delegated module detail for approval.

## Tasks and milestones

After approval, create a dependency graph. Include decision/research/design,
implementation, integration and verification tasks; refine imminent work only.
A task fits one fresh context and proves an observable increment. Prefer complete
vertical paths; explicit shared foundations and staged compatibility migrations
are legitimate prerequisites.

Task packet:

```text
ID / kind / outcome / acceptance IDs / non-goals
Owner / allowed files-effects / contract owner
Minimal inputs / required design-contract versions / dependencies
Deliverable / feasible checks / independent roles / pass criteria
Blocking unknowns / isolation-recovery / invalidation trigger
State / evidence / next action
```

State: open → ready → running → verifying → done; blockers separately.
Readiness depends on kind:

| Kind | Ready when |
| --- | --- |
| Research/decision | Question, authorization, inputs/source access, investigation dependencies and output criteria exist; answer may be unknown |
| Design | Required research supports adoption; affected user commitments are settled; output/audit criteria exist |
| Implementation | Scope authorized; relevant design/audit valid; required inputs/contracts available; checks feasible; blocking unknowns closed |
| Integration | Participants/builds and contract versions available; integration checks and isolation defined |
| Verification | Identified candidate, criteria, independent evaluator/tools and runnable inputs available |

Name the exact dependency output, not a blanket predecessor-done rule. Consumers
may construct against an approved versioned contract plus executable stub or
producer build. Acceptance still requires the real producer. Group cyclic
integration dependencies into one integrated task/journey; do not fake a DAG.
One writer per file and shared contract. Parallelism requires semantic independence,
not merely different paths; serialize shared changes. Schedule the ready frontier.

Milestone before execution: usable outcome, acceptance/task/contract coverage,
integrated journey, failure/recovery, applicable nonfunctional targets, environment,
independent checks, pass criteria, blockers and recovery limits. Review plan
coverage/dependency risks independently; batch with design audit if already ready,
otherwise one bounded plan check. This adds no fixed human approval.

## Module readiness loop

At first implementation of each module, or invalidation of its evidence/design:

1. **Delta:** compare outcomes, constraints, acceptance and shared contracts.
   Ask only a missing/changed user-owned commitment; inherit unchanged consent.
2. **Research:** validate existing evidence; investigate missing/stale consequential
   claims with bounded researchers. Avoid repeating still-valid searches.
3. **Detail:** ownership, API/data/state, invariants, dependencies, error/recovery,
   resource limits, test seams and integration. Update producers/consumers together.
4. **Audit:** challenge uncovered decisions or invalid assumptions independently.
   Reuse only an audit whose version, contracts, assumptions and coverage still fit.
5. **Release:** update versions, task readiness, acceptance mapping and milestone
   impact. Proceed within consent; confirm only changed approved commitments.

Ordinary tickets cite valid module designs; they do not restart interviews.
Contract changes invalidate affected readiness/evidence until inputs and checks
are updated. Preserve unrelated tasks and conclusions.

## Build, verify, integrate

Check actual workspace and preserve others' work. Implement approved increments;
coder checks are supplemental. After coding: fresh independent test author;
separate requirements and standards reviewers; different fresh UX at user-visible
milestones. Noninteractive milestones use real API/CLI/integration checks.

Coded enters verifying. Done requires applicable independent checks, integration,
closed acceptance blockers and reconciled records. Milestones require the integrated
result, not task counts. Recheck affected fixes on the changed build; carry forward
unaffected evidence only with documented applicability.

Acceptance-blocking defects are in scope regardless of origin. Other improvements
become separate work. Repeated failure without new evidence: diagnose, split or
redesign; never weaken acceptance. Missing capabilities: continue unaffected work,
record partial result and next permitted action. Design-only claims stay at the
approved design depth; runtime evidence remains pending.
