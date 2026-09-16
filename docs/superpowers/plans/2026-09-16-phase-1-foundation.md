# Phase 1: Foundation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the blue/purple gradient design language with the Warm Paper token system, add the test infrastructure every later phase depends on, and make the theme hook safe to run during static prerendering.

**Architecture:** Design values move out of hardcoded JSX and into a single typed module (`src/design/`) that `tailwind.config.ts` imports, so colour is defined once and verified by contrast tests. Typography becomes locale-aware because Latin display serifs carry no Korean glyphs. The theme hook stops touching `localStorage` and `document` during render — an inline bootstrap script in `index.html` sets the theme class before paint, and the hook reads back from the DOM.

**Tech Stack:** React 18, TypeScript 5, Vite 4, Tailwind 3.3, Vitest, React Testing Library, jsdom

**Spec:** `docs/superpowers/specs/2026-09-16-portfolio-redesign-design.md`

## Global Constraints

- Node `>=18.0.0`, npm `>=8.0.0` (from `package.json` `engines`)
- Stay on Vite + React Router. No Next.js, no framework migration.
- Light tokens, exact values: `surface #FBFAF8`, `ink #1C1917`, `muted #78716C`, `accent #C2410C`, `line #E7E5E4`
- Dark tokens, exact values: `surface #14110F`, `ink #F5F1EC`, `muted #A8A29E`, `accent #F97316`, `line #2A2422`
- Display type: Fraunces (Latin), Noto Serif KR (Korean). Body type: Inter.
- Supported locales are exactly `en`, `ko`, `uz`. Uzbek uses Latin script and shares English's font stack.
- All text/background token pairs must meet WCAG AA (contrast ratio ≥ 4.5).
- Dark theme is designed, never programmatically derived from light.
- **Commit messages must not contain any Claude or AI co-author trailer.** Commits are authored by the repo owner alone.
- Do not read or reference files outside this repository, `bananatalk_app`, and `tezsell_app_front`.

---

## File Structure

**Created:**
- `src/design/contrast.ts` — WCAG relative luminance and contrast ratio maths. Pure, no dependencies.
- `src/design/tokens.ts` — the light and dark palettes as typed objects. The single source of colour truth.
- `src/design/typography.ts` — locale-aware font stack selection.
- `src/design/theme.ts` — pure theme resolution logic, callable without a DOM.
- `src/test/setup.ts` — Testing Library matchers, run before each suite.
- Test files mirroring each module above.

**Modified:**
- `package.json` — test dependencies and `test` scripts
- `vite.config.ts` — Vitest configuration block
- `tailwind.config.ts` — imports tokens; dead config removed
- `src/index.css` — base typography and token CSS variables
- `index.html` — font preconnect/link tags, theme bootstrap script
- `src/hooks/useTheme.ts` — rewritten to be prerender-safe
- `README.md` — replace the stock Vite template

**Deleted:**
- `src/components/sections/Hero.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx` — all 0 bytes

---

## Task 1: Test infrastructure

Nothing in this repo is currently testable. Every later task depends on this one.

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`
- Create: `src/test/setup.ts`
- Test: `src/test/setup.test.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `npm test` (single run) and `npm run test:watch`. Vitest globals (`describe`, `it`, `expect`) available without import. `@testing-library/jest-dom` matchers registered.

- [ ] **Step 1: Install test dependencies**

```bash
npm install -D vitest@^1.6.0 @vitest/coverage-v8@^1.6.0 jsdom@^24.0.0 \
  @testing-library/react@^14.3.1 @testing-library/jest-dom@^6.4.5 \
  @testing-library/user-event@^14.5.2
```

- [ ] **Step 2: Create the setup file**

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
```

- [ ] **Step 3: Add the Vitest config block to `vite.config.ts`**

Add `/// <reference types="vitest" />` as the very first line of the file, then add this `test` key to the `defineConfig` object, as a sibling of `build` and `preview`:

```ts
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: false,
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
```

- [ ] **Step 4: Add test scripts to `package.json`**

In the `scripts` object, add:

```json
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
```

- [ ] **Step 5: Add Vitest globals to the TypeScript config**

In `tsconfig.app.json`, add `"vitest/globals"` to `compilerOptions.types`. If no `types` array exists, add one:

```json
    "types": ["vitest/globals"]
```

- [ ] **Step 6: Write a test that proves the harness works**

Create `src/test/setup.test.tsx` — the `.tsx` extension matters, the file contains JSX:

```tsx
import { render, screen } from "@testing-library/react";

describe("test harness", () => {
  it("renders React components into a jsdom document", () => {
    render(<p>harness online</p>);
    expect(screen.getByText("harness online")).toBeInTheDocument();
  });
});
```

- [ ] **Step 7: Run the test and verify it passes**

Run: `npm test`
Expected: PASS, 1 test. If it fails with "document is not defined", `environment: "jsdom"` was not picked up — recheck Step 3.

- [ ] **Step 8: Verify type-check and lint still pass**

Run: `npm run type-check && npm run lint`
Expected: both exit 0.

- [ ] **Step 9: Commit**

```bash
git add package.json package-lock.json vite.config.ts tsconfig.app.json src/test/
git commit -m "test: add vitest and testing-library harness

No test infrastructure existed. Adds vitest with jsdom, React Testing
Library, and jest-dom matchers, wired through vite.config.ts so tests
share the app's path aliases."
```

---

## Task 2: Contrast maths

A pure module so the palette can be *proved* accessible rather than assumed. Written first because Task 3's tests depend on it.

**Files:**
- Create: `src/design/contrast.ts`
- Test: `src/design/contrast.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces:
  - `hexToRgb(hex: string): { r: number; g: number; b: number }` — throws on malformed input
  - `relativeLuminance(hex: string): number` — 0 to 1
  - `contrastRatio(a: string, b: string): number` — 1 to 21, order-independent

- [ ] **Step 1: Write the failing test**

Create `src/design/contrast.test.ts`:

```ts
import { contrastRatio, hexToRgb, relativeLuminance } from "./contrast";

describe("hexToRgb", () => {
  it("parses a six-digit hex colour", () => {
    expect(hexToRgb("#C2410C")).toEqual({ r: 194, g: 65, b: 12 });
  });

  it("accepts a hex colour without the leading hash", () => {
    expect(hexToRgb("FBFAF8")).toEqual({ r: 251, g: 250, b: 248 });
  });

  it("rejects malformed input rather than returning NaN", () => {
    expect(() => hexToRgb("#FFF")).toThrow(/6-digit hex/);
    expect(() => hexToRgb("not-a-colour")).toThrow(/6-digit hex/);
  });
});

describe("relativeLuminance", () => {
  it("returns 0 for black and 1 for white", () => {
    expect(relativeLuminance("#000000")).toBeCloseTo(0, 5);
    expect(relativeLuminance("#FFFFFF")).toBeCloseTo(1, 5);
  });
});

describe("contrastRatio", () => {
  it("returns 21 for black against white", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 2);
  });

  it("returns 1 for a colour against itself", () => {
    expect(contrastRatio("#C2410C", "#C2410C")).toBeCloseTo(1, 5);
  });

  it("gives the same answer regardless of argument order", () => {
    expect(contrastRatio("#1C1917", "#FBFAF8")).toBeCloseTo(
      contrastRatio("#FBFAF8", "#1C1917"),
      10,
    );
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/design/contrast.test.ts`
Expected: FAIL — "Failed to resolve import ./contrast".

- [ ] **Step 3: Write the implementation**

Create `src/design/contrast.ts`:

```ts
// src/design/contrast.ts
//
// WCAG 2.1 relative luminance and contrast ratio.
// https://www.w3.org/TR/WCAG21/#dfn-relative-luminance

export interface Rgb {
  r: number;
  g: number;
  b: number;
}

export function hexToRgb(hex: string): Rgb {
  const normalized = hex.startsWith("#") ? hex.slice(1) : hex;

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    throw new Error(`Expected a 6-digit hex colour, received "${hex}"`);
  }

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function linearize(channel: number): number {
  const srgb = channel / 255;
  return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
}

export function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

export function contrastRatio(a: string, b: string): number {
  const luminanceA = relativeLuminance(a);
  const luminanceB = relativeLuminance(b);
  const lighter = Math.max(luminanceA, luminanceB);
  const darker = Math.min(luminanceA, luminanceB);
  return (lighter + 0.05) / (darker + 0.05);
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/design/contrast.test.ts`
Expected: PASS, 8 tests.

- [ ] **Step 5: Commit**

```bash
git add src/design/contrast.ts src/design/contrast.test.ts
git commit -m "feat: add WCAG contrast ratio utilities

Pure luminance and contrast maths so the palette can be verified against
WCAG AA by test rather than by eye."
```

---

## Task 3: Design tokens

**Files:**
- Create: `src/design/tokens.ts`
- Test: `src/design/tokens.test.ts`

**Interfaces:**
- Consumes: `contrastRatio` from `src/design/contrast.ts`
- Produces:
  - `type ThemeName = "light" | "dark"`
  - `interface ColorTokens { surface, surfaceRaised, ink, muted, accent, accentContrast, line }` — all `string`
  - `lightTokens: ColorTokens`, `darkTokens: ColorTokens`
  - `tokensFor(theme: ThemeName): ColorTokens`

- [ ] **Step 1: Write the failing test**

Create `src/design/tokens.test.ts`:

```ts
import { contrastRatio } from "./contrast";
import { darkTokens, lightTokens, tokensFor } from "./tokens";

const WCAG_AA_NORMAL_TEXT = 4.5;

describe("token values", () => {
  it("uses the exact warm paper palette from the spec", () => {
    expect(lightTokens.surface).toBe("#FBFAF8");
    expect(lightTokens.ink).toBe("#1C1917");
    expect(lightTokens.muted).toBe("#78716C");
    expect(lightTokens.accent).toBe("#C2410C");
    expect(lightTokens.line).toBe("#E7E5E4");
  });

  it("uses the designed dark palette, not an inversion of light", () => {
    expect(darkTokens.surface).toBe("#14110F");
    expect(darkTokens.ink).toBe("#F5F1EC");
    expect(darkTokens.muted).toBe("#A8A29E");
    expect(darkTokens.accent).toBe("#F97316");
    expect(darkTokens.line).toBe("#2A2422");
  });

  it("defines the same token names in both themes", () => {
    expect(Object.keys(darkTokens).sort()).toEqual(Object.keys(lightTokens).sort());
  });
});

describe("accessibility", () => {
  const themes = [
    { name: "light", tokens: lightTokens },
    { name: "dark", tokens: darkTokens },
  ];

  themes.forEach(({ name, tokens }) => {
    it(`meets WCAG AA for primary text in the ${name} theme`, () => {
      expect(contrastRatio(tokens.ink, tokens.surface)).toBeGreaterThanOrEqual(
        WCAG_AA_NORMAL_TEXT,
      );
    });

    it(`meets WCAG AA for muted text in the ${name} theme`, () => {
      expect(contrastRatio(tokens.muted, tokens.surface)).toBeGreaterThanOrEqual(
        WCAG_AA_NORMAL_TEXT,
      );
    });

    it(`meets WCAG AA for accent text in the ${name} theme`, () => {
      expect(contrastRatio(tokens.accent, tokens.surface)).toBeGreaterThanOrEqual(
        WCAG_AA_NORMAL_TEXT,
      );
    });

    it(`keeps text on an accent-filled button readable in the ${name} theme`, () => {
      expect(
        contrastRatio(tokens.accentContrast, tokens.accent),
      ).toBeGreaterThanOrEqual(WCAG_AA_NORMAL_TEXT);
    });
  });
});

describe("tokensFor", () => {
  it("returns the matching palette", () => {
    expect(tokensFor("light")).toBe(lightTokens);
    expect(tokensFor("dark")).toBe(darkTokens);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/design/tokens.test.ts`
Expected: FAIL — "Failed to resolve import ./tokens".

- [ ] **Step 3: Write the implementation**

Create `src/design/tokens.ts`:

```ts
// src/design/tokens.ts
//
// The single source of colour truth. tailwind.config.ts imports this, so a
// colour is defined here exactly once. Every pair used for text is covered by
// a WCAG AA assertion in tokens.test.ts — change a value and the test tells
// you whether it is still readable.

export type ThemeName = "light" | "dark";

export interface ColorTokens {
  /** Page background. */
  surface: string;
  /** Cards and raised panels sitting on `surface`. */
  surfaceRaised: string;
  /** Primary text. */
  ink: string;
  /** Secondary text — captions, metadata, labels. */
  muted: string;
  /** Terracotta. Rules, links, emphasis. Used sparingly. */
  accent: string;
  /** Text placed on top of an accent fill. */
  accentContrast: string;
  /** Hairlines, borders, dividers. */
  line: string;
}

export const lightTokens: ColorTokens = {
  surface: "#FBFAF8",
  surfaceRaised: "#FFFFFF",
  ink: "#1C1917",
  muted: "#78716C",
  accent: "#C2410C",
  accentContrast: "#FFFFFF",
  line: "#E7E5E4",
};

export const darkTokens: ColorTokens = {
  surface: "#14110F",
  surfaceRaised: "#1F1B18",
  ink: "#F5F1EC",
  muted: "#A8A29E",
  accent: "#F97316",
  accentContrast: "#1C1206",
  line: "#2A2422",
};

export function tokensFor(theme: ThemeName): ColorTokens {
  return theme === "dark" ? darkTokens : lightTokens;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/design/tokens.test.ts`
Expected: PASS, 12 tests.

Note: `muted` on `surface` in the light theme lands at roughly 4.6 — above the 4.5 floor, but with little headroom. If a future change pushes it under, darken `muted` rather than lowering the threshold.

- [ ] **Step 5: Commit**

```bash
git add src/design/tokens.ts src/design/tokens.test.ts
git commit -m "feat: add warm paper design tokens

Light and dark palettes as typed objects, with the dark theme designed
rather than derived. Every text/background pair is asserted against
WCAG AA."
```

---

## Task 4: Locale-aware typography

Fraunces has no Korean glyphs. Without this, the Korean site silently falls back to a system font and loses its identity.

**Files:**
- Create: `src/design/typography.ts`
- Test: `src/design/typography.test.ts`

**Interfaces:**
- Consumes: `Language` from `src/types/index.ts` (`'en' | 'ko' | 'uz'`)
- Produces:
  - `displayFontFamily(locale: Language): string`
  - `BODY_FONT_FAMILY: string`
  - `GOOGLE_FONTS_HREF: string`

- [ ] **Step 1: Write the failing test**

Create `src/design/typography.test.ts`:

```ts
import { BODY_FONT_FAMILY, displayFontFamily, GOOGLE_FONTS_HREF } from "./typography";

describe("displayFontFamily", () => {
  it("uses Fraunces for English", () => {
    expect(displayFontFamily("en")).toContain("Fraunces");
  });

  it("uses Fraunces for Uzbek, which is written in Latin script", () => {
    expect(displayFontFamily("uz")).toContain("Fraunces");
  });

  it("uses a Korean serif for Korean, never Fraunces", () => {
    const korean = displayFontFamily("ko");
    expect(korean).toContain("Noto Serif KR");
    expect(korean).not.toContain("Fraunces");
  });

  it("always ends in a generic serif fallback", () => {
    (["en", "ko", "uz"] as const).forEach((locale) => {
      expect(displayFontFamily(locale).trim().endsWith("serif")).toBe(true);
    });
  });
});

describe("BODY_FONT_FAMILY", () => {
  it("leads with Inter and falls back to a system sans stack", () => {
    expect(BODY_FONT_FAMILY.startsWith("'Inter'")).toBe(true);
    expect(BODY_FONT_FAMILY.trim().endsWith("sans-serif")).toBe(true);
  });
});

describe("GOOGLE_FONTS_HREF", () => {
  it("requests every family the design system uses", () => {
    expect(GOOGLE_FONTS_HREF).toContain("Fraunces");
    expect(GOOGLE_FONTS_HREF).toContain("Noto+Serif+KR");
    expect(GOOGLE_FONTS_HREF).toContain("Inter");
  });

  it("uses display=swap so text renders before fonts finish loading", () => {
    expect(GOOGLE_FONTS_HREF).toContain("display=swap");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/design/typography.test.ts`
Expected: FAIL — "Failed to resolve import ./typography".

- [ ] **Step 3: Write the implementation**

Create `src/design/typography.ts`:

```ts
// src/design/typography.ts
//
// Latin display serifs ship no Korean glyphs. Picking a display face by
// locale keeps the Korean site on a designed serif instead of whatever the
// browser substitutes. Uzbek is written in Latin script, so it shares the
// English stack.

import type { Language } from "../types";

const LATIN_DISPLAY = "'Fraunces', Georgia, 'Times New Roman', serif";
const KOREAN_DISPLAY = "'Noto Serif KR', 'Apple SD Gothic Neo', 'Nanum Myeongjo', serif";

export const BODY_FONT_FAMILY =
  "'Inter', system-ui, -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700" +
  "&family=Inter:wght@400;500;600;700" +
  "&family=Noto+Serif+KR:wght@400;600" +
  "&display=swap";

export function displayFontFamily(locale: Language): string {
  return locale === "ko" ? KOREAN_DISPLAY : LATIN_DISPLAY;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/design/typography.test.ts`
Expected: PASS, 7 tests.

- [ ] **Step 5: Commit**

```bash
git add src/design/typography.ts src/design/typography.test.ts
git commit -m "feat: add locale-aware display typography

Fraunces carries no Korean glyphs, so Korean gets Noto Serif KR as its
display face. Uzbek is Latin script and shares the English stack."
```

---

## Task 5: Wire tokens into Tailwind and delete the dead config

`primary-*`, `secondary-*`, `font-display`, `shadow-glow-*`, `shadow-glass`, and `bg-hero-pattern` have zero usages in `src/` — verified by grep. `gray-*` has 605 usages and is **not** touched in this task.

**Files:**
- Modify: `tailwind.config.ts`
- Test: `src/design/tailwind-config.test.ts`

The test lives under `src/` rather than beside the config because
`tsconfig.app.json` sets `"include": ["src"]` — a root-level test file would
never be type-checked by `npm run type-check`.

**Interfaces:**
- Consumes: `lightTokens`, `darkTokens` from `src/design/tokens.ts`; `BODY_FONT_FAMILY` from `src/design/typography.ts`
- Produces: Tailwind utilities `bg-surface`, `bg-surface-raised`, `text-ink`, `text-muted`, `text-accent`, `bg-accent`, `border-line`, and their `dark:` variants driven by CSS variables.

- [ ] **Step 1: Write the failing test**

Create `src/design/tailwind-config.test.ts`:

```ts
import config from "../../tailwind.config";

const extend = config.theme?.extend ?? {};
const colors = (extend.colors ?? {}) as Record<string, unknown>;

describe("tailwind colour tokens", () => {
  it("exposes the semantic token names the design system uses", () => {
    ["surface", "ink", "muted", "accent", "line"].forEach((token) => {
      expect(colors).toHaveProperty(token);
    });
  });

  it("drives tokens through CSS variables so dark mode is one swap", () => {
    expect(colors.surface).toBe("var(--color-surface)");
    expect(colors.ink).toBe("var(--color-ink)");
    expect(colors.accent).toBe("var(--color-accent)");
  });
});

describe("dead configuration", () => {
  it("no longer defines the unused blue and purple ramps", () => {
    expect(colors).not.toHaveProperty("primary");
    expect(colors).not.toHaveProperty("secondary");
  });

  it("no longer defines unused decorative shadows or backgrounds", () => {
    const shadows = (extend.boxShadow ?? {}) as Record<string, unknown>;
    expect(shadows).not.toHaveProperty("glow-sm");
    expect(shadows).not.toHaveProperty("glass");
    const images = (extend.backgroundImage ?? {}) as Record<string, unknown>;
    expect(images).not.toHaveProperty("hero-pattern");
  });

  it("drops the Poppins display family, which the design no longer uses", () => {
    expect(JSON.stringify(extend.fontFamily ?? {})).not.toContain("Poppins");
  });
});

describe("preserved configuration", () => {
  it("keeps the custom gray ramp, which has 605 usages across the app", () => {
    expect(colors).toHaveProperty("gray");
  });

  it("keeps class-based dark mode", () => {
    expect(config.darkMode).toBe("class");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/design/tailwind-config.test.ts`
Expected: FAIL — `colors` has no property `surface`, and still has `primary`.

- [ ] **Step 3: Rewrite `tailwind.config.ts`**

Replace the whole file:

```ts
import type { Config } from "tailwindcss";
import { BODY_FONT_FAMILY } from "./src/design/typography";

// Colours resolve through CSS variables declared in src/index.css, so
// switching theme is a single class on <html> rather than a `dark:` variant on
// every element. The variable values come from src/design/tokens.ts.

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "var(--color-surface)",
        "surface-raised": "var(--color-surface-raised)",
        ink: "var(--color-ink)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        "accent-contrast": "var(--color-accent-contrast)",
        line: "var(--color-line)",
        // Retained: 605 usages across the app. Migrated to semantic tokens
        // page by page in Phase 4, not here.
        gray: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        sans: [BODY_FONT_FAMILY],
        display: ["var(--font-display)"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/design/tailwind-config.test.ts`
Expected: PASS, 7 tests.

- [ ] **Step 5: Verify the app still builds**

Run: `npm run build`
Expected: exit 0. The four removed animations (`slide-in-left`, `slide-in-right`, `bounce-slow`, `pulse-slow`, `float`, `glow`, `shimmer`) were unused; if the build or a page references one, add it back rather than editing the page — page rewrites belong to Phase 4.

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.ts src/design/tailwind-config.test.ts
git commit -m "refactor: drive tailwind colours from design tokens

Semantic tokens resolve through CSS variables so a theme switch is one
class on <html>. Removes the primary/secondary ramps, glow and glass
shadows, hero-pattern background, and Poppins display family — all had
zero usages. The custom gray ramp stays; it has 605 usages and migrates
page by page in Phase 4."
```

---

## Task 6: Base stylesheet and font loading

**Files:**
- Modify: `src/index.css`
- Modify: `index.html`
- Test: `src/design/css-variables.test.ts`

**Interfaces:**
- Consumes: `lightTokens`, `darkTokens`, `GOOGLE_FONTS_HREF`
- Produces: `--color-*` CSS variables on `:root` and `.dark`, plus `--font-display` switched by the `lang` attribute.

- [ ] **Step 1: Write the failing test**

This test reads the stylesheet as text and asserts every token has a declaration, so a token added to `tokens.ts` without a matching CSS variable fails loudly.

Create `src/design/css-variables.test.ts`:

```ts
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { darkTokens, lightTokens } from "./tokens";

const css = readFileSync(resolve(__dirname, "../index.css"), "utf8");
const html = readFileSync(resolve(__dirname, "../../index.html"), "utf8");

const toCssVariableName = (token: string) =>
  `--color-${token.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;

describe("css variables", () => {
  it("declares a variable for every light token", () => {
    Object.entries(lightTokens).forEach(([token, value]) => {
      expect(css).toContain(`${toCssVariableName(token)}: ${value}`);
    });
  });

  it("declares a variable for every dark token", () => {
    Object.entries(darkTokens).forEach(([token, value]) => {
      expect(css).toContain(`${toCssVariableName(token)}: ${value}`);
    });
  });

  it("switches the display font for Korean via the lang attribute", () => {
    expect(css).toContain('html[lang="ko"]');
    expect(css).toContain("Noto Serif KR");
  });

  it("no longer imports fonts from CSS, which blocks rendering", () => {
    expect(css).not.toContain("@import url('https://fonts.googleapis.com");
  });
});

describe("index.html font loading", () => {
  it("preconnects to the font hosts", () => {
    expect(html).toContain('rel="preconnect" href="https://fonts.googleapis.com"');
    expect(html).toContain('rel="preconnect" href="https://fonts.gstatic.com"');
  });

  it("requests the design system families", () => {
    expect(html).toContain("Fraunces");
    expect(html).toContain("Noto+Serif+KR");
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/design/css-variables.test.ts`
Expected: FAIL — `--color-surface: #FBFAF8` not found.

- [ ] **Step 3: Replace the top of `src/index.css`**

Replace everything from the start of the file through the closing brace of the `body { … }` rule with:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Fonts load from index.html via <link>, not @import — a CSS @import is
   render-blocking and delays first paint. */

:root {
  --color-surface: #FBFAF8;
  --color-surface-raised: #FFFFFF;
  --color-ink: #1C1917;
  --color-muted: #78716C;
  --color-accent: #C2410C;
  --color-accent-contrast: #FFFFFF;
  --color-line: #E7E5E4;

  --font-display: 'Fraunces', Georgia, 'Times New Roman', serif;

  --transition-speed: 300ms;
}

.dark {
  --color-surface: #14110F;
  --color-surface-raised: #1F1B18;
  --color-ink: #F5F1EC;
  --color-muted: #A8A29E;
  --color-accent: #F97316;
  --color-accent-contrast: #1C1206;
  --color-line: #2A2422;
}

/* Fraunces has no Korean glyphs. */
html[lang="ko"] {
  --font-display: 'Noto Serif KR', 'Apple SD Gothic Neo', 'Nanum Myeongjo', serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}

body {
  font-family: 'Inter', system-ui, -apple-system, 'Apple SD Gothic Neo', sans-serif;
  line-height: 1.6;
  color: var(--color-ink);
  background-color: var(--color-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

/* Long-form reading. Applied to case studies and posts in later phases. */
.prose-reading {
  font-size: 1.0625rem;
  line-height: 1.7;
  max-width: 68ch;
}

@media (min-width: 768px) {
  .prose-reading {
    font-size: 1.125rem;
  }
}
```

- [ ] **Step 3b: Repoint the orphaned variable references further down the file**

`src/index.css` is 529 lines. The replacement above removes `--color-primary`,
`--color-secondary`, `--color-text`, and `--color-bg`, but later rules still
reference them. Leave those rules in place and repoint them:

| Old variable | New variable |
|---|---|
| `--color-text` | `--color-ink` |
| `--color-bg` | `--color-surface` |
| `--color-bg-secondary` | `--color-surface-raised` |
| `--color-primary` | `--color-accent` |
| `--color-secondary` | `--color-accent` |

Apply it:

```bash
sed -i '' \
  -e 's/var(--color-text-light)/var(--color-muted)/g' \
  -e 's/var(--color-text)/var(--color-ink)/g' \
  -e 's/var(--color-bg-secondary)/var(--color-surface-raised)/g' \
  -e 's/var(--color-bg)/var(--color-surface)/g' \
  -e 's/var(--color-primary)/var(--color-accent)/g' \
  -e 's/var(--color-secondary)/var(--color-accent)/g' \
  src/index.css
```

Then verify nothing was missed:

```bash
grep -nE "var\(--color-(primary|secondary|text|text-light|bg|bg-secondary|accent-old)\)" src/index.css || echo "all references repointed"
```

Expected: `all references repointed`.

One rule needs a manual look afterwards — the scrollbar thumb was a
blue→purple gradient:

```css
background: linear-gradient(180deg, var(--color-accent), var(--color-accent));
```

Replace that whole declaration with a flat fill, since the design system has no
gradients:

```css
background: var(--color-line);
```

- [ ] **Step 4: Add the font links to `index.html`**

Immediately before the existing `<link rel="apple-touch-icon" …>` line, insert:

```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Noto+Serif+KR:wght@400;600&display=swap"
    />
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/design/css-variables.test.ts`
Expected: PASS, 6 tests.

- [ ] **Step 6: Verify the whole suite and the build**

Run: `npm test && npm run build`
Expected: both exit 0.

- [ ] **Step 7: Commit**

```bash
git add src/index.css index.html src/design/css-variables.test.ts
git commit -m "feat: declare token CSS variables and load display fonts

Tokens become --color-* variables on :root and .dark. Korean swaps the
display face via html[lang=ko]. Fonts move from a render-blocking CSS
@import to preconnected <link> tags in index.html."
```

---

## Task 7: Prerender-safe theme hook

`useTheme` currently calls `localStorage.getItem` inside a `useState` initializer and `window.document` in an effect. Under static prerendering there is no `window`, so the build throws. This is the risk named in spec §13.

**Files:**
- Create: `src/design/theme.ts`
- Modify: `src/hooks/useTheme.ts`
- Modify: `index.html`
- Test: `src/design/theme.test.ts`, `src/hooks/useTheme.test.tsx`

**Interfaces:**
- Consumes: `ThemeName` from `src/design/tokens.ts`
- Produces:
  - `THEME_STORAGE_KEY = "theme"`
  - `resolveInitialTheme(input: { stored: string | null; prefersDark: boolean }): ThemeName`
  - `useTheme(): { theme: ThemeName; toggleTheme: () => void; setTheme: (t: ThemeName) => void }`

- [ ] **Step 1: Write the failing test for the pure resolver**

Create `src/design/theme.test.ts`:

```ts
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
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/design/theme.test.ts`
Expected: FAIL — "Failed to resolve import ./theme".

- [ ] **Step 3: Write the resolver**

Create `src/design/theme.ts`:

```ts
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
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/design/theme.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 5: Write the failing test for the hook**

Create `src/hooks/useTheme.test.tsx`:

```tsx
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, vi } from "vitest";
import { useTheme } from "./useTheme";

function Probe() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} data-testid="probe">
      {theme}
    </button>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.classList.remove("dark");
});

describe("useTheme", () => {
  it("reads the theme already applied to the document by the bootstrap script", () => {
    document.documentElement.classList.add("dark");
    render(<Probe />);
    expect(screen.getByTestId("probe")).toHaveTextContent("dark");
  });

  it("defaults to light when the document carries no dark class", () => {
    render(<Probe />);
    expect(screen.getByTestId("probe")).toHaveTextContent("light");
  });

  it("toggles the theme and the document class together", async () => {
    render(<Probe />);
    await userEvent.click(screen.getByTestId("probe"));
    expect(screen.getByTestId("probe")).toHaveTextContent("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("persists the chosen theme", async () => {
    render(<Probe />);
    await userEvent.click(screen.getByTestId("probe"));
    expect(window.localStorage.getItem("theme")).toBe("dark");
  });

  it("still renders when localStorage throws", async () => {
    const spy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("denied");
    });

    render(<Probe />);
    await act(async () => {
      await userEvent.click(screen.getByTestId("probe"));
    });

    expect(screen.getByTestId("probe")).toHaveTextContent("dark");
    spy.mockRestore();
  });
});
```

- [ ] **Step 6: Run the test to verify it fails**

Run: `npm test -- src/hooks/useTheme.test.tsx`
Expected: FAIL — the current hook defaults to `"dark"` and reads `localStorage` during render.

- [ ] **Step 7: Rewrite `src/hooks/useTheme.ts`**

```ts
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
```

- [ ] **Step 8: Add the bootstrap script to `index.html`**

As the **first** element inside `<head>`, before any stylesheet link:

```html
    <script>
      (function () {
        try {
          var stored = window.localStorage.getItem("theme");
          var prefersDark =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
          var theme =
            stored === "light" || stored === "dark"
              ? stored
              : prefersDark
                ? "dark"
                : "light";
          if (theme === "dark") {
            document.documentElement.classList.add("dark");
          }
        } catch (e) {
          /* Storage blocked — fall through to the light default. */
        }
      })();
    </script>
```

- [ ] **Step 9: Pin the bootstrap script to the resolver's rules**

The script must run before React loads, so it cannot import
`resolveInitialTheme` — it reimplements the same rules inline. That duplication
is deliberate, but it needs a guard, or the two can drift apart silently.

Append to `src/design/theme.test.ts`, and add the two Node imports at the top of
that file:

```ts
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
```

```ts
describe("the inline bootstrap script in index.html", () => {
  const html = readFileSync(resolve(__dirname, "../../index.html"), "utf8");

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
```

- [ ] **Step 10: Run the tests to verify they pass**

Run: `npm test -- src/hooks/useTheme.test.tsx src/design/theme.test.ts`
Expected: PASS — 5 hook tests, 9 theme tests.

- [ ] **Step 11: Verify the whole suite, types, lint, and build**

Run: `npm test && npm run type-check && npm run lint && npm run build`
Expected: all exit 0.

- [ ] **Step 12: Manually confirm no theme flash**

Run: `npm run dev`, open `http://localhost:3000`, set the OS to dark mode, and hard-reload.
Expected: the page paints dark immediately — no white flash before React mounts.

- [ ] **Step 13: Commit**

```bash
git add src/design/theme.ts src/design/theme.test.ts src/hooks/useTheme.ts src/hooks/useTheme.test.tsx index.html
git commit -m "fix: make theme selection prerender-safe

The hook read localStorage inside a useState initializer and touched
window in an effect, which throws during static prerendering. Resolution
moves to a pure function, an inline bootstrap script applies the class
before first paint, and the hook reads it back off the document.

Also changes the default from dark to the system preference, falling back
to light — the primary theme of the new design system."
```

---

## Task 8: Remove dead files and replace the stock README

**Files:**
- Delete: `src/components/sections/Hero.tsx`, `Projects.tsx`, `Experience.tsx`, `Contact.tsx`
- Modify: `README.md`
- Test: `src/test/repo-hygiene.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces: nothing consumed by later tasks

- [ ] **Step 1: Confirm the files are genuinely empty and unreferenced**

```bash
wc -c src/components/sections/*.tsx
grep -rn "components/sections" src/ || echo "no references"
```

Expected: every file 0 bytes, and no references. If any file is non-empty or referenced, stop and report — do not delete.

- [ ] **Step 2: Write the failing test**

Create `src/test/repo-hygiene.test.ts`:

```ts
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = resolve(__dirname, "../..");

describe("dead files", () => {
  ["Hero", "Projects", "Experience", "Contact"].forEach((name) => {
    it(`does not ship an empty ${name} section component`, () => {
      expect(existsSync(resolve(repoRoot, `src/components/sections/${name}.tsx`))).toBe(
        false,
      );
    });
  });
});

describe("README", () => {
  const readme = () => readFileSync(resolve(repoRoot, "README.md"), "utf8");

  it("is not the stock Vite template", () => {
    expect(readme()).not.toContain("This template provides a minimal setup");
  });

  it("documents how to run and test the project", () => {
    const content = readme();
    expect(content).toContain("npm run dev");
    expect(content).toContain("npm test");
  });
});
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- src/test/repo-hygiene.test.ts`
Expected: FAIL on all six assertions.

- [ ] **Step 4: Delete the dead files**

```bash
git rm src/components/sections/Hero.tsx src/components/sections/Projects.tsx \
       src/components/sections/Experience.tsx src/components/sections/Contact.tsx
```

`src/components/sections/About.tsx` is 333 lines and stays — it is rewritten in Phase 4.

- [ ] **Step 5: Replace `README.md`**

```markdown
# firdavs.dev

Personal portfolio and product showcase for Firdavs Mutalipov — full-stack
developer in Seoul. Built with React, TypeScript, Vite, and Tailwind.

## Running locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type-check, then produce a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run type-check` | TypeScript, no emit |
| `npm run lint` | ESLint, zero warnings tolerated |
| `npm run deploy` | Build and reload nginx |

## Design system

Colour, typography, and theme logic live in `src/design/`:

- `tokens.ts` — the light and dark palettes. The single source of colour truth;
  `tailwind.config.ts` imports it. Every text/background pair is asserted
  against WCAG AA in `tokens.test.ts`.
- `typography.ts` — display font per locale. Fraunces carries no Korean
  glyphs, so Korean uses Noto Serif KR.
- `theme.ts` — theme resolution, kept DOM-free so it survives prerendering.

Colours reach components as Tailwind utilities backed by CSS variables:
`bg-surface`, `text-ink`, `text-muted`, `text-accent`, `border-line`.

## Languages

Three locales: English, Korean, Uzbek. Uzbek is written in Latin script and
shares the English font stack.

## Documentation

- Design spec: `docs/superpowers/specs/2026-09-16-portfolio-redesign-design.md`
- Implementation plans: `docs/superpowers/plans/`
```

- [ ] **Step 6: Run the test to verify it passes**

Run: `npm test -- src/test/repo-hygiene.test.ts`
Expected: PASS, 6 tests.

- [ ] **Step 7: Run the full verification**

Run: `npm test && npm run type-check && npm run lint && npm run build`
Expected: all exit 0.

- [ ] **Step 8: Commit**

```bash
git add -A README.md src/components/sections src/test/repo-hygiene.test.ts
git commit -m "chore: delete empty section components, write a real README

Hero, Projects, Experience, and Contact under components/sections were
0-byte files with no references. README replaces the stock Vite template
with how to run, test, and work with the design system."
```

---

## Phase 1 Definition of Done

- [ ] `npm test` passes; suite covers contrast maths, tokens, typography, Tailwind config, CSS variables, theme resolution, the theme hook, and repo hygiene
- [ ] `npm run type-check` exits 0
- [ ] `npm run lint` exits 0 with zero warnings
- [ ] `npm run build` exits 0
- [ ] Toggling theme in the browser switches instantly with no flash on reload
- [ ] `grep -rn "components/sections/Hero" src/` returns nothing
- [ ] Every colour token has a WCAG AA assertion behind it

## What Phase 1 deliberately does not do

- **Does not restyle any page.** The 605 `gray-*` usages and the blue/purple
  gradients on Home, About, Projects, and the rest stay exactly as they are.
  The site looks nearly unchanged after this phase; what changes is that the
  system the redesign needs now exists underneath it. Page rewrites are Phase 4.
- **Does not touch routing, locales, or SEO.** That is Phase 3.
- **Does not move content out of components.** That is Phase 2.

## Next

Phase 2 — content extraction and fact corrections: move hardcoded content into
`src/data/`, correct the employer to 3R Innovation, add the missing `uz`
experience translations, and resolve the "free forever" claim against the app's
in-app purchase dependencies.
