# 编排工作流取舍

查证日期：2026-10-09。仅核查文档机制；未安装或运行这些框架，未测量开发速度或缺陷率。

## 本地参考

对照当前仓库与用户提供的 `vibecodingWorkflow`、`i-wish-tmp`。
前者拆成两个可独立安装的技能；后者保留一个入口、两种模式。
两者都有渐进模块设计、独立角色和阶段验证。当前仓库缺少模式路由、
任务就绪规则、独立测试作者和最小上下文体验者。

旧入口及参考的精确计数、后续缩减量由 `node scripts/check.mjs` 重算；
空白分隔词数不是模型 token 数，也不能证明耗时改善。

## 已检查的一手来源

| 来源 | 核实机制 | 采用与限制 |
| --- | --- | --- |
| [Matt：to-spec](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-spec/SKILL.md) | 明确需求、接口和外部行为测试入口 | 需求与可实施设计分开；不继承默认发布至任务平台的动作 |
| [Matt：to-tickets](https://github.com/mattpocock/skills/blob/main/skills/engineering/to-tickets/SKILL.md) | 可演示的纵向任务、阻塞边、单个新上下文可完成 | 任务依赖和验证条件；宽范围机械迁移允许分步兼容演进 |
| [Matt：wayfinder](https://github.com/mattpocock/skills/blob/main/skills/engineering/wayfinder/SKILL.md) | 决策地图、尚未展开事项、索引引用唯一事实源 | 未知项成为研究/决策任务；不把未知答案当作编码前提已满足 |
| [Matt：code-review](https://github.com/mattpocock/skills/blob/main/skills/engineering/code-review/SKILL.md) | 固定变更范围，独立需求与规范审查 | 正式版保留两个上下文及两个结论；轻量版可合并调用，结论仍分开 |
| [Superpowers：子代理开发](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md) | 每个任务的新上下文、最小输入包、编码后的审查 | 采用上下文边界；实现者自测不能充当独立测试编写 |
| [Trellis](https://github.com/mindfold-ai/Trellis) | 任务记录、角色上下文清单、项目规范与记忆 | 采用按角色准备材料和恢复记录的思想；不导入其代码、hooks 或目录体系。页面标注 AGPL-3.0 |
| [BMAD：规划路径](https://docs.bmad-method.org/plan/choose-a-planning-path/) | 按意图、规模、风险选择规划深度，按需 PRD，多任务共享边界 | 轻重分流、远期细节延后；不照搬固定会话数或文档套装 |
| [BMAD：完成后测试](https://docs.bmad-method.org/build/test-completed-work/) | 新聊天中生成 API/E2E 测试，测试生成、代码审查、人工体验分开 | 后置独立测试；本技能先给需求和契约，避免从已有代码反推期望 |
| [GSD：阶段循环](https://github.com/open-gsd/gsd-core/blob/main/docs/explanation/the-phase-loop.md) | 阶段内研究、规划、计划检查，依赖波次，阶段覆盖验证 | 按模块细化与阶段验收；不继承固定 token 容量、提交或发布动作 |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | 变更材料、任务执行、完成归档与规格更新 | 维护当前事实和历史；不引入其运行时 |
| [六阶段文章](https://czm15053.github.io/ai-workflow-six-stages/) | 每阶段的问题、材料和出口条件；小任务按需使用 | 作为遗漏检查框架；关于其他工具的判断回到其一手来源 |

以上 GitHub 内容检查的是访问当日 `main`，未取得所有来源的固定提交。
它们是方法参考，不是被集成的依赖。未复制上游指令、源码或资产；
不据页面许可标识推断任何额外复用权利。

名称核对：Matt 当前是 `to-tickets`；Superpowers 是 `obra/superpowers`，
与 Trellis 独立。

## 调研执行与证据限制

- 主代理直接搜索并打开上述关键一手页面，复核决策驱动主张。
- DPF 首次请求在发送前因不支持执行超时参数被拒绝。
  新任务 `aed2c41a-bfaf-4faf-a6e2-994ffc360dcd` 返回成功，模型报告匹配；
  但全部正文抓取失败，报告只得到搜索线索，且含独立测试的错误推断。
  **不计为完成研究，不采纳其未核实主张。**
- Gemini 补充任务 `0ceb1ce2-c34e-43ee-93c8-79d2f5737d14` 返回成功，
  模型报告匹配，诊断无工具错误；读取 BMAD 两篇文档与 GSD 阶段循环。
  关键主张由主代理再打开原文核查。报告中的本机缓存链接不作为公开引用；
  其 GSD 抓取截断由主代理取得完整正文补齐。
- Luna 只读比对本地参考，Astra 独立设计，Sol 对抗审查；均不修改文件。

验证边界：静态检查证明包装与链接；新上下文探针证明规则解释。
实际跨宿主派发、完整产品开发、浏览器体验与效率改善需要另行实测。
