import type { ReactNode } from "react";
import Container from "./container";

/**
 * Standard page section: a label rail on the left (sticky on large screens) and the content on the right.
 * `id` is the anchor target for navbar links; `eyebrow` is the small mono index above the heading.
 */
export default function Section({
  id,
  heading,
  eyebrow,
  children,
}: {
  id: string;
  heading: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  return (
    // scroll-mt clears the sticky navbar when jumping to an anchor.
    <section id={id} className="scroll-mt-16 border-t border-border py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[9.5rem_1fr] lg:gap-12">
        <header className="lg:sticky lg:top-24 lg:self-start">
          {eyebrow && <p className="font-mono text-xs tracking-widest text-primary uppercase">{eyebrow}</p>}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{heading}</h2>
        </header>
        {children && <div>{children}</div>}
      </Container>
    </section>
  );
}
