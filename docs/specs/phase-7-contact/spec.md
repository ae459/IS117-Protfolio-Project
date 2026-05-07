# Phase 7 — Contact Page

## Goal

Build a contact page that makes it easy for the right people to reach Amir and
communicates who those right people are. This page closes the portfolio loop —
it is the call to action that every other page leads toward.

---

## Problem Statement

A contact page with just an email address communicates nothing about intent.
A contact page that explains who you want to hear from and why turns a passive
form into an active professional invitation.

---

## Deliverables

- [ ] `app/contact/page.tsx` — contact page route
- [ ] `components/content/contact/contact-hero.tsx` — page hero
- [ ] `components/content/contact/contact-links.tsx` — social/external links section
- [ ] `components/content/contact/audience-section.tsx` — who I want to hear from
- [ ] `lib/content/contact.ts` — contact page content data

---

## Page Structure

```
[PAGE HERO]
  Eyebrow: "Contact"
  Title: "Let's Talk"
  Lede: Open invitation, professionally toned

[WHO I WANT TO HEAR FROM]
  3 audience cards explaining ideal contacts

[CONTACT LINKS]
  GitHub — profile link
  LinkedIn — profile link
  Email — ae@njit.edu (or actual email)
  Each as a styled link card with icon

[CLOSING NOTE]
  Brief honest sentence about being a student who is serious about his direction
```

---

## Audience Section

Three cards explaining the kinds of conversations Amir is interested in:

| Eyebrow       | Who                        | Description                                                                                                                                                                                                 |
| ------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Internships   | Employers & Recruiters     | I'm actively looking for internship opportunities in AI engineering, software development, or technical roles for Summer/Fall 2026. Even if the role is entry-level, I'm ready to work hard and learn fast. |
| Collaboration | Fellow Students & Builders | If you're working on a project that uses AI in a serious way — not just as a wrapper — I'm interested in talking and potentially collaborating.                                                             |
| Mentorship    | Engineers & Practitioners  | If you work in AI engineering and are open to a short conversation about the field, I'd be grateful. I ask specific questions and I do my homework first.                                                   |

---

## Contact Links

| Platform | Handle / URL                                      | Icon          |
| -------- | ------------------------------------------------- | ------------- |
| GitHub   | github.com/AmirE (placeholder — update with real) | GitHub icon   |
| LinkedIn | linkedin.com/in/amir-e (placeholder)              | LinkedIn icon |
| Email    | Direct email link                                 | Mail icon     |

**Design:** Each link is a full-width card with:

- Platform icon (from `lucide-react`)
- Platform name as heading
- Handle/URL as sub-text
- Arrow indicator on hover

---

## No Form (Intentional Decision)

This site uses direct contact links rather than a contact form. Reasons:

1. Static export — no server to handle form submissions
2. Direct links are more authentic for a portfolio
3. A form with no backend is a dead end

If a form is needed in the future, Formspree or similar service can be
integrated without a server.

---

## Closing Note

> "I'm a freshman at NJIT. I'm not going to pretend I have years of experience.
> What I have is a clear direction, a documented workflow, and a genuine
> interest in building things that work. If that's interesting to you — reach out."

---

## Quality Gates

- [ ] All 3 contact links work correctly
- [ ] Audience section renders all 3 cards
- [ ] Page is responsive at all breakpoints
- [ ] Email link opens mail client
- [ ] GitHub/LinkedIn links open in new tab
- [ ] `npm run typecheck` passes
- [ ] `npm run build` succeeds

---

## Notes for AI Workflow

AI was used to:

- Draft the audience section card copy (revised for honesty and tone)
- Suggest the "who I want to hear from" structure

Human judgment was applied to:

- Decision not to use a form (technical + authenticity reasons)
- Closing note copy (must be genuinely Amir's voice)
- Which platforms to include
