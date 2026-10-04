import { existsSync } from "node:fs";
import { join } from "node:path";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { CERTIFICATIONS } from "@/data/certifications";
import { SKILLS } from "@/data/skills";
import SkillsCertifications from "./skills-certifications";

afterEach(cleanup);

test("lists every skill group with its items", () => {
  render(<SkillsCertifications />);

  expect(screen.getByRole("heading", { level: 2, name: "Skills & Certifications" })).toBeTruthy();
  for (const group of SKILLS) {
    expect(screen.getByText(group.label)).toBeTruthy();
    expect(screen.getByText(group.items.join(" · "))).toBeTruthy();
  }
});

test("shows a row button for every certification", () => {
  render(<SkillsCertifications />);

  for (const cert of CERTIFICATIONS) {
    expect(screen.getByRole("button", { name: `View ${cert.name} certificate` })).toBeTruthy();
  }
});

test("clicking a certificate expands it with a link to the PDF", () => {
  render(<SkillsCertifications />);
  const cert = CERTIFICATIONS[0];

  expect(screen.queryByRole("dialog")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: `View ${cert.name} certificate` }));

  expect(screen.getByRole("dialog", { name: cert.name })).toBeTruthy();
  expect(screen.getByRole("img", { name: new RegExp(cert.name) }).getAttribute("src")).toContain(
    "certiport-cybersecurity.webp",
  );
  expect(screen.getByRole("link", { name: /Open PDF/ }).getAttribute("href")).toBe(cert.file);
});

test("every certification file and preview exists in public/", () => {
  for (const cert of CERTIFICATIONS) {
    for (const path of [cert.file, cert.preview?.src]) {
      expect(path, cert.name).toBeTruthy();
      expect(existsSync(join(process.cwd(), "public", path!)), path).toBe(true);
    }
  }
});
