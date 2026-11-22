import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = process.cwd();

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = resolve(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sources = walk(resolve(repoRoot, "src"))
  .filter((f) => /\.tsx?$/.test(f) && !/\.test\.tsx?$/.test(f))
  .map((f) => ({ path: f.replace(repoRoot + "/", ""), text: readFileSync(f, "utf8") }));

/** Source with // line comments and block comments removed, so that
 *  documentation explaining a term is not mistaken for a claim. */
function withoutComments(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
}

describe("award claims", () => {
  it("never describes HackSeoul 2025 as a win in any locale", () => {
    const offenders = sources
      .filter(({ text }) => {
        const code = withoutComments(text);
        return (
          /HackSeoul[^"]*Winner/i.test(code) ||
          code.includes("우승") ||
          /HackSeoul[^"]*G'olib/i.test(code)
        );
      })
      .map(({ path }) => path);

    expect(offenders).toEqual([]);
  });
});

// Deliberately searches ALL of src/ rather than naming Experience.tsx:
// Task 5 moves this data into src/data/experience.ts, and a test pinned to
// the old location would silently stop checking anything.
describe("the current role's start year", () => {
  const allText = sources.map(({ text }) => text).join("\n");

  // Confirmed by the owner on 2026-11-22: 3R Innovation started January 2026
  // (Quintet Systems ran 2023.03 – 2025.10, so the roles do not overlap).
  it("states January 2026 in every locale", () => {
    expect(allText).toContain('en: "January 2026 - Present"');
    expect(allText).toContain('ko: "2026년 01월 - 현재"');
    expect(allText).toContain('uz: "2026-yil Yanvar - Hozirgi"');
  });

  it("no longer claims a 2025 start for the current role anywhere", () => {
    const offenders = sources
      .filter(({ text }) => /January 2025 - Present|2025년 01월 - 현재|2025-yil Yanvar - Hozirgi/.test(text))
      .map(({ path }) => path);
    expect(offenders).toEqual([]);
  });
});

describe("published copy contains no credentials", () => {
  it("never ships a username or password in page copy", () => {
    const offenders = sources
      .filter(({ text }) =>
        /\b(username|password|passwd|login)\s*[:=]\s*\S/i.test(withoutComments(text)),
      )
      .map(({ path }) => path);
    expect(offenders).toEqual([]);
  });
});

describe("monetization claims", () => {
  it("never claims the app is free forever or completely free", () => {
    const offenders = sources
      .filter(({ text }) => {
        const copy = withoutComments(text);
        return (
          /free\s+forever/i.test(copy) ||
          /completely\s+free/i.test(copy) ||
          copy.includes("영구 무료") ||
          /abadiy\s+bepul/i.test(copy) ||
          /butunlay\s+bepul/i.test(copy)
        );
      })
      .map(({ path }) => path);
    expect(offenders).toEqual([]);
  });
});
