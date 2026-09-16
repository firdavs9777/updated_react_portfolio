import { liveProjects } from "./live-projects";

const LOCALES = ["en", "ko", "uz"] as const;

describe("live projects data", () => {
  it("has entries with stable slug ids and no duplicates", () => {
    const ids = liveProjects.map((p) => p.id);
    expect(liveProjects.length).toBeGreaterThan(0);
    ids.forEach((id) => expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("covers both shipped products", () => {
    const ids = liveProjects.map((p) => p.id);
    expect(ids).toContain("bananatalk");
    expect(ids).toContain("tezsell");
  });

  it("translates every LocaleText field into all three locales", () => {
    liveProjects.forEach((project) => {
      Object.entries(project).forEach(([key, value]) => {
        const isLocaleText =
          value !== null &&
          typeof value === "object" &&
          !Array.isArray(value) &&
          "en" in (value as object);
        if (!isLocaleText) return;
        LOCALES.forEach((locale) => {
          expect(
            (value as Record<string, string>)[locale],
            `${project.id}.${key}.${locale}`,
          ).toBeTruthy();
        });
      });
    });
  });
});
