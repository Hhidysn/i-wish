# Decision-record practice checks

Date: 2026-10-05
Base revision: `dcb399c` plus the working-tree changes from decision 0006.

Runtime snapshot SHA-256:
`d17b01839cd63380ebab2dd234eeb0426bc7ac7602f726c6903bc581fef5eb6d`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files.

## Evidence

Source: `czm15053/write-notes-like-deepseek` (SKILL.md and templates), read
through the search provider on 2026-10-05 because direct GitHub fetches are
blocked by the local TUN fake-IP guard. Only the two field-level practices were
adopted; the directory taxonomy was rejected in decision 0006.

## Document checks

| Check | Observed result |
| --- | --- |
| `node scripts/check.mjs` | Pass: frontmatter valid, description 241/260 characters, budgets ok, no broken local links |
| Budgets | templates.md 413/1000, documentation.md 855/1000; SKILL.md 1094/1100 unchanged; all references under 1000 |
| Diff review | Only `templates.md`, `documentation.md`, and the eval link list changed in this round |

## What this does not prove

The change is text and structure only. No behavioral run tested whether an agent
fills the new ADR fields, states the decision in present tense, or records a
dropped direction instead of leaving it in conversation.
