import { afterEach, expect, test } from "vitest";
import { THEME_INIT_SCRIPT, THEME_STORAGE_KEY, toggleTheme } from "./theme";

afterEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

test("toggleTheme flips the dark class and persists it", () => {
  toggleTheme();
  expect(document.documentElement.classList.contains("dark")).toBe(true);
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

  toggleTheme();
  expect(document.documentElement.classList.contains("dark")).toBe(false);
  expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
});

test("init script applies a saved dark theme", () => {
  localStorage.setItem(THEME_STORAGE_KEY, "dark");
  new Function(THEME_INIT_SCRIPT)();
  expect(document.documentElement.classList.contains("dark")).toBe(true);
});
