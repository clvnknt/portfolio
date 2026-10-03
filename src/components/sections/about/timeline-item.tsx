import type { TimelineEntry } from "@/types/timeline-entry";

export default function TimelineItem({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="ms-6 pb-10 last:pb-0">
      <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" aria-hidden="true" />
      <h3 className="font-semibold">{entry.title}</h3>
      {entry.date && <time className="mt-1 block text-sm text-muted">{entry.date}</time>}
      {entry.description && <p className="mt-2 leading-relaxed text-muted">{entry.description}</p>}
    </li>
  );
}
