import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Navbar from "./navbar";

afterEach(cleanup);

test("menu button toggles the mobile menu", () => {
  render(<Navbar />);
  const button = screen.getByRole("button", { name: "Open main menu" });
  const menu = document.getElementById("navbar-menu")!;

  expect(button.getAttribute("aria-expanded")).toBe("false");
  expect(menu.className).toContain("hidden");

  fireEvent.click(button);

  expect(button.getAttribute("aria-expanded")).toBe("true");
  expect(menu.className).not.toContain("hidden");
});

test("links point at section anchors", () => {
  render(<Navbar />);

  expect(screen.getByRole("link", { name: "About" }).getAttribute("href")).toBe("#about");
  expect(screen.getByRole("link", { name: "Projects" }).getAttribute("href")).toBe("#projects");
});
