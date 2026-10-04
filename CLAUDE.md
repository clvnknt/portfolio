@AGENTS.md

# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + shadcn/ui (Radix, Nova preset, lucide icons), built as a static export (`output: "export"` in `next.config.ts`). Tests use Vitest + React Testing Library.

`AGENTS.md` is managed by `next dev` (it re-adds its block). Do not put project notes there.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server at http://localhost:3000
npm run build        # static build -> out/
npm run lint         # ESLint
npm test             # Vitest, single run
```

Run `npm run lint`, `npm test`, and `npm run build` before committing.

## Deploying

Hosted on Vercel from `main` (Next.js preset; the static export in `out/` needs no extra config). `src/lib/site.ts` builds the absolute site URL for the sitemap, robots.txt, and social-card metadata: it uses `NEXT_PUBLIC_SITE_URL` if set, else Vercel's production URL, else localhost. Set `NEXT_PUBLIC_SITE_URL` in Vercel once there is a custom domain. The share image is `src/app/opengraph-image.png` (copied to `twitter-image.png`), 1200x630.

## Architecture

- `src/app/page.tsx` is the whole site. It renders: Navbar, Hero, Education & Experience, Projects, Skills & Certifications, Footer. There is no Contact section; the hero buttons (email, LinkedIn, GitHub) are the contact path.
- `src/app/layout.tsx` holds metadata and an inline script (`THEME_INIT_SCRIPT` from `src/lib/theme.ts`) that sets the `dark` class before first paint.
- `src/components/sections/` = page sections. A child used by one section lives inside that section's folder.
- `src/components/ui/` = shadcn/ui components (`Button`, `Card`, `Badge`, `Dialog`; added via `npx shadcn@latest add`) plus our `Section` (`id` anchor, label rail with a mono `eyebrow` index + `h2`, content on the right) and `Container` (max width + side padding). `Card` is currently unused.
- `src/components/icons/` = brand icons lucide doesn't ship (GitHub, LinkedIn, Gmail).
- `src/components/layout/` = `Navbar` (client: mobile menu state), `ThemeToggle` (client), `Footer`.
- `src/data/` = content (`PROFILE`, `SKILLS`, `TIMELINE`, `PROJECTS`, `CERTIFICATIONS`, `NAV_LINKS`). Navbar, hero, and footer read the name/links from `PROFILE`. `src/types/` = their interfaces.
- No routes besides `/`. Navigation is in-page anchors (`href="#id"`) targeting each `<Section id>`.

## Conventions

- Server Components by default. Add `"use client"` only for state, effects, or event handlers.
- Content changes go in `src/data/`, not components. Update the interface in `src/types/` first.
- Tailwind utilities only. Use the shadcn token names from `globals.css` (`background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `muted-foreground`, `accent`, `border`, `ring`), never raw palette colors (`gray-800`, `blue-600`). Note `muted`/`accent` are background colors; use `text-muted-foreground` for secondary text. Tokens have light and dark values, so `dark:` variants are rarely needed. Add a new token instead of a one-off color.
- Layout: everything sits inside `<Container>`. Sections are separated by spacing and a top border, not cards. Use shadcn `Card` only for repeated items (projects). Use `Button` (with `asChild` for links) and `Badge` instead of hand-styled equivalents. One `h1` per page (hero); section headings are `h2`.
- Fonts are Geist (`--font-sans`) and Geist Mono (`--font-mono`) via `next/font`. Use `font-mono` for eyebrows, dates, and small labels. Palette is warm paper/ink neutrals with a burnt-orange primary; change it in `globals.css` only.
- `shadcn init` rewrites `globals.css` and `layout.tsx`. If you re-run it, restore our token values and the theme script afterwards.
- Work for Boomering and Cloudstaff is confidential. The employer names may appear on the site (timeline and bio). Never name the internal project, the client or its industry, the vendor or platform, feature names, or coworkers, and describe the work generically (see `TIMELINE` in `src/data/timeline.ts`). Do not tie the ShiftSync project card to Cloudstaff in its text. Source work records live outside the repo; do not put them in `public/`.
- Theme-dependent UI must render the same on server and client. Use `dark:` classes (see `theme-toggle.tsx`), not JS state read from `localStorage`.
- Use `next/image` for images. Local images go in `public/images/`.
- Static export limits: no API routes, server actions, cookies, redirects/rewrites, or default image optimization.
- Kebab-case file names, default-exported PascalCase components, `@/` imports.
- Tests go next to the code as `*.test.ts(x)`.

Known bugs and fixes live in [HEALING.md](./HEALING.md). Update it when you fix or find one.
