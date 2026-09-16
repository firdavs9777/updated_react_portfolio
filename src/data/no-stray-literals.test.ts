import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { BANANATALK_USERS_DISPLAY } from "./site-facts";

const repoRoot = process.cwd();

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = resolve(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sources = walk(resolve(repoRoot, "src"))
  .filter((f) => /\.tsx?$/.test(f) && !/\.test\.tsx?$/.test(f))
  .filter((f) => !f.endsWith("site-facts.ts"))
  .map((f) => ({ path: f.replace(repoRoot + "/", ""), text: readFileSync(f, "utf8") }));

describe("volatile facts are not duplicated as literals", () => {
  it("writes the user count only in site-facts.ts", () => {
    const offenders = sources
      .filter(({ text }) => text.includes(BANANATALK_USERS_DISPLAY))
      .map(({ path }) => path);
    expect(offenders).toEqual([]);
  });
});

// This is the guard Task 2 could not install: by now every data module is
// wired up, so any orphan is a real one. 442 lines of divergent duplicate
// content accumulated in this repo precisely because nothing checked.
describe("no data module is orphaned", () => {
  const allSources = walk(resolve(repoRoot, "src"))
    .filter((f) => /\.tsx?$/.test(f) && !/\.test\.tsx?$/.test(f))
    .map((f) => ({ path: f.replace(repoRoot + "/", ""), text: readFileSync(f, "utf8") }));

  const dataModules = allSources.filter(({ path }) => path.startsWith("src/data/"));
  const consumers = allSources.filter(({ path }) => !path.startsWith("src/data/"));

  it("finds the data modules", () => {
    expect(dataModules.length).toBeGreaterThan(3);
  });

  it("every module under src/data is imported from outside src/data, or by another data module", () => {
    const orphans = dataModules.filter(({ path }) => {
      const name = path.replace("src/data/", "").replace(/\.tsx?$/, "");
      const importedElsewhere = [...consumers, ...dataModules.filter((m) => m.path !== path)].some(
        ({ text }) => text.includes(`data/${name}`) || text.includes(`./${name}`),
      );
      return !importedElsewhere;
    });

    expect(orphans.map(({ path }) => path)).toEqual([]);
  });
});
