import { existsSync } from "node:fs";
import { join } from "node:path";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { TIMELINE } from "@/data/timeline";
import EducationExperience from "./education-experience";

afterEach(cleanup);

test("renders one item per entry under the section heading", () => {
  const { container } = render(<EducationExperience />);

  expect(screen.getByRole("heading", { level: 2, name: "Education & Experience" })).toBeTruthy();
  expect(container.querySelectorAll("ol > li")).toHaveLength(TIMELINE.length);
  for (const entry of TIMELINE) {
    expect(screen.getByText(entry.title)).toBeTruthy();
    expect(screen.getByText(entry.organization)).toBeTruthy();
  }
});

test("shows one logo image per entry that has a logo", () => {
  const { container } = render(<EducationExperience />);

  expect(container.querySelectorAll("img")).toHaveLength(TIMELINE.filter((e) => e.logo).length);
});

test("renders each entry's highlights as list items", () => {
  render(<EducationExperience />);

  for (const highlight of TIMELINE.flatMap((entry) => entry.highlights ?? [])) {
    expect(screen.getByText(highlight)).toBeTruthy();
  }
});

test("every logo file exists in public/", () => {
  for (const entry of TIMELINE) {
    if (!entry.logo) continue;
    expect(existsSync(join(process.cwd(), "public", entry.logo)), entry.logo).toBe(true);
  }
});
