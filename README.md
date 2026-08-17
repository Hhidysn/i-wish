# I Wish

English | [简体中文](README.zh-CN.md)

Turn a rough wish for a substantial new digital product into one the user has
understood, approved, and seen working — research before designing, reuse before
custom code, two confirmations, then build and prove.

I Wish is a portable [Agent Skill](https://agentskills.io/specification). It is
not a runtime library, plugin, or orchestrator. The active host agent executes
the workflow; I Wish owns the phase contract.

## When to use

Use I Wish when important product or technical boundaries are unsettled or
delegated, including requests phrased as "我想要做一个……", "从零做一个……",
"build X from scratch", or "the approach is still open".

Do **not** use it for isolated fixes, explanations, small edits, or work that is
already fully specified — a generic "我想要" or "I want" without a substantial
build is not enough. See [`evals/cases.md`](evals/cases.md) for the full
activation boundary.

## What it does

1. **Understand the wish** — batched plain-language interview; non-technical
   users never pick engines, packages, or architecture.
2. **Gate 1: confirm intent** — short summary; explicit confirmation before any
   public research.
3. **Research before designing** — current sources, official/standard routes
   first, then maintained open source, then commercial, then custom. Existing
   code is classified `reuse` / `repair` / `replace` against acceptance criteria.
4. **Gate 2: confirm the solution** — recommendation, alternatives, reuse/custom
   boundary, license and cost duties, risks, first implementation slice.
5. **Build the smallest coherent product** — vertical slices, smallest end-to-end
   slice first, existing conventions preserved.
6. **Prove the result** — run the product and exercise observable acceptance
   criteria; static checks alone never prove runtime behavior.

## Layout

```text
i-wish/
├── SKILL.md                  # core phase contract (loaded at runtime)
├── agents/
│   └── openai.yaml           # optional Codex UI adapter
├── references/               # loaded only when the matching phase runs
│   ├── interview.md
│   ├── research.md
│   ├── game-projects.md
│   └── host-adapters.md
└── evals/
    └── cases.md              # development-only; never linked from runtime files
```

Runtime references are loaded on demand; `evals/` is for development only.

## Install

I Wish is host-agnostic. Verified discovery locations on 2026-08-08:

| Host | User scope | Project scope |
| --- | --- | --- |
| Codex | `~/.agents/skills/i-wish` | `.agents/skills/i-wish` |
| Claude Code | `~/.claude/skills/i-wish` | `.claude/skills/i-wish` |
| OpenCode | `~/.agents/skills/i-wish` or `~/.config/opencode/skills/i-wish` | `.agents/skills/i-wish` or `.opencode/skills/i-wish` |

On a personal machine, keep one source checkout and expose it at each host's
location via a link rather than maintaining divergent copies. Check for an
existing real directory before creating a link and never delete one
automatically.

### Quick start

```bash
git clone <this repo> ~/.agents/skills/i-wish
# link into other hosts as needed, e.g. Claude Code:
#   mklink /D "%USERPROFILE%\.claude\skills\i-wish" "%USERPROFILE%\.agents\skills\i-wish"   (Windows)
#   ln -s ~/.agents/skills/i-wish ~/.claude/skills/i-wish                                  (macOS/Linux)
```

Explicit invocation is the only deterministic cross-host trigger. Implicit
activation is best-effort and depends on each host's description-based routing;
see [`references/host-adapters.md`](references/host-adapters.md) for details.

## Example

> 我想要从零做一个合作塔防游戏，细节你推荐

I Wish will:

1. Ask a few plain-language batches about the desired experience, repeated play
   loop, audience, and visible success — never "which engine?".
2. Summarize goals, non-goals, constraints, and acceptance criteria; wait for
   `确认需求`.
3. Research current reusable engines, plugins, and assets; classify any existing
   prototype; present a recommendation with trade-offs; wait for
   `采用推荐方案，开始实现`.
4. Build the smallest coherent end-to-end slice, then verify by actually running
   the game and exercising the play loop.

## License

[MIT](LICENSE) © 2026 Hhidysn
