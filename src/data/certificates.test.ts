import { certificates } from "./certificates";

const LOCALES = ["en", "ko", "uz"] as const;

describe("certificates data", () => {
  it("has entries with stable slug ids and no duplicates", () => {
    const ids = certificates.map((c) => c.id);
    expect(certificates.length).toBeGreaterThan(0);
    ids.forEach((id) => expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("translates every field into all three locales", () => {
    certificates.forEach((entry) => {
      (["title", "issuer"] as const).forEach((field) => {
        LOCALES.forEach((locale) => {
          expect(entry[field][locale], `${entry.id}.${field}.${locale}`).toBeTruthy();
        });
      });
    });
  });
});
