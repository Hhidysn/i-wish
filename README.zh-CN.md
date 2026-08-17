# I Wish

[English](README.md) | 简体中文

把"我想要一个……"变成一个用户已经理解、批准并亲眼看到能跑起来的数字产品——先调研后设计，先复用后自研，两次确认，然后构建并验证。

I Wish 是一个可移植的 [Agent Skill](https://agentskills.io/specification)。它不是运行时库、插件或编排器。宿主 agent 执行工作流；I Wish 只负责阶段契约。

## 何时使用

当重要的产品或技术边界尚未确定或被委托给 agent 时使用 I Wish，包括"我想要做一个……"、"从零做一个……"、"build X from scratch"、"方案还没定"这类请求。

**不要**用于孤立的修复、解释、小改动或已完全定案的工作——一个不含实质构建意图的裸"我想要"或"I want"是不够的。完整的激活边界见 [`evals/cases.md`](evals/cases.md)。

## 它做什么

1. **理解愿望** —— 分批的通俗语言访谈；非技术用户永远不需要挑选引擎、包或架构。
2. **Gate 1：确认意图** —— 简短摘要；任何公开调研开始前必须显式确认。
3. **先调研后设计** —— 优先当前资料、官方/标准路线，其次是维护中的开源，再到商业方案，最后才是自研。既有代码按验收标准分类为 `reuse` / `repair` / `replace`。
4. **Gate 2：确认方案** —— 推荐、备选、复用/自研边界、许可与成本义务、风险、首个实现切片。
5. **构建最小完整产品** —— 垂直切片，先跑通最小的端到端切片，遵守项目既有约定。
6. **证明结果** —— 实际运行产品并逐条检验可观察的验收标准；静态检查永远不能证明运行时行为。

## 目录结构

```text
i-wish/
├── SKILL.md                  # 核心阶段契约（运行时加载）
├── agents/
│   └── openai.yaml           # 可选的 Codex UI 适配器
├── references/               # 仅在对应阶段运行时按需加载
│   ├── interview.md
│   ├── research.md
│   ├── game-projects.md
│   └── host-adapters.md
└── evals/
    └── cases.md              # 仅供开发；运行时文件从不链接它
```

运行时引用按需加载；`evals/` 仅用于开发。

## 安装

I Wish 与宿主无关。2026-08-08 验证的发现位置：

| 宿主 | 用户级 | 项目级 |
| --- | --- | --- |
| Codex | `~/.agents/skills/i-wish` | `.agents/skills/i-wish` |
| Claude Code | `~/.claude/skills/i-wish` | `.claude/skills/i-wish` |
| OpenCode | `~/.agents/skills/i-wish` 或 `~/.config/opencode/skills/i-wish` | `.agents/skills/i-wish` 或 `.opencode/skills/i-wish` |

在个人机器上，保留一份源码检出，通过链接暴露到各宿主的位置，而不是维护多份分叉副本。创建链接前先检查是否已存在真实目录，绝不自动删除已有目录。

### 快速开始

```bash
git clone <this repo> ~/.agents/skills/i-wish
# 按需链接到其他宿主，例如 Claude Code：
#   mklink /D "%USERPROFILE%\.claude\skills\i-wish" "%USERPROFILE%\.agents\skills\i-wish"   (Windows)
#   ln -s ~/.agents/skills/i-wish ~/.claude/skills/i-wish                                  (macOS/Linux)
```

显式调用是唯一跨宿主的确定性触发方式。隐式激活是尽力而为的，依赖各宿主基于 description 的路由；详见 [`references/host-adapters.md`](references/host-adapters.md)。

## 示例

> 我想要从零做一个合作塔防游戏，细节你推荐

I Wish 将会：

1. 用几个通俗的分批问题询问期望的体验、重复游玩的核心循环、受众和可见的成功标志——绝不会问"用哪个引擎？"。
2. 总结目标、非目标、约束和验收标准；等待 `确认需求`（或 `confirm intent`）。
3. 调研当前可复用的引擎、插件和素材；对既有原型做分类；给出带权衡的推荐；等待 `采用推荐方案，开始实现`（或 `approve and build`）。
4. 构建最小的完整端到端切片，然后通过实际运行游戏、走完游玩循环来验证。

## 许可

[MIT](LICENSE) © 2026 Hhidysn
