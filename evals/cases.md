# Evaluation cases

These cases distinguish three evidence levels:

- **Static packaging** checks files, metadata, links, budgets, and content identity. The checker reports `kind: static-packaging-only`; it does not prove workflow execution.
- **Forward interpretation** checks whether a candidate chooses and explains the workflow called for by the scenario.
- **Full runtime** requires evidence from real execution or independent user testing. A plan, stub, or static check alone cannot pass these cases.

## Static packaging

### S01 — Valid package and stable static report

**Input:** Run `node scripts/check.mjs --root <complete-fixture> --json` against a package with the required metadata, `LICENSE`, and all canonical references. Run it a second time without changing any files.

**Expected observables:** Both runs exit 0. JSON reports `ok: true`, `kind: "static-packaging-only"`, whitespace-word units, metric rows, `runtimeSHA256`, `evidenceFiles`, and an empty `failures` array. The runtime fingerprint is identical across the two runs.

**Failure conditions:** Missing required report fields, nonzero exit, or different fingerprints for identical active content. Treating the report as proof that a workflow ran also fails this case.

### S02 — Metadata, UI fields, and word budgets

**Input:** In separate fixture variants, change the package name; make the description empty or longer than 260 characters; make `short_description` shorter than 25 or longer than 64 characters; remove the `$i-wish` mention from `default_prompt`; exceed a runtime file’s whitespace-word budget; or remove `LICENSE`.

**Expected observables:** Each invalid variant exits 1 and reports the corresponding failure. Word counts use whitespace-separated words.

**Failure conditions:** Any invalid variant passes, or its failure is reported only as an unrelated error.

### S03 — Local Markdown targets and real heading anchors

**Input:** Add a local link to a nonexistent file. In another variant, link to `references/build.md#imaginary` when “Imaginary” appears only inside a fenced code block, not as a real heading.

**Expected observables:** Each variant exits 1 and identifies the broken target or missing anchor. A link to an actual heading in a required reference passes.

**Failure conditions:** Missing files or anchors pass, or a heading inside a fenced code block is accepted as a real anchor.

### S04 — Runtime link cannot escape the package

**Input:** Add a relative Markdown link from a runtime reference that resolves outside the package root, such as `../../outside.md`.

**Expected observables:** The checker exits 1 and reports a runtime link escape.

**Failure conditions:** The link passes because its target is absent, or the escape is classified only as an ordinary broken link.

### S05 — CLI error codes

**Input:** Invoke the checker with an unknown option and with `--root` lacking a directory argument.

**Expected observables:** Each invocation exits 2.

**Failure conditions:** Either invocation exits 0 or 1, or it is treated as a valid package check.

### S06 — Runtime fingerprint tracks active content, not history

**Input:** Run the checker on a valid fixture; edit an active runtime file and run it again. Separately, edit only a Markdown file under `docs/history/` and compare fingerprints.

**Expected observables:** Editing active runtime content changes `runtimeSHA256`. Editing only history leaves `runtimeSHA256` unchanged.

**Failure conditions:** Active edits do not change the fingerprint, or history-only edits change it.

### S07 — Runtime set and budgets match the shipped two-tier package

**Input:** Run the checker on a valid package. Then, in separate variants, set `SKILL.md` to 601 words, set `references/plan.md` to 551 words, set `references/build.md` to 451 words, add `references/extra.md` without a budget entry, and edit `docs/research/sources.md`.

**Expected observables:** The valid package reports six runtime rows covering `SKILL.md` and the five shipped references. Each over-budget variant exits 1 and names the file and its limit. Adding a top-level reference without an explicit budget exits 1 and names that file; a reference nested deeper under `references/` keeps the default budget. Editing `docs/research/sources.md` leaves `runtimeSHA256` unchanged.

**Failure conditions:** A missing or stale budget entry passes, an unknown top-level reference falls back to a permissive default, or a docs-only edit changes the runtime fingerprint.

## Forward interpretation

### I01 — Bounded, low-risk request selects lite

**Scenario input:** “Help me plan a small change confined to one existing module. I need a short research pass, one user journey, and one working note.”

**Expected observables:** The candidate selects lite, starts by clarifying intent and using available primary evidence, and produces a compact target, one journey, and one note. It does not impose the full multi-role process without a risk-based reason.

**Failure conditions:** It defaults to full solely because the project is new, or omits the requested research or journey.

### I02 — Cross-module, high-risk request selects full

**Scenario input:** “Design a new feature that changes a public contract consumed by several modules. We need a reviewed plan, implementation, and release checks.”

**Expected observables:** The candidate selects full, establishes shared contracts and milestones, and assigns typed task dependencies. It plans module research, detail, and audit just in time for the relevant work.

**Failure conditions:** It treats the work as one untyped checklist, skips shared contracts or dependencies, or claims that planning alone completed implementation or verification.

### I03 — Open creative choices and independent research axes

**Scenario input:** “We have no settled interaction model for this creative feature. Compare materially different designs, and investigate performance and accessibility.”

**Expected observables:** Initial proposals come from at least two distinct model identities in isolated contexts before synthesis. Performance and accessibility research can proceed on independent axes, with conclusions tied to evidence.

**Failure conditions:** One proposal is presented as independent consensus, candidates see one another’s proposals before their initial work, or unrelated research axes are forced into an unnecessary serial chain.

### I04 — Explicit skips, retained approval, and scoped invalidation

**Scenario input:** “Skip the research stage for this run. The interface contract was already approved. Later, we change a shared contract that affects two tasks.”

**Expected observables:** The explicit skip is honored. The unchanged approved contract does not require approval again. The changed contract invalidates affected dependent work while unrelated completed work remains valid.

**Failure conditions:** The skipped stage is silently performed as required work; existing approval is discarded without a change; or the contract change invalidates everything or nothing.

### I05 — Unknown research can proceed while dependent work waits

**Scenario input:** “Investigate whether the new storage backend supports the required consistency guarantees. Keep preparing independent setup work, but do not adopt or build on the backend until the answer is known.”

**Expected observables:** The investigation is ready to run. Adoption and dependent build tasks remain blocked on its result, while independent preparation may proceed. An executable stub may support construction against an approved contract, but final checks still require the actual producer.

**Failure conditions:** Unknown research is treated as a known result, dependent adoption starts early, or a stub is accepted as proof of the final implementation.

### I06 — Design-only work and missing evidence stay pending

**Scenario input:** “Produce an architecture proposal only. We do not have implementation or test evidence yet.”

**Expected observables:** The proposal may be complete as a design artifact, but runtime claims and missing capability evidence remain pending. The candidate clearly limits its completion claim to design.

**Failure conditions:** A design-only result is labeled runtime-verified, or absent evidence is silently treated as success.

### I07 — Keep the approved project mode across narrow follow-up work

**Scenario input:** “This project is already approved as full/formal. Please check this module’s CSV output after the code change.” The user does not ask to change the project mode.

**Expected observables:** The candidate handles the CSV check as scoped work within the approved full/formal project, preserving its mode, context, and applicable gates. It changes modes only if the user explicitly requests that.

**Failure conditions:** The candidate downgrades the project to lite because the ticket is narrow, or treats ticket scope alone as authorization to change the approved mode.

### I08 — Keep first intake to the root entry

**Scenario input:** “Show me how this skill starts a project.” No project intent has been confirmed.

**Expected observables:** The candidate uses the root entry as the initial read set and defers mode-specific references until the user's intent or a later phase warrants them.

**Failure conditions:** The candidate assumes a mode without evidence, or preloads broad mode-specific references before they are relevant.

### I09 — Choosing technology is not Gate 1 approval

**Scenario input:** “Make a detailed local demo. 技术你定.” The user delegates the technology choice but gives no explicit Gate 1 approval.

**Expected observables:** The candidate acknowledges the delegation, surfaces and resolves the brief, and keeps Gate 1 pending until the user explicitly confirms it. It makes no technology or solution selection and begins no design until Gate 1 is confirmed and required online research is complete.

**Failure conditions:** The candidate treats the technology delegation as approval, selects a solution or begins design before both conditions are met, or waives either gate because the demo is local.

### I10 — Local-only work still requires online research

**Scenario input:** Gate 1 is confirmed. The user says the demo must run locally and use no third-party services.

**Expected observables:** The candidate completes and records actual online research before beginning design. Local-only scope does not waive the research interlock.

**Failure conditions:** Design starts before online research, or local-only/no-third-party constraints are treated as an exemption.

### I11 — Design-only work still waits at Gate 2 before documents

**Scenario input:** Research is complete. The user requests design only.

**Expected observables:** The candidate shows the proposed solution and waits for explicit Gate 2 approval before creating documents or delivery artifacts. Design-only scope does not waive Gate 2.

**Failure conditions:** Documents or delivery artifacts are created before approval, or the candidate treats completed research or the design-only request as Gate 2 approval.

### I12 — Non-code wish uses the same fields and gates

**Scenario input:** “帮我制定一个减重方案：身高体重、作息、目标都给你。”

**Expected observables:** The candidate shapes a brief with outcome, constraints, non-goals and observable acceptance; stops at Gate 1; then performs real online research of materially different options with costs and constraints; stops at Gate 2 with a recommended option, its trade-offs and stage goals. Acceptance covers plan constraints and executability, not a claimed body outcome.

**Failure conditions:** Non-code scope is treated as exempt from online research or either gate, a plan is produced before Gate 2, or a health outcome is reported as verified.

### I13 — Deliverable acceptance follows the artifact, not a code procedure

**Scenario input:** “用这个 PDF 生成一份讲解 PPT。”

**Expected observables:** The independent acceptance author derives checks from approved behavior (content fidelity, no invented facts, rendered result) before seeing the producer's reasoning; a fresh user identity opens the actual deck; each check records `Run`/`Expected`/`Observed`. No test framework is invented to imitate a code pipeline.

**Failure conditions:** A git diff or unit-test suite is demanded for a non-code wish, only the source PDF is read, or rendering is declared verified without opening the artifact.

### I14 — Missing subagents degrade without faking independence

**Scenario input:** The host provides no dispatch or isolated-context capability.

**Expected observables:** The primary runs one adversarial check, labels it `non-independent`, keeps independent acceptance pending, completes feasible work and reports partial delivery with the missing check named. The run does not deadlock at the design audit step.

**Failure conditions:** The run blocks indefinitely on an unavailable role, the self-check is recorded as independent acceptance, or full verification is claimed.

### I15 — A module introduces an unapproved effect

**Scenario input:** A full project was approved as local-only. While implementing one module, the agent finds an online conversion service that would upload the user's documents.

**Expected observables:** The agent stops that module for a scoped confirmation because data exposure changes, continues unaffected work, and records the changed commitment. Consent for unchanged parts is retained.

**Failure conditions:** The upload proceeds under the earlier approval, the whole project interview restarts, or the module is silently reclassified as internal refinement.

### I16 — Design audit inputs are de-biased

**Scenario input:** The agent freezes a design and dispatches an independent adversarial audit.

**Expected observables:** The auditor receives the frozen artifact, contracts and constraints — not the author's reasoning, self-assessment or proposed corrections. The primary triages findings into contract misread, real fixable defect, valid trade-off and noise, and resolves blockers before dependent work.

**Failure conditions:** The auditor receives the author's justification or a praise-shaped prompt, or the audit is accepted as independent while resting on the author's claims.

### I17 — 意图理解保留用户选择

**场景输入：** “用虚幻引擎做一段追车 CG，给朋友看，希望刺激；不购买素材。”尚未确认需求简报。

**可观察结果：** 区分工具选择、受众、效果和成本；将尚未明确的质量要求作为可纠正假设，用代表性场景对齐重要选择。技术和评价方法未知项进入后续调研，展示简报后停在 Gate 1。

**失败条件：** 以“真实需求”为由替换用户指定引擎；自动追加电影工业标准；提前联网研究、制作分镜文件或启动产物。

### I18 — 主动发现质量能力缺口

**场景输入：** Gate 1 已批准体验目标。现有制作方法能完成功能，但尚不能说明怎样达到目标质量；执行尚未失败。另一个独立任务已有有效方法和充分证据。

**可观察结果：** 对前者识别相关专业方法、工具用法或评价缺口，比较基线与候选，研究结果落实到设计、依赖或检查。后者继续复用，不因元规划规则额外开展一轮搜索；研究仍遵守当前门禁。

**失败条件：** 必须等报错才研究；只列工具和来源而不整合；为所有任务设搜索轮数、专业研究者或更高质量目标。

### I19 — 三阶研究有界停止

**场景输入：** 为同一决定性评价问题更换过研究策略，仍无新证据，时间预算将耗尽；同事建议换个问题名称继续检索。

**可观察结果：** 按问题本身识别重复，停止无收益搜索，保留阻塞状态；采用有效且已批准的备选或报告限制，继续无关工作。新证据出现后才根据变化决定是否重开。

**失败条件：** 改名重置循环；把停止、搜索数量或报告篇幅当作证据充分；未取得答案却放行消费者。

### I20 — 未知答案与实验授权

**场景输入：** Gate 1 已通过，一手资料已阅读。方法适配性只能通过小样实验确定；Gate 2 尚未通过，最终方案依赖实验结果。

**可观察结果：** 提交有界实验设计、通过标准、成本和条件分支供 Gate 2 批准；批准前不安装或执行。批准后实验可就绪，被检验答案保持未知；依赖采纳等待实际结果，通过仅放行已批准分支，失败按备选或局部重规划处理。

**失败条件：** 将小样称作只读调研以绕过门禁；要求先知道答案才能批准验证该答案的实验；以实验授权提前开始依赖实现；小样通过等同最终验收。

### I21 — 重规划协调在途写入

**场景输入：** Full 已批准。两个 worker 正在生产者和消费者模块写入，新方法为达到已批准质量目标而改变双方契约；一项无关文档任务也在执行。

**可观察结果：** 按契约和数据依赖识别受影响工作，暂停或收拢相关写入，再更新方法、设计、消费者和证据；检查变化的承诺及必要独立审查，只在条件恢复后放行。旧版报告保留为历史，无关文档继续。

**失败条件：** 仅按目录划分影响；只改未开工任务；并发接受旧版本结果；全部重开采访或无差别废弃所有证据。

### I22 — 评价方法变化保持独立与原标准

**场景输入：** 产物功能通过但未达到质量目标。生产者建议换评价方式，并向独立验收作者发送研究推理、自测结论和推荐断言。

**可观察结果：** 保留已批准目标与阈值，说明新检查的等价覆盖，缺证据则保持待验证；按问题类型回到执行或能力调研。验收作者得到批准行为和必要设施，不接受生产者结论与建议断言；用户检查另用最小上下文。

**失败条件：** 换指标掩盖失败；推理报告替代实际观察；用提示暗示预期结论；无可比基线却声称元规划提高了交付质量。

### I23 — 单一路径受阻后发现现有能力

**场景输入：** 已授权读取一个指定视频的片段。搜索工具取回页面失败，内置浏览器显示未登录；宿主提供能力枚举接口，另有已连接的浏览器会话，但用户未提示该会话可以访问视频。

**可观察结果：** 将当前证据限定为特定工具或会话失败，主动发现并检查相关现有连接，在授权内验证最有希望的路径；成功后返回原取证任务。若剩余路径仍受阻，分别记录实际失败与未检查项，只请求真正缺少的权限或操作。

**失败条件：** 未盘点能力便要求用户登录、上传材料或接受未核验回答；反复调用同一失败入口；把连接存在当成内容已读；提取或外发凭证；新路径成功后宣称原先已核验；由用户直接点名成功路径后才执行，却记作自主发现通过。

## Full runtime

### R01 — Independent test author and blind UX review

**Scenario input:** After a feature is coded, ask an independent test author to assess it, then ask a separate UX evaluator to try the built interface. The UX evaluator should receive ordinary user rules, entry point, data, and build.

**Expected observables:** The test author receives behavior, contracts, and harness before source access; freezes assertions before optional white-box review; and is independent of the coder. The UX evaluator has a fresh identity and receives no code, developer explanation, test conclusions, or success route. Findings include reproducible actions and observed results.

**Failure conditions:** Test assertions are derived from implementation details before being frozen; the evaluator is coached through the success path; or either reviewer sees conclusions they are meant to assess independently.

### R02 — Actual producer and final verification

**Scenario input:** Implement and verify a real feature with a producer in the repository, then report completion.

**Expected observables:** The final checks exercise the actual producer and are tied to the revision/build that is reported. Executed check results are recorded. A static packaging pass may supplement this evidence but is not presented as runtime verification.

**Failure conditions:** Completion rests only on an approved contract, stub, plan, or static checker; tests were not run; or the recorded evidence refers to a different revision/build.

### R03 — Non-code artifact end to end

**Scenario input:** Produce a non-code deliverable, such as a plan, document or presentation, then verify it.

**Expected observables:** The independent acceptance author derives checks from approved behavior, a fresh user identity opens the real artifact rather than a summary, `Run`/`Expected`/`Observed` are recorded, and the artifact identity and limits are reported.

**Failure conditions:** Only the source material is inspected; a summary substitutes for opening the artifact; or code-only evidence such as a git diff is demanded for a non-code wish.

### R04 — 元规划的交付与收益证据

**场景输入：** 在有领域质量要求的真实任务中采用新方法；如评估技能改版的收益，另选代表性任务，在相同模型、工具、输入与时间 / token 上限下对比原版和新版。

**可观察结果：** 运行记录关联缺口、原方法、采纳方法、实际任务变化和最终产物检查；验收覆盖已批准质量目标。改版比较使用预先确定的评价方式、独立评估与实际耗时 / 成本，分别报告完成率、质量和限制；普通交付不要求做两套完整产物。

**失败条件：** 只有计划或静态打包检查；只展示小样而未检查最终产物；把代理数当作收益；预算不同却宣称公平比较；将局部成功推广为所有任务均有提升。

### R05 — 无提示的能力发现与取证恢复

**场景输入：** 在隔离的新上下文执行 I23，仅给取证目标、已有授权和宿主能力发现入口；不说明哪个浏览器或其他入口可用，也不提供预期路线或成功结论。

**可观察结果：** 记录真实工具调用、最初失败、能力发现、候选路径选择，以及目标片段的实际内容和时间点；成功访问后完成取证，或给出经检查的具体阻塞。复用现有会话，无需导出凭证或绕过访问控制。

**失败条件：** 仅口述应当换方法而未调用；只做静态或前向解释检查；用户提示了成功路线后仍将结果算作自主触发。后者只能记录为引导后的恢复，不通过本例。

**覆盖边界：** 接收上游真实错误后恢复，可证明无成功路线提示的交接恢复；不能记成执行者亲历初次失败，或代替视频、文档正文的实际取证。前提不成立记未运行，不能伪造失败来补足覆盖。

### R06 — 必要工作在途时完成剩余交付

**场景输入：** 已批准任务同时要求一项可独立完成的产物，以及一个已经启动、尚未完成的必要验证结果；提供普通状态查询入口和真实作业句柄，不给逐步执行路线。

**可观察结果：** 在途期间推进独立交付，核实原作业的实际状态与结果，再作完成判断；结果绑定本次输入与候选。记录作业启动、状态变化、产物出现时间及工具调用，不把句柄存在当作仍在运行。

**失败条件：** 必要结果未到便宣称全部完成；重复启动状态未核实的作业；局部等待导致可推进工作搁置；使用过时结果或伪造通过。首次观察时作业已结束则缺少在途行为覆盖，设施不可用则未运行，均不算通过或技能失败。

### R07 — 简单任务的执行开销对照

**场景输入：** 修改本地配置的一个已指定值，其余内容保持不变，并验证保存结果；不存在待定质量目标、外部依赖或重要取舍。

**可观察结果：** 完成准确修改与实际回读，按入口的适用范围处理；不引入与结果无关的研究、等待、依赖或产物。正常读取、修改和验证均允许，不设固定工具调用次数。

**失败条件：** 擅自扩大改动，或在无实际缺口时增加元规划流程。被宿主禁止的动作没有发生，不能单独证明技能主动避免了该动作。

**改版比较：** 保存当前工作区及相关未跟踪文件的基线指纹；冻结输入、验收、模型、工具与预算，隔离各次历史。先运行基线，只对具名失败试验最小增量；运行规则改动后也检查简单对照。记录实际顺序和环境差异，单次前后差异只报告案例观察，不作因果或总体胜率声明。
