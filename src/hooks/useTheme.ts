// src/hooks/useTheme.ts

import { useCallback, useEffect, useState } from "react";
import { THEME_STORAGE_KEY } from "../design/theme";
import type { ThemeName } from "../design/tokens";

// The inline bootstrap script in index.html applies the theme class before
// first paint, so the hook can read the resolved theme back off the document
// instead of recomputing it — no flash, and nothing touches window during
// prerendering.
function currentDocumentTheme(): ThemeName {
  if (typeof document === "undefined") {
    return "light";
  }
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeName>(currentDocumentTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Private browsing or blocked storage. The theme still applies for
      // this page view; it just will not be remembered.
    }
  }, [theme]);

  const setTheme = useCallback((next: ThemeName) => {
    setThemeState(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((previous) => (previous === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme, setTheme };
};
