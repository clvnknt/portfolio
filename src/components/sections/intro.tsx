import Image from "next/image";
import Container from "@/components/ui/container";

export default function Intro() {
  return (
    <section id="home" className="scroll-mt-16 py-16 sm:py-24">
      <Container className="flex justify-center">
        <Image
          className="h-40 w-40 rounded-full object-cover ring-4 ring-border"
          src="/images/me-formal.jpg"
          width={160}
          height={160}
          alt="Profile photo"
          priority
        />
      </Container>
    </section>
  );
}
