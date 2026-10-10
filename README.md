# I Wish

[English](README.md) | [简体中文](README.zh-CN.md)

Wish is the most powerful magic mortals can wield.
Speak your wish aloud, and the world gives it shape.

Turn an unsettled wish — a demo, a module change, a document, a media piece, a
plan or a configuration — into clear outcomes, researched choices, an audited
design and independently verified delivery. One installable skill, two workflows.

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

- [Entry](SKILL.md), [lite](references/lite.md), [full](references/full.md)
- [Role contracts](references/agents.md), [research](references/research.md),
  [verification](references/verification.md), [records](references/records.md)
- [Current workflow](docs/design/workflow.md),
  [fusion sources](docs/research/sources.md),
  [earlier comparison](docs/research/workflow-comparison.md)
- Development: `node scripts/check.mjs`, `node --test evals/check.test.mjs`;
  [behavioral cases](evals/cases.md)

[MIT](LICENSE) © 2026 Hhidysn
