import type { TimelineEntry } from "@/types/timeline-entry";

// Oldest first: the timeline reads left to right (top to bottom on mobile).
// TODO(owner): add a `description` to each entry.
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
    logo: "/images/logos/cloudstaff.png",
  },
  {
    title: "Junior Web Developer",
    organization: "Boomering Inc",
    date: "Nov 2024 - Present",
    logo: "/images/logos/boomering.png",
  },
];
