# External-practice adoption checks

Date: 2026-10-05
Base revision: `159b4fa` plus the working-tree changes from decision 0004.

Runtime snapshot SHA-256:
`eb7c223ac8bc0e2ae000ccd30225919884b1a88d8d27c54721cf808c9048a01b`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files.

## Sources checked (2026-10-05)

- Six-stage workflow article: <https://czm15053.github.io/ai-workflow-six-stages/>
  (fetched through the search provider; a direct fetch was blocked by the local
  TUN fake-IP guard). Used for the stage names, two-axis review, handoff, and
  slice sizing. Its per-stage human gates were considered and rejected.
- Chroma, Context Rot: <https://research.trychroma.com/context-rot> — 18 frontier
  models, performance varies with input length (published 2025-07-14). Supports
  one-fresh-context slice sizing.
- Matt Pocock's handoff skill and docs — reference artifacts by path or URL,
  never copy; the document carries only the live thread.
- Superpowers verification-before-completion — evidence before claims; run the
  command and read the output before claiming success.

## Document checks

| Check | Observed result |
| --- | --- |
| `node scripts/check.mjs` | Pass: frontmatter valid, description 241/260 characters, budgets ok, no broken local links |
| Budgets | `SKILL.md` 1094/1100 words; delivery 692, documentation 791, templates 355, others 295–851; all under 1000 |
| Naming | `SKILL.md`, the delivery heading, and both READMEs use Plan/Execute/Verify/Ship; no stale "Deliver, prove, and preserve" remains |

## What this does not prove

The adopted rules are text and structure only. No behavioral run re-tested
independent verification, fail-then-pass evidence, handoff output, or the renamed
stages; the probes recorded in the council-fix note predate these edits. The
article's claims about other workflows were not independently re-verified beyond
the primary sources listed above.
