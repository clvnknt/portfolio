import type { SkillGroup } from "@/types/skill-group";

// Drawn from LinkedIn top skills, the stacks in `projects.ts`, and the work record.
// Keep platform, client, and vendor names out (see CLAUDE.md on confidential work).
export const SKILLS: SkillGroup[] = [
  {
    label: "Front end",
    items: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Low-code dashboards", "Figma"],
  },
  {
    label: "Back end and data",
    items: ["Laravel", "PHP", "MySQL", "PostgreSQL", "TimescaleDB", "Query performance tuning"],
  },
  {
    label: "Tools and delivery",
    items: ["Git", "Docker Compose", "Linux", "GitLab", "ClickUp", "Release management", "Test automation"],
  },
  {
    label: "Working style",
    items: [
      "Debugging and root-cause analysis",
      "Technical writing",
      "Sprint planning",
      "Stakeholder communication",
    ],
  },
];
