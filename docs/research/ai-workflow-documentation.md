# AI Workflow Documentation

## How AI Was Used in This Project

This document records how AI tools were used throughout the portfolio project,
consistent with the professor's requirement to "explain how you used and managed AI."

The core principle: **AI was directed, not followed. Every significant decision
was made by the human. AI generated options; the human chose and refined.**

---

## Tools Used

| Tool                               | Purpose                                           |
| ---------------------------------- | ------------------------------------------------- |
| ChatGPT (GPT-4o)                   | Research, content drafting, code review           |
| GitHub Copilot                     | In-editor code assistance, boilerplate generation |
| Gemini                             | Image generation                                  |
| GitHub Copilot Chat (this session) | Architecture planning, component generation       |

---

## Phase-by-Phase AI Use Log

### Phase 0 — Project Setup

- **AI used for:** Confirming Next.js static export config, GitHub Pages `basePath` setup
- **Human decided:** Folder structure, path aliases, which tools to include
- **Verification:** `npm run build` to confirm output

### Phase 1 — Design System

- **AI used for:** Generating color palette options, suggesting CVA variant structure
- **Human decided:** Dark theme (over light), indigo accent (over blue/green), text labels over progress bars
- **Verification:** Visual review, typecheck pass

### Phase 2 — Site Shell

- **AI used for:** Drafting initial SiteHeader component, Radix Dialog mobile menu pattern
- **Human decided:** Navigation structure, footer copy, active state design
- **Verification:** All routes render correctly

### Phase 3 — Homepage

- **AI used for:** Generating 5 headline options, drafting sub-copy, suggesting card structure
- **Human decided:** Final headline selection, which identity signals to use, copy tone
- **Verification:** Page renders correctly at all breakpoints

### Phase 4 — About

- **AI used for:** Researching AI engineering role, drafting direction section copy
- **Human decided:** All personal narrative (cannot be AI-generated authentically), honest framing
- **Verification:** Content review — does it sound like a real person?

### Phase 5 — Projects

- **AI used for:** Researching what projects appear in AI engineering portfolios, drafting descriptions
- **Human decided:** Which projects to include, honest status labeling, "What this shows" lines
- **Verification:** All project cards render, links work

### Phase 6 — Skills

- **AI used for:** Researching skills in job listings, suggesting workflow section structure
- **Human decided:** Honest self-assessment of levels, roadmap dates (real, not aspirational fantasies)
- **Verification:** Content honesty review

### Phase 7 — Contact

- **AI used for:** Drafting audience card copy
- **Human decided:** Not to use a form, closing note language, which platforms to include
- **Verification:** All links work

### Phase 8 — Images

- **AI used for:** Generating all 7 images using Gemini with crafted prompts
- **Human decided:** Art direction for each image, reviewing and selecting from multiple generations
- **Verification:** Images load correctly, alt text is descriptive

### Phase 9 — Deployment

- **AI used for:** Generating GitHub Actions workflow YAML
- **Human decided:** Verifying the workflow logic, testing the live deployment
- **Verification:** GitHub Actions runs green, live site loads

---

## What AI Cannot Do (Applied Here)

This project reinforces the professor's core teaching:

1. **AI cannot decide your professional direction** — that required research and reflection
2. **AI cannot write your personal story** — that requires honesty about who you are
3. **AI cannot verify its own output** — quality gates and manual testing are non-negotiable
4. **AI cannot judge what's "good enough"** — that judgment is the most valuable skill

---

## Lessons Learned About AI Workflow

1. **Specificity in prompts produces better output**
   - Vague: "write a bio for my portfolio"
   - Specific: "write a 3-sentence intro for an AI engineering portfolio from a
     NJIT freshman who is emphasizing spec-first development and honest skill
     assessment — tone should be professional but not pretentious"

2. **AI generates options; humans choose**
   - Never accepted the first draft of anything
   - Always generated 3–5 options and selected the best elements

3. **Verification is not optional**
   - Every AI-generated code block was run through `typecheck` and `lint`
   - Every AI-generated copy block was reviewed for accuracy and tone

4. **AI accelerates — it does not replace**
   - This project would have taken 3x longer without AI assistance
   - But without human judgment, the output would have been generic and useless
