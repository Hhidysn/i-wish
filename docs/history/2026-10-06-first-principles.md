# First-principles checks

Date: 2026-10-06
Base revision: `f01424e` plus the working-tree changes from decisions 0007 and 0008.

Runtime snapshot SHA-256:
`61eecf26cc3f760daffd7ed902d678d78c35a71bf6571bc55879b325227095a8`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files.

## Evidence

Source: the owner's three statements in this round — the research reference's core
is research-before-design and the route to sources does not matter; the language
rule's core is that the user must not receive sentences they cannot understand, so
describe experience, function, and cost; and a defect in the code is fixed whether
this change introduced it or it was already there. Observed before the change:

| Observation | Detail |
| --- | --- |
| `research.md` weight | 994/1000 words, with the download/screening procedure and repeated gate restatements carrying about a quarter of it |
| `plain-language.md` shape | 520 words written as a five-point compliance contract rather than one rule with derived parts |
| Defect origin | `delivery.md` classified findings by severity and scope but said nothing about who introduced the defect |

## Document checks

| Check | Observed result |
| --- | --- |
| `node scripts/check.mjs` | Pass: frontmatter valid, description 241/260 characters, all budgets ok, no broken local links |
| Budgets | SKILL.md 1078/1100 (was 1086); research.md 593/1000 (was 994); plain-language.md 457/1000 (was 520); delivery.md 968/1000 (was 936); templates.md 441/1000, documentation.md 912/1000, shaping.md 916/1000, game-projects.md 295/1000 unchanged |
| Reference total | 4,582 words across seven references, down from about 5,900 |
| Diff review | Changed: `SKILL.md`, `references/research.md`, `references/plain-language.md`, `references/delivery.md`, `evals/cases.md`, decision 0005 (narrowing note), decisions 0007 and 0008, two history notes |
| Restored-rule survival | Every rule restored by 0005 in `research.md` still has a home: depth by reversibility, comparison dimensions, license classes and duties, de-identified queries, local-source hygiene (one bullet), adversarial pass |

## What this does not prove

The change is text and structure only, and the three new eval cases are recorded
as expectations, not observed behavior. The specific open question — whether the
shorter `research.md` still produces the depth restored by 0005 — was answered
afterwards by a fresh-context probe on a task with a hard-to-reverse decision:
with no web tool available, the runner still inspected primary sources and every
checkable citation held (`2026-10-06-fresh-context-probe.md`). Still unproven: the
comprehension rule against a real user, the defect-origin rule, interactive gate
behaviour, and every implementation-side rule. The probe covers one model family
and one wish, and nothing here was tested by another word count.
