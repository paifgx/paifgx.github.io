import { THEME_STORAGE_KEY } from "./theme";

/**
 * Inline-safe script string to apply the initial theme before CSS loads.
 * Keeps storage key and logic in sync with the shared theme utilities.
 */
export const inlineThemeScript = `(() => {
  const STORAGE_KEY = "${THEME_STORAGE_KEY}";
  const apply = (theme, target = document.documentElement) => {
    target.classList.toggle("dark", theme === "dark");
    target.style.colorScheme = theme;
  };
  const preferredTheme = () => {
    const system = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === "dark" || stored === "light" ? stored : system;
    } catch {
      return system;
    }
  };
  apply(preferredTheme());

  // Apply theme to incoming document before swap to prevent flash
  document.addEventListener("astro:before-swap", (e) => {
    apply(preferredTheme(), e.newDocument.documentElement);
  });

  // Re-apply immediately after swap as safety net
  document.addEventListener("astro:after-swap", () => {
    apply(preferredTheme());
  });
})();`;
