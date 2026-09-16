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
