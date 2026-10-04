import { existsSync } from "node:fs";
import { join } from "node:path";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { PROFILE } from "@/data/profile";
import Hero from "./hero";

afterEach(cleanup);

test("renders the name as the page's h1 and links to projects and the profiles", () => {
  render(<Hero />);

  const h1 = screen.getByRole("heading", { level: 1 });
  expect(h1.textContent?.replace(/\./g, "")).toBe(PROFILE.name);
  expect(screen.getByRole("link", { name: /See my work/ }).getAttribute("href")).toBe("#projects");
  expect(screen.getByRole("link", { name: /GitHub/ }).getAttribute("href")).toBe(PROFILE.githubUrl);
  expect(screen.getByRole("link", { name: /LinkedIn/ }).getAttribute("href")).toBe(PROFILE.linkedinUrl);
  expect(screen.getByRole("link", { name: /Email/ }).getAttribute("href")).toBe(`mailto:${PROFILE.email}`);
});

test("links to the resume PDF, which exists in public/", () => {
  render(<Hero />);

  expect(PROFILE.resumeUrl).toBeTruthy();
  expect(screen.getByRole("link", { name: /Resume/ }).getAttribute("href")).toBe(PROFILE.resumeUrl);
  expect(existsSync(join(process.cwd(), "public", PROFILE.resumeUrl!))).toBe(true);
});
