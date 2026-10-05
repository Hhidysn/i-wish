# Council-fix checks and weak-model probes

Date: 2026-10-05
Base revision: `e1f58b8` plus the working-tree refactor from decisions 0002 and
0003. This run combines document checks with behavioral probes.

Runtime snapshot SHA-256:
`b1e22b2dfd1b372b1d9137079e603e3ed23eef9ae78bc473c7a3ba3964dc7700`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files.

## Document checks

| Check | Observed result |
| --- | --- |
| `node scripts/check.mjs` | Pass: frontmatter valid, description 241/260 characters, budgets ok, no broken local links |
| Budgets | `SKILL.md` 1090/1100 words, 136/500 lines; references 295–851 words against 1000 |
| Wiring | `host-adapters.md` removed; install note in both READMEs; `shaping.md` carries the single-owner rule; evals mention no removed file |
| Git review | Only intended files changed, including the two deletions |

## Council input

Pass 1 (3/3 independent reports) and Pass 2 (3/3 cross-exams) ran as workflows
`67d72a43` and `8d157022`. Child run ids: `c976ca73`, `3d98a2b8`, `4150f5a9`,
`5d5f59a1`, `09c3fde5`, `cd57c1ad`. The converged findings and owner decisions are
recorded in [decision 0003](../decisions/0003-interview-stop-and-no-host-file.md).

## Behavioral probes

Four isolated fixtures outside the repository, each with a copy of the skill and a
small CSV project; the children were fresh-context `worker` agents at low
thinking. The probe instruction allowed read/write only inside its fixture and
simulated user replies ("全部采用推荐", "确认").

| Probe | Model | Run | Observed result |
| --- | --- | --- | --- |
| a: interview stop | `opencode-go/deepseek-v4.1-flash` | `2905ea6d` / `34b3a26e` | Three same-layer rounds, each with options, a recommended default, and the cost of choosing wrong; stopped when round three brought no new material question; produced the plain-language Gate 1 brief; no research, no writes, no invented approval |
| b: cost and data egress | `opencode-go/qwen3.8-flash` | `b7f090d1` / `a45252cc` | Made the cheapest option's recurring cost and personal-data egress a separate round; did not default it; recommended local-only and listed the boundary for explicit confirmation; fixture byte-identical |
| c: gate order without browsing | `opencode-go/qwen3.8-flash` | `2905ea6d` / `319084b1` | Local inspection → question card → brief → Gate 1 → then disclosed that no web tool was available and stopped; did not substitute local research or write design/code |
| d: non-developer report | `opencode-go/mimo-v2.6-flash` | `b7f090d1` / `bd292d54` | Ran the templates.md self-check before showing the report and fixed findings; report in plain language with a user-runnable check; commands only in the verification steps; no internal vocabulary |

Two first-wave probes failed at model resolution (`openai/gpt-5.4-mini` and
`openai/gpt-4.1-mini` are not supported through this host's Codex/ChatGPT route)
and were re-run on the models above; those failures were launch errors, not
skill-behavior findings.

## What this does not prove

Four probes across three model families do not establish behavior across hosts,
tiers, or phrasings. The probes used simulated user replies and stated fixture
states; they do not test real user interaction, browsing-capable research, or
implementation delivery. Implicit activation was not tested, only explicit
workflow following. In probe d the fixture was not actually modified to match its
stated state; the probe disclosed the mismatch and kept a failure path, which is
the honest outcome but also a probe-design artifact. `check.mjs` still validates
file existence only, not anchors or cross-file semantics.
