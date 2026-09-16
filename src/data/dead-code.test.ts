import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = process.cwd();

describe("the orphaned data modules are gone", () => {
  it("ships src/data/projects.ts only because the Projects page now imports it", () => {
    expect(existsSync(resolve(repoRoot, "src/data/projects.ts"))).toBe(true);
    const page = readFileSync(resolve(repoRoot, "src/pages/Projects.tsx"), "utf8");
    expect(page).toContain('from "../data/projects"');
  });

  it("no longer ships the unreferenced experience module", () => {
    expect(existsSync(resolve(repoRoot, "src/data/experience.ts"))).toBe(false);
  });
});

describe("stale interfaces", () => {
  const types = readFileSync(resolve(repoRoot, "src/types/index.ts"), "utf8");

  it("no longer declares the Project interface the dead module used", () => {
    expect(types).not.toMatch(/^export interface Project \{/m);
  });

  it("no longer declares the Experience interface the dead module used", () => {
    expect(types).not.toMatch(/^export interface Experience \{/m);
  });
});
