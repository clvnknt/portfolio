import Image from "next/image";
import type { TimelineEntry } from "@/types/timeline-entry";

/** First letters of the first two words, e.g. "Angeles University Foundation" -> "AU". */
function monogram(organization: string) {
  return organization
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/**
 * One stop on the timeline. The ::after pseudo-element is the connector to the next
 * item: a line down on mobile, a line to the right from `md` up. The last item has none.
 */
export default function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <li
      className="relative flex gap-4 md:flex-col md:gap-5
        after:absolute after:top-16 after:-bottom-8 after:left-7 after:w-px after:-translate-x-1/2 after:bg-border
        md:after:top-7 md:after:right-[-1.25rem] md:after:bottom-auto md:after:left-[4.5rem] md:after:h-px md:after:w-auto md:after:translate-x-0
        last:after:hidden"
    >
      <div
        className={`flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border text-sm font-semibold ${
          entry.logo ? "bg-logo-surface" : "bg-card text-muted-foreground"
        }`}
      >
        {entry.logo ? (
          <Image src={entry.logo} alt="" width={56} height={56} className="size-full object-contain p-1.5" />
        ) : (
          <span aria-hidden="true">{monogram(entry.organization)}</span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold">{entry.title}</h3>
        <p className="text-muted-foreground">{entry.organization}</p>
        {entry.date && <time className="mt-1 block text-sm text-muted-foreground">{entry.date}</time>}
        {entry.description && <p className="mt-2 leading-relaxed text-muted-foreground">{entry.description}</p>}
      </div>
    </li>
  );
}
