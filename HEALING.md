# HEALING.md

Known issues, their symptoms, and how to fix them. Add a new entry whenever a bug is found; mark it **Fixed** (with the commit) once resolved.

## Open Issues

### 1. Intro profile photo is broken

- **Symptom:** Broken image icon in the intro section.
- **Cause:** `src/app/sections/intro/intro.component.ts` references `assets/images/test-formal.jpg`. The file on disk is `src/assets/images/me-formal.jpg`.
- **Fix:** Change the `src` to `assets/images/me-formal.jpg`.

### 2. Unit tests log "is not a known element"

- **Symptom:** `npm test` logs errors such as `'app-container' is not a known element`.
- **Cause:** Each spec declares only its own component, but templates use child components.
- **Fix:** Add the child components to `declarations` in each spec, or add `schemas: [CUSTOM_ELEMENTS_SCHEMA]` to `TestBed.configureTestingModule`.

### 3. Placeholder Flowbite branding

- **Symptom:** Navbar shows the Flowbite logo and name. Footer says "© 2023 Flowbite™".
- **Fix:** Replace with your own name/logo in `navbar.component.ts` and `footer.component.ts`. Point footer links to real section anchors.

### 4. Minor code hygiene

- `data/experience.ts`: the first timeline entry has a date (`2015-2024`); the other entries have none.

## Fixed

### Dark mode did not apply on page load (fixed in `refactor/structure`)

- **Was:** `AppComponent` toggled icons only and never set `dark` on `<html>`. The toggle button was commented out.
- **Fix:** `core/theme.service.ts` applies the class on startup and on toggle. The navbar button calls `theme.toggle()`.

### Navbar links did not scroll to sections (fixed in `refactor/structure`)

- **Was:** About/Projects links used `href="#"`. About heading had `class="#about"` instead of an id.
- **Fix:** Every section uses `<app-section id="...">`. Navbar links point to `#about`, `#projects`, `#contact`.

### Unused routing module (fixed in `refactor/structure`)

- **Was:** `app-routing.module.ts` defined a route but there was no `<router-outlet>`.
- **Fix:** Removed the routing module. Navigation is anchor-only.

### Minor hygiene (fixed in `refactor/structure`)

- `AppComponent` now declares `implements OnInit`.
- Project image URLs moved to `data/projects.ts` without trailing spaces.

## General Recovery Steps

Use these when the app will not start or build.

1. Check the Node version: `node -v`. Use Node 18 if the CLI fails (e.g. via `nvm use 18`).
2. Reinstall dependencies cleanly:

   ```bash
   rm -rf node_modules .angular/cache
   npm ci
   ```

3. Port 4200 already in use: `npx ng serve --port 4300`.
4. Tailwind classes not applied: confirm `tailwind.config.js` `content` includes `./src/**/*.{html,ts}` and that `src/styles.css` has the `@tailwind` directives. Restart `ng serve` after config changes.
5. Flowbite widgets (collapse, dropdown) not interactive: confirm `initFlowbite()` runs in `AppComponent.ngOnInit`.
6. Karma cannot find Chrome (e.g. WSL/CI): set `CHROME_BIN` to a Chrome/Chromium binary and run `npx ng test --watch=false --browsers=ChromeHeadless`.
