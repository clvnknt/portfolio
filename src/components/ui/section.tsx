import type { ReactNode } from "react";
import Card from "./card";

/** Standard page section frame. `id` is the anchor target for navbar links. */
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
    <section id={id}>
      <Card>
        <h1 className="text-base font-bold md:text-2xl md:font-bold lg:text-4xl lg:font-extrabold dark:text-white">
          {heading}
        </h1>
        <hr className="my-4 ml-0 h-1 w-40 rounded border-0 bg-gray-200 md:my-8 md:w-56 lg:my-10 lg:w-64" />
        {children}
      </Card>
    </section>
  );
}
