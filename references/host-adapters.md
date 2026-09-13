# Host adapters

Read this reference only when installing I Wish, diagnosing discovery, or
composing it with an existing orchestration framework. The core workflow must
not depend on any host-specific feature described here.

Verified against public documentation on 2026-08-08.

## Discovery locations

| Host | User scope | Project scope | Explicit form |
| --- | --- | --- | --- |
| Codex | `~/.agents/skills/i-wish` | `.agents/skills/i-wish` | `$i-wish` |
| Claude Code | `~/.claude/skills/i-wish` | `.claude/skills/i-wish` | `/i-wish` |
| OpenCode | `~/.agents/skills/i-wish` or `~/.config/opencode/skills/i-wish` | `.agents/skills/i-wish` or `.opencode/skills/i-wish` | `/i-wish` command or skill load |

Sources:

- Agent Skills specification: <https://agentskills.io/specification>
- Codex Skills: <https://learn.chatgpt.com/docs/build-skills>
- Claude Code Skills: <https://code.claude.com/docs/en/skills>
- OpenCode Skills: <https://opencode.ai/docs/skills/>

Codex and Claude Code support linked Skill directories. On a personal machine,
keep one source checkout and expose it at the applicable user locations rather
than maintaining divergent copies. Check for an existing real directory before
creating a link and never delete it automatically.

OpenCode also discovers Agent-compatible and Claude-compatible locations. A
single `~/.agents/skills/i-wish` installation therefore covers Codex and
OpenCode; plain Claude Code still needs its `.claude/skills` location.

## Invocation and routing

Implicit activation is best effort and depends primarily on the frontmatter
description. Explicit invocation is the only deterministic cross-host trigger.
Do not trigger on the words `我想要` alone; require a substantial digital build
with unsettled or delegated boundaries.

Host-specific metadata may control UI or invocation policy, but core correctness
must not rely on it. Keep `agents/openai.yaml` optional.

## OpenCode adapter boundary

OpenCode enforcement is host-layer glue, not portable core. `SKILL.md` and the
portable references never name adapter tools, models, paths, or states.

- explicit command: `~/.config/opencode/commands/i-wish.md`;
- local plugin: `~/.config/opencode/plugins/i-wish-adapter.ts` and adjacent
  modules, plus orchestrator guidance appended by the host framework;
- project policy: `<project>/.opencode/i-wish.json`, opt-in per project;
- machine checkpoint: `<project>/.slim/i-wish/<workflow-id>.json`, adapter
  cache only, not human history.

While a wish is active, `i-wish` is the only outer owner. The adapter routes the
lead to `i-wish`, keeps competing outer workflows from taking ownership, and
delegates only bounded phase tasks to workers. Older adapters may enforce the
former two-gate workflow regardless of the
portable skill default. Inspect actual adapter behavior when using that host.
This edit does not change enforcement code. Respect an explicitly selected gated
adapter workflow and do not silently bypass its checks.

A project without `.opencode/i-wish.json` receives routing guidance only and
inherits no unknown path policy. Allow `i-wish` for the lead agent; workers need
no direct Skill access when the lead gives bounded phase briefs.

The adapter is a local controlled workflow, not a security boundary. It cannot
prevent `--no-plugins`, alternate configuration, direct external-process writes,
or deliberate edits to local state. Never present it as an unbypassable gate.

## Workers and review

Use proportionate local assessment or an independent reviewer when useful;
never claim independence for the lead agent's own assessment. With native
subagents or a team
framework such as Oh My OpenAgent or Oh My Claude Code, let the host choose
categories, models, and topology, give it bounded phase tasks, and keep any
requested approval gates and evidence synthesis with the lead. Do not start a competing
end-to-end loop such as another autopilot while I Wish owns the phase contract.

## Capability degradation

- No browsing: disclose it and use only local evidence or labeled uncertainty
  while continuing useful independent work; ask only about a dependent decision.
- No structured question tool: use a Markdown batch.
- No workers: use local evidence; disclose missing independent review when it
  matters to the decision.
- No write/runtime access: produce a plan or user-run verification steps and
  report incomplete evidence.
- No adapter or plugin: fall back to the plain core skill and state that
  enforcement hooks are absent.
- Existing end-to-end workflow explicitly invoked: resolve one outer owner;
  otherwise use the other workflow only as a bounded phase executor.
