# I Wish

[English](README.md) | [简体中文](README.zh-CN.md)

Wish is the most powerful magic mortals can wield.
Speak your wish aloud, and the world gives it shape.

Turn an unsettled wish — a demo, a module change, a document, a media piece, a
plan or a configuration — into clear outcomes, researched choices, an audited
design and independently verified delivery. One installable skill, two workflows.

[Capability diagnosis](references/plan.md#一能力诊断调研第一步必做) opens every
research phase: four questions about knowledge, method, tools and evaluation,
then search only where a real gap exists. The model assumes its own knowledge
is stale for versions, APIs, prices and platform rules.

| Mode | Use for | Planning |
| --- | --- | --- |
| Lite | One bounded journey or artifact, reversible effects | Short cards, targeted research, one useful result |
| Full | Coupled modules, milestones or consequential commitments | Shared contracts, module refinement, dependency tasks, stage acceptance goals |

Invoke `$i-wish` and describe the outcome and constraints. Optionally say
“use lite” or “use full”; otherwise it explains its selection. Risk controls
remain required. Routine fixes and already-settled implementation use normal work.

Both modes default to subagents: an independent adversarial design audit, an
independent acceptance author, and a separate fresh user check of the finished
result. Open ideas use distinct-model proposals; genuine research axes run
concurrently where supported. Full adds progressive module design, a dependency
graph with stage acceptance goals, and separate requirements/standards reviews.
Without any subagent, the primary runs one adversarial check, labels it
`non-independent` and reports partial delivery.

Gate 1 and Gate 2 are mandatory in both modes and in design-only work: stop and
wait for explicit intent confirmation, complete actual online research before
design, then stop and wait for approval of the shown solution, task outline and
stage goals before writing design documents or artifacts. Clear requests,
delegation, demos and reversibility waive neither gate. Reuse actual unchanged
approvals; explicit named-stage exceptions stay scoped.

## Install and navigate

Link this directory into your host's skills location — one source, no copies:
Codex `~/.agents/skills/i-wish` or project `.agents/skills/i-wish`; Claude Code
`~/.claude/skills/i-wish`; OpenCode `~/.config/opencode/skills/i-wish` or
`.opencode/skills/i-wish`. Invoke `$i-wish` or `/i-wish` as your host supports.
The skill is a behavior contract; your host supplies dispatch, fresh contexts,
model routes and permissions.

On Windows, `mklink /J` creates a working junction without administrator rights;
symlinks need administrator or Developer Mode.

- [Entry](SKILL.md), [interview](references/interview.md), [plan](references/plan.md),
  [build and verification](references/build.md), [role contracts](references/agents.md),
  [records](references/records.md)
- [Current workflow](docs/design/workflow.md),
  [fusion sources](docs/research/sources.md),
  [earlier comparison](docs/research/workflow-comparison.md)
- Development: `node scripts/check.mjs`, `node --test evals/check.test.mjs`;
  [behavioral cases](evals/cases.md)
- Companion skill: [execution-standards](https://github.com/Hhidysn/execution-standards) —
  execution-phase standards (role contracts, minimal-change discipline, evidence format,
  independent verification). i-wish owns the process; that skill owns execution.

[MIT](LICENSE) © 2026 Hhidysn
