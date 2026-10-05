# I Wish

[English](README.md) | [简体中文](README.zh-CN.md)

Wish is the most powerful magic mortals can wield.
Speak your wish aloud, and the world gives it shape.

Turn a substantial product, feature, or subsystem into explicit success criteria,
an evidenced solution, and a verified result. Use I Wish when product,
architecture, or reuse choices remain open or delegated, even when the desired
behavior is clear. See [SKILL.md](SKILL.md).

Invoke `$i-wish` with the desired outcome and known constraints. It first asks
clarifying rounds of 3–4 questions, each with a recommended default, and obtains
confirmation of the intent, then searches current solutions online and inspects
primary sources. It presents a recommendation for
your approval before writing design documents or implementation. Approved work
moves through plan, execute, verify, and ship, then is recorded under the
project's documentation conventions.

Both confirmation gates and online research are required by default, including
design-only requests. Delegating technical choices does not waive them. Existing
explicit approvals of unchanged stages count; an explicit user instruction can
change the workflow. These are agent instructions, not tool-level enforcement.

Runtime guidance: [shaping](references/shaping.md),
[research](references/research.md), [delivery](references/delivery.md),
[documentation](references/documentation.md),
[plain language](references/plain-language.md),
[templates](references/templates.md), and
[games](references/game-projects.md). New projects, modules, and refactors
establish whole-scope coverage and contracts under delivery before the first
slice. Read only the applicable references.
See [behavioral cases](evals/cases.md) for development checks and
[workflow decisions](docs/decisions/0001-confirm-before-design.md) for rationale.

## Install

Copy or link this directory into the host's skills location: Codex reads
`~/.agents/skills/i-wish` (project: `.agents/skills/i-wish`), Claude Code reads
`~/.claude/skills/i-wish`, and OpenCode reads `~/.config/opencode/skills/i-wish`
or `.opencode/skills/i-wish`. Invoke with `$i-wish` or `/i-wish`. Gates are
behavioral instructions, not host enforcement; keep one source copy and link it
instead of maintaining divergent copies.

[MIT](LICENSE) © 2026 Hhidysn
