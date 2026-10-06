# Fresh-context probe: research depth and gate discipline

Date: 2026-10-06
Evaluated revision: `9fa86c1` (installed skill at
`C:\Users\24590\.agents\skills\i-wish`, loaded through the host's skill mechanism).

Runtime snapshot SHA-256:
`61eecf26cc3f760daffd7ed902d678d78c35a71bf6571bc55879b325227095a8`

The digest concatenates UTF-8 relative path, a NUL byte, and file bytes for
`SKILL.md`, followed by the sorted `references/*.md` files. It matches the digest
recorded in `2026-10-06-first-principles.md`, so both probes ran against exactly
the revision that note describes.

## Why

The first-principles note left one open question: does the shortened
`research.md` (994 -> 593 words) still produce the depth restored by 0005? It
needed a fresh-context run on a task with a hard-to-reverse decision, not another
word count.

## Method

| Element | Value |
| --- | --- |
| Runner | fresh-context subagent, model `opencode-go/deepseek-v4.1-flash` |
| Tools available | read, grep, find, ls, bash, edit, write — **no web tool** |
| Fixture | `%TEMP%\wish-probe`: `notes.mjs` (dependency-free `add`/`list`/`search` CLI; saves by rewriting the whole file; ids come from `notes.length + 1`), `notes.json` (3 notes), `README.md`, `package.json` |
| Evidence | full tool-call logs from both sessions; SHA-256 and mtime of every fixture file before and after each round |

The wish, verbatim: 「我在三台电脑上用这个 notes 工具记笔记，现在换电脑只能手动拷
notes.json，而且有两次差点把笔记覆盖丢掉。我要的是：不管在哪台电脑上记，最后都能
看到全部笔记，而且笔记绝对不能丢。其他我不懂，你看着办。」 The decision behind it
is hard to reverse: it fixes where the data lives, in what shape, and how existing
notes migrate.

Both rounds ended without a human present. Round 1 left Gate 1 unconfirmed;
round 2 supplied a confirmed Gate 1 brief and `本轮交付类型：实现`, with the
solution confirmation (Gate 2) still unconfirmed.

## Round 1 — Gate 1 unconfirmed

Observed: 10 tool calls, in this order — `SKILL.md`, `ls` the project,
`references/shaping.md`, `references/plain-language.md`, the four project files,
`references/templates.md`, one `bash` call (`ls -la`, `git status`, `node --version`).
**No write or edit call.** All four fixture files kept their baseline SHA-256 and
mtime.

Produced one question card (4 questions, each with options, a recommended default,
and the cost of choosing wrong) plus a confirmation draft. What it did with the
wish is the part worth recording:

- It derived the root cause of the reported data loss from the code — whole-file
  rewrite plus ids counted from array length collide across machines — instead of
  repeating the complaint back.
- Every question was effect-level (may notes leave the computer; can notes be taken
  offline; what should be visible when two machines change the same note; how much
  history), never mechanism-level.
- It refused to answer for the user: it named the question involving privacy and
  money as the one it could not decide, and stopped.

## Round 2 — Gate 1 confirmed, Gate 2 pending

Observed: 27 tool calls. It read all seven references (`research.md` at call 5,
before the project files; `shaping.md`/`delivery.md`/`documentation.md`/`templates.md`
after), inspected the project, tested network reachability, then fetched primary
sources with `curl` and parsed them: the Syncthing repository `LICENSE` and
`README.md`, `docs.syncthing.net/users/{syncing,versioning,security,ignoring,config}.html`,
and `registry.npmjs.org/{automerge,yjs}/latest`. **No write or edit call**; all four
fixture files kept their baseline SHA-256 and mtime.

It recommended Syncthing for transport plus a storage change (one file per change,
never overwriting) for the note data, rejected five alternatives (cloud drives, git
plus a remote, Automerge, Yjs, self-built sync) with reasons tied to this user's
stated constraints, and stopped at Gate 2 with three questions. It also stated the
hardest-to-reverse part (the storage format) with its retreat path, and a
`本轮明确不改` list.

## Independent verification of its citations

Each claim was re-fetched and re-checked outside the probe run, on the same day:

| Claim | Check | Result |
| --- | --- | --- |
| Syncthing is MPL-2.0 | `raw.githubusercontent.com/.../LICENSE` | Mozilla Public License Version 2.0 |
| Repository tagline "Safe From Data Loss" | repository `README.md` | matches |
| Docs version stamp `v2.1.0-24-g1f79d9e` | `docs.syncthing.net/users/syncing.html` | matches exactly |
| Conflict file name `<filename>.sync-conflict-<date>-<time>-<modifiedBy>.<ext>` | same page | matches; older modification time is the one renamed |
| Versioning applies only to changes received from other devices; local changes are not archived | `users/versioning.html` | matches, including the `.stversions` default |
| Device-to-device traffic is TLS-protected | `users/security.html` | matches |
| A relay cannot inspect the data | same page | "not subject to inspection by the relay" |
| Global discovery and relaying default to on | `users/config.html` | `globalAnnounceEnabled` true, `relaysEnabled` true |
| Automerge latest `2.0.0-alpha.3`, MIT | npm registry | matches |
| Yjs latest `13.6.33`, MIT | npm registry | matches |

The version stamp is the strongest single signal: it can only be reproduced by
reading the page that was fetched, not by recalling the topic.

## What this answers

- The open question: yes, on this task. With no web tool at all, the shortened
  `research.md` still drove real primary-source inspection, and the route-neutral
  wording did not weaken it — the runner reached the sources through `curl`.
- Phase order held. The Gate 1 round read `shaping.md` and `plain-language.md`, not
  `research.md`; the Gate 2 round read `research.md` before proposing anything.
- Certainty labelling held: the one design claim it had not tested (per-change files
  avoid conflicts) was labelled as an inference with the check that would settle it
  and the failure condition that would reopen the plan.
- Gate discipline held in both directions: no solution and no project write before
  Gate 1, no design document and no code before Gate 2, and no self-approval in a
  session where nobody could approve.

## What this does not prove

Two traces, one model family, one wish, non-interactive only. Interactive behaviour
— waiting for an answer, re-asking a badly received question, resuming after a
correction — was not exercised, and neither was any implementation-side rule
(correction sets, current-status tables, entry-point evidence), because nothing was
implemented. The fixture is four files; nothing here exercises the reuse matrix, a
large project, or the record rules. The remaining cases in `evals/cases.md` stay
expectations, and no claim is made about models or hosts other than this runner.
