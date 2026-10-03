import GithubIcon from "@/components/icons/github-icon";
import Container from "@/components/ui/container";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
          <GithubIcon className="size-5" />
        </a>
      </Container>
    </footer>
  );
}
