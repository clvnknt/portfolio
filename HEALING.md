# HEALING.md

Known issues, their symptoms, and how to fix them. Add a new entry whenever a bug is found; move it to **Fixed** once resolved.

## Open Issues

### 1. Placeholder project details

- **Symptom:** Projects have no repo links, live demos, or screenshots. Contact is empty. No `resumeUrl` in the profile.
- **Fix:** Add `repoUrl`/`liveUrl`/`image` to entries in `src/data/projects.ts` (screenshots in `public/images/projects/`). Add contact details to `src/components/sections/contact.tsx`. Add `resumeUrl` to `src/data/profile.ts` with the PDF in `public/`.

### 2. Incomplete timeline dates

- `src/data/experience.ts`: the Junior High School date (`2015-2024`) overlaps college (Aug 2020 - Jul 2024) and is probably wrong. Senior High School (`2018-2020`) is inferred from the college start date.

## Fixed

### LinkedIn export with a phone number served from `public/`

- `Profile.pdf` was in `public/`, so it shipped at `/Profile.pdf`. It now lives outside the repo (`~/personal/private/`). Keep personal exports out of `public/`; use a resume without a phone number for `resumeUrl`.

### Hidden certifications and "Your Name" placeholder (`feat/hero-projects`)

- Six certifications added in `src/data/certifications.ts`, shown as thumbnails that expand in a dialog (PDFs and WebP previews in `public/certificates/`). Name, role, email, and timeline entries filled from the LinkedIn profile.

### Placeholder Flowbite branding and hotlinked images (`feat/hero-projects`)

- Navbar logo, "© 2023 Flowbite™" footer, and footer `#` links replaced by the profile name and GitHub link. Hotlinked "coming soon" images replaced by real project cards.

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
