# mnshakib.com — Frontend

Personal portfolio for **Nazmus Shakib** — Founder of UpscaleBD, CSMO at MAAC, Product Strategy Lead at TorontoCreatives. Built with Next.js 15 (App Router) + TypeScript + Tailwind CSS.

---

## ⚡ Quick Start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build && npm start    # production
```

Requires Node 20+.

---

## 🗂 Project Structure

The codebase is organized so any change has **one obvious place** to make it.

```
mnshakib-web/
│
├── app/                          ← Next.js 15 App Router (pages)
│   ├── layout.tsx                ← Global shell (nav + footer wrap every page)
│   ├── page.tsx                  ← Home (/)
│   ├── about/page.tsx
│   ├── practice/page.tsx
│   ├── experience/page.tsx
│   ├── work/page.tsx
│   ├── ventures/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css               ← Design tokens (colors, fonts)
│   └── not-found.tsx             ← 404 page
│
├── components/                   ← Reusable UI
│   ├── nav/
│   │   ├── SiteNav.tsx           ← Top nav with active-page detection
│   │   └── Breadcrumb.tsx        ← "Home / About" trail
│   │
│   ├── ui/                       ← Primitive building blocks
│   │   ├── Button.tsx            ← Primary, ghost, text variants
│   │   ├── Container.tsx         ← Max-width wrapper
│   │   ├── SectionLabel.tsx      ← "01 · About" eyebrow
│   │   ├── PageHero.tsx          ← Subpage header (eyebrow + h1 + subtitle)
│   │   └── Tag.tsx               ← Service area tag pill
│   │
│   ├── sections/                 ← Page sections
│   │   ├── HomeHero.tsx          ← Big home hero with profile frame
│   │   ├── TeaserGrid.tsx        ← 6 home teaser cards
│   │   ├── Timeline.tsx          ← Career timeline (Experience page)
│   │   ├── ServicesGrid.tsx      ← 6 practice cards (Practice page)
│   │   ├── ProjectsList.tsx      ← Work engagements list
│   │   ├── ProductsGrid.tsx      ← UpscaleBD products (Ventures page)
│   │   ├── Testimonials.tsx      ← Reviews (on About page)
│   │   ├── Credentials.tsx       ← Education + certifications grid
│   │   ├── AboutNarrative.tsx    ← Bio paragraphs + pull-quote + stats
│   │   └── ContactDetails.tsx    ← Contact page right column
│   │
│   └── footer/
│       ├── CtaStrip.tsx          ← "Have a hard problem worth solving?" band
│       └── SiteFooter.tsx        ← Copyright + social links
│
├── lib/
│   ├── content/                  ← ⭐ ALL EDITABLE CONTENT LIVES HERE ⭐
│   │   ├── site.ts               ← Hero copy, about narrative, contact info
│   │   ├── experiences.ts        ← Career timeline entries
│   │   ├── educations.ts         ← Degrees
│   │   ├── certifications.ts     ← Active certifications
│   │   ├── services.ts           ← 6 practice areas
│   │   ├── projects.ts           ← Selected work entries
│   │   ├── products.ts           ← UpscaleBD product family
│   │   └── reviews.ts            ← Testimonials
│   │
│   ├── types.ts                  ← TypeScript interfaces for all content
│   └── utils.ts                  ← Tiny helpers (cn for class names)
│
├── public/
│   └── (logos, photos, og-image.png)
│
├── tailwind.config.ts            ← Theme tokens (navy + gold palette)
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## ✏️ How to Edit Content

**Adding a new job to the career timeline:**

```ts
// lib/content/experiences.ts
export const experiences: Experience[] = [
  {
    id: "new-role",
    role: "Some New Role",
    company: "Some Company",
    location: "City, Country",
    startDate: "2026",
    endDate: "Present",
    isCurrent: true,
    description: "...",
    bullets: ["bullet 1", "bullet 2"],
  },
  // ... existing entries
];
```

Done. Site regenerates on save in dev, or rebuild for prod.

**Changing the hero headline:**

```ts
// lib/content/site.ts
export const site = {
  hero: {
    headline: "New headline goes here...",
    // ...
  },
};
```

**Adding a new project:** edit `lib/content/projects.ts`.
**Adding a testimonial:** edit `lib/content/reviews.ts`.

That's the whole workflow. No DB, no CMS, no admin panel. Content is code, code is content.

---

## 🎨 Design System

Defined in `tailwind.config.ts` + `app/globals.css`. All colors come from CSS variables so the theme can be swapped by editing one file.

**Palette:**

- `--bg`: `#0A1628` (deep navy)
- `--bg-elev`: `#0F1F33`
- `--accent`: `#D4A84B` (warm gold)
- `--text`: `#E8EEF5`
- `--text-mute`: `#8FA3BD`

**Fonts:**

- **Fraunces** (serif): hero, section titles, project titles
- **Inter Tight** (sans): body text, buttons
- **JetBrains Mono**: section labels, dates, technical metadata

All loaded via `next/font/google` in `app/layout.tsx`.

---

## 🚀 Deployment

**Vercel (recommended — 2 min):**

1. Push to GitHub
2. Import repo in Vercel
3. Done. Auto-deploys on every push.

**Self-host on UpscaleBD VPS:**

```bash
npm run build
npm start    # serves on :3000
```

Behind Nginx as a reverse proxy.

**Static export (if no dynamic features needed):**

```bash
npm run build && npm run export
```

Drop the `out/` folder anywhere static-host.

---

## 🔄 Adding the CMS Later

When Shakib wants to edit content himself (without touching code), add Payload CMS:

1. Copy `lib/content/*.ts` schemas → Payload collection configs
2. Replace direct imports in pages (e.g. `import { experiences } from "@/lib/content/experiences"`) with Payload fetches (`payload.find({ collection: "experiences" })`)
3. Same component code, just different data source.

The page components don't care where data comes from — they take props. So swapping in a CMS is a few-hour job, not a rewrite.

---

## ✅ What's Done

- [x] All 7 pages fully built
- [x] Responsive (mobile, tablet, desktop)
- [x] Navy + gold theme matching the approved prototype
- [x] Modular component structure
- [x] All content in editable TS files
- [x] SEO metadata per page
- [x] Sticky navigation with active state
- [x] Breadcrumbs on subpages
- [x] Type-safe content schema

## 📌 Still Needs

- [ ] Real profile photo (drop in `public/profile.jpg`, update `site.ts`)
- [ ] Final email address (currently `mnshakib@upscalebd.com`)
- [ ] Real testimonial attributions (currently anonymized)
- [ ] OG image for social shares (drop in `public/og-image.png`)
- [ ] Favicon (drop in `app/icon.png`)

---

_Built for Nazmus Shakib · UpscaleBD Ltd._
