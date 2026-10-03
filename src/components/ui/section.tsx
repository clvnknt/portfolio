import type { ReactNode } from "react";
import Container from "./container";

/** Standard page section. `id` is the anchor target for navbar links. */
export default function Section({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children?: ReactNode;
}) {
  return (
    // scroll-mt clears the sticky navbar when jumping to an anchor.
    <section id={id} className="scroll-mt-16 border-t border-border py-16 sm:py-24">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{heading}</h2>
        {children && <div className="mt-8 sm:mt-10">{children}</div>}
      </Container>
    </section>
  );
}
