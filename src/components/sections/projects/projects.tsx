import Section from "@/components/ui/section";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <Section id="projects" heading="Projects">
      <ul className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
