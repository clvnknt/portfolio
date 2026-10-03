import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { PROFILE } from "@/data/profile";
import Hero from "./hero";

test("renders the name as the page's h1 and links to projects and GitHub", () => {
  render(<Hero />);

  expect(screen.getByRole("heading", { level: 1, name: PROFILE.name })).toBeTruthy();
  expect(screen.getByRole("link", { name: /View projects/ }).getAttribute("href")).toBe("#projects");
  expect(screen.getByRole("link", { name: /GitHub/ }).getAttribute("href")).toBe(PROFILE.githubUrl);
});
