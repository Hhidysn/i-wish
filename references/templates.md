# Templates

Defaults when the project has no convention. Use only the templates a task needs;
they are layouts, not mandatory artifacts. Write them in the user's language and
register (see [plain-language.md](plain-language.md)), keep one canonical copy,
fill every field (write "none" or "unknown" rather than omitting), and link
instead of duplicating.

## Question card (one interview round)

```text
第 N 轮 — <决策层>
1. <问题>  选项：A / B / C ｜ 推荐：B ｜ 选错的代价：<后果>
2. ...
回复"全部采用推荐"或按编号回答。
```

## Gate 1 brief

Field names are for the agent; render them in the user's words ("要做哪些功能"
rather than "能力族").

```text
结果：<用户会得到什么>
要做哪些功能、给谁用：<范围与受众>
约束：<平台、成本、隐私、时间>
验收标准与检查：<可观察结果 + 用户能做的检查>
非目标：<明确不做的>
我先按这些默认做（可以改）：<可逆细节>
需要你现在确认：<意图与材料性选择；有材料性未决不能过 Gate 1>
本轮交付类型：调研 / 方案 / 设计文档 / 实现 / 组合
哪些旧东西必须保留：<行为、数据、接口等；没有就写"无">
```

## Research conclusion

```text
决策与约束：<要满足什么>
候选与取舍：<复用 / 修复 / 替换 / 自研，及否决理由>
来源：<链接、查证日期、版本、支持的主张>
推荐与权衡：<结论 + 代价 + 义务>
事实状态：<已验证 / 推断 / 未验证>
首个决定性验证：<通过 / 失败条件，失败后要重开什么>
```

## Gate 2 recommendation

```text
用户可见结果：<效果、操作方式、第一次使用体验>
推荐：<方案 + 为什么>
复用与自研边界：<用了什么现成的，什么必须自写>
代价与义务：<钱、隐私、许可、维护>
风险与限制：<最大风险 + 无法消除的部分>
交付范围：<本轮做到哪、分步顺序>
验证计划：<怎么证明、谁来验>
```

## Completion report

```text
现在能做什么：<用户可用的结果>
自己验一遍：<步骤 -> 预期结果；失败时把什么发回给我>
没做到 / 未验证：<未完成的验收项 + 原因>
以后想改要注意：<可逆性、代价、会牵动什么>
需要你做什么：<账号、付费、设备、判断>
```

## ADR

```markdown
# <Decision title>

Date: YYYY-MM-DD
Status: Proposed | Accepted | Superseded by NNNN

## Context
## Decision
## Consequences and validation
```

Optional fields when they help: user-visible impact; conditions for revisiting;
what this supersedes.

## Feature or task note

```text
当前范围：<目标 + 非目标>
关联：<决策记录、调研笔记、需求>
分几步、每步怎么验：<步骤 -> 验收 -> 证据状态>
验证证据：<执行过的检查 + 结果；未执行的明确标注>
未决项：<待办与负责人>
```

## Research note

```text
主题 | 查证日期 | 版本
来源与支持的主张：<链接 + 主张>
推荐 | 未决假设 | 重新调研的触发条件
```

## Self-check before showing or recording

Before presenting any brief, recommendation, design, report, or record, look at
it with fresh eyes:

- placeholder or TODO text that hides an unfinished decision;
- sections that contradict each other;
- scope that needs decomposition first;
- any requirement that could be read two ways.

Fix issues inline before showing the artifact; do not leave the check as a note.
