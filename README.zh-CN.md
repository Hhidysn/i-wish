# I Wish

[English](README.md) | [简体中文](README.zh-CN.md)

许愿术，是凡人能掌握的最强大法术。
你只需要大声说出愿望，世界便为其赋予形状。

将实质性的产品、功能或子系统愿望转化为明确的成功标准、有证据的方案和经过验证的结果。产品、架构或复用选择仍未确定或已委托给 AI 时适用，即使期望行为已经清楚。详见 [SKILL.md](SKILL.md)。

使用 `$i-wish` 并描述期望结果和已知约束。流程先向你提问澄清并确认需求，再实际联网搜索和查阅一手来源，随后提交推荐方案供你确认。确认方案后才写设计文档或实现代码，并验证交付结果、按项目规范沉淀记录。

默认强制两次确认及联网调研，纯设计任务同样适用。“技术你定”不代表跳过门禁。相同阶段已有明确确认时沿用；用户明确要求改变流程时遵从该指令。这些是 agent 行为规则，不是工具层面的强制拦截。

运行时指引包括[需求澄清](references/shaping.md)、[调研](references/research.md)、[交付验证](references/delivery.md)、[文档沉淀](references/documentation.md)和[游戏专项](references/game-projects.md)。完整框架和大型替换先按[大型系统专项](references/large-systems.md)确认交付与兼容边界、覆盖整体能力，再拆切片；只读取适用的参考。安装及适配器行为见[主机集成说明](references/host-adapters.md)，开发检查见[行为案例](evals/cases.md)，流程取舍见[决策记录](docs/decisions/0001-confirm-before-design.md)。独立副本和其他主机安装不会自动同步。

[MIT](LICENSE) © 2026 Hhidysn
