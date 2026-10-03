import { Badge } from "@/components/ui/badge";
import Section from "@/components/ui/section";
import { PROFILE } from "@/data/profile";
import { SKILLS } from "@/data/skills";

export default function About() {
  return (
    <Section id="about" heading="About Me">
      <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
        {PROFILE.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <h3 className="mt-8 font-semibold">Skills</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <li key={skill}>
            <Badge variant="outline">{skill}</Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
