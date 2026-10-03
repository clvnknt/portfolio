import Section from "@/components/ui/section";
import { EXPERIENCE } from "@/data/experience";
import TimelineItem from "./timeline-item";

export default function About() {
  return (
    <Section id="about" heading="About Me">
      <ol className="items-center sm:flex">
        {EXPERIENCE.map((entry) => (
          <TimelineItem key={entry.title} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
