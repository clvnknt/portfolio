import type { Project } from "@/types/project";

// TODO(owner): add `repoUrl` for public repos, `liveUrl` for deployed demos,
// and `image` screenshots in public/images/projects/.
export const PROJECTS: Project[] = [
  {
    title: "CritterCare",
    summary:
      "Animal shelter management system: the public adopts pets and reports missing ones, while staff review adoptions and export PDF reports.",
    context: "Thesis project, Angeles University Foundation",
    year: "2023–2024",
    status: "complete",
    stack: ["Laravel 10", "PHP", "MySQL", "Blade", "Bootstrap 5", "jQuery", "DomPDF"],
  },
  {
    title: "ShiftSync",
    summary:
      "Shift scheduling and time tracking: employees clock in and out, and scheduled jobs compute hours, tardiness, and overtime.",
    context: "Internship project",
    year: "2024",
    status: "complete",
    stack: ["Laravel 10", "PHP", "MySQL", "Sanctum", "Angular 16", "Angular Material"],
  },
  {
    title: "Portfolio",
    summary:
      "This site, rebuilt from an Angular SPA into a statically exported Next.js app.",
    year: "2026",
    status: "complete",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Vitest"],
  },
];
