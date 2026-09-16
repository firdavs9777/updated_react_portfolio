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
