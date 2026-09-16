import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = process.cwd();

describe("dead files", () => {
  ["Hero", "Projects", "Experience", "Contact"].forEach((name) => {
    it(`does not ship an empty ${name} section component`, () => {
      expect(existsSync(resolve(repoRoot, `src/components/sections/${name}.tsx`))).toBe(
        false,
      );
    });
  });
});

describe("README", () => {
  const readme = () => readFileSync(resolve(repoRoot, "README.md"), "utf8");

  it("is not the stock Vite template", () => {
    expect(readme()).not.toContain("This template provides a minimal setup");
  });

  it("documents how to run and test the project", () => {
    const content = readme();
    expect(content).toContain("npm run dev");
    expect(content).toContain("npm test");
  });
});
