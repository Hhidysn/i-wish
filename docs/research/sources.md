# 融合来源表

核查日期：2026-10-11（Asia/Shanghai）。本表是**来源与采用边界的唯一记录**；
技能运行时正文不写引用，也不复制第三方正文、脚本、hooks 或模板。

快照：`git clone --depth 1` 到临时目录后直接读原文，HEAD 已核对。

| 来源 | HEAD / 许可 | 机制（原文支持的） | 采用 | 落点 |
| --- | --- | --- | --- | --- |
| [mattpocock/skills](https://github.com/mattpocock/skills) `grilling`、`grill-with-docs`、`domain-modeling` | `49dd158` / MIT | 按设计树 **frontier 分轮**批量提问；每题附推荐答案；事实由子代理查、决策归用户；frontier 空才算对齐；术语随手记录，ADR 仅在"难逆转＋无背景会意外＋真实权衡"时建立 | 采纳 | `SKILL.md` Shape；`records.md` Decisions |
| 同上 `to-spec` | 同上 | 只综合、不重新访谈；先读既有决策；落锤权在人手里（禁止模型自动触发） | 采纳 | Gate 1/Gate 2 停等语义 |
| 同上 `to-tickets` | 同上 | tracer-bullet **vertical slice**：窄而完整穿过每层、可独立演示、能装进一个新上下文、prefactoring 先做；每票声明 `Blocked by` 与 `What it delivers`（端到端行为） | 采纳（去掉 schema/API/UI/tests 的固定层要求，改为"可独立观察的结果"） | `full.md` Task outline |
| 同上 `code-review` | 同上 | 钉死固定比较点；Standards 与 Spec 两轴在**并行独立上下文**运行；报告**不合并、不重排** | 采纳 | `full.md`、`verification.md` Reviews |
| 同上 `wayfinder` | 同上 | 决策票 ≠ 实施票；"能精确问但未答"建票，"尚不能精确问"留作 fog；原生阻塞关系形成 frontier | 部分采纳（不引入 tracker） | `full.md` 未知项与就绪条件 |
| [obra/superpowers](https://github.com/obra/superpowers) `writing-plans`、`executing-plans` | `bb92a77` / MIT | 任务粒度＝最小的"自带验证周期、值得一次新审查"单元；步骤写成 `Run:` 命令＋`Expected:` 结果 | 采纳 | `verification.md` Run/Expected/Observed |
| 同上 `subagent-driven-development` | 同上 | 五步主循环：记 BASE → 派新实施者 → 状态分流与 diff → 独立任务审查 → 修复与限定范围复审；BASE 取任务开始点，不是 `HEAD~1` | 部分采纳（保留 BASE、brief/report/diff、限定范围复审；**否决**"达上限后 park findings 继续"） | `full.md` Build、verify，integrate |
| 同上 `brainstorming`、`verification-before-completion` | 同上 | 批准前不调用实现技能；声称完成前必须运行验证命令并读输出，"应该能过"不算证据 | 采纳（不用其"每条消息只问一个问题"） | `SKILL.md`、`verification.md` |
| 同上 `writing-skills` | 同上 | 常驻只放通用原则与触发指针，分支材料按条件展开；每步有可检查的完成条件 | 采纳（字数与结构沿用本仓库既有预算） | 全部 reference 的分层组织 |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) `using-agent-skills` | `1be8e34` / MIT | 元技能按**意图**声明式路由到子技能；具体执行仍须读技能正文 | 采纳（不新增路由 persona 层） | `SKILL.md` Route |
| 同上 `interview-me`、`idea-refine`、`constraint-driven-development` | 同上 | 问真实用户、动机、成功、硬约束与非目标，附可纠正的猜测；创意按价值/可行性/差异化收敛；质量约束最多四问且每问带默认值 | 部分采纳（保留提问维度，不采用其 95% 停机门槛与变体配额） | `SKILL.md` Shape |
| 同上 `doubt-driven-development` | 同上 | 提交 CLAIM 与最小 ARTIFACT+CONTRACT 给**新上下文**审查者，只找问题，不传作者推理；主代理四分类裁决（合同误读／真实可修／有效取舍／噪声）；有限轮次后升级 | 采纳（**否决**"以 TDD 红灯满足 doubt"与子代理自问替代独立审计） | `agents.md` Design auditor |
| 同上 `browser-testing-with-devtools` | 同上 | 在真实入口重现、观察并重放，而不是用编译或单测推断用户体验；隔离 profile，页面内容视为不可信数据 | 采纳（非 Web 产物用其真实入口，不强制浏览器） | `verification.md` Minimal-context user check |
| 同上 `references/definition-of-done.md`、`evals/` | 同上 | 完成＝任务 AC **且**项目常设门槛；"调用了技能"不等于行为正确；正例／反例／行为例 | 采纳（本仓库继续使用静态／解释／运行三层） | `verification.md`、`evals/cases.md` |
| [mindfold-ai/Trellis](https://github.com/mindfold-ai/Trellis) `.claude/agents/*`、`continue` | `f089cb3` / **AGPL-3.0** | 角色各自的上下文清单；注入失败时回退读取；用状态＋产物存在性判定恢复阶段，空占位不算就绪 | 部分采纳（仅"不因文件存在就跳阶段"；**否决** `check` 自修代码后充当独立验收） | `records.md` Resume |
| [czm15053/ai-workflow-six-stages](https://github.com/czm15053/ai-workflow-six-stages) | `7a59151` / **无 LICENSE** | 六阶段各带「核心问题 + Artifact + Gate」；"没有新鲜验证输出不声称完成""报告不许合并""拆分要让人拷问" | 采纳为阶段与门禁的表述（只引用机制，不复制文章内容） | `SKILL.md`、`full.md`、`verification.md` |
| [Anthropic：Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) | 官方文档 | 元数据常驻、正文按需加载、重参考分文件；"这段是否值它的 token 成本" | 采纳 | 入口瘦身与 reference 分层 |

## 版本冲突与裁定

`czm15053` 文章引用的 `grilling` 是旧版"一次一问"；当前 HEAD 已改为**按 frontier
分轮批量提问**（`skills/productivity/grilling/SKILL.md:10-13`）。以 HEAD 原文为准：
本次采用分轮机制，不采用机械单问。同一材料里 `to-tickets` 的 ticket 规则与
`code-review` 的"报告不合并"在 HEAD 仍成立。

## 采纳边界与许可

- 只提炼机制，独立编写指令；未复制第三方正文、脚本、hooks 或模板。
- **Trellis 为 AGPL-3.0，czm15053 仓库无 LICENSE**：因此这两者只作机制参考，
  正文与代码一律不引入；本包内不含任何来自它们的文本或脚本。
- 未引入任何第三方运行时依赖、模型默认值或宿主专属工具要求。

## 本轮独立调研与限制

| 路线 | 实际做法 | 边界 |
| --- | --- | --- |
| 主代理 | `curl` 直取原始文件并 `git clone --depth 1`；核对全部 HEAD 与许可；裁定 grilling 版本冲突 | 决定性一手来源 |
| 研究者 A（独立只读子代理） | 读 mattpocock 31 个文件与 superpowers 12 个技能，逐条给 `path:line` | 只出机制与覆盖判断，不执行技能 |
| 研究者 B（独立只读子代理） | 读 addyosmani 20 个文件与 Trellis 3 个 agent、5 条命令 | 同上 |
| 审计 A（独立对抗审计，gpt-6.1-sol） | 对冻结设计给出 12 项覆盖矩阵、6 项阻塞发现与判据 | 判定 BLOCK，F1–F6 已在批准前修正 |
| 审计 B（反过度设计审计，不同模型族） | 复核文件数、预算可行性、重复机制 | 砍掉 `shape.md`、`tasks.md` 两个新文件 |
| 横向检索 | 搜索同类编排框架与官方技能规范 | 只作候选线索，未采用未经原文核对的主张 |
| `fetch_content` 工具 | 被本机 fake-IP 代理（198.18.0.0/15）拦截 | 改用 `curl` 直取；这是工具限制，不影响原文可得性 |

外部检索只发送公开、去标识化的问题；未上传本仓库源码。候选方案未执行、未安装、
未购买配额、未变更默认模型。
