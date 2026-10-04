import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { PROFILE } from "@/data/profile";
import Footer from "./footer";

test("links to email, phone, LinkedIn, and GitHub", () => {
  render(<Footer />);

  expect(screen.getByRole("link", { name: "Email" }).getAttribute("href")).toBe(`mailto:${PROFILE.email}`);
  expect(screen.getByRole("link", { name: "Phone" }).getAttribute("href")).toBe("tel:+639982545122");
  expect(screen.getByRole("link", { name: "LinkedIn" }).getAttribute("href")).toBe(PROFILE.linkedinUrl);
  expect(screen.getByRole("link", { name: "GitHub" }).getAttribute("href")).toBe(PROFILE.githubUrl);
});
