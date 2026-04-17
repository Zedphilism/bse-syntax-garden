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

## See Also

- [[kebab-case-filename|Display Name]] — why it is related
- [[kebab-case-filename|Display Name]] — relationship description
```

**Tag namespaces:**
- Semester: `semester-3`, `semester-4` … `semester-8`
- Subject codes: `secr1013`, `seci1113`, `scsr2213`
- Topic domain: `digital-logic`, `networking`, `discrete-math`, `hardware`, `glossary`
- Do not invent new namespaces (`module-1`, `fundamentals`, `conversion`, etc.)

**Title rules:** Phrase as a claim or complete thought, not a vague label.
- Bad: `"Binary"` / `"Signals"` / `"Module 1 Notes"`
- Good: `"Binary Digits Map to Physical Voltage Levels in Digital Circuits"`

**Wikilink format:** Always `[[kebab-case-filename|Display Name]]` — never display-name-only links.

---

## Knowledge Workflow ("BSE" Method)
1. **Capture** — Raw notes, screenshots, lecture slides into subject folder
2. **Atomic** — One concept per note. Break up "Lecture 1" files immediately
3. **Link** — Use `[[Wikilinks]]` aggressively. Connect Digital Logic ↔ Networking where hardware meets protocol
4. **Refactor** — Mandatory: convert raw captures to typed, linked Markdown
5. **Publish** — Build and deploy; if it's not in the Garden, it doesn't exist long-term

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
