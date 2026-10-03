import type { Project } from "@/types/project";

// TODO(owner): add `repoUrl` for public repos, `liveUrl` for deployed demos,
// and `image` screenshots in public/images/projects/.
export const PROJECTS: Project[] = [
  {
    title: "CritterCare",
    summary:
      "Animal shelter management system. The public can adopt pets and report missing pets or animal cases; shelter staff review adoptions, monitor adopted pets, and export PDF reports.",
    context: "Thesis project, Angeles University Foundation",
    year: "2023–2024",
    status: "complete",
    stack: ["Laravel 10", "PHP", "MySQL", "Blade", "Bootstrap 5", "jQuery", "DomPDF"],
    highlights: [
      "Three roles (user, admin, super admin) enforced by route middleware",
      "Adoption approval flow that marks the pet adopted and opens a monitoring record",
      "PDF exports for pets, adoptions, monitoring, and case reports",
    ],
  },
  {
    title: "ShiftSync",
    summary:
      "Employee shift scheduling and time tracking. Employees clock in and out; the backend computes hours rendered, tardiness, and overtime for every shift.",
    status: "in-progress",
    stack: ["Laravel 10", "PHP", "MySQL", "Sanctum", "Angular 16", "Angular Material"],
    highlights: [
      "Scheduled jobs run every minute to create shift records and compute hours, tardiness, and overtime",
      "Sanctum-authenticated JSON API consumed by an Angular admin SPA",
      "Per-employee timezones with UTC storage",
    ],
  },
  {
    title: "Portfolio",
    summary:
      "This site. Migrated from an Angular 16 SPA to a statically exported Next.js app with a token-based design system.",
    year: "2026",
    status: "complete",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Vitest"],
    highlights: [
      "Static export: plain HTML, no server needed",
      "Light/dark theme applied before first paint",
      "Content driven by typed data files",
    ],
  },
];
