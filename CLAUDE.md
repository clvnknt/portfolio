# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio. Angular 16.2 single-page app, NgModule-based (not standalone components). Styled with Tailwind CSS 3.4 and the Flowbite plugin. Tests use Karma + Jasmine.

## Commands

```bash
npm install        # install deps
npm start          # dev server at http://localhost:4200
npm run build      # production build -> dist/portfolio/
npm test           # Karma unit tests (needs Chrome)
npx ng test --watch=false --browsers=ChromeHeadless   # single headless run
```

## Architecture

- `src/app/app.component.ts` is the whole page. It renders every section in order: navbar, intro, about, projects, certifications, contact, footer. It runs `initFlowbite()`.
- `src/app/sections/` = page sections, one folder per section. A child component used only by that section lives inside it (`about/timeline-item/`, `projects/image-container/`).
- `src/app/shared/` = pieces used by several sections: `app-section` (frame: container + heading + hr), `app-container`, `app-heading`, `app-hr`.
- `src/app/layout/` = `app-navbar` (links + theme toggle), `app-footer`.
- `src/app/core/theme.service.ts` = dark mode state. Toggles `dark` on `<html>`, persists to `localStorage['color-theme']`, falls back to OS preference.
- `src/app/data/` = site content as typed arrays (`EXPERIENCE`, `PROJECTS`, `CERTIFICATIONS`). `src/app/models/` = their interfaces.
- No router. Navigation is in-page anchors (`href="#id"`) targeting the `id` on each `<app-section>`.

## Conventions

- Inline templates only (`template:` in the `@Component` decorator). Do not add separate `.html` or `.css` files.
- Content changes go in `data/`, not templates. Add fields to the interface in `models/` first.
- Tailwind utility classes for all styling. Always add `dark:` variants for colors; dark mode is `darkMode: 'class'`.
- New components must be declared in `app.module.ts`.
- New sections: wrap in `<app-section id="..." heading="...">`, add to `app.component.ts`, link from the navbar.
- Component used by one section goes inside that section's folder. Used by several goes in `shared/`. App-wide services go in `core/`.
- Static images go in `src/assets/images/` and are referenced as `assets/images/<file>`.
- Keep each component's `.spec.ts` next to it.

## Gotchas

- Angular 16 officially supports Node 16/18. Node 20 works with a warning.
- Specs declare only the component under test. Child selectors (`app-container`, etc.) log "is not a known element" errors. Add the child components to `declarations` or use `CUSTOM_ELEMENTS_SCHEMA`.
- `initFlowbite()` must run for Flowbite JS widgets (navbar collapse, etc.) to work.

Known bugs and fixes live in [HEALING.md](./HEALING.md). Update it when you fix or find one.
