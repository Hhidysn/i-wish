# I Wish artifact templates

Use these templates when emitting or persisting structured workflow artifacts.
Adapt fields to the project; preserve stable IDs and authorization semantics.

## Contents

- [Checkpoint](#checkpoint)
- [Intent package](#intent-package)
- [Gate request](#gate-request)
- [Research ledgers](#research-ledgers)
- [Decision package](#decision-package)
- [Specialist scope](#specialist-scope)
- [Action journal](#action-journal)
- [Safety pause](#safety-pause)
- [Canonical documentation](#canonical-documentation)
- [Verification report](#verification-report)
- [Final delivery](#final-delivery)

## Checkpoint

Keep the user-facing checkpoint compact. Omit empty arrays only when absence is
unambiguous. Never place secrets or raw private data in it.

```yaml
IWISH_CHECKPOINT:
  schema: "1"
  workflow_id: "IW-<globally-unique-id>"
  state: "owner-resolution-pending|interviewing|awaiting-gate1|researching|awaiting-gate2|implementation-ready|implementing|verifying|blocked|cancelled|incomplete|complete"
  block_reason: "fix-loop|research-incomplete|missing-authority|other|null"
  intent:
    revision: "INTENT-rN|null"
    digest: "sha256:<digest>|null"
  architecture:
    revision: "ARCH-rN|null"
    digest: "sha256:<digest>|null"
  workspace:
    requested: "<absolute path>|null"
    resolved_realpath: "<absolute path>|null"
    vcs_baseline: "<commit plus dirty summary>|no-vcs|not-yet-created"
    contents_fingerprint: "sha256:<digest>|null"
  research_storage:
    configured_root: "<exact absolute approved path>|null"
    workflow_realpath: "<root>/<workflow-id>|null"
    binding_digest: "sha256:<digest>|null"
    expected_max_bytes: 0
    observed_bytes: 0
    free_bytes_before: 0
    temp_and_cache_realpath: "<workflow_realpath>/runtime|null"
    hard_limit_enforced: true
    retention: "through-gate2|through-verification|custom|none"
    fallback_to_system_drive: "forbidden|explicitly-approved"
  requests:
    pending:
      - id: "<opaque one-time id>"
        kind: "gate1|gate2|safety"
        package_digest: "sha256:<digest>"
    consumed:
      - id: "<opaque one-time id>"
        kind: "gate1|gate2|safety"
        revision: "INTENT-rN|ARCH-rN|null"
        package_digest: "sha256:<digest>"
        workspace_realpath: "<absolute path>|null"
        effect_manifest_digest: "sha256:<digest>|null"
        write_authorization: "explicit|not-applicable"
        result: "approved|rejected|invalidated"
  material_decisions:
    - id: "MD-01"
      status: "open|decided|invalidated"
  ledgers:
    source_count: 0
    egress_count: 0
    provenance_inventory_digest: "sha256:<digest>|null"
  actions:
    - id: "ACT-001"
      state: "prepared|started|succeeded|unknown"
      postcondition: "<short check>"
  temporary_resources:
    - realpath: "<exact owned path>"
      kind: "candidate-archive|partial-download|extracted-source|tool-cache|analysis-output|probe|inventory|bootstrap-state"
      size_bytes: 0
      creation_fingerprint: "sha256:<digest>"
      current_status: "unchanged|changed|missing"
  evidence:
    behavior_fingerprint: "<commit/diff/build fingerprint>|null"
    stale: true
  unresolved:
    - "<risk, evidence gap, or authority>"
  next_permitted_action: "<one action>"
```

Before Gate 2, emit this in the conversation only. After Gate 2, maintain the
canonical copy in the project plan/ADR and include a short copy in the response.
For a new empty workspace with no canonical plan yet, atomically bootstrap a
root `.iwish-state.yaml` containing its own `started` creation action and these
bindings. Migrate and verify it into the first canonical plan/ADR, then remove
only the unchanged owned bootstrap file; do not keep a parallel history.

## Intent package

```markdown
# <Wish name> — INTENT-rN

- Workflow ID: `IW-...`
- Canonical digest: `sha256:...`
- Status: awaiting Gate 1

## Plain-language summary

<What the user/player will experience in the smallest coherent version.>

## Goals

- G-01: ...

## Core journey or loop

1. Given ...
2. When ...
3. Then ...

## Must-have scope

- ...

## Non-goals

- ...

## Constraints

- Platform: ...
- Budget/schedule: ...
- Privacy/data: ...
- Distribution/license: ...
- Performance/accessibility: ...

## Assumptions

- A-01: <assumption> — <visible consequence> — <why reversible>

## Acceptance criteria

- AC-01: <scenario, threshold, required evidence>

## Gate 1 effects

- Public current-source browsing: allowed/not allowed
- De-identified external review: <providers/categories>
- Agent-authored probes: <exact class, already-installed tools, temp boundary>
- Local research storage: <exact root/workflow child, hard byte cap, temp/cache
  routing, retention, cleanup, system-drive fallback policy>
- Active project writes: forbidden
- Candidate execution/install: forbidden
```

## Gate request

Create an unpredictable opaque request ID; never use only `INTENT-r2` or
`ARCH-r3` as authorization.

```yaml
gate_request:
  id: "IW-<workflow>-G1|G2-<opaque>"
  kind: "gate1|gate2"
  issued_after_message: "<host message identity if available>"
  workflow_id: "IW-..."
  revision: "INTENT-rN|ARCH-rN"
  package_digest: "sha256:..."
  workspace_realpath: "<path>|null"
  baseline_digest: "sha256:...|null"
  dependency_manifest_digest: "sha256:...|null"
  research_storage_digest: "sha256:...|null"
  effect_manifest_digest: "sha256:..."
  write_authorization_required: "true|false"
  status: "pending"
```

Gate 1 request copy:

```text
若以上内容准确，请直接回复：批准 <Gate-1-request-id>

这只授权已列出的当前资料调研、去标识化评审、安全探针和明确列出的本地
调研存储边界；不授权修改项目、安装依赖、运行候选代码或开始实现。任何
修改或附带条件都会生成新版本。
```

Gate 2 request copy:

```text
若采用推荐方案并允许实施，请直接回复：
采用推荐方案；批准 <Gate-2-request-id>，并授权在 <absolute-workspace-path> 实施

这只授权本方案列出的依赖、权限、副作用和回退候选。宿主权限、命令审批、
支付、部署、凭据和生产操作仍需遵守各自限制。
```

Reject approval when the same user reply adds `但`, `如果`, `顺便`, `改成`, a
different path, a new feature, a changed data/platform/budget boundary, or any
other condition. Treat it as feedback, not as “approval plus edit.”

## Research ledgers

### Source ledger

```markdown
| Source ID | Title | Direct URL | Accessed | Version/release | Supports | Freshness |
| --- | --- | --- | --- | --- | --- | --- |
| S-001 | ... | https://... | YYYY-MM-DD | vX/commit | AC-01, R-02 | current as of date |
```

### Query/source-family ledger

```markdown
| Search ID | Requirement/decision | Query or source family | New viable class? | Notes |
| --- | --- | --- | --- | --- |
```

### Egress ledger

```markdown
| Egress ID | Provider/domain | Purpose | Allowed field classes | Redaction/canary | Payload digest | Result |
| --- | --- | --- | --- | --- | --- | --- |
```

Never store the secret/canary value itself in the ledger.

### Material-decision registry

```markdown
| MD ID | Boundary | G/AC/R IDs | Reversibility | Candidate set | Decision | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
```

### Candidate matrix

```markdown
| Candidate | adopt/adapt/reject/uncertain | Requirement fit | License class | Version/digest | Maintenance | Supply chain | Integration | Risk | Sources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
```

### Provenance inventory summary

```yaml
provenance:
  inventory_file: "<temporary or canonical machine-readable path>"
  inventory_digest: "sha256:..."
  direct_artifacts: 0
  transitive_artifacts: 0
  native_binaries: 0
  dynamic_payloads: 0
  license_exceptions:
    - artifact: "..."
      class: "compatible-with-obligations"
      obligation: "..."
  mutable_or_unknown_items: []
```

## Decision package

```markdown
# <Wish name> — ARCH-rN

- Workflow ID: `IW-...`
- Based on: `INTENT-rN sha256:...`
- Package digest: `sha256:...`
- Workspace: `<resolved absolute path>`
- Baseline: `<commit/dirty summary or no-VCS contents fingerprint>`

## Consent card

- Recommended result: <user-visible outcome>
- Recommendation: <plain-language architecture choice and why>
- Reused: <engine/official/open-source/commercial assets>
- Custom: <smallest project-specific pieces>
- Ongoing cost/accounts: <none or exact>
- Data exposure/permissions: <none or exact>
- License/attribution duties: <none or exact>
- Hard-to-reverse choice: <boundary>
- Rollback: <what can be undone and how>
- Largest remaining risk: <risk>
- First validation slice: <what it proves>

## Requirements and material decisions

<registry and mapping>

## Current-source evidence

<Track A summary and source ledger link>

## Candidate comparison and provenance

<matrix, inventory digest, obligations>

## Viable architectures

### Option A — <name>
- Visible consequence: ...
- Benefits: ...
- Costs/risks: ...

### Option B — <name>
...

## Recommendation and challenge

- Lead recommendation: ...
- Independent challenge/degradation: ...
- Resolution: revised | researched | accepted disclosed risk

## Reuse/custom boundary

- Reuse: ...
- Adapt: ...
- Custom: ...
- Why existing candidates were rejected: ...

## Authorized manifest

- Dependencies/provenance digest: ...
- Effects/permissions: ...
- Commands/scripts requiring treatment: ...
- Equivalent fallbacks: ...
- Rollback: ...
- Verification plan: ...
```

## Specialist scope

```yaml
IWISH_SCOPE:
  schema: "1"
  workflow_id: "IW-..."
  gate2_request_id: "..."
  intent_revision_digest: "INTENT-rN sha256:..."
  architecture_revision_digest: "ARCH-rN sha256:..."
  workspace_realpath: "..."
  baseline: "..."
  vertical_slice: "SLICE-..."
  allowed_paths:
    - "..."
  allowed_dependencies:
    - identity: "..."
      digest: "sha256:..."
  allowed_effects:
    - "..."
  forbidden_effects:
    - "outside-workspace write"
    - "unapproved dependency"
    - "deployment/payment/production"
  required_postconditions:
    - "..."
```

Require the specialist to return:

```yaml
IWISH_SCOPE_RESULT:
  scope_digest: "sha256:..."
  status: "succeeded|failed|scope-refused|incomplete"
  actions: ["ACT-..."]
  changed_paths: ["..."]
  external_effects: []
  postconditions: ["..."]
  evidence: ["..."]
  divergence: null
```

## Action journal

Persist before and after every effect:

```yaml
action:
  id: "ACT-001"
  slice: "SLICE-01"
  description: "..."
  idempotency_key: "...|unsupported"
  state: "prepared|started|succeeded|unknown"
  started_at: "..."
  exact_targets:
    - realpath: "..."
      pre_fingerprint: "sha256:...|absent"
  command_or_effect: "redacted summary"
  expected_postcondition: "..."
  rollback_or_containment: "..."
  result:
    post_fingerprint: "sha256:...|null"
    evidence: "..."
```

Write/flush `started` before executing. If interrupted, mark or treat the action
as `unknown`, inspect real postconditions, and never retry solely because the
journal lacks `succeeded`.

The sole bootstrap exception is the first atomic creation of `.iwish-state.yaml`
in an approved new empty workspace; the file must contain its own `started`
creation record in the bytes first written. Verify it immediately before any
other effect.

## Safety pause

```markdown
# Safety pause: <short reason>

- Class: informed-confirmation | gate2-reapproval | external-authority
- Workflow/Gate revision: ...
- One-time request ID: ...
- Triggering fact: ...
- Proposed effect: ...
- Data/dependency/path affected: ...
- Risk: ...
- Rollback/containment: ...
- Missing authority/action: ...
- If declined: ...
```

Apply the normal Gate request digest, direct-reply, consumption, and reissue
rules. A user cannot confirm incompatible or unknown-license content into being
legal.

## Canonical documentation

Discover the project's existing structure before creating files. Prefer:

- existing `README` for purpose, setup, and current status;
- existing design/product document for goals and behavior;
- existing architecture/ADR location for material decisions;
- existing dependency/provenance/NOTICE location;
- existing plan/roadmap for vertical slices and checkpoint;
- existing verification/release document for evidence.

For a small new game with no convention, the maximum initial shape is usually:

```text
README.md
docs/
├── game-design.md
├── architecture.md
└── plan.md
```

Create `features/`, `decisions/`, `research/`, or separate provenance files only
when lasting complexity justifies them. Never create `docs/i-wish/`.

## Verification report

```markdown
# Verification — <build/diff fingerprint>

| AC ID | Scenario/check | Required evidence | Result | Evidence class | Artifact/log |
| --- | --- | --- | --- | --- | --- |
| AC-01 | ... | runtime | pass/fail/unverified | agent-verified/user-reported/unverified | ... |

## Environment

- Platform/device: ...
- Build/commit/diff fingerprint: ...
- Dependency/provenance inventory digest: ...
- Commands and runtime path: ...

## Runtime/behavior observations

- ...

## Errors, warnings, and limits

- ...

## Stale evidence

- none | <evidence invalidated by later behavior edit>
```

## Final delivery

Report:

1. what works in user-visible terms;
2. adopted native/open-source/commercial solutions;
3. custom code and why it was necessary;
4. exact license/NOTICE/provenance obligations;
5. verification by acceptance ID and evidence class;
6. remaining limitations and risks;
7. rollback or recovery path;
8. exact state: `complete`, `incomplete`, or `blocked`.

Do not claim `complete` when a required criterion is `unverified` or current
behavioral evidence is stale.
