import Section from "@/components/ui/section";
import { PROJECTS } from "@/data/projects";
import ProjectRow from "./project-row";

export default function Projects() {
  return (
    <Section id="projects" heading="Projects" eyebrow="02">
      <ul className="divide-y divide-border border-y border-border">
        {PROJECTS.map((project) => (
          <li key={project.title}>
            <ProjectRow project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
