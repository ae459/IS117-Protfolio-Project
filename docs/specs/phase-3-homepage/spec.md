# Phase 3 — Homepage (Hero + Identity Statement)

## Goal

Build the homepage as the portfolio's front page. It must communicate who Amir
is, what direction he is moving toward, and why a visitor should keep reading —
all within the first few seconds of landing.

---

## Problem Statement

A generic homepage with "Hi, I'm Amir" is not a professional statement. The
homepage must function like a museum opening room: set the thesis, establish
the tone, and make the visitor feel oriented and curious.

This page answers: **Who is this person, and why does their direction matter?**

---

## Deliverables

- [x] `app/page.tsx` — homepage route
- [x] `components/content/home/home-hero.tsx` — full hero section
- [x] `components/content/home/identity-signals.tsx` — 3-card signal strip
- [x] `components/content/home/featured-projects-preview.tsx` — 2-card preview
- [x] `components/content/home/skills-preview.tsx` — tool/skill strip
- [x] `lib/content/homepage.ts` — homepage content data

---

## Page Structure

```
[HERO]
  Eyebrow: "AI Forward Engineer · Freshman at NJIT"
  Headline: "Building the systems that make AI useful."
  Sub-copy: 2–3 sentences establishing direction and aspiration
  CTA: [View Projects] [About Me]
  Feature Image: AI-generated portrait / abstract tech visual

[IDENTITY SIGNALS] — 3 cards
  Card 1: "What I build" — AI-integrated tools, orchestration systems
  Card 2: "How I think" — Spec-first, verify everything, use AI with judgment
  Card 3: "Where I'm headed" — AI engineering, LLM applications, systems design

[FEATURED PROJECTS PREVIEW] — 2 cards
  Brief project cards linking to /projects
  Each: title, one-line description, tech tags, [See project →]

[SKILLS PREVIEW]
  A compact strip of tool/technology badges
  Link: [See full skill set →]

[CLOSING STATEMENT]
  One strong editorial sentence about intent
  CTA: [Get in touch →]
```

---

## Hero Section Detail

### Copy Direction

**Eyebrow:** `AI Forward Engineer · Freshman at NJIT`

**Headline options (choose one):**

- "Building the systems that make AI useful."
- "Learning to engineer intelligence — not just use it."
- "AI is the medium. Systems thinking is the method."

**Sub-copy (2–3 sentences):**

> I'm a freshman at NJIT studying Computer Science with a focus on AI-forward
> engineering. I'm not just learning to use AI tools — I'm learning to design
> the workflows, architectures, and systems where AI does serious work. This
> portfolio documents that direction.

**CTA Buttons:**

- Primary: `View My Projects →`
- Secondary: `About Me`

### Feature Image

- AI-generated image (Gemini/ChatGPT)
- Style: Abstract digital/technical — neural network, data flow, or workspace
- Placement: Right side of hero (desktop), below copy (mobile)
- Aspect ratio: 4:3 or 16:10

---

## Identity Signals Section

Three compact cards in a horizontal row. Each has:

- Small eyebrow label
- Bold short title
- 2–3 sentence description

| Eyebrow          | Title                  | Description                                                                                                                                               |
| ---------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What I Build     | AI-Forward Systems     | Tools and workflows where AI is an intentional layer — not an afterthought. Automation pipelines, LLM integrations, and orchestration patterns.           |
| How I Work       | Spec First, Then Build | I plan before I code. Every project starts with a clear problem statement, research, and a written spec. AI is used as a collaborator, not a crutch.      |
| Where I'm Headed | AI Engineering         | I want to work at the intersection of software engineering and applied AI — building the infrastructure that makes intelligent systems reliable at scale. |

---

## Featured Projects Preview

Show 2 of the best project concepts from Phase 5.
Each card:

- Project title
- One-line description
- Tech tags (2–3)
- `[See project →]` link to `/projects#project-slug`

---

## Skills Preview

A compact badge strip (not the full page — that's Phase 6):

- Python · TypeScript · Next.js · LangChain · OpenAI API · Git · Tailwind CSS
- Link: `[Full skill set →]` → `/skills`

---

## Closing Statement

> "I'm at the beginning of this path. But I'm building it with intention."
> — `[Get in touch →]` → `/contact`

---

## Content Data File

`lib/content/homepage.ts` exports:

- `heroContent` — headline, sub-copy, CTAs
- `identitySignals` — array of 3 signal cards
- `featuredProjects` — 2 project preview items
- `skillPreviewItems` — badge array

---

## Quality Gates

- [x] Hero renders with correct headline and CTA buttons
- [x] Identity signals show all 3 cards correctly
- [x] Featured projects link to `/projects`
- [x] Skills preview links to `/skills`
- [x] Page is responsive (mobile/tablet/desktop)
- [x] Feature image loads correctly
- [x] `npm run typecheck` passes
- [x] `npm run build` succeeds

---

## Notes for AI Workflow

AI was used to:

- Draft hero headline options
- Write initial sub-copy (refined by hand)
- Suggest identity signal card structure
- Generate the feature image (Gemini)

Human judgment was applied to:

- Final headline selection
- Which 2 projects to feature on homepage
- Copy tone (ambitious but honest, not pretentious)
- Image art direction prompt
