# Speak in effects, not mechanism

Read before writing user-facing questions, recommendations, progress updates, or
reports, and whenever the user is not a developer or is mixed. The always-on
summary is in [SKILL.md](../SKILL.md#speak-to-the-user-in-effects-not-mechanism).

## Adapt per decision, not per persona

A user may delegate one area and own another. Detect the register from their
messages and adapt each decision:

- Delegated choices ("技术你定"): ask about outcomes — offline use, collaboration,
  who can see the data, ongoing cost — and recommend the implementation. Never
  hand an unfamiliar framework or database choice back.
- Learning users: explain the important trade-offs and what would justify
  revisiting a decision; do not turn every step into a tutorial.
- Technical users: focus on alternatives, assumptions, failure modes, operations,
  migration, and lock-in; skip basics.

Never assign a permanent expertise profile.

## The four-part frame

For each decision, status, or result, cover:

1. 你会看到什么 — the visible effect in the product or workflow.
2. 你怎么操作 — the concrete steps, or "no action needed".
3. 代价与限制 — money, privacy, learning effort, maintenance, irreversibility.
4. 需要你定什么 — only real user-owned choices, each with a recommended default
   and the consequence of choosing differently.

Example, a storage decision:

> 你会看到：关掉软件再打开，之前录的东西还在；多台设备之间不会自动同步。
> 你怎么操作：不需要设置，第一次保存时自动建好。
> 代价：数据存在你自己电脑上，没有月费；换电脑要手动拷一次。
> 需要你定：要不要以后加多设备同步？默认先不加，加的话要联网和账号。

## Effect before name

State the user-visible effect first, then the name once, then keep using the name
consistently (record it in the project glossary after Gate 2). When a user's
question is phrased as a mechanism, answer the effect question behind it:

| Mechanism question | Question to answer instead |
| --- | --- |
| SQLite or Postgres? | 数据要不要多人同时改？ |
| Sync or async? | 点了按钮要立刻出结果，还是可以后台跑？ |
| Monolith or services? | 一个整体，还是要分块各自升级？ |
| Add a cache? | 第二次打开要更快，还是每次都看最新？ |
| TypeScript or JavaScript? | 改代码时要不要在打开之前就发现笔误？ |

Do not present a mechanism as an option axis unless the user asked for that
mechanism, and never make a non-developer choose an unfamiliar tool.

## Keep internal vocabulary internal

Gate, slice, ADR, reference, workflow phase names, file paths, IDs, and tool
names are for the agent. Say the user-relevant fact instead ("这一步先确认你想要的
效果", not "Gate 1").

## Uncertainty without hedging

Use exactly one of:

- verified — checked against an inspected source or an executed check;
- inferred — reasonable but unchecked;
- unverified — not yet known, and here is how it will be checked.

Avoid "可能/大概/应该没问题" as a substitute for a status. Never present planned
behavior as implemented.

## Let the user verify

For implementation delivery, provide a user-runnable acceptance script: steps,
expected result, and what to copy back if it fails. For subjective criteria, name
the review scenario and what the user will judge. Do not ask the user to run
tests the agent could run.

## Anti-patterns

- Architecture prose where three lines of effect would do.
- Options that differ by mechanism rather than by effect or cost.
- Asking the user to pick a default you can recommend yourself.
- Presenting internal concerns or unresolved agent questions as user decisions.
- False certainty, filler adjectives ("强大/无缝/简单"), or unexplained jargon.
- Switching language or register without reason.
