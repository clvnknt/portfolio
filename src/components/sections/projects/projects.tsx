import Section from "@/components/ui/section";
import { PROJECTS } from "@/data/projects";
import ImageContainer from "./image-container";

export default function Projects() {
  return (
    <Section id="projects" heading="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ImageContainer key={i} src={project.imageUrl} />
        ))}
      </div>
    </Section>
  );
}
