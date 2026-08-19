# Hennani Ayoub Brahim — Developer Portfolio

A modern, bilingual (EN/FR) personal developer portfolio built with React, TypeScript and
Vite. Content is extracted directly from the owner's CV and kept in typed, per-language data
files. The site opens with a playful, skippable coding-terminal intro and features an
interactive "skills constellation" instead of a plain technology grid.

## 1. Overview

- **Public portfolio only** — there is no admin area; all content lives in versioned
  TypeScript data files under `src/data/`.
- **Bilingual**: detects the browser language on first visit (French if it starts with
  `fr`, English otherwise), remembers the choice in `localStorage`, and lets the visitor
  switch manually at any time without a page reload.
- **Intro experience**: a typed, terminal-style Q&A sequence on first visit (skippable,
  replayable from the footer); a short splash on return visits.
- **Skills section**: an interactive "constellation" of real technology logos orbiting a
  central node, with hover/tap glow, connecting lines, and a detail panel — grouped by
  domain (languages, frontend, backend, databases, mobile, DevOps).
- **Design**: dark-mode-first theme (defaults to system preference, persisted in
  `localStorage`), full light theme, motion respecting `prefers-reduced-motion`.

## 2. Features

- Responsive layout, tested conceptually from 320px to 1920px, no horizontal scroll.
- Complete dark/light theming via CSS custom properties (not a simple color invert).
- Automatic EN/FR language detection with manual override; every section (including CV
  data) is translated, not just UI chrome.
- Accessible: semantic HTML, visible focus states, `aria-*` attributes on interactive
  widgets (nav, modal, tabs, skills constellation), keyboard-dismissible project modal,
  reduced-motion-aware intro and constellation.
- SEO basics: meta description, Open Graph/Twitter tags, `robots.txt`, `sitemap.xml`.
- Content-driven architecture: everything under `src/data/*.ts` traces back to the CV.

## 3. Tech Stack

| Layer      | Choice                                    |
|------------|--------------------------------------------|
| Framework  | React 19 + TypeScript                      |
| Build tool | Vite                                       |
| Styling    | Tailwind CSS v4 (`@tailwindcss/vite`)      |
| Routing    | React Router                               |
| Animation  | Framer Motion + lightweight CSS/SVG        |
| Icons      | lucide-react, react-icons (brand logos)    |

## 4. Project Structure

```
portfolio/
├── public/
│   ├── cv/                     # CV PDF served statically
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, ThemeToggle, LanguageToggle
│   │   ├── skills/               # SkillConstellation, SkillDetailPanel, layout math, icon map
│   │   └── ui/                   # Button, Tag, Container, SectionHeading, ApiConsole,
│   │                              #   ProjectModal, BrandIcons (custom GitHub/LinkedIn SVGs)
│   ├── data/                     # profile.ts, experience.ts, projects.ts, education.ts, skills.ts
│   │                              #   ← source of truth, extracted from the CV, per language
│   ├── hooks/                    # useTheme, useScrollSpy, useReducedMotion
│   ├── i18n/                     # LanguageContext, translations.ts, detectLang.ts
│   ├── intro/                    # IntroOverlay, IntroTerminal, ShortSplash, useTypewriter,
│   │                              #   introScript.ts, introStorage.ts
│   ├── layouts/                  # RootLayout
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── sections/                 # Hero, About, Experience, Projects, TechStack (skills),
│   │                              #   Education, Resume, Contact
│   ├── types/                    # Shared TypeScript interfaces
│   ├── App.tsx                   # Router + intro overlay wiring
│   ├── index.css                 # Design tokens (Tailwind v4 @theme) + global styles
│   └── main.tsx                  # Wraps App in LanguageProvider
├── index.html
└── vite.config.ts
```

## 5. Installation

Requires Node.js 18+.

```bash
npm install
```

## 6. Running Locally

```bash
npm run dev
```

Visit `http://localhost:5173`.

## 7. Building for Production

```bash
npm run build   # type-checks with tsc, then builds with Vite into dist/
npm run preview # serve the production build locally to sanity-check it
```

## 8. Language System

- `src/i18n/detectLang.ts` — reads `navigator.language` on first visit; anything starting
  with `fr` → French, everything else → English. The choice is then persisted in
  `localStorage` (`portfolio-lang`) and used on every later visit.
- `src/i18n/translations.ts` — UI chrome strings (nav, buttons, labels) as a flat
  `{ en: {...}, fr: {...} }` dictionary, accessed via `t("some.key")`.
- `src/data/*.ts` — CV content (profile, experience, projects, education) is exported as
  `Record<Lang, T[]>` maps (e.g. `experiencesByLang`), so each section simply reads
  `experiencesByLang[lang]`. Company names, dates-as-data and tech names are shared;
  everything a recruiter reads as prose is properly translated, not machine-inferred.
- Switching language never reloads the page or remounts the router — only text content
  re-renders, so scroll position and animations are preserved.

## 9. The Intro Experience

- First visit: `IntroTerminal` runs a short, typed Q&A sequence (`src/intro/introScript.ts`)
  in a terminal-styled window matching the portfolio's own design tokens. Every question
  types on screen, then reveals its options; the chosen answer is echoed like a shell
  command before the next question types in.
- **Skip intro** is always visible and jumps straight to the loading transition.
- On completion (or skip), a short progress-bar transition plays and `localStorage`
  (`portfolioIntroCompleted`) is set so the full sequence doesn't run again.
- Return visits show a brief, elegant splash (`ShortSplash`) instead of the full sequence.
- **Replay intro** is available in the footer at any time and always plays the full
  sequence again, regardless of the stored flag.
- `prefers-reduced-motion` disables the typing animation (text appears instantly) and
  shortens/removes the progress-bar animation, without removing any functionality.

## 10. The Skills Constellation

- `src/data/skills.ts` — `skillNodes` lists every CV technology that has a real,
  recognizable logo (via `react-icons`); `extraSkillsByLang` lists CV skills without a
  standalone logo (Spring Security, methodologies, CI/CD, etc.), shown as a supporting tag
  list grouped by domain underneath the constellation.
- `src/components/skills/layout.ts` — pure function computing each node's position on a
  per-domain concentric ring (percentage coordinates, so the whole scene scales
  responsively with its container — no per-breakpoint recalculation needed).
- `src/components/skills/SkillConstellation.tsx` — renders the core node, SVG connector
  lines, and floating tech nodes; tracks pointer position to apply a subtle 3D tilt
  (disabled on touch devices and when `prefers-reduced-motion` is set) instead of a heavy
  3D/WebGL library, keeping the bundle light while still feeling alive.
- Hovering (or focusing via keyboard) a node highlights its connector line and shows a
  name tooltip; clicking/tapping opens `SkillDetailPanel` with the technology's name,
  domain, and a short description grounded in the actual CV projects.

## 11. Admin Area

There is no admin area in this version of the project. All content lives in
`src/data/*.ts` and is updated by editing those files directly and redeploying — this is a
personal portfolio, not a CMS-backed application.

## 12. Environment Variables

None are required to run the site. `index.html`/`vite.config.ts` need no secrets.

## 13. Deployment

The app builds to a static `dist/` folder and can be deployed to any static host
(Vercel, Netlify, GitHub Pages, S3 + CloudFront, etc.):

```bash
npm run build
# deploy the dist/ folder
```

Since this is a client-side-routed SPA, configure your host to rewrite all paths to
`/index.html` (e.g. a `vercel.json` rewrite or Netlify `_redirects` file) so a hard refresh
on any route still resolves correctly.

## 14. Contact Form

The contact form in the **Contact** section is UI-only — submitting it shows a message
explaining that sending isn't configured yet, rather than pretending the message was sent.
To make it functional, wire it to a form/email service of your choice and update
`src/sections/Contact.tsx`.

## 15. Content Source of Truth

All content under `src/data/*.ts` is derived directly from the personal CV supplied for
this project, in both English and French — no experience, technology, statistic, or
project has been invented. Where the CV didn't specify something (e.g. a live demo URL),
the field is simply left empty/omitted rather than filled with a placeholder.
