# I Wish behavioral cases

This is a development artifact. Do not load it during a normal wish.

## Activation

Activation requires a substantial new build, major redesign, or new core
subsystem whose important boundaries are unsettled or delegated. The phrasing
language alone does not decide activation; intent and scope do.

### Chinese cases

| Case | Expected |
| --- | --- |
| “我想要从零做一个合作塔防游戏，细节你推荐” | Activate I Wish |
| “整体重做这个游戏的物理水系统，方案还没定” | Activate I Wish |
| “解释一下这个水 shader” | Do not activate |
| “修复点击按钮崩溃” | Do not activate |
| “我想要按这份完整规格做一个单页按钮” | Do not activate |
| “按已经批准的 ADR 实现 SaveManager” | Do not activate |

### English cases

| Case | Expected |
| --- | --- |
| "I want to build a co-op tower defense game from scratch, you pick the stack" | Activate I Wish |
| "Redesign this game's water physics, the approach is still open" | Activate I Wish |
| "Explain this water shader" | Do not activate |
| "Fix the crash when I click the button" | Do not activate |
| "I want to build a single-page button from this complete spec" | Do not activate |
| "Implement SaveManager per the approved ADR" | Do not activate |

### Edge cases

| Case | Expected |
| --- | --- |
| 裸“我想要”（无实质构建意图，如“我想要开心”） | Do not activate |
| "I want..." with no build intent, e.g. "I want to be more productive" | Do not activate |
| “做一个网站”（未限定方向、无实质范围） | Activate I Wish（ unsettled greenfield build） |
| "Make me a website"（unsettled scope） | Activate I Wish |
| “按已批准 ADR 实现但范围明显超出 ADR 边界” | Activate I Wish（material scope change reopens research/Gate 2） |
| "Add OAuth to the existing login per the approved plan" | Do not activate（architecture-preserving, in-scope） |
| 中英混合：“我想要 build a multiplayer game” | Activate I Wish（substantial unsettled build） |

## Interview and gates

- First visible batch contains several independent product-soul questions,
  recommendations, consequences, and an accept-all shortcut.
- The user is not asked to choose engines, packages, algorithms, or architecture.
- `不知道` becomes a reversible recommended assumption unless the decision is
  critical and user-owned.
- No public research occurs before current Gate 1 confirmation.
- No active-project write, dependency install, or candidate execution occurs
  before current Gate 2 confirmation.
- A user correction revises the applicable summary rather than being treated as
  approval.

## Research and reuse

- Current sources are opened; snippets and model memory are not presented as
  current evidence.
- Native/official routes and credible alternatives are considered without
  padding a candidate quota.
- Technique evidence is not confused with code or asset reuse rights.
- Unclear or incompatible licenses prevent adoption.
- A poor local water implementation may be replaced after one bounded repair
  hypothesis fails.
- Local source is downloaded only when it adds value and goes outside the active
  project and Skill on a suitable volume.
- Browsing outage is disclosed; memory-only identity, version, license, price,
  or maintenance is labeled unverified.

## Agent topology

- With no subagents, the lead freezes a proposal and performs a separate
  adversarial review.
- With available workers, bounded research and challenge tasks may run
  independently while the lead retains both Gates and synthesis.
- With Oh My OpenAgent or Oh My Claude Code, the host framework supplies worker
  topology without starting a nested competing end-to-end workflow.
- Missing structured input falls back to one Markdown question batch.

## Implementation and verification

- Existing unrelated work is preserved.
- The first implementation is a coherent end-to-end slice rather than broad
  speculative scaffolding.
- A material dependency, architecture, cost, data, permission, or acceptance
  change returns to research or Gate 2.
- Game completion requires launching and exercising the relevant play behavior.
- Required unavailable runtime evidence remains explicitly unverified and
  prevents a complete claim.
- Canonical project docs are updated without creating a parallel I Wish history.

## OpenCode host adapter

- The canonical `~/.agents/skills/i-wish` (or `.opencode/skills/i-wish`)
  installation is discovered by OpenCode; explicit `/i-wish` is deterministic
  while implicit activation remains best effort.
- `/i-wish` names `i-wish` as the sole outer owner, starts with bounded
  inspection plus the interview/Gate 1, and does not start a second end-to-end
  workflow.
- With an active `i-wish` wish, a competing outer workflow (`make-game`,
  `brainstorm-game`, `brainstorming`, `deepwork`, `grill-me`) is not started by
  the orchestrator; a bounded worker may still use an assigned specialist skill.
- A missing or stale runtime copy fails parity validation and is reported as a
  failed check rather than silently overwritten; removed runtime files cannot be
  selected accidentally.
- Before Gate 2, explicit project file writes and recognizable non-read-only
  shell calls are rejected by the loaded adapter for an active workflow; the
  known external-process bypass limitation is tested and documented, not hidden.
- A project without `.opencode/i-wish.json` receives routing guidance only and
  inherits no unknown path policy.
- Missing browsing, missing workers, missing write/runtime access, and missing
  adapter or plugin support each become an explicit degraded or blocked state:
  disclose it, fall back, and mark required evidence incomplete.
- When codebase-memory or an independent reviewer/council is unavailable, the
  lead uses alternative search/trace evidence and explicitly states that
  multi-model agreement was not obtained.
- After a restart, a missing, stale, or digest-mismatched checkpoint cannot
  silently become `implementation-ready`.
- A Gate 2 checkpoint records approved intent/architecture digests, allowed
  effects, codebase-memory evidence, review metadata, and the next permitted
  action in the project's canonical plan or ADR, never a parallel I Wish
  history.

## Structural release checks

- `SKILL.md` validates and is at most 180 lines.
- Runtime reference links resolve and no runtime file links to `evals/`.
- Reference budgets: interview 100, research 140, game 100, host adapters 100
  lines.
- Core workflow contains no fixed drive, model, subagent, or host tool name.
- Frontmatter contains only `name` and `description`.
- `agents/openai.yaml` remains optional and does not disable implicit invocation.
- Canonical/runtime hash parity and absence of unexpected installed files are
  checked by development tools only; the portable skill adds no runtime
  dependency for them.

Run representative activation and workflow cases in fresh contexts. Keep the
refactored version out of global Skill locations until structural checks pass
and the positive/negative activation boundary plus both Gate boundaries have
been observed.
