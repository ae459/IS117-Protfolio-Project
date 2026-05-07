# Phase 1 — Design System & Global Styles

## Goal

Establish the visual identity of the portfolio through a CSS token system,
typography choices, color palette, and spacing scale. This phase produces no
visible pages — it produces the foundation that every page will inherit.

---

## Problem Statement

A portfolio without a coherent design system looks accidental. Every color,
spacing, and font decision should feel intentional and repeatable. The design
system must communicate the professional identity of an AI Forward Engineer:
technical precision, forward-thinking, and intelligent restraint.

---

## Deliverables

- [ ] `app/globals.css` with full CSS custom property token system
- [ ] Typography tokens (display font, body font, scale)
- [ ] Color palette tokens (primary surface, ink, accent, muted)
- [ ] Spacing scale tokens (phi-based or consistent modular scale)
- [ ] `lib/utils.ts` with `cn()` helper (clsx + tailwind-merge)
- [ ] Tailwind configured to consume custom tokens via CSS variables
- [ ] CVA (class-variance-authority) installed for component variants
- [ ] Base component: `components/ui/panel.tsx`
- [ ] Base component: `components/ui/button.tsx`
- [ ] Base component: `components/ui/section-heading.tsx`
- [ ] Re-export from `components/ui/index.ts`

---

## Visual Identity Direction

**Professional Archetype:** AI Forward Engineer
**Tone:** Precise, ambitious, grounded — not flashy or generic

### Color System

| Token             | Value                    | Usage                              |
| ----------------- | ------------------------ | ---------------------------------- |
| `--background`    | `#0f0f11`                | Page background (dark, near-black) |
| `--surface-1`     | `#17181c`                | Card / panel surface               |
| `--surface-2`     | `#1e2028`                | Elevated surface                   |
| `--foreground`    | `#f0f0f2`                | Primary text                       |
| `--ink-80`        | `rgba(240,240,242,0.80)` | Secondary text                     |
| `--ink-60`        | `rgba(240,240,242,0.60)` | Muted text                         |
| `--ink-20`        | `rgba(240,240,242,0.20)` | Borders                            |
| `--ink-10`        | `rgba(240,240,242,0.10)` | Subtle borders                     |
| `--accent`        | `#6366f1`                | Indigo — primary accent (AI/tech)  |
| `--accent-strong` | `#818cf8`                | Lighter indigo for hover states    |
| `--accent-muted`  | `rgba(99,102,241,0.15)`  | Accent tint for card backgrounds   |

**Rationale:** Dark palette signals technical seriousness. Indigo accent is
widely associated with AI/ML tooling (VS Code, Hugging Face, many AI products).
The ink scale gives fine-grained control over text hierarchy without needing
separate named colors.

### Typography

| Token            | Value                         | Usage               |
| ---------------- | ----------------------------- | ------------------- |
| `--font-display` | `'Inter', sans-serif`         | Headings, hero text |
| `--font-body`    | `'Inter', sans-serif`         | Body copy           |
| `--font-mono`    | `'JetBrains Mono', monospace` | Code, tech labels   |

**Type Scale (modular, ratio 1.25):**

- `--text-xs`: 0.75rem
- `--text-sm`: 0.875rem
- `--text-base`: 1rem
- `--text-lg`: 1.25rem
- `--text-xl`: 1.563rem
- `--text-2xl`: 1.953rem
- `--text-3xl`: 2.441rem
- `--text-4xl`: 3.052rem

### Spacing

Uses Tailwind's default scale plus custom phi-based tokens:

- `--space-phi-1`: 0.618rem
- `--space-phi-2`: 1rem
- `--space-phi-3`: 1.618rem
- `--space-phi-4`: 2.618rem
- `--space-phi-5`: 4.236rem

---

## Base Components

### `components/ui/panel.tsx`

A surface wrapper with variant support:

- `default` — standard card with border
- `elevated` — slight shadow lift
- `accent` — subtle accent tint background
- `ghost` — transparent, border only

### `components/ui/button.tsx`

A button with variants:

- `primary` — solid accent fill
- `secondary` — outlined
- `ghost` — text-only with hover

### `components/ui/section-heading.tsx`

A reusable heading block with:

- optional `eyebrow` (small uppercase label above heading)
- `title` (main heading)
- optional `description` (sub-copy below)

---

## CSS Architecture Rules

1. **Tokens live in `:root` inside `globals.css`** — no inline style tokens
2. **Tailwind utilities for layout** — gaps, padding, flex, grid
3. **CSS custom properties for brand values** — colors, fonts, radii
4. **CVA for component variants** — no conditional className strings inline
5. **`cn()` everywhere** — merge Tailwind classes safely

---

## Quality Gates

- [ ] All tokens defined in `globals.css`
- [ ] `cn()` utility available and tested
- [ ] Button, Panel, SectionHeading render without TypeScript errors
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes

---

## Notes for AI Workflow

AI (ChatGPT) was used to:

- Generate the initial color palette candidates
- Suggest modular type scale ratios
- Draft CVA variant structures for Panel and Button

Human judgment was applied to:

- Final color selection (indigo over blue/green alternatives)
- Deciding dark vs. light theme (dark chosen for AI/tech credibility)
- Keeping the palette restrained (only one accent color)
