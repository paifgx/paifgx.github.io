/**
 * Centralized theme utilities to ensure consistent behavior across components
 * and prevent theme logic duplication between Header.vue and BaseLayout.astro.
 */

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Returns null if no valid preference exists, allowing fallback to system theme.
 */
export function getStoredTheme(): Theme | null {
  if (typeof localStorage === "undefined") return null;

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return null;
}

/**
 * Respects user's OS-level preference when no explicit choice is stored.
 */
export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Prioritizes user's explicit choice over system preference to honor their intent.
 */
export function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

/**
 * Applies theme synchronously to prevent FOUC during initial page load.
 */
export function applyTheme(theme: Theme): void {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  root.style.colorScheme = theme;
}

/**
 * Persists choice immediately so it survives page reloads and syncs across tabs.
 */
export function persistTheme(theme: Theme): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }
  applyTheme(theme);
}

/**
 * Convenience function for UI toggle buttons that need to switch and persist in one call.
 */
export function toggleTheme(): Theme {
  const current = resolveInitialTheme();
  const next: Theme = current === "dark" ? "light" : "dark";
  persistTheme(next);
  return next;
}

/**
 * Only reacts to system changes when user hasn't made an explicit choice,
 * preventing unwanted overrides of user preferences.
 */
export function onSystemThemeChange(
  callback: (theme: Theme) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handler = (e: MediaQueryListEvent) => {
    if (getStoredTheme() === null) {
      const newTheme: Theme = e.matches ? "dark" : "light";
      callback(newTheme);
    }
  };

  mediaQuery.addEventListener("change", handler);

  return () => {
    mediaQuery.removeEventListener("change", handler);
  };
}

/**
 * Enables cross-tab synchronization so theme changes in one tab reflect in others.
 */
export function onStorageChange(callback: (theme: Theme) => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = (e: StorageEvent) => {
    if (
      e.key === THEME_STORAGE_KEY &&
      (e.newValue === "light" || e.newValue === "dark")
    ) {
      callback(e.newValue);
    }
  };

  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener("storage", handler);
  };
}
