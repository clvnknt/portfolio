import { existsSync } from "node:fs";
import { join } from "node:path";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { TIMELINE } from "@/data/timeline";
import EducationExperience from "./education-experience";

test("renders one item per entry under the section heading", () => {
  render(<EducationExperience />);

  expect(screen.getByRole("heading", { level: 2, name: "Education & Experience" })).toBeTruthy();
  expect(screen.getAllByRole("listitem")).toHaveLength(TIMELINE.length);
  for (const entry of TIMELINE) {
    expect(screen.getByText(entry.title)).toBeTruthy();
    expect(screen.getByText(entry.organization)).toBeTruthy();
  }
});

test("shows one logo image per entry that has a logo", () => {
  const { container } = render(<EducationExperience />);

  expect(container.querySelectorAll("img")).toHaveLength(TIMELINE.filter((e) => e.logo).length);
});

test("every logo file exists in public/", () => {
  for (const entry of TIMELINE) {
    if (!entry.logo) continue;
    expect(existsSync(join(process.cwd(), "public", entry.logo)), entry.logo).toBe(true);
  }
});
