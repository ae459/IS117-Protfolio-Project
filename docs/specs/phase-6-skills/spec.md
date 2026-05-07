# Phase 6 — Skills Page (Tools + Workflow)

## Goal

Present a clear, honest picture of the tools, technologies, and workflow
practices Amir is developing. This page must communicate both current skill
level and the direction of growth — not a list of claimed mastery, but a map
of a developing engineer's toolkit.

---

## Problem Statement

Skills pages are often useless: a random list of logos with no context. They
communicate nothing about how someone actually works or what they're building
toward.

This skills page must answer: **What does this person know, what are they
actively learning, and how do they think about using these tools together?**

---

## Deliverables

- [ ] `app/skills/page.tsx` — skills page route
- [ ] `components/content/skills/skills-hero.tsx` — page hero
- [ ] `components/content/skills/skill-category.tsx` — category block with skill items
- [ ] `components/content/skills/skill-item.tsx` — individual skill with level indicator
- [ ] `components/content/skills/workflow-section.tsx` — AI workflow explanation
- [ ] `components/content/skills/learning-roadmap.tsx` — what's next section
- [ ] `lib/content/skills.ts` — all skills data

---

## Skill Categories

### Category 1 — Languages & Runtimes
| Skill | Level | Notes |
|---|---|---|
| Python | Learning → Practicing | Primary language for AI/ML work. Used for API scripts and prompt experiments. |
| TypeScript | Practicing | Used in this portfolio project. Strong preference over plain JS. |
| HTML & CSS | Comfortable | Foundational — built multiple web projects. |
| JavaScript | Comfortable | Used throughout IS117 coursework. |

### Category 2 — Frameworks & Libraries
| Skill | Level | Notes |
|---|---|---|
| Next.js (App Router) | Learning | Used for this portfolio. App Router + static export. |
| Tailwind CSS | Practicing | Used in this project. v4 with custom token system. |
| React | Learning | Foundational to Next.js work. |
| Node.js | Familiar | Used for CLI scripts and tooling. |

### Category 3 — AI Tools & APIs
| Skill | Level | Notes |
|---|---|---|
| OpenAI API | Learning | Prompt engineering experiments, basic API integration. |
| ChatGPT / Gemini | Practicing | Used intentionally in workflow — not mindlessly. |
| GitHub Copilot | Practicing | AI pair programming — learning to direct it effectively. |
| Prompt Engineering | Practicing | Structured prompting, chain-of-thought, few-shot patterns. |

### Category 4 — Dev Tools & Workflow
| Skill | Level | Notes |
|---|---|---|
| Git & GitHub | Comfortable | Version control, branching, GitHub Pages deployment. |
| VS Code | Comfortable | Primary editor. |
| ESLint + Prettier | Learning | Code quality tools — used in this project. |
| Spec-Driven Development | Practicing | Learned from professor's methodology. Writing specs before building. |

---

## Skill Level System

Rather than progress bars (which look fake and arbitrary), use honest text labels:

| Label | Meaning |
|---|---|
| **Familiar** | I know what it is and have used it once or twice |
| **Learning** | Actively studying and using it — still building fluency |
| **Practicing** | Used on multiple projects — comfortable with core patterns |
| **Comfortable** | Reliable in this area — can work without constant reference |

**Design note:** Labels are more honest and more readable than percentage bars.
They also communicate that the student is self-aware about their level.

---

## Workflow Section

A dedicated block explaining **how** AI tools are used — not just what they are.

### My AI Workflow

> AI is a collaborator in my process — not a replacement for it. Here's how I
> actually use these tools:

**1. Research Phase**
- Use ChatGPT or Gemini to understand a new concept or technology
- Cross-reference with official docs — never accept AI output as ground truth
- Use AI to generate multiple options (e.g., design approaches, naming conventions)
  then make the decision myself

**2. Planning Phase**
- Write specs before writing code (this portfolio has 9 spec documents)
- Use AI to review a spec for gaps or inconsistencies
- Generate content drafts that I then edit for accuracy, tone, and honesty

**3. Building Phase**
- Use GitHub Copilot for boilerplate and repetitive patterns
- Direct it explicitly — "generate a TypeScript interface for X with these fields"
- Always review generated code before accepting it
- Use `typecheck` and `lint` to verify AI-generated code quality

**4. Verification Phase**
- Run quality gates after every phase
- AI-generated code that doesn't pass typecheck gets fixed or rewritten
- Test outputs are the authoritative signal — not "it looks right"

---

## Learning Roadmap Section

What's next — honest and specific:

| Timeline | Goal |
|---|---|
| Summer 2026 | Complete LangChain fundamentals — build a simple RAG system |
| Summer 2026 | Start work on Spec-to-Site Generator (see Projects) |
| Fall 2026 | Data Structures course at NJIT |
| Fall 2026 | Begin Python for Machine Learning (self-directed) |
| 2027 | First internship application in AI/ML engineering |
| 2027–2028 | Deep dive: vector databases, embeddings, production AI systems |

---

## Page Layout

```
[PAGE HERO]
  Eyebrow: "Skills"
  Title: "What I Know, What I'm Learning, What's Next"
  Lede: Honest framing — building toward, not claiming mastery

[SKILL CATEGORIES]
  4 sections, each with skill items and level labels
  Clean grid or definition-list style

[WORKFLOW SECTION]
  How AI is used in the actual development process
  4-step breakdown with honest detail

[LEARNING ROADMAP]
  Timeline of planned next steps
  Specific, dated, credible

[CALLOUT]
  "Looking for someone who builds with intention and learns fast?"
  CTA: [Let's talk →] → /contact
```

---

## Quality Gates

- [ ] All 4 skill categories render
- [ ] Skill level labels are consistent and readable
- [ ] Workflow section is present and substantive
- [ ] Learning roadmap shows realistic future steps
- [ ] Page is responsive at all breakpoints
- [ ] `npm run typecheck` passes
- [ ] `npm run build` succeeds

---

## Notes for AI Workflow

AI was used to:
- Research what skills appear in AI engineering job listings
- Suggest the level label system (progress bars vs. text labels)
- Draft initial workflow section copy (revised for accuracy)

Human judgment was applied to:
- Honest self-assessment of skill levels (not overclaiming)
- What to include in the roadmap (based on actual course plans)
- Deciding to use text labels over progress bars
