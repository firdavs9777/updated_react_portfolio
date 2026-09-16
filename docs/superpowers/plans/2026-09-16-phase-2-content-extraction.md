# Phase 2: Content Extraction and Fact Corrections — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move site content out of React components into typed, locale-keyed data modules, and make every volatile claim (user counts, monetization, award placement) a single constant instead of a literal repeated across files and languages.

**Architecture:** Content currently lives inside JSX as inline `tx({en, ko, uz})` calls — 226 of them across eight pages. Data modules instead export plain `LocaleText` maps (`{en, ko, uz}`) and components call `tx(entry.field)` at render. That inverts the current arrangement: the data becomes a true module constant with no hook dependency, and the components become layout. Volatile facts move further still, into `src/data/site-facts.ts`, so a number that appears in nine sentences is stored once.

**Tech Stack:** React 18, TypeScript 5, Vite 4, Tailwind 3.3, Vitest

**Spec:** `docs/superpowers/specs/2026-09-16-portfolio-redesign-design.md`
**Prior phase:** `docs/superpowers/plans/2026-09-16-phase-1-foundation.md` (complete; execution log at `docs/superpowers/plans/2026-09-16-phase-1-execution-log.md`)

## Global Constraints

- Node `>=18.0.0`, npm `>=8.0.0`. Vite + React Router — no framework migration.
- Supported locales are exactly `en`, `ko`, `uz`. Every `LocaleText` must carry all three.
- **Phase 2 changes no page's visual design.** Layout, spacing, and styling stay as they are; only where content *lives* changes. Visual work is Phase 4. A rendered page may differ only where this plan corrects a stated fact.
- `npm run lint` runs `--max-warnings 0`. Do not add `eslint-disable` comments — one was rejected in review during Phase 1.
- `npm run type-check` is `tsc --build --force` and genuinely checks 43+ files. A green type-check means something.
- **Commit messages must not contain any Claude, AI, or co-author trailer of any kind.** Commits are authored by the repo owner alone. This was violated twice in Phase 1 and required a history rewrite — do not repeat it.
- Do not read or reference files outside this repository.

---

## Corrections to the Spec

The spec's §9 "Content corrections" was written from reading `src/data/experience.ts`. **That file is imported by nothing.** Investigation before writing this plan established:

| Spec §9 claim | Reality |
|---|---|
| "`experience.ts` lists Quintet Systems as current" | True of that file, but it is dead code. The live `Experience.tsx:24` already shows **3R Innovation Inc.**, current, January 2025. `About.tsx:158` already says "Currently at 3R Innovation Inc." **No live staleness.** |
| "`experience.ts` has no `uz`" | True of the dead file. The live page has all three locales. **Not a live gap.** |
| "Free forever" conflicts with the app | **Confirmed live** on `Home.tsx:195-197`, `Projects.tsx:108`, `LiveProjects.tsx:70-71`, in all three locales. |
| "1,200+ users — confirm current" | **Confirmed live**, in 23 places across 5 files. |

Three problems the spec did not know about, found during this investigation:

1. **The Korean start year is wrong.** `Experience.tsx:33-37` reads `en: "January 2025 - Present"`, `ko: "2026년 01월 - 현재"`, `uz: "2025-yil Yanvar - Hozirgi"`. The Korean site states a start year one later than the English one. Korean-reading recruiters are the primary audience.
2. **An award is overstated on one page.** `Projects.tsx:44-46` calls StylerX a "HackSeoul 2025 Winner Project" / `우승 프로젝트` — Korean `우승` means taking first place. `About.tsx:376`, `Home.tsx:272`, and `translations.ts` all correctly say 2nd Prize / `2등상` / `2위`. One page claims a win the others contradict.
3. **442 lines of dead, divergent data.** `src/data/projects.ts` (360 lines, string-slug ids) and `src/data/experience.ts` (82 lines) are imported by nothing, and their content has drifted from the inline arrays actually rendered (numeric ids). Only `src/data/translations.ts` is live.

---

## Inputs Required From the Repo Owner

Two facts cannot be determined from the codebase. **Tasks 1 and 8 are structured so that neither blocks the work** — the values become single constants, and correcting them later is a one-line edit rather than a 23-site sweep.

| Fact | Why it cannot be resolved here | Interim handling |
|---|---|---|
| Is BananaTalk still "free forever"? | `pubspec.yaml` ships `in_app_purchase`, `google_mobile_ads`, and `docs/VIP_AND_LIMITS_IMPLEMENTATION.md` — the app appears to have paid tiers. Only the owner knows the current truth. | Task 8 replaces the absolute claim with a defensible one ("free to use") and records the open question. The owner supplies the final wording. |
| Current BananaTalk user count | Live figure, known only from store/analytics dashboards. | Task 1 stores `1200` as `BANANATALK_USERS` with its `asOf` date, so the claim is honest about when it was true. |

---

## File Structure

**Created:**
- `src/data/site-facts.ts` — volatile, cross-cutting facts: user counts, award placement, store URLs, and the date each was verified. One export per fact.
- `src/data/projects.ts` — rewritten from scratch. `ProjectEntry[]` with `LocaleText` fields, extracted from `Projects.tsx`.
- `src/data/experience.ts` — rewritten from scratch. `ExperienceEntry[]`, extracted from `Experience.tsx`.
- `src/data/certificates.ts` — `CertificateEntry[]`, extracted from `Certificates.tsx`.
- `src/data/live-projects.ts` — `LiveProjectEntry[]`, moved from the module-level `PROJECTS` const in `LiveProjects.tsx`.
- `src/data/consistency.test.ts` — cross-locale invariants over all data modules. The lasting deliverable of this phase.

**Modified:**
- `src/types/index.ts` — add `LocaleText` and the four entry interfaces; delete the stale `Project`/`Experience` interfaces the dead files used.
- `src/pages/Projects.tsx` — inline array removed; reads from `src/data/projects.ts`.
- `src/pages/Experience.tsx` — same.
- `src/pages/Certificates.tsx` — same.
- `src/pages/LiveProjects.tsx` — `PROJECTS` const moved out.
- `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/utils/seo.tsx`, `src/data/translations.ts` — literal facts replaced with `site-facts` constants.

**Deleted:**
- Nothing is deleted outright. `src/data/projects.ts` and `src/data/experience.ts` are *replaced* — Task 2 removes the dead content, later tasks write the real thing at the same paths.

---

## Task 1: Volatile facts as single constants

The highest-leverage change in this phase. `1,200+` currently appears in 23 places across 5 files and 3 languages; after this phase it appears once.

**Files:**
- Create: `src/data/site-facts.ts`
- Test: `src/data/site-facts.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces:
  - `BANANATALK_USERS: number` (1200)
  - `BANANATALK_USERS_DISPLAY: string` ("1,200+")
  - `HACKSEOUL_PLACEMENT: { place: 2; year: 2025; label: LocaleText }`
  - `FACTS_VERIFIED_ON: string` (ISO date)
  - `STORE_LINKS: { bananatalk: {ios, android}; tezsell: {ios, android} }`

- [ ] **Step 1: Write the failing test**

Create `src/data/site-facts.test.ts`:

```ts
import {
  BANANATALK_USERS,
  BANANATALK_USERS_DISPLAY,
  FACTS_VERIFIED_ON,
  HACKSEOUL_PLACEMENT,
} from "./site-facts";

describe("site facts", () => {
  it("stores the user count as a number and a display string that agree", () => {
    expect(BANANATALK_USERS).toBe(1200);
    expect(BANANATALK_USERS_DISPLAY).toBe("1,200+");
    const digits = Number(BANANATALK_USERS_DISPLAY.replace(/[^0-9]/g, ""));
    expect(digits).toBe(BANANATALK_USERS);
  });

  it("records when the facts were last verified, so a stale claim is visible", () => {
    expect(FACTS_VERIFIED_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Number.isNaN(Date.parse(FACTS_VERIFIED_ON))).toBe(false);
  });

  it("states the HackSeoul placement as second, not a win", () => {
    expect(HACKSEOUL_PLACEMENT.place).toBe(2);
    expect(HACKSEOUL_PLACEMENT.year).toBe(2025);
  });

  it("never describes the placement as a first-place win in any locale", () => {
    const { label } = HACKSEOUL_PLACEMENT;
    expect(label.en.toLowerCase()).not.toContain("winner");
    expect(label.en.toLowerCase()).not.toContain("1st");
    // 우승 means taking first place; 2등상 is the correct term for second prize.
    expect(label.ko).not.toContain("우승");
    expect(label.uz.toLowerCase()).not.toContain("g'olib");
  });

  it("carries all three locales on the placement label", () => {
    expect(Object.keys(HACKSEOUL_PLACEMENT.label).sort()).toEqual(["en", "ko", "uz"]);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/data/site-facts.test.ts`
Expected: FAIL — "Failed to resolve import ./site-facts".

- [ ] **Step 3: Add `LocaleText` to the shared types**

In `src/types/index.ts`, add near the top, after the `Language` type:

```ts
/** A string in every supported locale. Every user-facing string in src/data uses this. */
export interface LocaleText {
  en: string;
  ko: string;
  uz: string;
}
```

- [ ] **Step 4: Write the implementation**

Create `src/data/site-facts.ts`:

```ts
// src/data/site-facts.ts
//
// Facts that change over time and appear in many sentences at once. Before
// this module the user count was written out in 23 places across 5 files and
// 3 languages, so correcting it meant 23 edits and any one of them could be
// missed. Everything here is stored once and formatted at the point of use.
//
// When you update a number, update FACTS_VERIFIED_ON in the same commit.

import type { LocaleText } from "../types";

/** Date these figures were last checked against the live products. */
export const FACTS_VERIFIED_ON = "2026-09-16";

/** Combined iOS + Android registered users for BananaTalk. */
export const BANANATALK_USERS = 1200;

/** How the user count is written in prose. Derived from BANANATALK_USERS. */
export const BANANATALK_USERS_DISPLAY = "1,200+";

/**
 * HackSeoul 2025 result. Second place — not a win.
 * The Korean term for first place is 우승; second prize is 2등상.
 */
export const HACKSEOUL_PLACEMENT: {
  place: 2;
  year: 2025;
  label: LocaleText;
} = {
  place: 2,
  year: 2025,
  label: {
    en: "HackSeoul 2025 — 2nd Prize",
    ko: "HackSeoul 2025 — 2등상",
    uz: "HackSeoul 2025 — 2-o'rin",
  },
};

export const STORE_LINKS = {
  bananatalk: {
    ios: "https://apps.apple.com/app/bananatalk",
    android: "https://play.google.com/store/apps/details?id=com.bananatalk.app",
  },
  tezsell: {
    ios: "https://apps.apple.com/app/tezsell",
    android: "https://play.google.com/store/apps/details?id=com.tezsell.app",
  },
} as const;
```

**Before committing, verify the four store URLs against what the site already uses.** Run:

```bash
grep -rnoE "https://(apps\.apple\.com|play\.google\.com)[^\"' )]*" src/ | sort -u
```

If the existing URLs differ from the placeholders above, **use the existing ones** — they are what currently ships. If a URL does not appear anywhere in `src/`, note that in your report rather than inventing one.

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/data/site-facts.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 6: Verify the gates**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

- [ ] **Step 7: Commit**

```bash
git add src/data/site-facts.ts src/data/site-facts.test.ts src/types/index.ts
git commit -m "feat: store volatile site facts in one module

The BananaTalk user count was written out in 23 places across 5 files and
3 languages. It is now a single constant with the date it was last
verified, alongside the HackSeoul placement and the store links."
```

---

## Task 2: Remove the dead data modules

`src/data/projects.ts` (360 lines) and `src/data/experience.ts` (82 lines) are imported by nothing, and their content has drifted from what the pages actually render. Later tasks rewrite both paths with real, wired-up content; this task clears the ground.

**Files:**
- Delete content of: `src/data/projects.ts`, `src/data/experience.ts`
- Modify: `src/types/index.ts`
- Test: `src/data/dead-code.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces: nothing consumed by later tasks. Tasks 4 and 5 create new modules at the same two paths.

- [ ] **Step 1: Prove they are unreferenced before deleting anything**

```bash
grep -rn "data/projects\|data/experience" src/ || echo "no importers"
```

Expected: `no importers`. **If anything imports either file, STOP and report BLOCKED** — deleting a live module would break the build in a way the current suite might not catch.

- [ ] **Step 2: Write the failing test**

Create `src/data/dead-code.test.ts`:

```ts
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const repoRoot = process.cwd();

describe("the orphaned data modules are gone", () => {
  it("no longer ships the unreferenced projects module", () => {
    expect(existsSync(resolve(repoRoot, "src/data/projects.ts"))).toBe(false);
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
```

Note: Task 8 adds the broader guard — an assertion that *no* module under
`src/data/` is orphaned. It cannot live here, because Task 1 has just created
`site-facts.ts` and nothing imports it until Task 8 wires it in. Asserting it
now would fail on a file this plan itself just added.

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- src/data/dead-code.test.ts`
Expected: FAIL on all four — both files still exist, and both interfaces are still declared.

- [ ] **Step 4: Delete the dead files**

```bash
git rm src/data/projects.ts src/data/experience.ts
```

- [ ] **Step 5: Remove the interfaces they used**

In `src/types/index.ts`, delete the `export interface Experience { ... }` block and the `export interface Project { ... }` block. Leave `LocaleText`, `Language`, `Translations`, `TranslationContent`, and everything else untouched.

Then confirm nothing else referenced them:

```bash
grep -rn "\bProject\b\|\bExperience\b" src/ --include="*.ts" --include="*.tsx" | grep -v "LiveProject\|ProjectEntry\|ExperienceEntry\|\.test\." || echo "no remaining references"
```

If a reference remains in live code, stop and report it rather than deleting the interface.

- [ ] **Step 6: Run the test to verify it passes**

Run: `npm test -- src/data/dead-code.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 7: Verify the gates**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

- [ ] **Step 8: Commit**

```bash
git add -A src/data src/types/index.ts src/data/dead-code.test.ts
git commit -m "chore: remove the orphaned projects and experience data

Both modules were imported by nothing and their content had drifted from
the arrays the pages actually render — 442 lines of divergent duplicate.
Adds a test asserting every module under src/data is imported somewhere,
so a data file cannot go orphaned unnoticed again."
```

---

## Task 3: Correct the two factual errors

Both are live, both are visible to the audience the site targets, and both are one-line changes. Doing them before the extraction tasks means the extracted data is already correct.

**Files:**
- Modify: `src/pages/Experience.tsx:33-37`
- Modify: `src/pages/Projects.tsx:44-46`
- Test: `src/data/factual-claims.test.ts`

**Interfaces:**
- Consumes: `HACKSEOUL_PLACEMENT` from `src/data/site-facts.ts`
- Produces: nothing

- [ ] **Step 1: Write the failing test**

Create `src/data/factual-claims.test.ts`:

```ts
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

describe("award claims", () => {
  it("never describes HackSeoul 2025 as a win in any locale", () => {
    const offenders = sources
      .filter(
        ({ text }) =>
          /HackSeoul[^"]*Winner/i.test(text) ||
          text.includes("우승") ||
          /HackSeoul[^"]*G'olib/i.test(text),
      )
      .map(({ path }) => path);

    expect(offenders).toEqual([]);
  });
});

// Deliberately searches ALL of src/ rather than naming Experience.tsx:
// Task 5 moves this data into src/data/experience.ts, and a test pinned to
// the old location would silently stop checking anything.
describe("the current role's start year", () => {
  const allText = sources.map(({ text }) => text).join("\n");

  it("states January 2025 in every locale", () => {
    expect(allText).toContain('en: "January 2025 - Present"');
    expect(allText).toContain('ko: "2025년 01월 - 현재"');
    expect(allText).toContain('uz: "2025-yil Yanvar - Hozirgi"');
  });

  it("no longer claims a 2026 start anywhere in the codebase", () => {
    const offenders = sources
      .filter(({ text }) => text.includes("2026년 01월"))
      .map(({ path }) => path);
    expect(offenders).toEqual([]);
  });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/data/factual-claims.test.ts`
Expected: FAIL on both describes — `Projects.tsx` matches the Winner pattern, and `Experience.tsx` contains `2026년 01월`.

- [ ] **Step 3: Fix the Korean start year**

In `src/pages/Experience.tsx`, in the `duration` block of the first entry (the 3R Innovation role), change:

```ts
        ko: "2026년 01월 - 현재",
```

to:

```ts
        ko: "2025년 01월 - 현재",
```

The English and Uzbek entries already say 2025 and must not change.

- [ ] **Step 4: Fix the overstated award**

In `src/pages/Projects.tsx`, the StylerX entry's `title` block currently reads:

```ts
        en: "HackSeoul 2025 Winner Project - StylerX",
        ko: "HackSeoul 2025 우승 프로젝트 - StylerX",
        uz: "HackSeoul 2025 G'olib Loyiha - StylerX",
```

Replace with:

```ts
        en: "StylerX — HackSeoul 2025, 2nd Prize",
        ko: "StylerX — HackSeoul 2025, 2등상",
        uz: "StylerX — HackSeoul 2025, 2-o'rin",
```

Then check the same entry's `description` block a few lines below. The English says "An award-winning project at HackSeoul 2025" and the Korean "HackSeoul 2025에서 수상한". Both are accurate for a second-place finish — "award-winning" and `수상` do not claim first place — so **leave them**. Only change them if they assert a win.

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/data/factual-claims.test.ts`
Expected: PASS, 3 tests.

- [ ] **Step 6: Verify the gates**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

- [ ] **Step 7: Commit**

```bash
git add src/pages/Experience.tsx src/pages/Projects.tsx src/data/factual-claims.test.ts
git commit -m "fix: correct the Korean start year and the HackSeoul claim

The Korean copy gave the 3R Innovation start as 2026년 01월 while English
and Uzbek said January 2025. Separately, the projects page called StylerX
a HackSeoul winner — 우승 means first place — while the about page, home
page and translations all correctly say 2nd Prize. Adds tests pinning
both claims."
```

---

## Task 4: Extract the projects array

`src/pages/Projects.tsx` is 1,138 lines, of which lines 40–531 are an inline array of twelve project entries wrapped in `useMemo(..., [tx])`. Moving the data out makes it a module constant with no hook dependency, and the `useMemo` disappears with it.

**Files:**
- Create: `src/data/projects.ts`
- Modify: `src/types/index.ts`, `src/pages/Projects.tsx`
- Test: `src/data/projects.test.ts`

**Interfaces:**
- Consumes: `LocaleText` from `src/types`
- Produces: `projects: ProjectEntry[]` from `src/data/projects.ts`, and `ProjectEntry` from `src/types`

- [ ] **Step 1: Add the entry type**

In `src/types/index.ts`:

```ts
export interface ProjectEntry {
  /** Stable identifier. Kebab-case slug, not an array index. */
  id: string;
  title: LocaleText;
  description: LocaleText;
  role: LocaleText;
  year: string;
  tech: string[];
  url?: string;
  github?: string;
  featured: boolean;
}
```

- [ ] **Step 2: Write the failing test**

Create `src/data/projects.test.ts`:

```ts
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
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- src/data/projects.test.ts`
Expected: FAIL — "Failed to resolve import ./projects".

- [ ] **Step 4: Move the array**

This is a mechanical relocation. Do not rewrite any copy — the strings move verbatim.

1. Create `src/data/projects.ts` with this header:

```ts
// src/data/projects.ts
//
// Every project shown on /projects. Strings are stored as LocaleText maps and
// translated at render by the page's tx() helper, so this module is a plain
// constant with no dependency on React or the language context.

import type { ProjectEntry } from "../types";

export const projects: ProjectEntry[] = [
```

2. For each of the twelve entries in `src/pages/Projects.tsx` lines 40–531, copy it across and apply exactly these transformations:
   - `id: 0` → a kebab-case slug derived from the English title (e.g. `id: "stylerx"`, `id: "bananatalk"`, `id: "tezsell"`). Array indices are not stable identifiers — reordering the list would silently change them.
   - `title: tx({ en: "...", ko: "...", uz: "..." })` → `title: { en: "...", ko: "...", uz: "..." }`. Strip the `tx(` wrapper and its closing `)`. The strings themselves are unchanged.
   - Same for `description` and `role`.
   - Leave `year`, `tech`, `url`, `github`, `featured` exactly as they are.
3. Close with `];`.

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/data/projects.test.ts`
Expected: PASS, 5 tests. If the locale test fails, an entry is missing a translation — fix the data, never the test.

- [ ] **Step 6: Wire the page to the data**

In `src/pages/Projects.tsx`:

1. Add `import { projects } from "../data/projects";` to the imports.
2. Delete the entire `const projects = useMemo(() => [ ... ], [tx]);` block (lines 40–531).
3. Every site that read a translated field now needs `tx()` at the point of use: `project.title` becomes `tx(project.title)`, and the same for `description` and `role`. Work through each usage the compiler flags.
4. If `useMemo` is now unused in the file, remove it from the React import. If `tx` is now unused, remove it from the `useLanguage()` destructuring — but check first, it is probably still used elsewhere on the page.

- [ ] **Step 7: Verify the page still renders the same content**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

Then confirm the file shrank as expected:

```bash
wc -l src/pages/Projects.tsx
```

Expected: roughly 650 lines, down from 1,138. Report the actual number.

- [ ] **Step 8: Commit**

```bash
git add src/data/projects.ts src/data/projects.test.ts src/types/index.ts src/pages/Projects.tsx
git commit -m "refactor: move the projects array into src/data

Projects.tsx held twelve entries inline inside a useMemo keyed on tx,
rebuilt whenever the language context re-rendered. The data is now a
module constant with slug ids instead of array indices, and the page
reads from it."
```

---

## Task 5: Extract the experience and certificate arrays

Same transformation as Task 4, applied to two smaller arrays. Batched into one task because they are the same mechanical shape and a reviewer would accept or reject them together.

**Files:**
- Create: `src/data/experience.ts`, `src/data/certificates.ts`
- Modify: `src/types/index.ts`, `src/pages/Experience.tsx`, `src/pages/Certificates.tsx`
- Test: `src/data/experience.test.ts`, `src/data/certificates.test.ts`

**Interfaces:**
- Consumes: `LocaleText` from `src/types`
- Produces: `experiences: ExperienceEntry[]`, `certificates: CertificateEntry[]`, and both interfaces from `src/types`

- [ ] **Step 1: Add the entry types**

In `src/types/index.ts`:

```ts
export interface ExperienceEntry {
  id: string;
  company: LocaleText;
  position: LocaleText;
  duration: LocaleText;
  location: LocaleText;
  current: boolean;
  tech: string[];
  achievements: LocaleText[];
}

export interface CertificateEntry {
  id: string;
  title: LocaleText;
  issuer: LocaleText;
  year: string;
}
```

Check both against the actual shape of the inline arrays in `src/pages/Experience.tsx` (starting line 20) and `src/pages/Certificates.tsx` (starting line 10) before writing them. **If a field exists in the page that is missing here, add it to the interface** — do not drop data to fit the type. Report any field you added.

- [ ] **Step 2: Write the failing tests**

Create `src/data/experience.test.ts`:

```ts
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
```

Create `src/data/certificates.test.ts`:

```ts
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
```

- [ ] **Step 3: Run the tests to verify they fail**

Run: `npm test -- src/data/experience.test.ts src/data/certificates.test.ts`
Expected: FAIL on both — unresolved imports.

- [ ] **Step 4: Move both arrays**

Apply exactly the Task 4 transformation to each:
- strip `tx(` and its closing `)` from every translated field, leaving the `{ en, ko, uz }` object
- replace numeric `id` values with kebab-case slugs (`"3r-innovation"`, `"quintet-systems"`, `"ebridge-world"` for experience; derive certificate slugs from their English titles)
- copy all other fields unchanged

`src/data/experience.ts` header:

```ts
// src/data/experience.ts
//
// Career history shown on /experience and summarised on /about. Strings are
// LocaleText maps translated at render, so this module is a plain constant.

import type { ExperienceEntry } from "../types";

export const experiences: ExperienceEntry[] = [
```

`src/data/certificates.ts` header:

```ts
// src/data/certificates.ts

import type { CertificateEntry } from "../types";

export const certificates: CertificateEntry[] = [
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npm test -- src/data/experience.test.ts src/data/certificates.test.ts`
Expected: PASS. The "current role first" and "3R" assertions confirm the extraction preserved the ordering and the employer.

- [ ] **Step 6: Wire both pages**

In `src/pages/Experience.tsx`: import `experiences` from `../data/experience`, delete the inline `const experiences = [...]`, and wrap each translated field access in `tx()`.
In `src/pages/Certificates.tsx`: the same with `certificates` from `../data/certificates`.

- [ ] **Step 7: Verify the gates and the line counts**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

```bash
wc -l src/pages/Experience.tsx src/pages/Certificates.tsx
```

Report both numbers. Experience.tsx should drop from 471 to roughly 300.

- [ ] **Step 8: Commit**

```bash
git add src/data/experience.ts src/data/experience.test.ts src/data/certificates.ts src/data/certificates.test.ts src/types/index.ts src/pages/Experience.tsx src/pages/Certificates.tsx
git commit -m "refactor: move experience and certificates into src/data

Both pages held their content inline. The data now lives in typed
modules with slug ids, and tests assert every field carries all three
locales and that exactly one role is marked current."
```

---

## Task 6: Move the live-projects data

`src/pages/LiveProjects.tsx` already declares `const PROJECTS: LiveProject[]` at module level (line 44) — better structured than the others. This task relocates it and aligns its type with the rest.

**Files:**
- Create: `src/data/live-projects.ts`
- Modify: `src/pages/LiveProjects.tsx`, `src/types/index.ts`
- Test: `src/data/live-projects.test.ts`

**Interfaces:**
- Consumes: `LocaleText` from `src/types`; `STORE_LINKS` from `src/data/site-facts`
- Produces: `liveProjects: LiveProjectEntry[]` from `src/data/live-projects.ts`

- [ ] **Step 1: Read the existing shape**

The `LiveProject` type is declared inside `src/pages/LiveProjects.tsx`. Read it and the `PROJECTS` array (lines 44–186) before writing anything. Move the interface to `src/types/index.ts` renamed `LiveProjectEntry`, preserving every field.

- [ ] **Step 2: Write the failing test**

Create `src/data/live-projects.test.ts`:

```ts
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
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- src/data/live-projects.test.ts`
Expected: FAIL — unresolved import.

- [ ] **Step 4: Move the array**

Create `src/data/live-projects.ts`:

```ts
// src/data/live-projects.ts
//
// The two shipped products featured on /live-projects. Store URLs come from
// site-facts so a changed link is corrected in one place.

import type { LiveProjectEntry } from "../types";

export const liveProjects: LiveProjectEntry[] = [
```

Copy the entries verbatim, changing only the `id` values to the slugs `"bananatalk"` and `"tezsell"`. Where an entry hardcodes an App Store or Play Store URL, replace it with the matching value from `STORE_LINKS` in `src/data/site-facts.ts`.

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/data/live-projects.test.ts`
Expected: PASS, 3 tests.

- [ ] **Step 6: Wire the page**

In `src/pages/LiveProjects.tsx`: delete the local `LiveProject` interface and the `PROJECTS` const, import `liveProjects` from `../data/live-projects`, and update every reference from `PROJECTS` to `liveProjects`.

- [ ] **Step 7: Verify the gates**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

- [ ] **Step 8: Commit**

```bash
git add src/data/live-projects.ts src/data/live-projects.test.ts src/types/index.ts src/pages/LiveProjects.tsx
git commit -m "refactor: move the live projects data into src/data

Store URLs now come from site-facts so a changed link is corrected once."
```

---

## Task 7: Cross-locale consistency tests

The lasting deliverable of this phase. Every extraction task asserts that its own data is complete; this task asserts invariants *across* locales that no single module can check — the class of bug that put 2026 in the Korean copy while English said 2025.

**Files:**
- Create: `src/data/consistency.test.ts`

**Interfaces:**
- Consumes: `projects`, `experiences`, `certificates`, `liveProjects`, and `HACKSEOUL_PLACEMENT`
- Produces: nothing

- [ ] **Step 1: Write the test**

This test is written last because it needs every data module to exist. It should pass immediately — if it does not, it has found a real inconsistency, which is the point.

Create `src/data/consistency.test.ts`:

```ts
import { certificates } from "./certificates";
import { experiences } from "./experience";
import { liveProjects } from "./live-projects";
import { projects } from "./projects";
import type { LocaleText } from "../types";

const LOCALES = ["en", "ko", "uz"] as const;

/** Every LocaleText in every data module, labelled by where it came from. */
function allLocaleTexts(): Array<{ where: string; text: LocaleText }> {
  const found: Array<{ where: string; text: LocaleText }> = [];

  const visit = (where: string, value: unknown) => {
    if (value === null || typeof value !== "object") return;
    if (Array.isArray(value)) {
      value.forEach((item, i) => visit(`${where}[${i}]`, item));
      return;
    }
    const obj = value as Record<string, unknown>;
    const isLocaleText = LOCALES.every((l) => typeof obj[l] === "string");
    if (isLocaleText) {
      found.push({ where, text: obj as unknown as LocaleText });
      return;
    }
    Object.entries(obj).forEach(([key, child]) => visit(`${where}.${key}`, child));
  };

  projects.forEach((p) => visit(`projects.${p.id}`, p));
  experiences.forEach((e) => visit(`experiences.${e.id}`, e));
  certificates.forEach((c) => visit(`certificates.${c.id}`, c));
  liveProjects.forEach((p) => visit(`liveProjects.${p.id}`, p));

  return found;
}

const texts = allLocaleTexts();

describe("cross-locale consistency", () => {
  it("finds LocaleText entries to check", () => {
    expect(texts.length).toBeGreaterThan(10);
  });

  it("never leaves a locale blank", () => {
    const blanks = texts
      .filter(({ text }) => LOCALES.some((l) => !text[l]?.trim()))
      .map(({ where }) => where);
    expect(blanks).toEqual([]);
  });

  // The bug this phase fixed: Korean said 2026년 while English said 2025.
  it("uses the same set of years in every locale of a given string", () => {
    const mismatched = texts
      .filter(({ text }) => {
        const yearsPer = LOCALES.map((l) =>
          [...text[l].matchAll(/\b(19|20)\d{2}\b/g)].map((m) => m[0]).sort().join(","),
        );
        return new Set(yearsPer).size > 1;
      })
      .map(({ where, text }) => `${where}: ${LOCALES.map((l) => text[l]).join(" | ")}`);

    expect(mismatched).toEqual([]);
  });

  it("uses the same set of numeric figures in every locale", () => {
    const mismatched = texts
      .filter(({ text }) => {
        const figuresPer = LOCALES.map((l) =>
          [...text[l].matchAll(/\d[\d,]*\+?/g)].map((m) => m[0]).sort().join(","),
        );
        return new Set(figuresPer).size > 1;
      })
      .map(({ where }) => where);

    expect(mismatched).toEqual([]);
  });

  it("never claims a first-place finish at HackSeoul", () => {
    const offenders = texts
      .filter(
        ({ text }) =>
          /winner/i.test(text.en) || text.ko.includes("우승") || /g'olib/i.test(text.uz),
      )
      .map(({ where }) => where);
    expect(offenders).toEqual([]);
  });
});
```

- [ ] **Step 2: Run the test**

Run: `npm test -- src/data/consistency.test.ts`
Expected: PASS.

**If the year or figure test fails**, it has found a genuine cross-locale inconsistency that was invisible before. Fix the *data*, never the test, and report what it caught — that finding is more valuable than the test passing on the first run.

- [ ] **Step 3: Prove the guard has teeth**

A test nobody has watched fail is not a guard. Temporarily change one Korean year in `src/data/experience.ts` (for example `2025년` to `2027년`), run the test, and confirm it FAILS naming that entry. Paste the output into your report, then revert and confirm `git diff src/data/experience.ts` is empty and the test passes again.

- [ ] **Step 4: Verify the gates**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

- [ ] **Step 5: Commit**

```bash
git add src/data/consistency.test.ts
git commit -m "test: assert years and figures match across locales

The Korean copy gave a 2026 start date where English said 2025, and
nothing caught it. This walks every LocaleText in every data module and
compares the years, the numeric figures, and the award wording between
locales."
```

---

## Task 8: Route volatile facts through site-facts

With the data extracted and the consistency guard in place, replace the repeated literals. This is the task that makes a future correction a one-line edit.

**Files:**
- Modify: `src/data/live-projects.ts`, `src/data/projects.ts`, `src/data/translations.ts`, `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/utils/seo.tsx`
- Test: `src/data/no-stray-literals.test.ts`

**Interfaces:**
- Consumes: `BANANATALK_USERS_DISPLAY`, `HACKSEOUL_PLACEMENT` from `src/data/site-facts`
- Produces: nothing

- [ ] **Step 1: Find every occurrence**

```bash
grep -rn "1,200+" src/ | wc -l
grep -rn "1,200+" src/
```

Record the count and the list in your report. It was 23 across 5 files when this plan was written.

- [ ] **Step 2: Write the failing test**

Create `src/data/no-stray-literals.test.ts`:

```ts
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
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- src/data/no-stray-literals.test.ts`
Expected: FAIL — the literal test lists five files. The orphan test may also
fail if any data module is still unwired; both must be green before you commit.

- [ ] **Step 4: Replace the literals**

In each file, import `BANANATALK_USERS_DISPLAY` and interpolate it. A `LocaleText` in a data module becomes a template literal:

```ts
description: {
  en: `Real conversations with native speakers — instant chat, voice messages, smart translation, AI study tools. ${BANANATALK_USERS_DISPLAY} users across iOS and Android.`,
  ...
}
```

In `src/data/translations.ts` and `src/utils/seo.tsx`, do the same.

**Handle the "free forever" claim in the same pass.** It is live in `Home.tsx`, `Projects.tsx`, and `LiveProjects.tsx` in all three locales, and the app ships `in_app_purchase`, `google_mobile_ads`, and a VIP/limits implementation — so the absolute claim is not defensible. Replace it with wording that is true either way:

| Locale | Replace | With |
|---|---|---|
| en | "Free forever." / "free forever" | "Free to use." |
| ko | "영구 무료." | "무료로 이용 가능." |
| uz | "Abadiy bepul." | "Bepul foydalanish mumkin." |

Do the same for TezSell's "completely free" → "free to use" / `무료로 이용 가능` / `bepul foydalanish mumkin`.

Leave a comment in `src/data/site-facts.ts` recording that the monetization wording is pending the owner's confirmation, so it is not forgotten:

```ts
// Open question for the owner: BananaTalk ships in_app_purchase and
// google_mobile_ads and has a VIP tier, so the site no longer claims
// "free forever". Confirm the current model and set the wording.
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/data/no-stray-literals.test.ts`
Expected: PASS.

- [ ] **Step 6: Confirm the count is now one**

```bash
grep -rn "1,200+" src/ | grep -v "\.test\." | wc -l
```

Expected: `1` — the definition in `site-facts.ts`.

- [ ] **Step 7: Verify the gates**

Run: `npm run type-check && npm run lint && npm test && npm run build`
Expected: all exit 0.

- [ ] **Step 8: Commit**

```bash
git add -A src/data src/pages src/utils
git commit -m "refactor: route volatile facts through site-facts

The user count appeared in 23 places across 5 files and 3 languages;
it is now interpolated from one constant. Also replaces the absolute
'free forever' claim, which the app's in-app purchase and ads
dependencies contradict, with wording that holds either way."
```

---

## Phase 2 Definition of Done

- [ ] `npm test` passes; `npm run type-check`, `npm run lint`, `npm run build` all exit 0
- [ ] `grep -rn "1,200+" src/ | grep -v "\.test\."` returns exactly one line
- [ ] `grep -rn "우승" src/` returns nothing
- [ ] `grep -rn "2026년 01월" src/` returns nothing
- [ ] No module under `src/data/` is orphaned (asserted by `dead-code.test.ts`)
- [ ] `src/pages/Projects.tsx` is under 700 lines, down from 1,138
- [ ] The consistency guard has been watched failing and reverted

## What Phase 2 deliberately does not do

- **No visual change.** Layout and styling are untouched; only content location changes, plus the three corrected facts.
- **No routing, locale URLs, or prerendering.** That is Phase 3.
- **No page rebuilds.** Phase 4.
- **No MDX, case studies, or blog.** Phases 5 and 6. The data modules here are the foundation those build on.

## Open with the owner

1. **Is BananaTalk still free?** Task 8 softens the claim to "free to use"; the owner sets the final wording.
2. **Is 1,200+ still current?** Stored with `FACTS_VERIFIED_ON` so the claim is dated.
3. **Store URLs** — Task 1 Step 4 uses whatever the site already ships; any missing URL is reported rather than invented.
