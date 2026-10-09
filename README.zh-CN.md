# I Wish

[English](README.md) | [简体中文](README.zh-CN.md)

许愿术，是凡人能掌握的最强大法术。
你只需要大声说出愿望，世界便为其赋予形状。

把尚未定案的项目、模块或重大重构，变成明确需求、有依据的方案、
经过审计的设计和独立验证的交付。保留一个 `$i-wish` 入口，内含两套流程。

| 模式 | 适用 | 规划深度 |
| --- | --- | --- |
| lite 轻量 | 有界、可逆的 demo | 短确认卡、定向调研、一条完整体验 |
| full 正式 | 模块耦合、分阶段交付或重要承诺 | 共享契约、模块细化、任务依赖、阶段验收 |

调用 `$i-wish`，描述结果和约束。可以说“使用轻量模式”或“使用正式模式”；
未指定时自动判断并说明理由。按风险补足必要控制；普通小修和已定案的机械实现
走日常流程。

两版默认使用子代理：方案由独立代理对抗审计，编码后独立作者编写验收测试，
另一新上下文模拟普通用户体验。创意未定时由不同模型独立提案，真实研究问题
按能力并行。正式版还包含模块级调研/设计/审计、任务就绪和分开的需求/规范审查。
轻量、正式和纯设计任务都必须经过两道门禁：确认需求后才能联网调研，
调研完成后才能设计方案；用户明确批准方案和交付范围后才能写设计文件或代码。
两道门禁都须停下等待；“技术你定”、需求清楚、demo 或可逆文档都不能豁免。
沿用同范围的实际批准；用户明确跳过指定阶段只作用于其指定范围。
缺少必要角色或证据时报告部分完成。

## 安装与导航

复制或链接本目录到宿主技能目录：Codex `~/.agents/skills/i-wish`
（项目内 `.agents/skills/i-wish`）；Claude Code `~/.claude/skills/i-wish`；
OpenCode `~/.config/opencode/skills/i-wish` 或 `.opencode/skills/i-wish`。
按宿主支持使用 `$i-wish` 或 `/i-wish`。保留一份源目录，避免副本漂移。
技能规定行为；宿主提供真实派发、上下文隔离、模型路由和权限。

- [入口](SKILL.md)、[轻量流程](references/lite.md)、[正式流程](references/full.md)
- [代理职责](references/agents.md)、[独立验证](references/verification.md)
- [当前流程说明](docs/design/workflow.md)、[调研取舍](docs/research/workflow-comparison.md)
- 开发检查：`node scripts/check.mjs`；[行为案例](evals/cases.md)

[MIT](LICENSE) © 2026 Hhidysn
