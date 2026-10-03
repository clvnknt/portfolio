import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { PROFILE } from "@/data/profile";
import { SKILLS } from "@/data/skills";
import About from "./about";

test("renders the bio paragraphs and every skill under its group", () => {
  render(<About />);

  for (const paragraph of PROFILE.bio) {
    expect(screen.getByText(paragraph)).toBeTruthy();
  }
  const total = SKILLS.reduce((sum, group) => sum + group.items.length, 0);
  expect(screen.getAllByRole("listitem")).toHaveLength(total);
  for (const group of SKILLS) {
    expect(screen.getByRole("heading", { level: 4, name: group.label })).toBeTruthy();
    for (const skill of group.items) {
      expect(screen.getByText(skill)).toBeTruthy();
    }
  }
});
