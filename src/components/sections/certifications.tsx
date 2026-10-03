import Section from "@/components/ui/section";
import { CERTIFICATIONS } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section id="certifications" heading="Certifications">
      <ul className="space-y-2">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.name} className="dark:text-white">
            <span className="font-semibold">{cert.name}</span>
            {cert.issuer && <span> | {cert.issuer}</span>}
            {cert.date && <span className="text-sm text-gray-500 dark:text-gray-400"> ({cert.date})</span>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
