import Section from "@/components/ui/section";
import { TIMELINE } from "@/data/timeline";
import TimelineItem from "./timeline-item";

export default function EducationExperience() {
  return (
    <Section id="education-experience" heading="Education & Experience">
      {/* Oldest first. Left to right from `md`, top to bottom on mobile. */}
      <ol className="grid gap-10 md:auto-cols-fr md:grid-flow-col md:gap-6">
        {TIMELINE.map((entry) => (
          <TimelineItem key={`${entry.organization}-${entry.title}`} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
