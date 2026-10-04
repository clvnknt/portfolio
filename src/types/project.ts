export interface Project {
  title: string;
  summary: string;
  /** Where it came from, e.g. "Thesis project" or "Internship". */
  context?: string;
  year?: string;
  /** Only "in-progress" shows a badge. Use "complete" for anything not being actively worked on. */
  status: "complete" | "in-progress";
  stack: string[];
  /** Screenshot under public/images/projects/. */
  image?: { src: string; alt: string };
  repoUrl?: string;
  liveUrl?: string;
}
