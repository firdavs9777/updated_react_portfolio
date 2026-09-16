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
