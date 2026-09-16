// src/design/theme.ts
//
// Theme resolution kept free of DOM access so it runs during static
// prerendering, where there is no window and no localStorage.

import type { ThemeName } from "./tokens";

export const THEME_STORAGE_KEY = "theme";

export interface ThemeInput {
  stored: string | null;
  prefersDark: boolean;
}

export function resolveInitialTheme({ stored, prefersDark }: ThemeInput): ThemeName {
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return prefersDark ? "dark" : "light";
}
