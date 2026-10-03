import type { TimelineEntry } from "@/types/timeline-entry";

// Oldest first: the timeline reads left to right (top to bottom on mobile).
// Boomering work is confidential: keep project, client, vendor, platform, feature, and
// coworker names out of this file (see CLAUDE.md). TODO(owner): add a `description` to the AUF entry.
export const TIMELINE: TimelineEntry[] = [
  {
    title: "Bachelor's degree, Information Technology",
    organization: "Angeles University Foundation",
    date: "Aug 2020 - Jul 2024",
    logo: "/images/logos/auf.png",
  },
  {
    title: "Software Engineer Intern",
    organization: "Cloudstaff",
    date: "Feb 2024 - May 2024",
    highlights: [
      "Built a shift scheduling and time-tracking app in Laravel: clock in/out, shift records, and timesheets.",
      "Automated hours, tardiness, and overtime calculations with scheduled jobs and UTC timezone handling.",
      "Started the Angular admin app and the API behind it.",
    ],
    logo: "/images/logos/cloudstaff.png",
  },
  {
    title: "Junior Web Developer",
    organization: "Boomering Inc",
    date: "Nov 2024 - Present",
    highlights: [
      "Build and tune features for a real-time client dashboard.",
      "Coordinate releases, specs, and client reporting.",
      "Run sprint planning and tracking in ClickUp.",
    ],
    logo: "/images/logos/boomering.png",
  },
];
