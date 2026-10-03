import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Section from "./section";

test("renders the heading inside an anchor target", () => {
  const { container } = render(
    <Section id="about" heading="About Me">
      <p>Body</p>
    </Section>,
  );

  expect(screen.getByRole("heading", { name: "About Me" })).toBeTruthy();
  expect(screen.getByText("Body")).toBeTruthy();
  expect(container.querySelector("section#about")).toBeTruthy();
});
