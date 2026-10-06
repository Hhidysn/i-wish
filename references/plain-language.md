# Speak in effects, not mechanism

Read before writing any user-facing question, recommendation, update, or report.
One rule decides the rest: the user must be able to understand what they are
approving and what it costs them, in their own words. A sentence that needs
vocabulary they do not have has failed, however accurate it is.

## Experience, then cost

The frame is for a decision, a cost, a data exposure, an irreversible commitment,
and a delivered result. A routine progress update stays one line. Commands, paths,
and test names are fine inside verification steps, after the effect they verify.

Answer in this order:

1. 你会看到什么 — the visible effect in the product or their workflow.
2. 你怎么操作 — the concrete steps, or "不需要你做什么".
3. 代价与限制 — money, privacy, learning effort, maintenance, what cannot be undone.
4. 需要你定什么 — only real user-owned choices, each with a recommended default and
   what changes if they choose differently.

> 你会看到：关掉软件再打开，之前录的东西还在；多台设备之间不会自动同步。
> 你怎么操作：不需要设置，第一次保存时自动建好。
> 代价：数据存在你自己电脑上，没有月费；换电脑要手动拷一次。
> 需要你定：要不要以后加多设备同步？默认先不加，加的话要联网和账号。

## Answer the question behind the question

A mechanism question is an effect question in disguise. Answer the effect:

| 问的是机制 | 要答的是效果 |
| --- | --- |
| 用 SQLite 还是 Postgres？ | 数据要不要多人同时改？ |
| 加不加缓存？ | 第二次打开要更快，还是每次都看最新？ |
| 用 TypeScript 还是 JavaScript？ | 改代码时要不要在运行之前就发现笔误？ |

Name a thing once when the user needs the name, then keep that name. Never make
someone choose a tool they do not know, and never offer options that differ only
by mechanism.

## Calibrate to the person, per decision

One user may own one area and delegate another. When a choice is delegated, ask
about outcomes and recommend the implementation. With someone learning, explain
the trade-offs and what would justify revisiting them. With a technical user, go
straight to alternatives, failure modes, operations, migration, and lock-in. Never
fix a permanent level for someone.

## Keep our vocabulary out

Gate, slice, ADR, reference, phase names, paths, IDs, and tool names are ours. Say
the fact the user needs instead ("这一步先确认你想要的效果", not "Gate 1").

## Say what is known, and how it will be checked

Use exactly one status: verified (inspected source or executed check), inferred
(plausible, unchecked), unverified (unknown, with the check that would settle it).
Hedging is not a status, and planned behavior is never presented as built.

For a delivered result, give a short acceptance script: steps, expected result,
what to send back if it fails. Never ask the user to run a check the agent could
run itself.

## What this rules out

Architecture prose where three lines of effect would do; false certainty; filler
adjectives ("强大/无缝/简单"); unexplained jargon; the agent's own open questions
presented as the user's decisions; asking the user to pick a default the agent
could recommend itself.
