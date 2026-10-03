export const THEME_STORAGE_KEY = "color-theme";

/**
 * Runs inline in <head> before first paint so a saved or OS dark preference
 * never flashes light. Falls back to the OS preference when nothing is saved.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export function toggleTheme(): void {
  const isDark = document.documentElement.classList.toggle("dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    // Storage blocked (private mode); the toggle still works for this page view.
  }
}
