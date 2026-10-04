import type { SkillGroup } from "@/types/skill-group";

// Drawn from LinkedIn top skills, the stacks in `projects.ts`, the work record, and the AI tools used day to day.
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
    items: ["Git", "GitLab", "Docker Compose", "Linux", "Release management", "Test automation"],
  },
  {
    label: "Project and collaboration",
    items: ["Jira", "ClickUp", "Slack", "Microsoft Teams"],
  },
  {
    label: "AI-assisted work",
    items: ["AI-assisted development", "Claude Code", "Prompt writing"],
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
