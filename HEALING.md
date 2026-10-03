# HEALING.md

Known issues, their symptoms, and how to fix them. Add a new entry whenever a bug is found; move it to **Fixed** once resolved.

## Open Issues

### 1. Placeholder branding

- **Symptom:** Navbar shows the Flowbite logo and name. Footer says "© 2023 Flowbite™" and its links point to `#`.
- **Fix:** Replace with your own name/logo in `src/components/layout/navbar.tsx` and `footer.tsx`. Point footer links at section anchors.

### 2. Placeholder content

- **Symptom:** Projects show hotlinked "coming soon" images. Contact is empty. Intro has no name or role (so the page has no `h1`). Certifications is hidden because its data is empty.
- **Fix:** Fill `src/data/projects.ts` and `src/data/certifications.ts`. Add contact details to `src/components/sections/contact.tsx`. Add name/role to the intro as the page's `h1`.

### 3. Incomplete timeline dates

- `src/data/experience.ts`: only the first entry has a date (`2015-2024`).

## Fixed

### Inconsistent design (`redesign`)

- **Was:** Page background stayed white in dark mode (no `body` background). Debug borders (`border-black`, `border-red-500`), cards nested in cards, mismatched widths (`m-5 pl-5` vs. navbar `max-w-screen-xl`), every heading an `h1`, mixed palette colors.
- **Fix:** Design tokens in `globals.css` with light/dark values and a `body` background. Shared `Container`. Sections use spacing and `h2` instead of cards. `Card` only for project items. Geist font.

### Angular → Next.js migration (`migrate/nextjs`)

- Dark mode now applies before first paint via an inline script, with no flash and no hydration mismatch.
- Intro photo is served from `public/images/me-formal.jpg` (the Angular version pointed at a missing `test-formal.jpg`).
- Navbar mobile menu uses React state instead of Flowbite's JS. The `flowbite` dependency is gone.
- Unit tests run headless in jsdom (Vitest). No browser install needed.

## General Recovery Steps

Use these when the app will not start or build.

1. Check the Node version: `node -v`. Next.js 16 needs Node 20.9+.
2. Reinstall dependencies cleanly:

   ```bash
   rm -rf node_modules .next out
   npm ci
   ```

3. Port 3000 already in use: `npm run dev -- -p 3001`.
4. Tailwind classes not applied: confirm `src/app/globals.css` starts with `@import "tailwindcss";` and `postcss.config.mjs` loads `@tailwindcss/postcss`. Restart the dev server.
5. Hydration warning about the `class` on `<html>`: expected and suppressed (`suppressHydrationWarning` in `layout.tsx`). The theme script adds `dark` before React hydrates.
6. Build error about a server-only feature (cookies, API route, redirect): static export does not support it. Remove it or drop `output: "export"` and deploy to a Node host.
7. Remote image fails in `next/image`: images are `unoptimized`, so any URL works. Check the URL itself.
