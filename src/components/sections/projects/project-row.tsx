import { ExternalLink } from "lucide-react";
import Image from "next/image";
import GithubIcon from "@/components/icons/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

/** One project as a row: title and meta, one-line summary, stack as plain mono text, optional links. */
export default function ProjectRow({ project }: { project: Project }) {
  const hasLinks = project.repoUrl || project.liveUrl;
  const meta = [project.context, project.year].filter(Boolean).join(" · ");

  return (
    <article className="grid gap-4 py-7 md:grid-cols-[1fr_auto] md:gap-8">
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
          {project.status === "in-progress" && <Badge variant="secondary">In progress</Badge>}
        </div>
        {meta && <p className="mt-1 font-mono text-xs tracking-wide text-muted-foreground uppercase">{meta}</p>}
        <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1 font-mono text-xs text-foreground/80" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech} className="after:ml-2 after:text-border after:content-['/'] last:after:hidden">
              {tech}
            </li>
          ))}
        </ul>
        {hasLinks && (
          <div className="mt-5 flex gap-2">
            {project.repoUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <GithubIcon data-icon="inline-start" className="size-3.5" /> Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink data-icon="inline-start" /> Live demo
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
      {project.image && (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={320}
          height={200}
          className="aspect-[16/10] w-full rounded-lg border border-border object-cover md:w-72"
        />
      )}
    </article>
  );
}
