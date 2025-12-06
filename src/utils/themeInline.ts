import { THEME_STORAGE_KEY } from "./theme";

/**
 * Inline-safe script string to apply the initial theme before CSS loads.
 * Keeps storage key and logic in sync with the shared theme utilities.
 */
export const inlineThemeScript = `(() => {
  const STORAGE_KEY = "${THEME_STORAGE_KEY}";
  const apply = (theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const theme =
      stored === "dark" || stored === "light"
        ? stored
        : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    apply(theme);
  } catch {
    const theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    apply(theme);
  }
})();`;

