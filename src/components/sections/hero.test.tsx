import { existsSync } from "node:fs";
import { join } from "node:path";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { PROFILE } from "@/data/profile";
import Hero from "./hero";

afterEach(cleanup);

test("renders the name as the page's h1 and links to projects and GitHub", () => {
  render(<Hero />);

  expect(screen.getByRole("heading", { level: 1, name: PROFILE.name })).toBeTruthy();
  expect(screen.getByRole("link", { name: /View projects/ }).getAttribute("href")).toBe("#projects");
  expect(screen.getByRole("link", { name: /GitHub/ }).getAttribute("href")).toBe(PROFILE.githubUrl);
});

test("links to the resume PDF, which exists in public/", () => {
  render(<Hero />);

  expect(PROFILE.resumeUrl).toBeTruthy();
  expect(screen.getByRole("link", { name: /Resume/ }).getAttribute("href")).toBe(PROFILE.resumeUrl);
  expect(existsSync(join(process.cwd(), "public", PROFILE.resumeUrl!))).toBe(true);
});
