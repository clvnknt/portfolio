# Portfolio

Personal portfolio site. A single scrolling page built with Next.js and exported as static HTML.

## Tech Stack

| Layer     | Tool                                             |
| --------- | ------------------------------------------------ |
| Framework | Next.js 16 (App Router, static export)           |
| UI        | React 19                                         |
| Language  | TypeScript 5                                     |
| Styling   | Tailwind CSS 4                                   |
| Testing   | Vitest + React Testing Library (jsdom)           |
| Linting   | ESLint 9 (`eslint-config-next`)                  |

## Prerequisites

- **Node.js** 20.9 or newer
- **npm** 10+

## Setup

1. Clone the repository:

   ```bash
   git clone <repo-url> portfolio
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000/`. The page reloads on source changes.

## Scripts

| Command              | Description                                      |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Dev server on port 3000                          |
| `npm run build`      | Static production build into `out/`              |
| `npm run lint`       | Run ESLint                                       |
| `npm test`           | Run unit tests once                              |
| `npm run test:watch` | Run unit tests in watch mode                     |

## Project Structure

```
portfolio/
├── public/
│   └── images/                 # Static images, served from /images/...
├── src/
│   ├── app/
│   │   ├── layout.tsx          # <html> shell, metadata, theme init script
│   │   ├── page.tsx            # The page: stacks all sections in order
│   │   ├── globals.css         # Tailwind import + dark-mode variant
│   │   └── favicon.ico
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx      # Client component: mobile menu + ThemeToggle
│   │   │   ├── theme-toggle.tsx
│   │   │   └── footer.tsx
│   │   ├── ui/                 # Reusable building blocks
│   │   │   ├── section.tsx     # <Section id heading> frame: card + heading + divider
│   │   │   └── card.tsx
│   │   └── sections/           # Page sections, rendered in this order
│   │       ├── intro.tsx
│   │       ├── about/          # about.tsx + timeline-item.tsx
│   │       ├── projects/       # projects.tsx + image-container.tsx
│   │       ├── certifications.tsx
│   │       └── contact.tsx
│   ├── data/                   # Site content as typed arrays
│   ├── types/                  # Interfaces for the content in data/
│   └── lib/
│       └── theme.ts            # Dark-mode init script + toggle
├── next.config.ts              # output: "export", unoptimized images
├── vitest.config.mts
├── eslint.config.mjs
├── postcss.config.mjs
└── tsconfig.json               # "@/*" maps to src/*
```

### Conventions

- **Content lives in `src/data/`**, typed by `src/types/`. To add a project, timeline entry, or certification, edit the matching data file. No component change needed.
- Components are **Server Components by default**. Add `"use client"` only when a component needs state or event handlers (currently `navbar.tsx` and `theme-toggle.tsx`).
- A component used by one section lives in that section's folder. Components used by several sections live in `components/ui/`.
- File names are kebab-case. Components are default exports in PascalCase.
- Import from `src/` with the `@/` alias.
- Styling is Tailwind utility classes only. Dark mode is the `dark` class on `<html>`.
- Tests sit next to the code they test as `*.test.ts(x)`.

## Adding a Section

1. Create `src/components/sections/<name>.tsx`:

   ```tsx
   import Section from "@/components/ui/section";

   export default function Name() {
     return <Section id="<name>" heading="Title">{/* content */}</Section>;
   }
   ```

2. If the section shows a list, add a type in `src/types/` and the content in `src/data/`.
3. Render it in `src/app/page.tsx`.
4. Add a link to `src/data/nav-links.ts` with `href: "#<name>"`.

## Build & Deploy

```bash
npm run build
```

Output goes to `out/`. It is plain HTML/CSS/JS, so any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages). For a sub-path deploy (e.g. GitHub Pages project site), set `basePath` in `next.config.ts`.

## Troubleshooting

See [HEALING.md](./HEALING.md) for known issues and fixes.
