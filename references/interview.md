# Interview and intent confirmation

Use this reference only during Phase 1 and Gate 1.

## Contents

- [Interview objective](#interview-objective)
- [Logical rounds](#logical-rounds)
- [Question format](#question-format)
- [Transport rules](#transport-rules)
- [Decision layers](#decision-layers)
- [Handling uncertainty](#handling-uncertainty)
- [Exit conditions](#exit-conditions)
- [Intent specification](#intent-specification)
- [Gate 1 presentation](#gate-1-presentation)
- [Examples](#examples)

## Interview objective

Discover the smallest coherent product the user actually wants. Ask about
observable results and user-owned trade-offs. Discover technical facts locally
or through post-Gate-1 research instead of making the user guess.

Prefer questions about:

- player/user experience;
- principal job or core loop;
- audience and target platform;
- input, visual, content, networking, privacy, and performance expectations;
- budget, schedule, distribution, and licensing constraints;
- explicit non-goals;
- measurable acceptance criteria.

Do not ask the user to select an algorithm, architecture, engine plugin,
database, renderer, or package before research. If a technology choice is truly
user-owned, first translate its visible consequence and recommend one option.

## Logical rounds

Ask three to six questions from one decision layer in a logical round. Keep all
questions independent: no answer in the batch may be required to understand a
later question.

Use this order when applicable:

1. Product soul: desired experience, core job/loop, audience, success.
2. Scope boundary: must-have slice, non-goals, content volume, failure behavior.
3. Operating context: platforms, input, offline/online, privacy, distribution.
4. Quality and constraints: art/audio direction, performance, accessibility,
   budget, schedule, licensing.
5. Acceptance: observable scenarios, measurements, and completion evidence.

Do not mix a dependent question into the same round. For example, ask whether
multiplayer is required before asking whether players need drop-in reconnection.
In the first product-soul round, ask only desired feeling, the core repeated
action/job, audience, and one non-numeric visible success signal. Do not let a
scope or solution choice masquerade as experience. Do not ask about session or
match duration, level/run structure, content or feature counts, progression or
replay systems, platform, water/world scale, visual fidelity, performance,
budget, detailed scope, or numeric acceptance; save them for later layers even
when they seem important to the product.

Before sending the first round, internally tag each question as exactly one of
`feeling`, `repeated-action`, `audience`, or `success-signal`. Rewrite any
question or option whose alternatives mainly choose quantity, duration,
realism/fidelity, simulation accuracy, system footprint, performance cost,
platform, or implementation route. A constraint already stated by the user may
be recorded without turning it into a first-round trade-off.

For simulation, rendering, AI, networking, and other technical-subsystem
wishes, treat the subsystem as a product feature. Ask what role it plays for the
player/user, what they repeatedly do with it, who it serves, and which plain
cause-and-effect moment proves the promise. Never use “realistic versus
beautiful versus accurate”, “small versus large”, or an equivalent quality or
scale axis in this round. Use only three questions if a fourth would cross a
layer.

Before sending, lint the complete first-round draft. If any question, option,
recommendation, or consequence uses numbers/units or chooses scope, size,
duration, content count, realism, fidelity, accuracy, visual quality,
simulation precision, performance, hardware, platform, budget, algorithm,
package, or architecture, discard and rewrite the whole round. Facts already
stated by the user may be repeated neutrally in the preamble/checkpoint, never
as a first-round choice axis.

## Question format

Give every question:

1. a short stable ID such as `Q1`;
2. two or three mutually exclusive choices where possible;
3. one recommended choice marked `（推荐）`;
4. a plain-language consequence for every choice;
5. one sentence describing what the recommendation feels like to the user;
6. a free-form answer path when none fits.

End the round with:

> 可回复 `1A 2A 3B`，也可以回复 `全部采用推荐`。不确定的题可以写
> `不知道`，我会采用最可逆的推荐并把它记录为假设。

Never hide a high-impact trade-off inside a recommended default. Call out
ongoing cost, public data, user accounts, irreversible storage, external
services, content-license obligations, or platform limitations directly.

## Transport rules

Treat three to six questions as one logical decision layer, not necessarily one
tool call.

When structured `request_user_input` is available:

- use it only in Plan mode;
- send no more than three questions per call;
- use at most two independent sub-batches for the same layer;
- put the recommended option first;
- let `全部采用推荐` accept the rest of the layer when the interface permits;
- do not use structured input for a Gate unless its exact one-time request ID
  and write authority can be represented unambiguously.

When structured input is unavailable, send one numbered Markdown form with the
whole three-to-six-question round. Do not simulate unavailable UI affordances.

## Decision layers

### Product soul

Ask only what establishes a coherent promise:

- What should the player/user be able to accomplish?
- What moment or repeated loop should feel satisfying?
- Who is this for?
- What would make the result obviously successful?

### Scope boundary

Separate first playable/usable slice from later possibilities:

- Which one journey must work end to end?
- What content count is enough for the first version?
- What must explicitly not be built?
- Is local single-user behavior sufficient initially?
- What failure or edge case would make the product unusable?

### Operating context

Ask user-owned deployment facts:

- target desktop/mobile/web/console platforms;
- keyboard, controller, touch, accessibility, or device requirements;
- offline, local network, online service, or account expectations;
- whether personal/customer data exists;
- intended private use, itch/Steam/store release, internal deployment, or web
  publishing.

### Quality and constraints

Ask only constraints that change candidate suitability:

- visual and audio direction;
- target hardware and performance floor;
- schedule and spending ceiling;
- commercial-use and redistribution needs;
- maintainability expectations;
- supported languages and accessibility basics.

### Acceptance

Turn wishes into scenarios:

- `Given` starting state;
- `When` user action occurs;
- `Then` visible outcome and failure behavior;
- measurement/tolerance when applicable;
- required evidence: runtime walkthrough, screenshot/video, automated test,
  benchmark, or user-device observation.

## Handling uncertainty

When the user answers `不知道`, `都可以`, or delegates:

1. choose the recommended option;
2. prefer the most reversible option when fit is otherwise equal;
3. state the resulting user-visible behavior;
4. record it under assumptions;
5. keep critical user-owned risks open instead of silently deciding.

Critical blockers include budget/payment authority, use of personal data,
commercial licensing, destructive migration, public deployment, target
platform, and a product promise whose alternatives lead to different products.

Do not ask again merely because the user lacks technical vocabulary. Reframe in
terms of visible outcome. Ask again only when the decision remains user-owned
and materially changes the product.

## Exit conditions

Use at most three normal logical rounds. Allow one additional focused round
only when a critical user-owned decision blocks a coherent specification.

After the normal limit:

- convert low-impact unknowns into recommended assumptions;
- list unresolved critical blockers;
- avoid expanding into speculative features;
- draft the intent as soon as goals, non-goals, constraints, and acceptance are
  coherent.

## Intent specification

Create `INTENT-rN` with:

```markdown
# Intent: <short wish name>

- Workflow: <workflow-id>
- Revision: INTENT-rN
- Goals: <observable outcomes>
- Core journey/loop: <smallest end-to-end promise>
- Audience and platforms: <who and where>
- Must-have scope: <first version>
- Non-goals: <explicit exclusions>
- Constraints: <budget, schedule, privacy, distribution, license, performance>
- Assumptions: <recommended defaults accepted or inferred>
- Acceptance criteria: <stable AC-IDs and evidence>
- Data-egress boundary: <allowed providers/data classes>
- Gate-1 research effects: <public search, reviewers, safe probes>
- Critical unknowns: <none or blockers>
```

Make criteria testable without prescribing architecture. Use IDs such as
`AC-01`, `AC-02`, and map them later to research and verification.

## Gate 1 presentation

Show, in order:

1. a five-to-ten-line plain-language summary;
2. goals and non-goals;
3. recommended assumptions and their visible consequences;
4. acceptance criteria;
5. external research/data-egress disclosure;
6. the exact one-time Gate request.

Explain that Gate 1 authorizes current-source research, de-identified external
review, and only the listed agent-authored probes. Explicitly say it does not
authorize project writes, dependency installation, candidate execution, or
implementation.

If the user changes anything in the approval reply, treat the reply as feedback,
create a new `INTENT-rN`, digest it, and issue a new request. Never extract the
word “批准” while ignoring conditions in the same message.

## Examples

### Good game round

```markdown
1. 最想要的玩家感受
   A. 亲手改变环境并立即看到反馈（推荐）——互动结果直观，适合先验证玩法灵魂。
   B. 掌握高难操作并获得成就感——需要更重视动作深度和失败反馈。
   C. 持续收集和成长——需要更早设计内容与进度结构。

2. 玩家反复做的核心事情
   A. 收集资源、建造，再观察世界变化（推荐）——最容易形成一个完整小循环。
   B. 战斗、升级并挑战更强敌人——核心投入会转向战斗系统和敌人内容。
   C. 自由实验各种系统——自由度高，但第一版边界最难控制。

3. 主要受众
   A. 喜欢轻度探索和创造的单人玩家（推荐）——节奏可控，也不需要先承担联网成本。
   B. 喜欢即时合作的朋友小队——必须从架构起点考虑多人同步。
   C. 喜欢长期经营的深度玩家——需要更复杂的进度、数据和内容量。

回复 `1A 2A 3A`，或回复 `全部采用推荐`。
```

### Bad technical round

Do not ask:

```text
Choose SPH vs FLIP, Vulkan vs OpenGL, and GDExtension vs compute shader.
```

Instead ask first about water's role in play, the repeated interaction,
audience, and a visible cause-and-effect success moment. Ask water scale, target
hardware, and acceptable performance only in their later layers; research the
technical route afterward.

### Bad pseudo-soul simulation round

Do not ask in the first round:

```text
Should the water be realistic, visually impressive, or scientifically exact?
Should it cover a container, a river, or an entire world?
```

Those are quality and scale decisions. Ask first why the player uses water,
which repeated interaction should be satisfying, who the experience serves,
and which non-numeric cause-and-effect moment would prove it works. Ask the
quality, scale, hardware, and performance questions in their later layers.
