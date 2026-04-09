# BSE Syntax Garden — Complete Usage & Customization Guide

---

## 1. Daily Workflow

### Writing Notes in Obsidian
All notes live in `content/`. Point your Obsidian vault at this folder.

**To create a new atomic note:**
1. Create a file in the correct subject folder, e.g.:
   `content/semester-03/SECR1013-digital-logic/logic-gates.md`
2. Add frontmatter at the top:
   ```markdown
   ---
   title: "Logic Gates"
   date: 2026-04-09
   tags: [semester-3, digital-logic, secr1013]
   ---
   ```
3. Write the note. One concept per file.
4. Link to related notes with `[[wikilinks]]`

**Atomic note template** — copy this for every new note:
```markdown
---
title: "Concept Name"
date: YYYY-MM-DD
tags: [semester-3, subject-code, topic]
---

# Concept Name

One sentence definition.

## Key Points

- Point one
- Point two

## Example

(code block, diagram, or worked example here)

## See Also

- [[related-concept|Related Concept]]
- [[Glossary/_Index|Glossary]]
```

**Draft notes (hidden from public site):**
Add `draft: true` to frontmatter — Quartz will build but not publish it.
```markdown
---
title: "WIP Note"
draft: true
---
```

---

## 2. Publishing to GitHub Pages

### Auto-publish (recommended)
Every `git push` to `main` triggers the GitHub Actions workflow → site rebuilds automatically.

If you use the **Obsidian Git plugin** (auto-push every 10 min), publishing is fully hands-off.

### Manual publish
```bash
cd bse-syntax-garden
git add content/
git commit -m "add: logic-gates note"
git push
```

### Local preview before pushing
```bash
npx quartz build --serve
# Opens at http://localhost:8080
```

---

## 3. Folder Structure Rules

```
content/
├── index.md
├── Glossary/
│   ├── _Index.md
│   └── boolean-algebra.md          ← one term per file
└── semester-03/
    ├── _Index.md
    ├── SECR1013-digital-logic/
    │   ├── _Index.md               ← subject hub
    │   ├── logic-gates.md          ← atomic note (concept name)
    │   ├── boolean-algebra.md
    │   └── karnaugh-maps.md
    ├── SCSR2213-network-communication/
    │   ├── _Index.md
    │   ├── osi-model.md
    │   └── tcp-vs-udp.md
    └── SECI1113-computational-mathematic/
        ├── _Index.md
        ├── propositional-logic.md
        └── set-theory.md
```

**Structure rules:**
- Hub files: `_Index.md` — always the folder index, links to all notes in that subject
- Atomic notes: named after the **concept**, in `kebab-case.md`
- No `Concepts/` or `Lectures/` subfolders — notes go flat in the subject folder
- The knowledge graph + tags handle organization; folders are only for subject grouping
- Semesters 4–8: drop in a new `semester-0X/` folder — nothing else breaks

**File naming — name the concept, not the source:**

| Concept | File name |
|---------|-----------|
| Logic gates | `logic-gates.md` |
| OSI model | `osi-model.md` |
| Karnaugh maps | `karnaugh-maps.md` |
| TCP vs UDP | `tcp-vs-udp.md` |
| Propositional logic | `propositional-logic.md` |

Never name a file after a lecture (`lecture-2.md`), week (`week3.md`), or source (`textbook-ch4.md`). If a lecture covers 3 concepts, make 3 files.

---

## 4. Wikilinks & Cross-linking

Obsidian wikilinks work natively in Quartz.

```markdown
[[logic-gates]]                          ← links by filename
[[logic-gates|Logic Gates]]              ← custom display text
[[_Index|Digital Logic Index]]           ← link to a hub
[[Glossary/_Index|Glossary]]             ← cross-folder link
```

**Best practice:** Link aggressively. Every concept that appears in another note should be a wikilink. This builds the knowledge graph visible on the site.

---

## 5. Supported Markdown Features

| Feature | Syntax |
|---------|--------|
| Callouts | `> [!note]`, `> [!warning]`, `> [!tip]` |
| Math (KaTeX) | `$inline$` or `$$block$$` |
| Mermaid diagrams | ` ```mermaid ` fenced block |
| Syntax highlighting | ` ```python ` fenced block |
| Tables | Standard GFM |
| Footnotes | `[^1]` |
| Task lists | `- [ ]` / `- [x]` |
| Embeds | `![[note-name]]` |

**Callout example:**
```markdown
> [!note] OSI Model
> The OSI model has 7 layers. See [[osi-model]] for details.
```

---

## 6. UI/UX Customization

You have **three levels** of control:

### Level 1 — Colors & Fonts (`quartz.config.ts`)

Edit the `theme` block. Changes apply site-wide on next build.

**Current design system — Dark Night Garden × Syntax:**
```typescript
theme: {
  typography: {
    header: "JetBrains Mono",  // monospace — "Syntax" identity
    body: "IBM Plex Sans",     // clean, technical, readable
    code: "IBM Plex Mono",     // IBM Plex family cohesion
  },
  colors: {
    // Light mode — fresh morning garden (mint palette)
    lightMode: {
      light: "#F0FDF8",        // page background (mint-50)
      lightgray: "#CCFBEE",    // borders
      gray: "#34D399",         // muted UI, graph links
      darkgray: "#065F46",     // body text
      dark: "#022C22",         // headings
      secondary: "#059669",    // links / accent (emerald-600)
      tertiary: "#10B981",     // hover (emerald-500)
      highlight: "rgba(5, 150, 105, 0.10)",
      textHighlight: "#A7F3D0AA",
    },
    // Dark mode — night garden (bioluminescent emerald)
    darkMode: {
      light: "#050E0A",        // page background (forest floor)
      lightgray: "#0D2118",    // borders (deep moss)
      gray: "#1A4535",         // muted UI (dark canopy)
      darkgray: "#86EFAC",     // body text (green-300)
      dark: "#DCFCE7",         // headings (green-100)
      secondary: "#4ADE80",    // links (emerald-400, bioluminescent)
      tertiary: "#86EFAC",     // hover (green-300)
      highlight: "rgba(74, 222, 128, 0.08)",
      textHighlight: "#14532D99",
    },
  },
},
```

**To change fonts** — replace with any Google Fonts name:
```typescript
header: "Fira Code",  // alternative monospace heading
body: "Inter",        // more neutral body font
```

---

### Level 2 — Layout & Components (`quartz.layout.ts`)

Control what appears where on every page. The layout has 4 zones:

```
┌─────────────────────────────────────────┐
│              header (top bar)           │
├──────────┬──────────────────┬───────────┤
│          │   beforeBody     │           │
│  left    │   (article top)  │   right   │
│ sidebar  │                  │  sidebar  │
│          │   CONTENT        │           │
│          │                  │           │
│          │   afterBody      │           │
├──────────┴──────────────────┴───────────┤
│              footer                     │
└─────────────────────────────────────────┘
```

**Available components:**
```typescript
Component.PageTitle()          // site name / logo
Component.Search()             // full-text search
Component.Darkmode()           // light/dark toggle
Component.ReaderMode()         // distraction-free toggle
Component.Explorer()           // file tree sidebar
Component.TableOfContents()    // in-page TOC (right sidebar)
Component.Graph()              // knowledge graph
Component.Backlinks()          // "what links here"
Component.Breadcrumbs()        // navigation path
Component.ArticleTitle()       // note title (h1)
Component.ContentMeta()        // date, reading time
Component.TagList()            // tag chips
Component.RecentNotes()        // latest notes widget
Component.Footer()             // footer links
```

**Example — add RecentNotes to the right sidebar:**
```typescript
// in quartz.layout.ts
right: [
  Component.Graph(),
  Component.DesktopOnly(Component.TableOfContents()),
  Component.Backlinks(),
  Component.RecentNotes({ limit: 5 }),   // ← add this
],
```

**Example — remove the graph (faster builds):**
```typescript
right: [
  Component.DesktopOnly(Component.TableOfContents()),
  Component.Backlinks(),
],
```

**Update footer links:**
```typescript
footer: Component.Footer({
  links: {
    GitHub: "https://github.com/Zedphilism/bse-syntax-garden",
    "Semester 03": "/semester-03",
  },
}),
```

---

### Level 3 — Custom CSS (`quartz/styles/custom.scss`)

Full CSS control. This file is imported last, so it overrides everything.

```scss
@use "./base.scss";

// Example: wider content area
.center {
  max-width: 800px;
}

// Example: style callouts differently
.callout[data-callout="note"] {
  border-left: 4px solid var(--secondary);
}

// Example: bigger code blocks
pre {
  font-size: 0.9rem;
  border-radius: 8px;
}

// Example: custom heading style
h1 {
  border-bottom: 2px solid var(--secondary);
  padding-bottom: 0.3rem;
}
```

**CSS variables available (from theme colors):**
```scss
var(--light)          // background
var(--lightgray)      // borders
var(--gray)           // muted elements
var(--darkgray)       // body text
var(--dark)           // headings
var(--secondary)      // links / accent
var(--tertiary)       // hover
```

---

## 7. Hiding Notes from the Public Site

Three options:

| Method | Effect |
|--------|--------|
| `draft: true` in frontmatter | Built but not listed (still accessible by URL) |
| Put in a `private/` folder | Fully excluded (in `ignorePatterns`) |
| Put in a `templates/` folder | Also excluded |

---

## 8. Build Commands Reference

```bash
npx quartz build --serve      # local preview with hot reload
npx quartz build              # production build → public/
npx quartz build --bundleInfo # build + show bundle size breakdown
```

---

## 9. Updating Quartz

When Quartz releases a new version:
```bash
# In a separate temp folder
git clone https://github.com/jackyzha0/quartz.git quartz-new --depth=1

# Copy updated framework files (NOT content/)
cp -r quartz-new/quartz ./quartz
cp quartz-new/package.json quartz-new/package-lock.json .
cp quartz-new/globals.d.ts quartz-new/index.d.ts quartz-new/tsconfig.json .

npm ci
npx quartz build   # verify it still works
git add -A && git commit -m "update: Quartz to vX.X.X"
```

---

## 10. Site URL

**Live site:** `https://Zedphilism.github.io/bse-syntax-garden`

**Enable GitHub Pages:** Repo → Settings → Pages → Source: `GitHub Actions`
