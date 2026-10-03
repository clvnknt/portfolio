# Portfolio

Personal portfolio site built as a single-page Angular application, styled with Tailwind CSS and Flowbite components.

## Tech Stack

| Layer      | Tool                                   |
| ---------- | -------------------------------------- |
| Framework  | Angular 16.2 (NgModule-based)          |
| Language   | TypeScript 5.1                         |
| Styling    | Tailwind CSS 3.4 + Flowbite 2.5 plugin |
| Testing    | Karma + Jasmine                        |
| Build tool | Angular CLI 16.2                       |

## Prerequisites

- **Node.js** `^16.14.0` or `^18.10.0` (officially supported by Angular 16). Node 20 runs but prints an "unsupported version" warning.
- **npm** 8+
- **Angular CLI** (optional globally; `npx ng` works without it)

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
   npm start
   ```

4. Open `http://localhost:4200/`. The app reloads on source changes.

## Scripts

| Command         | Description                                               |
| --------------- | --------------------------------------------------------- |
| `npm start`     | Run dev server (`ng serve`) on port 4200                  |
| `npm run build` | Production build into `dist/portfolio/`                   |
| `npm run watch` | Development build in watch mode                           |
| `npm test`      | Run unit tests with Karma (opens Chrome on port 9876)     |

## Project Structure

```
portfolio/
├── .vscode/                    # Editor launch/tasks config (ng serve, ng test)
├── src/
│   ├── index.html              # Root HTML shell
│   ├── main.ts                 # Bootstraps AppModule
│   ├── styles.css              # Global styles + Tailwind directives
│   ├── favicon.ico
│   ├── assets/
│   │   └── images/             # Static images (profile photo, etc.)
│   └── app/
│       ├── app.module.ts       # Declares every component
│       ├── app-routing.module.ts
│       ├── app.component.ts    # Root layout: stacks all page sections, theme toggle logic
│       ├── common/             # Reusable building blocks, grouped by where they are used
│       │   ├── main-layout/
│       │   │   ├── navbar/     # <app-navbar>    top navigation
│       │   │   ├── footer/     # <app-footer>    page footer
│       │   │   ├── container/  # <app-container> card wrapper (ng-content)
│       │   │   ├── heading/    # <app-heading>   section title (ng-content)
│       │   │   └── hr/         # <app-hr>        section divider
│       │   ├── about/
│       │   │   └── timelapse/  # <app-timelapse> timeline entry (title/date/description slots)
│       │   └── projects/
│       │       └── image-container/  # <app-image-container [src]> project card
│       └── components/         # Page sections, rendered in this order
│           ├── intro/          # <app-intro>          profile photo / hero
│           ├── about/          # <app-about>          education timeline
│           ├── projects/       # <app-projects>       project grid
│           ├── certifications/ # <app-certifications>
│           └── contact/        # <app-contact>
├── angular.json                # CLI workspace config
├── tailwind.config.js          # Tailwind + Flowbite plugin, class-based dark mode
├── tsconfig*.json
└── package.json
```

### Conventions

- Components use **inline templates** (`template:`), no separate `.html`/`.css` files.
- `components/` holds page sections. `common/` holds reusable pieces, grouped by the section that owns them (`main-layout`, `about`, `projects`).
- Every component is declared in `app.module.ts`.
- Styling is Tailwind utility classes only. Dark mode uses the `dark` class on `<html>`.

## Adding a Section

1. Generate the component:

   ```bash
   npx ng generate component components/<name> --inline-template --inline-style --skip-tests=false
   ```

2. Wrap content with the shared layout pieces:

   ```html
   <app-container>
     <app-heading id="<name>">Title</app-heading>
     <app-hr></app-hr>
     <!-- content -->
   </app-container>
   ```

3. Add `<app-<name>>` to the template in `app.component.ts`.
4. Add a navbar link with `href="#<name>"`.

## Build & Deploy

```bash
npm run build
```

Output goes to `dist/portfolio/`. Serve it from any static host (GitHub Pages, Netlify, Vercel, Firebase Hosting). For a sub-path deploy, set the base href:

```bash
npx ng build --base-href /<sub-path>/
```

## Troubleshooting

See [HEALING.md](./HEALING.md) for known issues and fixes.
