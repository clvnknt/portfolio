import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { PROFILE } from "@/data/profile";
import { SKILLS } from "@/data/skills";
import About from "./about";

test("renders the bio paragraphs and one badge per skill", () => {
  render(<About />);

  for (const paragraph of PROFILE.bio) {
    expect(screen.getByText(paragraph)).toBeTruthy();
  }
  expect(screen.getAllByRole("listitem")).toHaveLength(SKILLS.length);
  for (const skill of SKILLS) {
    expect(screen.getByText(skill)).toBeTruthy();
  }
});
