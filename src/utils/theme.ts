/**
 * Zentrale Theme-Utilities für garten.ai
 *
 * Diese Funktionen definieren einheitlich, wie das Theme gelesen, aufgelöst,
 * angewandt und persistiert wird.
 *
 * Verwendung:
 * - Header.vue: Theme-Toggle und System-Listener
 * - BaseLayout.astro: FOUC-Schutz (Inline-Script im <head>)
 */

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Liest das gespeicherte Theme aus dem localStorage.
 * Gibt null zurück, wenn kein gültiger Wert gespeichert ist.
 */
export function getStoredTheme(): Theme | null {
  if (typeof localStorage === "undefined") return null;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return null;
}

/**
 * Ermittelt das System-Theme basierend auf der OS-Präferenz.
 */
export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Ermittelt das initiale Theme:
 * 1. Gespeichertes Theme aus localStorage (falls vorhanden)
 * 2. System-Präferenz als Fallback
 */
export function resolveInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

/**
 * Wendet das Theme auf das Dokument an:
 * - Setzt/Entfernt die 'dark'-Klasse auf <html>
 * - Setzt das color-scheme für native Scrollbars etc.
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
 * Persistiert das Theme im localStorage und wendet es sofort an.
 */
export function persistTheme(theme: Theme): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, theme);
  }
  applyTheme(theme);
}

/**
 * Toggled das aktuelle Theme und persistiert es.
 * Gibt das neue Theme zurück.
 */
export function toggleTheme(): Theme {
  const current = resolveInitialTheme();
  const next: Theme = current === "dark" ? "light" : "dark";
  persistTheme(next);
  return next;
}

/**
 * Registriert einen Listener für System-Theme-Änderungen.
 * Gibt eine Cleanup-Funktion zurück.
 *
 * Der Callback wird nur aufgerufen, wenn kein Theme im localStorage
 * gespeichert ist (d.h. der User hat keine explizite Präferenz).
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
 * Registriert einen Listener für Storage-Events.
 * Ermöglicht Theme-Sync zwischen Browser-Tabs.
 * Gibt eine Cleanup-Funktion zurück.
 */
export function onStorageChange(callback: (theme: Theme) => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
      callback(e.newValue);
    }
  };

  window.addEventListener("storage", handler);

  return () => {
    window.removeEventListener("storage", handler);
  };
}

