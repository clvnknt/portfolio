import Section from "@/components/ui/section";
import { CERTIFICATIONS } from "@/data/certifications";

export default function Certifications() {
  // Hidden until there is something to show; an empty heading reads as broken.
  if (CERTIFICATIONS.length === 0) return null;

  return (
    <Section id="certifications" heading="Certifications">
      <ul className="space-y-3">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.name}>
            <span className="font-semibold">{cert.name}</span>
            {cert.issuer && <span className="text-muted-foreground"> · {cert.issuer}</span>}
            {cert.date && <span className="text-sm text-muted-foreground"> ({cert.date})</span>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
