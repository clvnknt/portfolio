import GithubIcon from "@/components/icons/github-icon";
import GmailIcon from "@/components/icons/gmail-icon";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import Container from "@/components/ui/container";
import { PROFILE } from "@/data/profile";

const LINK_CLASS = "transition-colors hover:text-foreground";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <div className="flex items-center gap-4">
          {PROFILE.email && (
            <a href={`mailto:${PROFILE.email}`} aria-label="Email" className={LINK_CLASS}>
              <GmailIcon className="size-5" />
            </a>
          )}
          {PROFILE.linkedinUrl && (
            <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={LINK_CLASS}>
              <LinkedinIcon className="size-5" />
            </a>
          )}
          <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className={LINK_CLASS}>
            <GithubIcon className="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
