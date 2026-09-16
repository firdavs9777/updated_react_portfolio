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
