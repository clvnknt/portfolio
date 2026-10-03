import { Injectable } from '@angular/core';

const STORAGE_KEY = 'color-theme';

/**
 * Owns light/dark mode. Applies the `dark` class on <html> (Tailwind `darkMode: 'class'`)
 * and persists the choice in localStorage. Falls back to the OS preference.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark: boolean;

  constructor() {
    const stored = localStorage.getItem(STORAGE_KEY);
    this.isDark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.apply();
  }

  toggle(): void {
    this.isDark = !this.isDark;
    localStorage.setItem(STORAGE_KEY, this.isDark ? 'dark' : 'light');
    this.apply();
  }

  private apply(): void {
    document.documentElement.classList.toggle('dark', this.isDark);
  }
}
