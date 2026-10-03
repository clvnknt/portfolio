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
      <div className="mt-4 space-y-5">
        {SKILLS.map((group) => (
          <div key={group.label}>
            <h4 className="text-sm text-muted-foreground">{group.label}</h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li key={skill}>
                  <Badge variant="outline">{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
