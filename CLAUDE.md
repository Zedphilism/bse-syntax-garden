# BSE Syntax Garden

## Project Overview
A Digital Garden for a Bachelor of Software Engineering (BSE) degree. Built using **Obsidian** for capture and **Quartz 4.0** for web deployment. Goal: "Learning in Public" with a scalable, interlinked knowledge base.

---

## Tech Stack
| Layer | Tool |
|-------|------|
| SSG | Quartz 4.0 (TypeScript/Node.js) |
| Capture | Obsidian |
| Storage | Markdown (.md) |
| Deployment | GitHub Pages via GitHub Actions |
| Node | v22.16.0 (Windows 10) |

---

## Folder Structure
This vault root IS the Quartz `content/` directory.

```
/                            ← vault root = content root
├── index.md                 ← home page / hub
├── Glossary/
│   └── _Index.md            ← glossary hub, links all definitions
├── semester-03/
│   ├── _Index.md            ← semester hub
│   ├── SCSR2213-network-communication/
│   │   └── _Index.md
│   ├── SECI1113-computational-mathematic/
│   │   └── _Index.md
│   └── SECR1013-digital-logic/
│       └── _Index.md
└── semester-04/ ... 08/     ← drop in as needed, same pattern
```

**Naming rules:**
- Index files: `_Index.md` (underscore keeps them sorted first)
- Atomic notes: `kebab-case-concept-name.md`
- No spaces in filenames

---

## Atomic Note Template
Every note must follow this full structure:

```markdown
---
title: "Title as a complete thought — max 70 chars, no symbols or colons"
date: YYYY-MM-DD
tags: [semester-X, subject-code, topic-tag]
---

# Title Here

One precise sentence stating what this note claims or explains.

> [!concept] Core Claim
> Restate the opening sentence as a tight, standalone definition.

## Explanation

Narrative paragraphs (2–4). Explain fully enough that someone without
the source material can understand it. Include the "why" — not just
what it is, but why it matters or how it behaves. No bullet-dumping.

## Key Points

Only for facts that are genuinely list-like (formulas, comparisons,
enumerated steps). Omit if Explanation already covers everything.

- Point

## Example

A worked example, calculation, code block, or concrete scenario.
This section is mandatory — every note must have at least one example.

> [!recall] A self-test question that probes the note's core concept?

## See Also

- [[kebab-case-filename|Display Name]] — why it is related
- [[kebab-case-filename|Display Name]] — relationship description
```

**Tag namespaces:**
- Semester: `semester-3`, `semester-4` … `semester-8`
- Subject codes: `secr1013`, `seci1113`, `scsr2213`
- Topic domain: `digital-logic`, `networking`, `discrete-math`, `hardware`, `glossary`
- Do not invent new namespaces (`module-1`, `fundamentals`, `conversion`, etc.)

**Title rules:** Use a simple, direct label that names the concept clearly. Do NOT write long claim-style sentences as titles.
- Bad: `"Binary Digits Map to Physical Voltage Levels in Digital Circuits"` (sentence, verbose)
- Bad: `"Module 1 Notes"` / `"Signals"` (too vague)
- Good: `"Binary and Voltage Levels"` / `"UDP: Connectionless Transport"` / `"Checksum Process"`
- Format options: plain noun phrase, "Concept: Subtopic", or "Protocol: Role" — keep under 60 chars
- The opening sentence of the note body (not the title) is where you state the claim or definition

**Wikilink format:** Always `[[kebab-case-filename|Display Name]]` — never display-name-only links.

---

## Writing Rules for Memory and Understanding

These rules are grounded in cognitive science (testing effect, elaborative encoding, dual coding, cognitive load theory). Follow them in every note.

**Rule 1 — Explain the mechanism, not just the definition.**
Every Explanation section must answer three questions: *What is it? How does it work (mechanism)? Why does it matter (consequence)?* Move from cause → effect. Do not describe — explain. Bad: "The AND gate outputs 1 when both inputs are 1." Good: "The AND gate acts as a series switch: current only flows (output HIGH) when both switches are closed simultaneously — this is why AND is used wherever two conditions must both be true at the same time."

**Rule 2 — Include an analogy for every abstract concept.**
If the concept cannot be physically touched or immediately visualised, the first paragraph of Explanation must map it to something familiar using the form: "Think of [concept] as [familiar thing] — [how the mapping works]." Good analogies map structure, not surface appearance. This creates a second retrieval pathway (dual coding).

**Rule 3 — The `[!recall]` prompt must demand application, not recognition.**
The recall question must be exam-grade: it asks the reader to apply the concept, predict an output, solve a mini-problem, or explain it to a hypothetical peer. If it can be answered by skimming the Key Points, it is too shallow. Bad: "What does XOR output when inputs differ?" Good: "Design a 1-bit comparator using only XOR and NOT. Explain your reasoning." The reader should attempt an answer before reading the note.

**Rule 4 — Write so the note can be closed and re-explained from memory.**
After one read-through (no re-reading), the reader should be able to explain the concept to a classmate. If the explanation requires the source slides to fill a gap, the note is incomplete. Fill the gap in the note, not in the reader's imagination.

**Rule 5 — Each paragraph answers exactly one question.**
Structure Explanation as: paragraph 1 = what/overview + analogy, paragraph 2 = how the mechanism works, paragraph 3 = why it matters / edge cases / failure modes. Do not blend questions in one paragraph. One paragraph, one purpose.

---

## Knowledge Workflow ("BSE" Method)
1. **Capture** — Raw notes, screenshots, lecture slides into subject folder
2. **Atomic** — One concept per note. Break up "Lecture 1" files immediately
3. **Link** — Use `[[Wikilinks]]` aggressively. Connect Digital Logic ↔ Networking where hardware meets protocol
4. **Refactor** — Mandatory: convert raw captures to typed, linked Markdown
5. **Publish** — Build and deploy; if it's not in the Garden, it doesn't exist long-term

---

## Quiz / Revision Arena Pages

Standalone HTML files at the vault root for gamified active recall. Open directly in any browser — no build step needed.

| File | Coverage |
|------|----------|
| `test1-quiz.html` | SCSR2213 Ch1 (full) + Ch2 up to HTTP |
| `test2-quiz.html` | SCSR2213 Ch2 (email → end) + Ch3 (full) |

**When asked to create a quiz page** for a test or exam, generate a standalone HTML file at the vault root following this pattern:

- **Dark arcade aesthetic** — scanlines overlay, grid background, neon accent colours per topic section
- **Question data** lives in a `const Q = [...]` array of objects: `{ topic, anchor, color, q, a, analogy, trap }`
  - `a` field: HTML string (bold key terms, `<code>` for formulas)
  - `analogy`: weird/memorable mapping — always concrete and surprising
  - `trap`: exact exam mistake prefixed with "EXAM:" — one line, punchy
- **Game mechanics** (copy JS from existing files — do not re-invent):
  - XP: BLANK=0, FUZZY=25, SOLID=75, LOCKED=100 × combo multiplier
  - Combo: activates at 3-streak, caps at 3.0×
  - Levels: NEWBIE(0) → PACKET(200) → ROUTER(500) → PROTOCOL(1000) → WIZARD(1800) → NET GOD(3000)
  - Floaters: XP popup, combo burst, level-up flash
  - Progress bars: questions done + XP-to-next-level
  - Review banner: counts BLANK-rated cards
  - End screen: XP, rank, best streak, locked count, review count, best combo, grade message
- **Link** quiz files to each other via `<a>` at end screen
- **Naming**: `<subject-code>-<test-number>-quiz.html`, e.g. `scsr2213-test1-quiz.html` for new subjects. Existing SCSR2213 files use short names for backwards compatibility.
- **Scalability**: adding a new test = create a new file, copy the JS engine, replace the `Q` array. No shared dependency — each file is fully self-contained.

---

## Development Commands
```bash
npx quartz build --serve   # local preview (hot reload)
npx quartz build           # production build only
```
Sync is handled by a daily Windows Task Scheduler job (`sync.ps1`) at 10 PM.

---

## Guiding Principles
- **Scalability** — Semester 4–8 folders drop in without touching the root structure
- **Absorption over Collection** — Typed and linked beats screenshots and PDFs
- **Source of Truth** — If it's not in the Garden, it doesn't exist for the long term
