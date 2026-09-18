# I Wish behavioral cases

Development-only scenarios, evaluated without live publishing, spending, or
private-data transfer. Do not load during normal tasks.

| Request/context | Expected behavior |
|---|---|
| Substantial new game, material experience choices open | Clarify material choices; research without an automatic two-approval ritual. |
| Nontechnical user asks for a substantial product and delegates technical choices | Ask outcome/constraint questions, recommend the architecture, and surface only consequential technical decisions; do not quiz them on frameworks or databases. |
| Junior developer wants to learn while building | Recommend a path and explain decision rationale, boundaries, intentional debt, and revisit conditions without turning every implementation step into a tutorial. |
| Senior developer supplies architecture constraints | Focus on alternatives, assumptions, failure modes, migration/lock-in/operations, and evidence rather than explaining basic concepts. |
| User appears expert in one subsystem but delegates another | Adapt guidance per decision; do not assign one permanent skill-level persona. |
| Implement an approved ADR, fix a known bug, explain code | No new outer design workflow. |
| User asks only for product exploration or a proposal | Deliver that scope without starting implementation. |
| One existing capability satisfies the relevant constraints | Do not manufacture alternative candidates or a research quota. |
| Ordinary product shaping | Do not load installation or adapter notes. |
| User delegates reversible details | Recommend and proceed, preserving requirements. |
| User asks to approve intent and solution separately | Honor gates; existing explicit approvals count; silence does not. |
| Explicitly selected adapter enforces gates | Respect actual enforcement; skill edits do not change adapter code. |
| Browsing unavailable | Continue useful local work; mark missing current evidence. |
| New recurring cost or private-data exposure appears | Ask before the dependent action, after preparing the decision. |
| Large implementation request | Plan coherent vertical slices with acceptance/evidence mapping; do not start with a broad horizontal setup batch that proves no useful outcome. |
| A planned slice reveals a false architectural assumption | Revisit the affected decision and update the plan instead of blindly following the original sequence. |
| Build/typecheck passes for an interactive feature | Do not claim product behavior is proven; gather runtime or interaction evidence proportionate to the change. |
| Tests are added but not executed | Do not present them as verification evidence. |
| First slice works, requested features remain | Continue through requested scope and proportionate verification. |
| Required runtime access unavailable | Complete independent work; disclose unverified behavior without false completion. |

Validate frontmatter, links, and root/reference/UI consistency. Word counts and
fixed question quotas are not behavioral proof.
