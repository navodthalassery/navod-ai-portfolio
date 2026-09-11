# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000; auto-picks 3001+ if busy)
npm run build    # production build
npm start        # serve the production build
npm run lint     # next lint
```

No test suite exists. There is no `db`/backend — this is a static, database-free site by design (see Content model below).

## Architecture

Next.js 15 App Router + TypeScript + Tailwind CSS 3, single-page site with no routing beyond `/`.

- [app/page.tsx](app/page.tsx) — the entire page. All sections (hero, about, AI focus, projects, experience, foundation, contact, footer) live in one component, with their content as inline data arrays (`focus`, `foundation`, `experience`, `projects`) at the top of the file. There is no `components/` directory — sections are inline JSX blocks in `Home()`, plus one small local helper (`SectionTitle`).
- [app/globals.css](app/globals.css) — shared utility classes used throughout page.tsx, defined via `@layer components`: `.shell` (max-width page container), `.card` (the bordered/blurred panel style used everywhere), `.eyebrow` (small uppercase section label), `.tag` (pill used for skill/tech lists). Reuse these classes instead of re-deriving the same Tailwind combinations inline.
- [app/layout.tsx](app/layout.tsx) — root layout and page `<Metadata>` (title/description used for SEO/social).
- Dark theme only (`color-scheme: dark` in globals.css, no light-mode variant). Background is a fixed radial-gradient-on-navy set in `body`; accent color is sky-blue (`sky-300`/`sky-400`), with indigo used sparingly for secondary glow accents.

## Content model

The copy deliberately separates two categories, and this distinction should be preserved when editing content:

- **Demonstrated enterprise experience** (`experience`, `foundation` arrays, About section) — based on Navod's actual professional history, presented as proven.
- **Current AI focus** (`focus` array, AI Focus section) — technologies actively being learned/built with, explicitly framed as *not* long-term production experience.

As AI projects are completed, technologies move from `focus` into concrete entries in the `projects` array rather than staying in the aspirational skills list.

## Deployment

No database/Supabase/backend required. Intended deploy path: push to GitHub, import into Vercel.
