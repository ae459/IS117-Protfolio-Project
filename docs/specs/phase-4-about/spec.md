# Phase 4 — About Page (Story + Direction)

## Goal

Build a page that tells the honest story of where Amir is right now, where he
wants to go, and how he thinks about his professional development. This is the
most personal page on the site — and the most important one for credibility.

---

## Problem Statement

Most student portfolios have an "About" page that says "I love coding and am
passionate about technology." That is not a professional statement.

This page must answer a harder question: **Why does this person's direction
make sense, and why should you take them seriously right now?**

An honest freshman who has clearly researched a field and can articulate a
specific direction is more credible than a vague collection of buzzwords.

---

## Deliverables

- [ ] `app/about/page.tsx` — about page route
- [ ] `components/content/about/about-hero.tsx` — page hero
- [ ] `components/content/about/story-section.tsx` — personal story block
- [ ] `components/content/about/direction-section.tsx` — professional direction
- [ ] `components/content/about/values-section.tsx` — working values / approach
- [ ] `components/content/about/timeline-section.tsx` — learning timeline
- [ ] `lib/content/about.ts` — about page content data

---

## Page Structure

```
[PAGE HERO]
  Eyebrow: "About"
  Title: "Where I Am and Where I'm Going"
  Lede: 1 honest sentence about being a freshman with a clear direction

[STORY SECTION]
  Why I chose this direction
  What drew me to AI engineering specifically
  What I noticed about how AI is actually being used (or misused)

[PROFESSIONAL DIRECTION SECTION]
  The specific role I want: AI Forward Engineer
  What that means concretely (not vague)
  What the day-to-day of that role looks like (based on research)
  Why that appeals to me

[WORKING VALUES / APPROACH]
  3–4 values that define how I work
  Examples: Spec-first thinking, intentional AI use, verification discipline,
  learning in public

[LEARNING TIMELINE]
  A brief timeline of learning moments that shaped this direction
  Not a resume — a narrative arc of growth

[AUDIENCE STATEMENT]
  Who I am trying to reach with this portfolio
  What I want them to walk away knowing
```

---

## Story Section Content Direction

### Why AI Engineering (not just "AI")

Research-based explanation of what makes this field specific:
- AI Forward Engineers design systems where AI is an architectural component
- They understand orchestration: prompts, APIs, agent loops, retrieval, embeddings
- They work at the boundary of software engineering and applied ML
- They are not researchers — they are builders who make intelligent systems work
  in production

### The Honest Freshman Statement

> "I am a freshman. I don't have three years of work experience. What I have is
> a clear research-backed direction, the discipline to plan before I build, and
> the judgment to use AI as a tool — not a shortcut. This portfolio is evidence
> of that."

---

## Professional Direction Section

### The Role: AI Forward Engineer

Based on research into job descriptions, industry writing, and the professor's
course framework, this role involves:

**Core Responsibilities:**
- Designing prompting systems and LLM pipelines
- Integrating AI APIs into real applications
- Building retrieval-augmented generation (RAG) systems
- Orchestrating multi-step AI workflows
- Evaluating and validating AI output quality

**Key Tools:**
- Python, TypeScript, Next.js
- OpenAI API, Anthropic API
- LangChain, LlamaIndex
- Vector databases (Pinecone, Weaviate)
- Git, CI/CD pipelines

**Why this appeals to me:**
- I want to build things — not just study AI theoretically
- I'm drawn to the problem of making AI reliable, not just impressive
- I want to be the kind of engineer who can read a spec and turn it into
  working systems — with AI as part of that workflow

---

## Working Values Section

Four values as compact cards:

| Value | Description |
|---|---|
| Spec First | I write down what I'm building before I build it. Planning prevents drift. |
| Intentional AI Use | AI is a collaborator, not a replacement for judgment. I direct it; I verify its output. |
| Verification Discipline | Nothing is done until it's tested. Quality gates are not optional. |
| Learning in Public | I document my process. This portfolio is itself evidence of that practice. |

---

## Learning Timeline

| When | What |
|---|---|
| Fall 2025 | Started IS117 — first serious exposure to web development and design systems |
| Spring 2026 | Studied AI orchestration workflow through professor's reference repo |
| Spring 2026 | Built first spec-driven project using Next.js and TypeScript |
| Spring 2026 | Created this portfolio as a documented, intentional professional statement |
| Next: Fall 2026 | Plan to take Data Structures + begin LangChain/RAG project work |

---

## Quality Gates

- [ ] Page renders with all four sections
- [ ] Timeline displays correctly on mobile and desktop
- [ ] Values cards are legible at all breakpoints
- [ ] Copy is honest, specific, and professionally grounded
- [ ] `npm run typecheck` passes
- [ ] `npm run build` succeeds

---

## Notes for AI Workflow

AI was used to:
- Research what "AI Forward Engineer" means in real job listings
- Draft the direction section copy (refined significantly by hand)
- Suggest the values card structure

Human judgment was applied to:
- All personal narrative copy (this cannot be AI-written and feel genuine)
- Choosing to be honest about being a freshman (authenticity > pretense)
- Timeline events (these are real, not invented)
