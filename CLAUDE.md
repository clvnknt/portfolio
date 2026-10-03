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

- `src/app/app.component.ts` is the whole page. It renders every section in order: navbar, intro, about, projects, certifications, contact, footer. It also holds Flowbite init and dark-mode toggle logic.
- `src/app/components/` = page sections. One folder per section.
- `src/app/common/` = reusable pieces, grouped by owning area:
  - `main-layout/`: `app-navbar`, `app-footer`, `app-container`, `app-heading`, `app-hr`
  - `about/`: `app-timelapse` (content slots: `[title]`, `[date]`, `[description]`)
  - `projects/`: `app-image-container` (`@Input() src`)
- `app-routing.module.ts` has a route but `app.component` has no `<router-outlet>`. Navigation is in-page anchors (`href="#id"`), not routes.

## Conventions

- Inline templates only (`template:` in the `@Component` decorator). Do not add separate `.html` or `.css` files.
- Tailwind utility classes for all styling. Always add `dark:` variants for colors; dark mode is `darkMode: 'class'`.
- New components must be declared in `app.module.ts`.
- New sections: wrap in `<app-container>`, start with `<app-heading id="...">` + `<app-hr>`, add to `app.component.ts`, link from the navbar.
- Reusable piece used by one section goes under `common/<section>/`. Used everywhere goes under `common/main-layout/`.
- Static images go in `src/assets/images/` and are referenced as `assets/images/<file>`.
- Keep each component's `.spec.ts` next to it.

## Gotchas

- Angular 16 officially supports Node 16/18. Node 20 works with a warning.
- Specs declare only the component under test. Child selectors (`app-container`, etc.) log "is not a known element" errors. Add the child components to `declarations` or use `CUSTOM_ELEMENTS_SCHEMA`.
- `initFlowbite()` must run for Flowbite JS widgets (navbar collapse, etc.) to work.

Known bugs and fixes live in [HEALING.md](./HEALING.md). Update it when you fix or find one.
