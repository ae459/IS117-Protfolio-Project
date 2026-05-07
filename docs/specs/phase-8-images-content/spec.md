# Phase 8 — AI-Generated Images & Final Content

> **Status: Deferred — not implemented in this sprint.**
>
> After completing Phases 0–7 and 9, I made a deliberate decision to defer AI-generated images. The site visual design uses a code-based approach (CSS gradients, icon compositions, and the token-driven dark theme) that is self-sufficient without images. Adding generated images is a next-iteration improvement, not a requirement for a credible portfolio. The written content across all pages is fully finalized with no placeholder text.

---

## Goal

Generate all images needed across the portfolio using AI tools (Gemini /
ChatGPT image generation), integrate them into the site, and finalize all
written content so the portfolio reads as a complete, coherent professional
statement.

---

## Problem Statement

Placeholder images and draft copy make a portfolio feel unfinished. This phase
converts every piece of placeholder content into final, intentional output.

Images should support the visual identity of an AI Forward Engineer — technical,
forward-thinking, precise. They should not be generic stock photos.

---

## Deliverables

- [ ] All images generated and placed in `public/media/`
- [ ] All image references updated in components
- [ ] Hero image (`home-hero.webp`) — homepage
- [ ] About portrait/illustration (`about-portrait.webp`)
- [ ] Project card images (4 images, one per project)
- [ ] Visual divider / background texture (`divider-texture.webp`)
- [ ] All written content finalized (no "Lorem ipsum" or placeholder text)
- [ ] All meta descriptions updated
- [ ] All page `<title>` values verified

---

## Image Inventory

| File                                       | Used On              | Description                                                                        |
| ------------------------------------------ | -------------------- | ---------------------------------------------------------------------------------- |
| `public/media/home-hero.webp`              | Homepage hero        | Abstract AI/tech visual — neural network or data flow, dark palette, indigo accent |
| `public/media/about-portrait.webp`         | About page           | Stylized portrait or abstract figure representing a builder/engineer               |
| `public/media/project-portfolio-site.webp` | Projects — Card 1    | Code editor + browser preview, clean and technical                                 |
| `public/media/project-prompt-lab.webp`     | Projects — Card 2    | Abstract prompt/conversation interface, AI-themed                                  |
| `public/media/project-spec-generator.webp` | Projects — Card 3    | Spec document → code transformation, abstract flow diagram                         |
| `public/media/project-scrollytelling.webp` | Projects — Card 4    | Museum/web scroll interface, editorial feel                                        |
| `public/media/divider-texture.webp`        | Dividers/backgrounds | Subtle dark texture with faint circuit/grid pattern                                |

---

## Image Generation Prompts

### Home Hero

```
A dark, technical digital artwork with deep navy and indigo tones. Abstract
neural network nodes connected by glowing lines, flowing left to right. Clean,
minimal, professional. No text. 16:9 aspect ratio. High contrast against dark
background.
```

### About Portrait

```
A stylized digital illustration of a young engineer at a workstation, dark
background, indigo accent lighting. Abstract and editorial, not photorealistic.
Suitable for a professional portfolio. 4:3 aspect ratio.
```

### Project — Portfolio Site

```
A clean, technical illustration of a code editor on one side and a rendered
website on the other, connected by arrows. Dark theme. Minimalist. 16:10 ratio.
```

### Project — Prompt Lab

```
An abstract visualization of a conversation interface with structured prompt
blocks. Chain-of-thought arrows. Dark background with indigo highlights.
Technical and editorial. 16:10 ratio.
```

### Project — Spec Generator

```
A markdown document on the left transforming into scaffolded code files on the
right, connected by flowing arrows. Dark theme. Abstract and precise. 16:10 ratio.
```

### Project — Scrollytelling

```
An editorial museum interface on a dark screen with scroll indicators and
structured text columns. Clean and designed. Dark palette. 16:10 ratio.
```

### Divider Texture

```
A subtle dark texture with faint circuit board grid lines. Very low contrast.
Suitable as a full-bleed section background. 5:1 aspect ratio (wide banner).
```

---

## Image Specifications

- **Format:** WebP (smaller file size, better quality than PNG/JPG)
- **Max width:** 1600px (hero), 800px (project cards), 400px (portrait)
- **Optimization:** Compress before adding to `public/`
- **Alt text:** Descriptive, not decorative — every image needs a proper alt

---

## Final Content Checklist

### Homepage

- [ ] Headline finalized (not placeholder)
- [ ] Sub-copy finalized and reviewed
- [ ] Identity signal card copy finalized
- [ ] Featured project descriptions match Projects page

### About

- [ ] Story section copy is genuinely personal and specific
- [ ] Direction section is research-grounded
- [ ] Values section copy is honest
- [ ] Timeline reflects real events

### Projects

- [ ] All 4 project descriptions are final
- [ ] Tech tags are accurate
- [ ] "What this shows" lines are specific
- [ ] Status badges are correct

### Skills

- [ ] Skill levels are honest (not overclaimed)
- [ ] Workflow section is detailed and genuine
- [ ] Roadmap dates are realistic

### Contact

- [ ] All contact links are real (GitHub, LinkedIn, email)
- [ ] Audience cards are specific
- [ ] Closing note sounds like Amir, not a template

---

## Quality Gates

- [ ] All 7 images exist in `public/media/`
- [ ] No broken image references in the codebase
- [ ] All alt text is descriptive
- [ ] No placeholder text anywhere on the site
- [ ] All links (internal + external) are working
- [ ] `npm run build` succeeds with no warnings about missing images

---

## Notes for AI Workflow

AI (Gemini + ChatGPT image generation) was used to:

- Generate all 7 images using the prompts above
- Draft image generation prompts (then refined for style consistency)

Human judgment was applied to:

- Reviewing and selecting the best generated image for each slot
- Ensuring images maintain visual consistency (dark palette, indigo accent)
- Rejecting images that looked too generic or stock-photo-like
- Writing all final copy (AI drafts were edited, not used verbatim)
