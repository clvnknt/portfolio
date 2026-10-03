import Section from "@/components/ui/section";
import { CERTIFICATIONS } from "@/data/certifications";
import CertificatePreview from "./certificate-preview";

export default function Certifications() {
  // Hidden until there is something to show; an empty heading reads as broken.
  if (CERTIFICATIONS.length === 0) return null;

  return (
    <Section id="certifications" heading="Certifications">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.name}>
            {cert.preview ? (
              <CertificatePreview cert={{ ...cert, preview: cert.preview }} />
            ) : (
              <p className="font-semibold">{cert.name}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
