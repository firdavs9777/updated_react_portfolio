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
