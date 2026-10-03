@AGENTS.md

# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4, built as a static export (`output: "export"` in `next.config.ts`). Tests use Vitest + React Testing Library.

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

## Architecture

- `src/app/page.tsx` is the whole site. It renders: Navbar, Intro, About, Projects, Certifications, Contact, Footer.
- `src/app/layout.tsx` holds metadata and an inline script (`THEME_INIT_SCRIPT` from `src/lib/theme.ts`) that sets the `dark` class before first paint.
- `src/components/sections/` = page sections. A child used by one section lives inside that section's folder.
- `src/components/ui/` = shared pieces: `Section` (`id` anchor + vertical spacing + `h2`), `Container` (max width + side padding), `Card` (bordered surface).
- `src/components/layout/` = `Navbar` (client: mobile menu state), `ThemeToggle` (client), `Footer`.
- `src/data/` = content (`EXPERIENCE`, `PROJECTS`, `CERTIFICATIONS`, `NAV_LINKS`). `src/types/` = their interfaces.
- No routes besides `/`. Navigation is in-page anchors (`href="#id"`) targeting each `<Section id>`.

## Conventions

- Server Components by default. Add `"use client"` only for state, effects, or event handlers.
- Content changes go in `src/data/`, not components. Update the interface in `src/types/` first.
- Tailwind utilities only. Use the design tokens from `globals.css` (`background`, `surface`, `foreground`, `muted`, `border`, `accent`, `accent-foreground`), never raw palette colors (`gray-800`, `blue-600`). Tokens have light and dark values, so `dark:` variants are rarely needed. Add a new token instead of a one-off color.
- Layout: everything sits inside `<Container>`. Sections are separated by spacing and a top border, not cards. Use `Card` only for repeated items (projects). One `h1` per page (hero); section headings are `h2`.
- Font is Geist via `next/font` (`--font-sans`).
- Theme-dependent UI must render the same on server and client. Use `dark:` classes (see `theme-toggle.tsx`), not JS state read from `localStorage`.
- Use `next/image` for images. Local images go in `public/images/`.
- Static export limits: no API routes, server actions, cookies, redirects/rewrites, or default image optimization.
- Kebab-case file names, default-exported PascalCase components, `@/` imports.
- Tests go next to the code as `*.test.ts(x)`.

Known bugs and fixes live in [HEALING.md](./HEALING.md). Update it when you fix or find one.
