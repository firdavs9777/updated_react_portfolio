import { projects } from "./projects";

const LOCALES = ["en", "ko", "uz"] as const;

describe("projects data", () => {
  it("is a non-empty module constant, not built per render", () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it("gives every project a stable slug id, never an array index", () => {
    projects.forEach((project) => {
      expect(typeof project.id).toBe("string");
      expect(project.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    });
  });

  it("has no duplicate ids", () => {
    const ids = projects.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("translates every user-facing field into all three locales", () => {
    projects.forEach((project) => {
      (["title", "description", "role"] as const).forEach((field) => {
        LOCALES.forEach((locale) => {
          expect(
            project[field][locale],
            `${project.id}.${field}.${locale}`,
          ).toBeTruthy();
        });
      });
    });
  });

  it("lists at least one technology per project", () => {
    projects.forEach((project) => {
      expect(project.tech.length, project.id).toBeGreaterThan(0);
    });
  });
});
