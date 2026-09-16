import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { darkTokens, lightTokens } from "./tokens";
import { GOOGLE_FONTS_HREF } from "./typography";

const css = readFileSync(resolve(process.cwd(), "src/index.css"), "utf8");
const html = readFileSync(resolve(process.cwd(), "index.html"), "utf8");
const tailwindConfig = readFileSync(resolve(process.cwd(), "tailwind.config.ts"), "utf8");

const toCssVariableName = (token: string) =>
  `--color-${token.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;

const declaredCssVariables = new Set(
  [...css.matchAll(/^\s*(--[\w-]+)\s*:/gm)].map((m) => m[1]),
);

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

  it("declares every custom property it references", () => {
    const referenced = [...css.matchAll(/var\(\s*(--[\w-]+)/g)].map((m) => m[1]);
    const undeclared = [...new Set(referenced)].filter(
      (name) => !declaredCssVariables.has(name),
    );
    expect(undeclared).toEqual([]);
  });

  it("declares every custom property tailwind.config.ts references", () => {
    const referenced = [...tailwindConfig.matchAll(/var\(\s*(--[\w-]+)/g)].map((m) => m[1]);
    const undeclared = [...new Set(referenced)].filter(
      (name) => !declaredCssVariables.has(name),
    );
    expect(undeclared).toEqual([]);
  });
});

describe("index.html font loading", () => {
  it("preconnects to the font hosts", () => {
    expect(html).toContain('rel="preconnect" href="https://fonts.googleapis.com"');
    expect(html).toContain('rel="preconnect" href="https://fonts.gstatic.com"');
  });

  it("requests the exact font URL declared in typography.ts", () => {
    expect(html).toContain(GOOGLE_FONTS_HREF);
  });
});
