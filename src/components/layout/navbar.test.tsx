import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Navbar from "./navbar";

afterEach(cleanup);

test("menu button toggles the mobile menu", () => {
  render(<Navbar />);
  const button = screen.getByRole("button", { name: "Open main menu" });
  const menu = document.getElementById("navbar-menu")!;

  expect(button.getAttribute("aria-expanded")).toBe("false");
  expect(menu.classList.contains("hidden")).toBe(true);

  fireEvent.click(button);

  expect(button.getAttribute("aria-expanded")).toBe("true");
  expect(menu.classList.contains("hidden")).toBe(false);
});

test("links point at section anchors", () => {
  render(<Navbar />);

  // Desktop and mobile menus each render the links.
  for (const link of screen.getAllByRole("link", { name: "Experience" })) {
    expect(link.getAttribute("href")).toBe("#experience");
  }
  for (const link of screen.getAllByRole("link", { name: "Projects" })) {
    expect(link.getAttribute("href")).toBe("#projects");
  }
});
