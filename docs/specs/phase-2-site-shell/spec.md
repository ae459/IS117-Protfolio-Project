# Phase 2 — Site Shell (Header + Footer + Layout)

## Goal

Build the persistent shell that wraps every page: the root layout, site header
with navigation, and site footer. This phase makes the site feel like a coherent
product rather than a collection of disconnected pages.

---

## Problem Statement

Without a consistent shell, each page exists in isolation. The header and footer
establish the professional identity, reinforce navigation, and make the visitor
feel oriented at all times. These components appear on every single page — they
carry the brand.

---

## Deliverables

- [ ] `app/layout.tsx` — root layout with `<html>`, `<body>`, header, footer
- [ ] `components/site/site-header.tsx` — navigation header
- [ ] `components/site/site-footer.tsx` — footer with links and identity tag
- [ ] `lib/site.ts` — site config (name, tagline, author, social links)
- [ ] `lib/site-navigation.ts` — navigation data (main nav items, footer links)
- [ ] Google Fonts integration (Inter + JetBrains Mono via `next/font`)
- [ ] Favicon and site metadata in `layout.tsx`

---

## Site Config (`lib/site.ts`)

```ts
export const siteConfig = {
  name: "Amir E.",
  role: "AI Forward Engineer",
  tagline: "Building the systems that make AI useful.",
  description:
    "Freshman at NJIT studying how to design, build, and orchestrate AI-forward systems. This is where I document the direction I am building toward.",
  github: "https://github.com/AmirE",
  linkedin: "https://linkedin.com/in/amir-e",
  email: "ae@njit.edu",
};
```

---

## Navigation Structure (`lib/site-navigation.ts`)

### Main Navigation

| Label    | Route       |
| -------- | ----------- |
| Home     | `/`         |
| About    | `/about`    |
| Projects | `/projects` |
| Skills   | `/skills`   |
| Contact  | `/contact`  |

### Footer Navigation

**Column 1 — Explore**

- Home, About, Projects

**Column 2 — Connect**

- Skills, Contact, GitHub (external)

---

## Header Design

- **Fixed top position** — stays visible on scroll
- **Left:** Name/logo mark (`Amir E. · AI Forward Engineer`)
- **Center/Right:** Nav links (desktop), hamburger menu (mobile)
- **Active state:** Accent underline on current route
- **Background:** `--surface-1` with a subtle `backdrop-blur` and bottom border
- **Height:** 64px desktop / 56px mobile

### Mobile Navigation

- Hamburger icon opens a full-width drawer
- Drawer slides in from top or right
- Uses Radix `Dialog` for accessible overlay

---

## Footer Design

- **Three-column grid** on desktop, stacked on mobile
- **Left:** Name, role tagline, brief one-line bio
- **Center:** Quick nav links (ruled list style)
- **Right:** "What I'm building toward" — 2–3 brief signal statements
- **Bottom bar:** Copyright, GitHub link, "Built with Next.js + AI"

---

## Layout Rules

```tsx
// app/layout.tsx structure
<html lang="en">
  <body>
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
  </body>
</html>
```

- `<main>` has `min-h-screen` to push footer to bottom
- Page content uses `page-shell` class: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`
- Section spacing uses `py-16 sm:py-20 lg:py-24`

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: {
    default: "Amir E. — AI Forward Engineer",
    template: "%s | Amir E.",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    title: "Amir E. — AI Forward Engineer",
    description: siteConfig.description,
  },
};
```

---

## Quality Gates

- [ ] Header renders on all pages
- [ ] Footer renders on all pages
- [ ] Active nav link is highlighted on current route
- [ ] Mobile menu opens and closes correctly
- [ ] Fonts load via `next/font` (no layout shift)
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds

---

## Notes for AI Workflow

AI (GitHub Copilot / ChatGPT) was used to:

- Draft the initial `SiteHeader` component structure
- Generate the mobile drawer pattern with Radix Dialog
- Suggest the metadata configuration

Human judgment was applied to:

- Navigation structure (what pages matter, what order)
- Footer copy ("What I'm building toward" language)
- Active state design choice (underline vs. background)
