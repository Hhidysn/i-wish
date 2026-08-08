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
| OpenCode | `~/.agents/skills/i-wish` or `~/.config/opencode/skills/i-wish` | `.agents/skills/i-wish` or `.opencode/skills/i-wish` | load through its skill tool |

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

If a host hides skills behind permissions, allow `i-wish` for the lead agent.
Workers do not all need direct Skill access when the lead gives them bounded
phase briefs.

## No subagents

Run the workflow in the lead context. For important architecture, write the
initial proposal first, then perform a separate adversarial review before the
Gate 2 recommendation. Do not claim independent review.

## Native subagents or teams

Use host-native research, architecture, implementation, and verification workers
when useful. Do not hard-code agent names or models. Keep both user Gates and
evidence synthesis with the lead agent.

## Oh My OpenAgent

Oh My OpenAgent runs on OpenCode and exposes its own orchestrator, background
agents, and Team Mode. Let that framework select categories and models. Give it
bounded tasks for the current I Wish phase; do not start another end-to-end loop
such as a competing autopilot while I Wish owns the phase contract.

Project or user Skill locations supported by OpenCode remain sufficient. Check
OpenCode skill permissions if a custom agent cannot see I Wish.

Project: <https://github.com/code-yeongyu/oh-my-openagent>

## Oh My Claude Code

Oh My Claude Code supplies native teams and specialized agents. Keep I Wish as
the product-decision framework and use the team for bounded research, challenge,
implementation, or verification stages.

Install I Wish in a normal Claude Code Skill location for plain Claude
compatibility. Oh My Claude Code also documents compatibility with workspace
`.agents/skills` packages, but `.claude/skills` is the portable Claude default.

Project: <https://github.com/Yeachan-Heo/oh-my-claudecode>

## Capability degradation

- No browsing: disclose it and use only local evidence or labeled uncertainty
  after the user chooses whether to continue.
- No structured question tool: use a Markdown batch.
- No write/runtime access: produce a plan or user-run verification steps and
  report incomplete evidence.
- Existing end-to-end workflow explicitly invoked: resolve one outer owner;
  otherwise use the other workflow only as a bounded phase executor.
