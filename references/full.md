# Full

Whole outcome first; module detail when needed. Inherit the entry's Gate 1/Gate 2,
stop-and-wait and mandatory online-research rules; roles from [agents.md](agents.md);
evidence from [verification.md](verification.md). Use ordinary project records, not
a new runtime.

## Global design

Map every required capability to owner, inputs, outputs, dependencies, acceptance
IDs and evidence state. Cover all requested outcomes before the first increment.
Fix shared obligations at their depth:

- interface and schema versions, data and authority ownership, compatibility;
- trust, permissions and privacy, lifecycle, failure, recovery, migration;
- ordering, concurrency, cancellation, retry, resource limits, test seams.

Run representative cross-module success and failure scenarios against contracts.
Defer replaceable internals. Every unknown gets a question, owner, decisive check,
pass target, fallback, deadline and blocked work.

Adoption-disqualifying unknowns — identity, license, required platform or trust
support — block dependent design and adoption, not only coding. An owner or a
deadline does not settle the answer. Performance hypotheses run only inside an
authorized experiment with a fallback.

Open creative choices: distinct-model isolated proposals, then focused comparison.
Split genuine research axes among bounded read-only researchers in parallel where
supported; verify decisive primary sources yourself.

Freeze the global recommendation; obtain an independent adversarial audit with
de-biased inputs. Resolve blockers before dependent approval or work. Audit key:
design version, named contracts, assumptions, reviewed decisions, unresolved findings.

Present for approval: experience, architecture, alternatives, reuse or custom
choices, obligations, unknowns, first integrated proof, roadmap, delegated module
detail, and the task outline with stage acceptance goals.

## Task outline and milestones

The approved plan carries a dependency graph and stage acceptance goals. Include
decision, research, design, implementation, integration and verification tasks;
refine imminent work only. One task fits one fresh context and proves an observable
result. Prefer complete vertical paths; explicit shared foundations and staged
compatibility migrations are legitimate prerequisites. A slice names the end-to-end
behavior or artifact it delivers, not an action on one layer.

Task packet:

```text
ID / kind / outcome / acceptance IDs / non-goals
Owner / allowed files and effects / contract owner / contract versions
Minimal inputs / dependencies / deliverable / feasible checks
Independent roles / pass criteria / blocking unknowns / recovery / invalidation
State / evidence / next action
```

State: open → ready → running → verifying → done; blockers separate. Readiness by
kind:

| Kind | Ready when |
| --- | --- |
| Research/decision | Question, authorization, source access, dependencies and output criteria exist; the answer may be unknown |
| Design | Required research supports adoption; affected user commitments settled; output and audit criteria exist |
| Implementation | Scope authorized; relevant design and audit valid; inputs and contracts available; checks feasible; blocking unknowns closed |
| Integration | Participants, builds and contract versions available; integration checks and isolation defined |
| Verification | Candidate, criteria, independent evaluator, tools and runnable inputs available |

Name the exact dependency output, not a blanket predecessor-done rule. Consumers may
build against an approved versioned contract plus executable stub or producer build;
acceptance still needs the real producer. Group cyclic integration dependencies into
one integrated task; do not fake a DAG. One writer per file and shared contract.
Parallelism needs semantic independence, not different paths. Schedule the ready frontier.

Milestone before execution — a milestone states: usable outcome, acceptance and
contract coverage, integrated journey, failure and recovery, applicable
nonfunctional targets, environment, independent checks, pass criteria, blockers,
recovery limits. Review
plan coverage and dependency risk independently; batch with the design audit when
already ready, otherwise one bounded plan check. No additional fixed human approval.

## Module readiness loop

At the first implementation of each module, or when its evidence or design is
invalidated:

1. **Delta:** compare outcomes, constraints, acceptance and shared contracts. Ask
   only a missing or changed user-owned commitment; inherit unchanged consent.
2. **Research:** validate existing evidence; investigate missing or stale decisive
   claims with bounded researchers. Do not repeat still-valid searches.
3. **Detail:** ownership, API, data, state, invariants, dependencies, error and
   recovery, resource limits, test seams, integration (for a non-code wish: the
   affected parts of the deliverable or plan). Update producers and consumers together.
4. **Audit:** challenge uncovered decisions or invalid assumptions independently.
   Reuse an audit only while its version, contracts, assumptions and scope still fit.
5. **Release:** update versions, task readiness, acceptance mapping and milestone
   impact. Proceed within consent; confirm only changed approved commitments.

Ordinary tickets cite valid module designs; they do not restart the interview.
Contract changes invalidate affected readiness and evidence until inputs and checks
are updated. Preserve unrelated tasks and conclusions.

## Build, verify, integrate

Check the actual workspace and preserve others' work. Implement approved increments;
coder checks are supplemental. Per task: record the base revision or starting
artifact state, dispatch a bounded brief, collect the report and the changed range,
review independently, fix, re-review only the affected range, then advance. Bounded
loop: at the limit, escalate, switch the assigned identity, or let the primary
adjudicate; never park an acceptance blocker.

Failure without new evidence: stop, reproduce, shrink, test one hypothesis at a time,
fix the root cause, re-check regression and the original scenario, then escalate or
redesign. Never weaken acceptance criteria or the approved baseline.

After the artifact forms: fresh independent test author, separate requirements and
standards reviewers, a different fresh user identity at user-visible milestones.
Noninteractive milestones use real API, CLI or integration checks.

Done requires applicable independent checks, integration, closed acceptance blockers
and reconciled records. Milestones need the integrated result, not task counts.
Recheck affected fixes on the changed build; carry unaffected evidence forward only
with documented applicability. The changed range must not lower thresholds, delete
or skip checks, or add empty implementations.

Acceptance-blocking defects are in scope regardless of origin. Other improvements
become separate work. Missing capabilities: continue unaffected work, record the
partial result and the next permitted action. Design-only claims stay at the approved
design depth; runtime evidence stays pending.
