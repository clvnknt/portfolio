import { existsSync } from "node:fs";
import { join } from "node:path";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { CERTIFICATIONS } from "@/data/certifications";
import Certifications from "./certifications";

afterEach(cleanup);

test("shows a thumbnail button for every certification", () => {
  render(<Certifications />);

  for (const cert of CERTIFICATIONS) {
    expect(screen.getByRole("button", { name: `View ${cert.name} certificate` })).toBeTruthy();
  }
});

test("clicking a certificate expands it with a link to the PDF", () => {
  render(<Certifications />);
  const cert = CERTIFICATIONS[0];

  expect(screen.queryByRole("dialog")).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: `View ${cert.name} certificate` }));

  const dialog = screen.getByRole("dialog", { name: cert.name });
  expect(dialog).toBeTruthy();
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
