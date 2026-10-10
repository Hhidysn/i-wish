# I Wish

[English](README.md) | [简体中文](README.zh-CN.md)

许愿术，是凡人能掌握的最强大法术。
你只需要大声说出愿望，世界便为其赋予形状。

把尚未定案的愿望——demo、模块改动、文档、媒体作品、方案或配置——
变成明确结果、有依据的选择、经过审计的设计和独立验证的交付。
一个可安装技能，两套流程。

| 模式 | 适用 | 规划深度 |
| --- | --- | --- |
| lite 轻量 | 一个有界、可逆的旅程或产物 | 短确认卡、定向调研、一个有用的结果 |
| full 正式 | 模块耦合、分阶段交付或重要承诺 | 共享契约、模块细化、任务依赖、阶段验收目标 |

调用 `$i-wish`，描述结果和约束。可以说“使用轻量模式”或“使用正式模式”；
未指定时自动判断并说明理由。按风险补足必要控制。普通小修和已定案的机械实现
走日常流程。

两版默认使用子代理：方案由独立子代理对抗审计，产物形成后由独立作者编写验收，
另一新上下文以用户身份检查最终结果。创意未定时由不同模型独立提案；
真实研究问题按能力并行。正式版另含模块级渐进设计、带阶段验收目标的依赖图，
以及分开的需求/规范审查。完全没有子代理时，主代理自己做一次对抗性检查，
标注 `non-independent` 并报告部分交付。

轻量、正式和纯设计任务都必须经过两道门禁，且都须停下等待：
先确认需求，再完成真实联网调研，然后批准方案、任务拆分与阶段目标，
之后才能写设计文件或产物。需求清楚、委托决策、demo 或可逆都不能豁免；
用户明确跳过指定阶段只作用于该范围。沿用同范围的实际批准。

## 安装与导航

把本目录**链接**到宿主技能目录，只保留一份源，不要复制：
Codex `~/.agents/skills/i-wish`（项目内 `.agents/skills/i-wish`）；
Claude Code `~/.claude/skills/i-wish`；
OpenCode `~/.config/opencode/skills/i-wish` 或 `.opencode/skills/i-wish`。
按宿主支持使用 `$i-wish` 或 `/i-wish`。
技能规定行为；宿主提供真实派发、上下文隔离、模型路由和权限。

Windows 下 `mklink /J` 无需管理员即可建立可用的目录联接（Junction）；
符号链接需要管理员权限或开发者模式。

- [入口](SKILL.md)、[轻量流程](references/lite.md)、[正式流程](references/full.md)
- [代理职责](references/agents.md)、[调研](references/research.md)、
  [独立验证](references/verification.md)、[记录](references/records.md)
- [当前流程说明](docs/design/workflow.md)、
  [融合来源表](docs/research/sources.md)、
  [早期对比](docs/research/workflow-comparison.md)
- 开发检查：`node scripts/check.mjs`、`node --test evals/check.test.mjs`；
  [行为案例](evals/cases.md)

[MIT](LICENSE) © 2026 Hhidysn
