import { ExternalLink } from "lucide-react";
import Image from "next/image";
import GithubIcon from "@/components/icons/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.repoUrl || project.liveUrl;

  return (
    <Card className="h-full overflow-hidden">
      {project.image && (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={640}
          height={400}
          className="aspect-[16/10] w-full border-b border-border object-cover"
        />
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          {project.status === "in-progress" && <Badge variant="secondary">In progress</Badge>}
        </div>
        {(project.context || project.year) && (
          <p className="text-xs text-muted-foreground">{[project.context, project.year].filter(Boolean).join(" · ")}</p>
        )}
        <CardDescription className="leading-relaxed">{project.summary}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground marker:text-primary">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      {hasLinks && (
        <CardFooter className="gap-2">
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
        </CardFooter>
      )}
    </Card>
  );
}
