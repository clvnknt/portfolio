import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { EXPERIENCE } from "@/data/experience";
import About from "./about";

test("renders one timeline item per experience entry", () => {
  render(<About />);

  expect(screen.getAllByRole("listitem")).toHaveLength(EXPERIENCE.length);
  for (const entry of EXPERIENCE) {
    expect(screen.getByText(entry.title)).toBeTruthy();
  }
});
