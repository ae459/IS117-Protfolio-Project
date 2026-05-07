# Phase 5 — Projects Page (Portfolio Work)

## Goal

Present a curated set of projects and project concepts that demonstrate the
direction Amir is building toward. Projects may be completed work, work in
progress, or clearly labeled aspirational concepts — but all must feel
plausible, specific, and intentional.

---

## Problem Statement

A portfolio with no projects communicates nothing. A portfolio with vague
"concept projects" that could be anyone's communicates even less.

Every project on this page must answer: **Why this project? Why now? What does
it show about how this person thinks?**

Even aspirational projects must be grounded in real research — real tools,
real problem spaces, real workflows.

---

## Deliverables

- [x] `app/projects/page.tsx` — projects page route
- [x] `components/content/projects/project-hero.tsx` — page hero
- [x] `components/content/projects/project-card.tsx` — individual project card
- [x] `components/content/projects/project-grid.tsx` — card layout container
- [x] `components/content/projects/project-detail.tsx` — expanded project section
- [x] `lib/content/projects.ts` — all project data
- [x] Project status badges: `Completed` | `In Progress` | `Concept`

---

## Project Roster

### Project 1 — IS117 Portfolio Site _(Completed)_

**This very site.**

> A spec-driven portfolio website built with Next.js 16, TypeScript, and
> Tailwind CSS v4. Designed using the professor's AI orchestration methodology —
> planning with specs, building with purpose, verifying with quality gates.

- **Tech:** Next.js 16, TypeScript, Tailwind CSS, GitHub Pages
- **What it shows:** Spec-first development, design system thinking, AI-assisted workflow
- **Status:** Completed — May 2026
- **Link:** This site / GitHub repo

---

### Project 2 — AI Prompt Engineering Lab _(In Progress)_

**A personal research workspace for testing and documenting LLM prompting patterns.**

> A structured collection of prompting experiments: system prompts, chain-of-thought
> examples, few-shot patterns, and output evaluation notes. Built as a GitHub
> repo with documented methodology — not just a folder of random prompts.

- **Tech:** Python, OpenAI API, Markdown documentation
- **What it shows:** Intentional AI use, evaluation discipline, documentation habit
- **Status:** In Progress
- **Link:** GitHub repo (linked)

---

### Project 3 — Spec-to-Site Generator Concept _(Concept)_

**A tool that takes a written spec document and scaffolds a Next.js page structure.**

> Inspired by the professor's spec-sprint workflow. The concept: a CLI tool that
> reads a markdown spec file, extracts component requirements, and generates
> typed Next.js component stubs with correct folder structure. This solves the
> gap between "I have a plan" and "I have a starting codebase."

- **Tech:** TypeScript, Node.js, OpenAI API (spec parsing), file system generation
- **What it shows:** AI orchestration thinking, developer tooling interest, systems design
- **Status:** Concept — researched, spec written, not yet built
- **Planned start:** Summer 2026

---

### Project 4 — IS117 Scrollytelling Museum _(Completed/Referenced)_

**A scrollytelling site built as a course project.**

> A museum-style scrollytelling web experience built earlier in the course.
> Demonstrates understanding of layout, narrative flow, and editorial web design
> before the portfolio project.

- **Tech:** HTML, CSS, JavaScript
- **What it shows:** Foundational web skills, design thinking, storytelling with web tech
- **Status:** Completed — earlier in IS117

---

## Project Card Design

Each card includes:

- Project title
- Status badge (`Completed` | `In Progress` | `Concept`)
- One-paragraph description
- Tech tag list
- "What this shows" — 1-line statement of professional signal
- Links: GitHub / Live Site (where applicable)
- AI-generated illustration or screenshot

### Card Variants

**`completed`** — Full color, live link prominent
**`in-progress`** — Slightly muted, "In Progress" badge, no live link required
**`concept`** — Outlined/ghost style, "Concept" badge, links to spec doc

---

## Page Layout

```
[PAGE HERO]
  Eyebrow: "Projects"
  Title: "Work, Work in Progress, and Where I'm Heading"
  Lede: Honest note about the mix of completed + concept work

[PROJECT GRID]
  2-column grid on desktop, 1-column on mobile
  Projects ordered: Completed → In Progress → Concept

[CLOSING CALLOUT]
  "Have a project or internship opportunity?
   I'm looking for ways to build real experience."
  CTA: [Get in touch →] → /contact
```

---

## Content Notes

### On "Concept" Projects

Concept projects are explicitly labeled. The spec for each concept is written
out (in `docs/specs/` or in the project description), which demonstrates that
the work is research-grounded, not invented on the spot.

The key signal is: **a concept project with a written spec is more credible than
a half-built project with no clear goal.**

---

## Quality Gates

- [x] All 4 projects render correctly
- [x] Status badges are visible and correctly styled
- [x] Tech tags display for each project
- [x] Links work for completed projects
- [x] Concept projects have clear labels
- [x] Grid is responsive at all breakpoints
- [x] `npm run typecheck` passes
- [x] `npm run build` succeeds

---

## Notes for AI Workflow

AI was used to:

- Research what kinds of projects appear in AI engineering portfolios
- Draft project descriptions (revised for specificity and honesty)
- Generate project card illustration prompts (for Gemini image generation)

Human judgment was applied to:

- Which projects to include (only ones with clear professional signal)
- Choosing to label concepts honestly rather than presenting them as built
- Writing the "What this shows" line for each project (this required judgment)
