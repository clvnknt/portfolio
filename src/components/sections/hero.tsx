import { ArrowRight, FileText, Mail } from "lucide-react";
import Image from "next/image";
import GithubIcon from "@/components/icons/github-icon";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { PROFILE } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-16 py-16 sm:py-24">
      <Container className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-medium tracking-wide text-primary uppercase">{PROFILE.role}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{PROFILE.name}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{PROFILE.tagline}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">
                View projects <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer">
                <GithubIcon data-icon="inline-start" className="size-4" /> GitHub
              </a>
            </Button>
            {PROFILE.resumeUrl && (
              <Button size="lg" variant="outline" asChild>
                <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                  <FileText data-icon="inline-start" /> Resume
                </a>
              </Button>
            )}
            {PROFILE.email && (
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail data-icon="inline-start" /> Email
                </a>
              </Button>
            )}
            {PROFILE.linkedinUrl && (
              <Button size="lg" variant="outline" asChild>
                <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            )}
          </div>
        </div>

        <Image
          className="size-40 shrink-0 rounded-full object-cover ring-4 ring-border sm:size-48"
          src={PROFILE.avatar.src}
          width={192}
          height={192}
          alt={PROFILE.avatar.alt}
          priority
        />
      </Container>
    </section>
  );
}
