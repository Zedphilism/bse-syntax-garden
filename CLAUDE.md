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

## Frontmatter Template
Every note must include:

```markdown
---
title: "Concept Name"
date: YYYY-MM-DD
tags: [semester-3, subject-code, topic]
---
```

Valid tag namespaces: `semester-3`, `networking`, `digital-logic`, `discrete-math`, `hardware`, `glossary`

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
Sync is handled by Obsidian Git Plugin (auto-push every 10 min).

---

## Guiding Principles
- **Scalability** — Semester 4–8 folders drop in without touching the root structure
- **Absorption over Collection** — Typed and linked beats screenshots and PDFs
- **Source of Truth** — If it's not in the Garden, it doesn't exist for the long term
