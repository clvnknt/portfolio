# HEALING.md

Known issues, their symptoms, and how to fix them. Add a new entry whenever a bug is found; mark it **Fixed** (with the commit) once resolved.

## Open Issues

### 1. Intro profile photo is broken

- **Symptom:** Broken image icon in the intro section.
- **Cause:** `src/app/components/intro/intro.component.ts` references `assets/images/test-formal.jpg`. The file on disk is `src/assets/images/me-formal.jpg`.
- **Fix:** Change the `src` to `assets/images/me-formal.jpg`.

### 2. Dark mode does not apply on page load

- **Symptom:** A saved `color-theme=dark` in `localStorage` (or an OS dark preference) does not darken the page after reload.
- **Cause:** `AppComponent.ngOnInit` only toggles the icon visibility. It never adds the `dark` class to `<html>` on load. The toggle button is also commented out in `navbar.component.ts`, so the click handler never attaches.
- **Fix:**
  1. In `ngOnInit`, add `document.documentElement.classList.add('dark')` inside the dark-mode branch.
  2. Uncomment the `#theme-toggle` button in `navbar.component.ts`.
  3. Optional: move the theme logic into a `ThemeService` instead of raw DOM queries.

### 3. Navbar links do not scroll to sections

- **Symptom:** "About" and "Projects" links do nothing.
- **Cause:** Those links use `href="#"`. The About heading uses `class="#about"` instead of an `id`. Projects heading has no `id`.
- **Fix:** Set `id="about"` and `id="projects"` on the headings. Set navbar hrefs to `#about` and `#projects`.

### 4. Routing module is unused

- **Symptom:** None visible. The route `'' -> IntroComponent` never renders through the router.
- **Cause:** `app.component.ts` has no `<router-outlet>`. All sections are rendered directly. `AboutComponent` is imported but unused in `app-routing.module.ts`.
- **Fix:** Either remove the route (anchor-scroll SPA) or add `<router-outlet>` and move sections into routes. Do not do both: `IntroComponent` would render twice.

### 5. Unit tests log "is not a known element"

- **Symptom:** `npm test` logs errors such as `'app-container' is not a known element`.
- **Cause:** Each spec declares only its own component, but templates use child components.
- **Fix:** Add the child components to `declarations` in each spec, or add `schemas: [CUSTOM_ELEMENTS_SCHEMA]` to `TestBed.configureTestingModule`.

### 6. Placeholder Flowbite branding

- **Symptom:** Navbar shows the Flowbite logo and name. Footer says "© 2023 Flowbite™".
- **Fix:** Replace with your own name/logo in `navbar.component.ts` and `footer.component.ts`. Point footer links to real section anchors.

### 7. Minor code hygiene

- `AppComponent` defines `ngOnInit` without `implements OnInit`. Add it for type safety.
- Image URLs in `projects.component.ts` end with a trailing space. Trim them.
- `about.component.ts`: the first timeline entry has a date (`2015-2024`); the other entries have none.

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
