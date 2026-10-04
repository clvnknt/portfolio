export interface Project {
  title: string;
  summary: string;
  /** Where it came from, e.g. "Thesis project" or "Internship". */
  context?: string;
  year?: string;
  status: "complete" | "in-progress";
  stack: string[];
  /** Screenshot under public/images/projects/. */
  image?: { src: string; alt: string };
  repoUrl?: string;
  liveUrl?: string;
}
