import { ArrowDown, FileText, Phone } from "lucide-react";
import Image from "next/image";
import GithubIcon from "@/components/icons/github-icon";
import GmailIcon from "@/components/icons/gmail-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { PROFILE } from "@/data/profile";

const [firstNames, ...rest] = PROFILE.name.split(" ");
const lastName = rest.pop() ?? "";
const given = [firstNames, ...rest].join(" ");

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 overflow-hidden py-16 sm:py-24">
      <div className="bg-dots absolute inset-0 -z-10" aria-hidden="true" />
      <div className="bg-glow absolute inset-0 -z-10" aria-hidden="true" />

      <Container className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            {PROFILE.role} · Central Luzon, PH
          </p>
          <h1 className="mt-5 text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl">
            {given} <br />
            {lastName}
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{PROFILE.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {PROFILE.resumeUrl && (
              <Button size="lg" asChild>
                <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                  <FileText data-icon="inline-start" /> Resume
                </a>
              </Button>
            )}
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                See my work <ArrowDown data-icon="inline-end" />
              </a>
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {PROFILE.email && (
              <li>
                <a className="inline-flex items-center gap-2 transition-colors hover:text-foreground" href={`mailto:${PROFILE.email}`}>
                  <GmailIcon className="size-4" /> Email
                </a>
              </li>
            )}
            {PROFILE.phone && (
              <li>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                >
                  <Phone className="size-4" /> {PROFILE.phone}
                </a>
              </li>
            )}
            {PROFILE.linkedinUrl && (
              <li>
                <a
                  className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon className="size-4" /> LinkedIn
                </a>
              </li>
            )}
            <li>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-primary/50" aria-hidden="true" />
          <Image
            className="relative size-44 rounded-3xl bg-card object-cover sm:size-72"
            src={PROFILE.avatar.src}
            width={288}
            height={288}
            alt={PROFILE.avatar.alt}
            priority
          />
        </div>
      </Container>
    </section>
  );
}
