import { experiences } from "./experience";

const LOCALES = ["en", "ko", "uz"] as const;

describe("experience data", () => {
  it("has entries with stable slug ids and no duplicates", () => {
    const ids = experiences.map((e) => e.id);
    expect(experiences.length).toBeGreaterThan(0);
    ids.forEach((id) => expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("marks exactly one role as current", () => {
    expect(experiences.filter((e) => e.current)).toHaveLength(1);
  });

  it("lists the current role first", () => {
    expect(experiences[0].current).toBe(true);
  });

  it("names 3R Innovation as the current employer in every locale", () => {
    const current = experiences.find((e) => e.current)!;
    LOCALES.forEach((locale) => {
      expect(current.company[locale]).toContain("3R");
    });
  });

  it("translates every field into all three locales", () => {
    experiences.forEach((entry) => {
      (["company", "position", "duration", "location"] as const).forEach((field) => {
        LOCALES.forEach((locale) => {
          expect(entry[field][locale], `${entry.id}.${field}.${locale}`).toBeTruthy();
        });
      });
      entry.achievements.forEach((achievement, index) => {
        LOCALES.forEach((locale) => {
          expect(
            achievement[locale],
            `${entry.id}.achievements[${index}].${locale}`,
          ).toBeTruthy();
        });
      });
    });
  });
});
