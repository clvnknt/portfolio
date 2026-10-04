import Section from "@/components/ui/section";
import { CERTIFICATIONS } from "@/data/certifications";
import { SKILLS } from "@/data/skills";
import CertificatePreview from "./certificate-preview";

const subheadingClass = "font-mono text-xs tracking-widest text-muted-foreground uppercase";

export default function SkillsCertifications() {
  return (
    <Section id="skills" heading="Skills & Certifications" eyebrow="03">
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <h3 className={subheadingClass}>Skills</h3>
          <dl className="mt-5 space-y-5">
            {SKILLS.map((group) => (
              <div key={group.label}>
                <dt className="text-sm font-semibold">{group.label}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className={subheadingClass}>Certifications</h3>
          <ul className="mt-5 space-y-3">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.name}>
                {cert.preview ? (
                  <CertificatePreview cert={{ ...cert, preview: cert.preview }} />
                ) : (
                  <p className="text-sm font-medium">{cert.name}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
