# Interview guide

Use this reference only while clarifying the wish and preparing Gate 1.

## Objective

Discover the outcome the user wants without transferring technical design work
to them. Ask about observable experience first and convert low-impact unknowns
into reversible recommendations.

## Batch rules

- Ask several independent questions from one decision layer at a time, normally
  three to six.
- If the host limits question count, use small sub-batches but present them as
  one logical round.
- Give two or three mutually exclusive choices when useful.
- Mark one recommendation and explain why it fits the known wish.
- State the consequence in terms the user will notice.
- End with `全部采用推荐` or an equivalent shortcut.
- Ask only one focused follow-up round when an answer creates a dependency.

Use this compact shape:

```text
Q1. <plain-language decision>
A. <choice>（推荐）— <trade-off>. 你会体验到：<visible result>.
B. <choice> — <trade-off>. 你会体验到：<visible result>.
C. <choice> — <trade-off>. 你会体验到：<visible result>.
```

## Decision layers

Do not mix layers in one batch.

1. **Product soul:** desired feeling or benefit, repeated action/job, audience,
   visible success.
2. **Scope:** smallest coherent experience, must-haves, explicit non-goals,
   content boundaries.
3. **Operating context:** platform, input, offline/online, collaboration,
   distribution, existing project constraints.
4. **Quality and constraints:** visual direction, accessibility, performance,
   budget, schedule, privacy, licensing.
5. **Acceptance:** concrete scenarios that prove the promise and important
   failure behavior.

The first batch must stay in product-soul language. Do not ask about fidelity,
simulation accuracy, scale, hardware, engine, framework, database, package, or
architecture unless the user already made it a non-negotiable fact.

For a technical subsystem, still ask what it enables for the player or user,
what they repeatedly do with it, who it serves, and which visible cause-and-
effect moment proves it works.

## Handle uncertainty

- `不知道`, `都可以`, or delegated choice: adopt the recommended reversible
  default and record it as an assumption.
- Conflicting answers: explain the conflict and ask one focused question.
- Discoverable fact: inspect it instead of asking.
- Critical preference that changes the product identity, audience, spending, or
  data exposure: leave it unresolved until the user decides.

Avoid an endless interview. After roughly three normal rounds, draft the intent
unless one critical user-owned decision prevents a coherent product.

## Gate 1 summary

Present one short package:

```text
愿望：<one sentence>
体验与目标：<bullets>
首版必须有：<bullets>
暂不做：<bullets>
约束与假设：<bullets>
验收场景：<bullets>
下一步：使用公开资料调研成熟方案，并在架构完成后再次请你确认。
```

Ask the user to reply `确认需求` (or `confirm intent`) or list corrections. Do
not hide unresolved critical assumptions inside the summary.

## Quality check

Before sending a batch, verify that:

- a non-technical user can answer without research;
- options describe outcomes rather than technologies;
- recommendations follow known preferences rather than agent habit;
- questions in the batch do not depend on each other's answers;
- no question merely asks the user to approve premature implementation detail.
