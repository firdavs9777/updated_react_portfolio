import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { resolveInitialTheme, THEME_STORAGE_KEY } from "./theme";

describe("resolveInitialTheme", () => {
  it("honours a stored preference over the system setting", () => {
    expect(resolveInitialTheme({ stored: "light", prefersDark: true })).toBe("light");
    expect(resolveInitialTheme({ stored: "dark", prefersDark: false })).toBe("dark");
  });

  it("falls back to the system setting when nothing is stored", () => {
    expect(resolveInitialTheme({ stored: null, prefersDark: true })).toBe("dark");
    expect(resolveInitialTheme({ stored: null, prefersDark: false })).toBe("light");
  });

  it("ignores a corrupted stored value", () => {
    expect(resolveInitialTheme({ stored: "banana", prefersDark: false })).toBe("light");
    expect(resolveInitialTheme({ stored: "", prefersDark: true })).toBe("dark");
  });

  it("defaults to light, the primary theme of the design system", () => {
    expect(resolveInitialTheme({ stored: null, prefersDark: false })).toBe("light");
  });

  it("exports a stable storage key", () => {
    expect(THEME_STORAGE_KEY).toBe("theme");
  });
});

describe("the inline bootstrap script in index.html", () => {
  const html = readFileSync(resolve(process.cwd(), "index.html"), "utf8");

  it("reads the same storage key the hook writes", () => {
    expect(html).toContain(`localStorage.getItem("${THEME_STORAGE_KEY}")`);
  });

  it("honours a stored preference of either theme", () => {
    expect(html).toContain('stored === "light" || stored === "dark"');
  });

  it("falls back to the system colour scheme", () => {
    expect(html).toContain("prefers-color-scheme: dark");
  });

  it("applies the theme class before React mounts, not after", () => {
    const scriptIndex = html.indexOf("prefers-color-scheme: dark");
    const moduleIndex = html.indexOf("/src/main.tsx");
    expect(scriptIndex).toBeGreaterThan(-1);
    expect(moduleIndex).toBeGreaterThan(-1);
    expect(scriptIndex).toBeLessThan(moduleIndex);
  });
});
