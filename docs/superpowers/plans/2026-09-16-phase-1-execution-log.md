# SDD ledger — plan: docs/superpowers/plans/2026-09-16-phase-1-foundation.md

Spec: docs/superpowers/specs/2026-09-16-portfolio-redesign-design.md (read, reachable)
Branch: phase-1-foundation (from main @ 9551696)
Baseline: type-check exit 0; no test script yet (Task 1 creates it); deps installed.

## Pre-flight conflict scan

### Cross-task rows (tasks sharing a file or interface)

| Tasks | Produces → Consumes | Finding |
|---|---|---|
| 1 → all | `npm test`, vitest globals, jsdom env | Clean. Every later task's tests depend on it; it is first. |
| 2 → 3 | `contrastRatio()` → tokens AA assertions | Clean. Signature matches at both ends. |
| 3 → 5, 6, 7 | `lightTokens`/`darkTokens`/`ThemeName` | Clean. `ThemeName` declared in tokens.ts, imported by theme.ts and useTheme.ts. |
| 4 → 5, 6 | `BODY_FONT_FAMILY`, `GOOGLE_FONTS_HREF` | Clean. Task 5 imports BODY_FONT_FAMILY; Task 6 hardcodes the same href in index.html. Duplication is intentional (HTML cannot import TS) and Task 6's test asserts both carry the same families. |
| 6 ↔ 7 | both modify `index.html` | **Ordering dependency.** Task 6 inserts font links before line 75 (`apple-touch-icon`); Task 7 inserts the bootstrap script as the first element in `<head>`. Task 7 runs after Task 6 and inserts *above* it, so the script still precedes the stylesheet. No conflict, but Task 7 must not be reordered before Task 6. |
| 6 → 7 | Task 6's test greps index.html | Clean. Assertions are `toContain`, unaffected by Task 7 later prepending a script. |
| 7 self | `resolveInitialTheme` vs inline script | Known intentional duplication (script cannot import). Step 9 pins them together by assertion. Verified `/src/main.tsx` exists at index.html:221, so the ordering assertion is valid. |
| 5 → build | tailwind.config.ts imports src/design/typography.ts | Risk, not conflict: the Tailwind/PostCSS loader must resolve a `.ts` import from the config. Task 5 Step 5 runs `npm run build`, which catches it. If it fails, ruling: inline the font stack string in the config and keep the test asserting the two agree. |
| 8 → none | deletions + README | Clean. Confirmed the 4 section files are 0 bytes with no references. |

### Per-task internal consistency rows

| Task | Self-agreement | Finding |
|---|---|---|
| 1 | scripts vs tsconfig types vs test file | **DEFECT — see Ruling 1 and 2.** |
| 2 | tests vs implementation | Clean. White luminance = 0.2126+0.7152+0.0722 = 1.0 exactly; black = 0. Assertions hold. |
| 3 | token values vs AA assertions | Clean, but light `muted` on `surface` ≈ 4.60 against a 4.5 floor — little headroom. Plan already notes it. |
| 4 | font stacks vs assertions | Clean. Every stack ends in `serif`/`sans-serif` as asserted. |
| 5 | test vs rewritten config | Clean after the earlier fix moving the test under `src/`. |
| 6 | CSS vars vs token names vs test | **DEFECT — see Ruling 1.** Also: the test derives `--color-surface-raised` from `surfaceRaised` via camelCase→kebab; implementation declares exactly that name. Consistent. |
| 7 | resolver vs hook vs script | **DEFECT — see Ruling 1.** Otherwise clean. |
| 8 | test vs deletions vs README | **DEFECT — see Ruling 1.** |

### Rulings

**Ruling 1: `__dirname` is undefined in these test files — replace with `process.cwd()`.**
`package.json` declares `"type": "module"`, so Vitest executes test files as ESM,
where `__dirname` does not exist. Tasks 6, 7 (Step 9), and 8 all use it to locate
`src/index.css`, `index.html`, and the repo root — every one would throw
`ReferenceError: __dirname is not defined`. Vitest runs with the repo root as cwd,
so `resolve(process.cwd(), "<path from repo root>")` is correct and simpler than
the `fileURLToPath(import.meta.url)` dance.
*Cost if wrong:* if a future runner changes cwd, these path lookups break loudly
with a clear ENOENT — trivial to spot and fix, no silent failure.

**Ruling 2: Task 1 Step 5 must be `"types": ["vitest/globals", "node"]`.**
A `types` array replaces TypeScript's default "include every @types package"
behaviour. Writing only `vitest/globals` would drop `@types/node`, so the
`node:fs` / `node:path` imports in Tasks 6, 7, and 8 would fail `npm run type-check`.
`@types/node@^20.5.0` is already a devDependency.
*Cost if wrong:* none identified; adding `node` only widens available types.

**Ruling 3: `relativeLuminance("#FFFFFF")` assertion uses `toBeCloseTo(1, 5)`.**
Kept as written — the coefficients sum to exactly 1.0, so this passes. Recorded
only because it looked like a floating-point risk on first read and is not one.
*Cost if wrong:* none; the test would fail immediately in Task 2 Step 4.

Both defects are mine, introduced when writing the plan. Rulings 1 and 2 are
carried into the Task 1 and Task 6/7/8 dispatches rather than edited into the
plan file, so the plan and the ledger together show what changed and why.

## Progress

Task 1: complete (commits b1b9b10..2ed619f, DONE_WITH_CONCERNS — verified: 1 test passing, no AI trailers, eslint tooling repaired)

Task 1 surfaced pre-existing breakage the plan did not anticipate: `npm run lint`
has never worked in this repo. `eslint.config.js` (unchanged since the first
commit) imports the `typescript-eslint` meta-package, which only exists at v7+
while devDependencies pin the v6 `@typescript-eslint/*` packages, and imports
the `eslint/config` subpath, which is ESLint 9 only against `eslint@^8.45`.
The npm scripts also pass `--ext ts,tsx`, incompatible with flat config.
The implementer repaired the tooling (in scope — Task 1 owns the test/lint
harness) and correctly declined to fix the 13 errors + 2 warnings it surfaced
in unrelated application files.

Ruling: insert Task 1b to clear all 15 lint problems before Task 2.
Rationale: the plan's Definition of Done requires `npm run lint` to exit 0, and
every task from here on is supposed to use lint as a verification gate. A gate
that is red before the first task runs is not a gate — it would stay red through
all eight tasks and no reviewer could distinguish new breakage from inherited
breakage. The 13 errors are unused imports and variables (one-line deletions).
The 2 warnings are real: `projects` in src/pages/Projects.tsx is a ~500-line
array literal rebuilt every render and fed to two useMemo hooks, so their
memoisation currently does nothing; the correct dependency is `language`, not
`tx` (which the language context recreates each render).
Scope note: Projects.tsx is rewritten in Phase 4, but the fix is three lines and
restoring the lint gate is worth more than avoiding the touch.
Cost if wrong: Task 1b edits eight application files the phase otherwise would
not have touched, all mechanical deletions plus one useMemo wrap. If any
deletion removes something actually load-bearing, type-check and the build catch
it immediately. Reverting Task 1b alone restores the prior state.

Task 1: review clean — Spec ✅, quality Approved, 0 Critical, 0 Important.
Reviewer independently confirmed Rulings 1 and 2 landed (tsconfig types array
includes "node"; setup.test.tsx created directly as .tsx; no __dirname anywhere).
Confirmed the eslint repair reproduces the intended rule set (rules-of-hooks:
error, exhaustive-deps: warn) rather than weakening coverage, and that only
--ext ts,tsx was dropped from the lint script (flat config infers file matching).

Task 1: minor (deferred): commit 2ed619f folds an eslint dependency swap
(typescript-eslint@7 in, @typescript-eslint/* v6 out) into a task whose brief
never mentions eslint tooling. Sound but undocumented — mention in the PR
description so a later reader does not mistake it for scope creep.

Task 1: note for final review (not a finding against this task): package-lock.json
references a private registry mirror at repo.calsplatz.com:4873 throughout. It is
pre-existing and unchanged by this branch, but it is worth the repo owner's
attention — a personal portfolio resolving dependencies through a private company
mirror is a supply-chain coupling they may not intend.

Task 1b: complete (commit a1c9659). Verified independently: lint, type-check,
test, build all exit 0. No AI trailers. Lint gate is now live for the phase.
Two disclosed deviations sent to review rather than waved through: (a) fixed two
items absent from my list — Footer.tsx `language`, LanguageToggle.tsx `Globe` —
because my enumeration said 13 but real eslint output is 15; (b) added a second,
un-pre-authorised eslint-disable on the new useMemo deps in Projects.tsx.
Root cause I found while checking (b): languageContext.tsx:95 defines `tx` as a
plain arrow recreated each render, and builds `value` as a fresh object literal
each render, so every context consumer re-renders whenever the provider does.
Asked the reviewer whether memoising `tx` (useCallback on language) and `value`
(useMemo) at the source is the correct fix, letting Projects.tsx depend on [tx]
with no disable. Not decided by me — awaiting the reviewer's recommendation.

Task 2: complete (commit 132f8a3). 7 tests passing in contrast.test.ts, suite
total 8. Verified WCAG coefficients (0.2126/0.7152/0.0722, 0.03928 threshold,
12.92 divisor, 1.055/2.4 gamma) against the spec formula. No AI trailers.
Note: the plan's step text predicted "8 tests" for this file; the brief contains
7 cases. My miscount when writing the plan, not an implementer omission.

Task 1b: fix round 1/5 dispatched — 1 Important open. Review agreed the
Projects.tsx:534 disable suppresses a real defect, not a false positive, and
independently verified the fix is behaviour-preserving: setLanguage from useState
is already referentially stable, and both `t` and `tx` derive purely from
`language`. Reviewer also flagged the TS trap in advance — `tx` is generic and
the file is .tsx, so the arrow needs the `<T,>` trailing-comma disambiguator.
Deviation 1 (two extra unused-binding fixes) accepted by review: same category,
grep-verified, and required for lint to reach exit 0. Logged against me, not the
implementer — my enumeration said 13, real count was 15.

Task 2: review clean — Spec ✅, quality Approved, 0 findings.
Reviewer verified all five WCAG 2.1 maths points independently: linearisation
(0.03928 / 12.92 / 0.055 / 1.055 / 2.4), coefficients and channel assignment,
(lighter+0.05)/(darker+0.05) with lighter as numerator, hexToRgb byte-slice
order, and that #FFFFFF evaluates to exactly 1.0. Confirmed the suite would
catch a red/blue transposition via the #C2410C case — greyscale-only tests
would not have.

Task 1b: fix round 1/5 (1 addressed, 0 open; commit 28b9eca). Verified: tx now
useCallback(<T,>...) keyed on [language]; value now useMemo; Projects.tsx deps
[tx] with no disable; only two disables remain in src/ (the pre-authorised
react-refresh at languageContext.tsx:20 and the pre-existing one at :81). All
four gates exit 0. Scoped re-review dispatched.

Task 3: complete (commit ca19534). 12 tests passing, suite total 20. All 14 hex
values verified byte-for-byte against the approved palette — nothing was altered
to satisfy a test. Light muted #78716C on surface #FBFAF8 measured 4.5992
against the 4.5 AA floor (headroom 0.099), matching the pre-flight hand
calculation. Recorded so a future palette change can see how little room exists.

Task 3: review clean — Spec ✅, quality Approved, 0 Critical, 0 Important.
Reviewer independently re-verified all 14 hex values, confirmed the AA constant
is 4.5 and unsoftened, and confirmed the dark palette is independently chosen
rather than a programmatic inversion (accent moves #C2410C -> #F97316 for
legibility on dark, not a flip).

Task 3: minor (deferred): surfaceRaised has no contrast assertions, though cards
sit on it and carry text. The gap is in MY brief's test file, not the
implementation — the implementer was correct not to add unrequested cases.
Controller computed the four uncovered pairs by hand: light muted/surfaceRaised
~4.80, light accent/surfaceRaised ~5.18, dark muted/surfaceRaised ~6.78, dark
accent/surfaceRaised ~6.10. All clear AA, and the light pairs clear it more
comfortably than the surface pairs already under test. Real coverage gap, no
live accessibility defect. Cheapest fix is four more assertions in
tokens.test.ts; recommend folding into Phase 2 rather than reopening Task 3.

Task 1b: fix round 1 re-review — ALL FINDINGS ADDRESSED. Verified the useMemo
deps on `value` are [language, setLanguage, tx] and semantically complete, that
useCallback genuinely preserves the generic signature (reviewer proved it with
an isolated tsc run: tx<number>() yields number, and assigning it to string
correctly errors TS2322), that [tx] is complete for the projects memo, and that
the pre-existing geolocation useEffect is unaffected.
Task 1b: complete (commits a1c9659..28b9eca, review clean).

Task 4: complete (commit b0ab32d). 7 tests, suite total 27. Korean display stack
confirmed free of any Fraunces reference.

### CONTROLLER CORRECTION — type-check has been a no-op all session

The Task 1b re-reviewer found, while verifying genericity, that `npm run
type-check` compiles ZERO files. Root tsconfig.json is `{"files": [],
"references": [...]}` and plain `tsc --noEmit` without `--build` ignores
references entirely. Verified: `npx tsc --noEmit --listFiles` returns 0 files.
The `tsc` half of `npm run build` is the same no-op.

Every "type-check exits 0" recorded in this ledger for Tasks 1, 1b, 2, 3 and 4
attested to nothing. That is a controller verification failure — I ran the
command and trusted the exit code without ever confirming it inspected files.

Severity assessment, done before ruling:
- Probed src/ with a references-free config over all 43 source files: ZERO type
  errors. The application code is genuinely clean; nothing shipped broken.
- `tsc --build` surfaces exactly two real problems:
  1. vite.config.ts(41,3) TS2769 — the `test` key is not valid on
     `UserConfigExport`. INTRODUCED BY TASK 1 and masked by the no-op. The
     `/// <reference types="vitest" />` line is present but does not augment the
     type here; the reliable fix for Vitest 1.x is importing `defineConfig` from
     `vitest/config` rather than `vite`.
  2. tsconfig.app.json(32,18) TS6310 — referenced project tsconfig.node.json
     sets `"noEmit": true`, which composite referenced projects may not do.
     Pre-existing, inherited from the Vite template.

Ruling: insert Task 4b to repair the type-check pipeline before Task 5.
Rationale: the plan's Definition of Done requires type-check to pass, and three
remaining tasks (5, 6, 7) are the ones that actually restructure typed code —
tailwind.config.ts importing from src/, CSS variable plumbing, and the theme
hook rewrite. Those are precisely the tasks where a real type error is likely,
and they are the tasks currently least protected. Fixing the gate after them
would be fixing it after it was needed.
Cost if wrong: Task 4b touches tsconfig.node.json, vite.config.ts, and two npm
scripts — build/tooling only, no application code. If the tsconfig change has an
unforeseen effect it surfaces immediately in `npm run build`, which is verified
in the same task.

Task 4b: complete (commit 2c9ee46). Type-check pipeline repaired and PROVEN to
have teeth — `npx tsc --build --force --listFiles` now reports 43 src files
where it previously reported 0. Implementer demonstrated break/detect/revert on
both scripts: mutating tokens.ts surface to a number produced
"TS2322: Type 'number' is not assignable to type 'string'" at tokens.ts(28,3)
from both type-check and build, and reverting restored a clean pass with empty
git diff. Working tree clean, no stray build artifacts.

Deviation, accepted: my prescribed fix (import defineConfig from 'vitest/config')
does not work in this repo. vitest@1.6.1 hard-depends on vite@^5 while the repo
pins vite@^4.4.5, so npm nests a second vite copy and importing vitest types
activates a colliding `declare module 'vite'` block. Implementer used a local
minimal UserConfig augmentation in vite.config.ts instead — no vitest import, no
config values changed — rather than bumping a major version outside its scope.
Correct call.

Task 4b: deferred to Phase 3: THE REPO NOW HAS TWO VITE COPIES — app builds with
vite@4.5.14, tests transform through vitest's nested vite@5.4.21. Verified via
`npm ls vite`. Risk is low today because both read the same vite.config.ts and
share the alias map, so module resolution agrees; but test-time and build-time
transform pipelines are different majors, so a behavioural divergence would be
invisible until it bit. Phase 3 introduces vite-react-ssg, which forces the Vite
version question anyway — settle it there by upgrading the app to Vite 5 rather
than downgrading vitest. Not fixed here: a major upgrade is outside Phase 1's
scope and would touch the build for every remaining task.

Task 5: complete (commit c3a5c32). 7 new tests (5 of 7 failing before the
rewrite, 7/7 after), suite total 34. All four gates exit 0 — and type-check is
now a real gate, so this is the first task whose green type-check means
something. Direct .ts import of BODY_FONT_FAMILY into tailwind.config.ts worked;
the pre-flight risk about the Tailwind loader resolving a .ts import did not
materialise, so no inlining fallback was needed.
gray ramp retained (605 usages), vite.config.ts untouched per my correction,
no eslint-disable added.
Animations: kept fade-in, fade-in-up, slide-up. Deleted slide-in-left,
slide-in-right, bounce-slow, pulse-slow, float, glow, shimmer — implementer
grepped and found six of them are hand-written CSS keyframes in src/index.css,
independent of the Tailwind config, and shimmer had zero usages anywhere. Good
catch: deleting them from Tailwind changes nothing at render time.

Controller pre-flight check before dispatching Task 6: verified the hand-written
keyframes in src/index.css begin at line 318, while Task 6 replaces only from
the top of the file through the body rule ending at line 42. No collision — the
animations survive Task 6's rewrite. Confirmed tailwind.config.ts declares
display: ["var(--font-display)"], the variable Task 6 is responsible for
declaring.

Task 4: review clean — Spec ✅, Approved, 0 Critical, 0 Important.
Task 4b: review clean — Spec ✅, Approved, 0 Critical, 0 Important. Reviewer
quoted the vite.config.ts UserConfig augmentation in full and confirmed it types
exactly the five fields in use with accurate per-field types (no any, no index
signature), so excess-property checking still catches a typo'd KEY. Confirmed
--build --force forecloses the stale-.tsbuildinfo false pass, and that
tsconfig.node.json emit is redirected to node_modules/.tmp with *.tsbuildinfo
gitignored — no artifacts in the tracked tree.
Task 4b: minor (deferred): tsconfig.app.json lacks "composite": true while being
referenced from root tsconfig.json — pre-existing Vite-template asymmetry with
the tsconfig.node.json fix applied here. Works empirically (43 files checked,
exit 0) but is a latent inconsistency.
Task 4b: minor (deferred): `environment` in the local augmentation is typed as
bare string, not a literal union, so a misspelled VALUE ("jsdon") type-checks.
Key typos are still caught. Low risk.

Task 5: review clean — Spec ✅, Approved, 0 Critical, 0 Important.
Reviewer verified beyond the diff where it mattered: ran `npx tailwindcss`
against the new config and confirmed the generated rule is
`font-family: 'Inter', system-ui, -apple-system, 'Apple SD Gothic Neo',
'Malgun Gothic', sans-serif;` — a valid declaration, not one quoted mega-token,
answering the single-string-in-array question empirically.
My animation worry resolved: .animate-slide-in-left/-right ARE used in About,
Experience, Contact and Projects .tsx, but they resolve via hand-written classes
in src/index.css @layer utilities (lines ~126-170) with plain `animation:`
declarations — no @apply, so no dependency on theme.extend.animation. Deleting
the Tailwind entries is genuinely inert. animate-float/glow/bounce-slow/
pulse-slow have zero component usages; shimmer appears nowhere.
Gray ramp confirmed byte-identical across all 11 stops by normalised diff.
Confirmed vite.config.ts has an empty diff across the range, per my correction.
Task 5: minor (deferred): .animate-fade-in, -fade-in-up, -slide-up are now
defined twice — hand-written in index.css @layer utilities AND generated by the
retained Tailwind entries. Equal specificity, so cascade order decides. Predates
this diff. Fold into the index.css dedupe in Phase 4.
Task 5: minor (resolved by Task 6): the Poppins @import at index.css:6 is dead
weight now that font-display no longer references Poppins. Task 6 removes the
CSS @import entirely, so this closes itself.

Controller note for Task 6 safety: reviewer independently confirmed the live
animation classes sit at index.css lines 126-170, well below the lines 1-42 that
Task 6 replaces. The guardrail holds.

Task 6: complete-pending-fix (commit bf1749c). 6 new tests, suite total 40. All
four gates exit 0. index.css 529 -> 556 lines; all hand-written @keyframes
survive; orphaned variable grep prints "all references repointed".

CONTROLLER-FOUND REGRESSION — my plan's defect, caught from the implementer's
own disclosed concern and then verified:
My replacement :root block dropped --blur-amount and --shadow-color, which the
original :root declared. --blur-amount is referenced at index.css lines 134,
140, 146 by .glass, .glass-dark and .glass-card, and is now declared NOWHERE.
An undefined custom property inside var() with no fallback makes the declaration
invalid at computed-value time, so backdrop-filter resolves to `none`.
.glass has FOUR live usages — three in components/common/Card.tsx, one in
layout/Navbar.tsx — so the glass blur would silently vanish from every card and
the navbar, in both themes.
This violates Phase 1's own stated contract that it restyles no page.
--shadow-color is referenced once at line 205 by .hover-lift:hover and survives
only inside the dead .dark block at ~517. .hover-lift has zero component usages,
so no live breakage, but the same latent bug exists in light mode.

Ruling: fix now, in Task 6, before review. Restore both variables to :root with
their original values (--blur-amount: 16px, --shadow-color: rgba(0,0,0,0.1)) and
the dark override rgba(0,0,0,0.3), commented as legacy effect variables outside
the token system, to be removed when .glass* goes in Phase 4.
Required alongside it: a test asserting every custom property REFERENCED via
var() in index.css is also DECLARED in it. That test is the real deliverable —
it would have caught my mistake automatically and guards every future edit.
Cost if wrong: two CSS variables and one test; restoring values that already
existed cannot regress anything.

Deferred (implementer's concern 1, accepted): a second, now-dead .dark block
further down index.css still declares old-named properties (--color-text,
--color-bg, etc). Nothing references them. Cosmetic dead code; fold into the
index.css dedupe in Phase 4.

Task 6: fix round 1/5 (1 addressed, 0 open; commit c6e2078). The regression test
proved itself: BEFORE the fix it failed with
"expected [ '--blur-amount' ] to deeply equal []", after it passes. That is the
exact variable I dropped — the test caught my mistake automatically, which was
the point of requiring it.
Verified: --blur-amount: 16px and --shadow-color: rgba(0,0,0,0.1) restored to
:root at lines 24-25, dark override rgba(0,0,0,0.3) at line 37. All four gates
exit 0, 41 tests across 6 files, no AI trailers.
Note on scope of the new test: --shadow-color would NOT have been flagged by it,
because the dead .dark block at line 525 still declares that name, so it counts
as "declared somewhere in the file". The test is still correct as specified —
declared-anywhere is the right rule for CSS — but when the dead block is removed
in Phase 4, re-run this test: it should then flag --shadow-color if the :root
declaration were ever lost again.

Task 6: review clean — Spec ✅, Approved, 0 Critical, 0 Important.
All 14 --color-* values verified byte-for-byte against tokens.ts. All .animate-*
classes (now at index.css:159-197), all 11 @keyframes blocks, and .glass/
.glass-dark/.glass-card (140-157) confirmed surviving the lines 1-42 replacement.
Old variable references confirmed fully repointed — the grep for
var(--color-(primary|secondary|text|text-light|bg|bg-secondary)) returns nothing.
CSS @import gone; font <link> tags correct with crossorigin on the gstatic
preconnect. Scope clean: index.html, index.css, and the new test only.
Reviewer resolved my open question on html[lang="ko"] by tracing it rather than
guessing: languageContext.tsx:82-89 assigns document.documentElement.lang inside
a useEffect keyed on `language`, and 'ko' is a valid Language value — so the
Korean display-font override is live, not a dead selector.
Task 6: minor (deferred): the regression test's "declared" regex is line-based,
not block-scoped, so a property declared only inside an unrelated scoped block
would count as declared globally. Inert today — the reviewer verified the file
currently has no var() fallbacks and no scoped-only redeclarations — but it is a
latent gap as the file grows. Relevant to the Phase 4 index.css dedupe.

Task 7: complete-pending-fix (commit f63d295). 14 new tests (5 hook + 9 theme),
suite total 55 across 8 files. All four gates exit 0. Bootstrap script confirmed
first element in <head>, above <meta charset> and the font links; font links
unmoved.

Implementer concern, INDEPENDENTLY VERIFIED AND ACCEPTED: this machine runs Node
v25.5.0, which ships an experimental global localStorage backed by an on-disk
file. Without --localstorage-file it is a stub whose methods are undefined, and
vitest 1.6.1's bundled jsdom only installs its own Storage when the global key is
absent — so on Node 22+ the broken stub wins and every localStorage-touching test
fails regardless of the code under test. Controller confirmed directly:
`typeof globalThis.localStorage` is "object", `localStorage.clear` is undefined,
and Node emits "`--localstorage-file` was provided without a valid path".
The MemoryStorage polyfill added to src/test/setup.ts is the right fix and stays.

CONTROLLER-FOUND FINDING (Important) — fix round 1 dispatched:
The polyfill silently made one test vacuous. `MemoryStorage` *implements*
Storage (TypeScript-only) but does not *extend* it, so instances do not inherit
from Storage.prototype. The "still renders when localStorage throws" test in
useTheme.test.tsx spies on Storage.prototype.setItem — a prototype the polyfill
instance never uses. Controller proved it with an isolated probe:
  -> setItem threw? false | proto is Storage.prototype? false
So setItem succeeds, the try/catch is never entered, and the test would still
pass if the try/catch were deleted from the hook entirely. The catch block is
what keeps the site rendering in private browsing and blocked-storage modes, and
it is currently unverified.
Required: spy on `window.localStorage` (the live object) instead, AND assert the
spy was called so the test cannot silently go vacuous again. Proof demanded:
delete the try/catch, show the test failing, restore it, show it passing.
Also asked for an audit of other tests using the same Storage.prototype pattern.
Cost if wrong: a test-only change; no production code is touched.

NOTE — this finding is a direct consequence of my own plan text. The
Storage.prototype spy came from the plan's Task 7 Step 5 test code, written
before the Node 25 polyfill existed. The plan could not have anticipated it, but
the lesson generalises: a passing test proves nothing until you have watched it
fail for the right reason.

Task 7: fix round 1/5 (1 addressed, 0 open; commit 3bebb2b). Proof supplied and
verified: removing the try/catch from useTheme.ts made the test FAIL with
"Error: denied" propagating through the effect and crashing <Probe>; restoring it
passed with an empty git diff. The test now spies on window.localStorage (the
live object) and asserts expect(spy).toHaveBeenCalled(), so it cannot silently
go vacuous again.
Audit requested and delivered: `grep -rn "\.prototype" src --include="*.test.*"`
returns nothing else — this was the only Storage.prototype spy in the suite.
Controller verified head ordering directly: the bootstrap script is the first
element in <head>, above <meta charset> and above the font links, so the theme
class lands before any stylesheet request.
Task 7: complete (commits f63d295..3bebb2b, review pending).

Task 7: review clean — Spec ✅, Approved, 0 Critical, 0 Important.
theme.ts confirmed genuinely DOM-free by reading the file (only a comment
mentions window/document; the sole import is type-only). Bootstrap script and
resolveInitialTheme confirmed identical branch-for-branch. DarkModeToggle.tsx:8
destructures { theme, toggleTheme } — compatible with the new shape. Polyfill
judged behaviourally correct across the whole Storage contract (getItem returns
null not undefined, key() returns null out of bounds, setItem coerces via
String()). Scope exactly the six expected files.

### CARRY TO PHASE 3 — hydration mismatch, found by the Task 7 reviewer

Real issue, correctly judged out of scope for Phase 1 and not a defect in this
task's stated goal (the build no longer throws — that part is done).

Mechanism: during prerender there is no `document`, so currentDocumentTheme()
takes its guarded branch and returns "light", and the emitted HTML is built from
"light". On the client, the bootstrap script runs BEFORE React and may add the
`dark` class; React's first client render then calls currentDocumentTheme()
again, `document` now exists, and it returns "dark". Server HTML and first
client render therefore disagree whenever a visitor's stored/system preference
is dark.

Blast radius: anything whose rendered output depends on `theme` during the first
render. DarkModeToggle picks a Moon vs Sun icon from `theme`, so that icon would
flip on hydration and React would warn. Nothing else in the current diff renders
from `theme` — the hook's other use of it is a classList side effect inside an
effect, which never runs server-side.

Why it is not fixed now: Phase 1 has no prerendering, so the mismatch cannot
occur yet. The fix belongs with the SSG entry point, where the options are
visible — emit the theme class into the prerendered HTML, gate theme-dependent
markup behind a mounted flag, or suppressHydrationWarning on the affected node.
Choosing now would be guessing at an integration that does not exist.

Action for Phase 3: treat this as a named acceptance criterion, not a discovery.
When vite-react-ssg lands, verify a dark-preference visitor gets no hydration
warning and no icon flip on first paint.

Task 8: complete-pending-fix (commit bf91a77). Safety gate passed — all four
files confirmed 0 bytes and unreferenced before `git rm`. Only About.tsx (333
lines, in use) remains under components/sections. 6 new tests, suite total 61
across 9 files. All four gates exit 0.

CONTROLLER-FOUND FINDING (Important) — fix round 1 dispatched:
README.md:22 documents `npm run type-check` as "TypeScript, no emit". The actual
script is `tsc --build --force`. The implementer corrected the design-system
section for accuracy but left this row as my brief had written it, despite the
dispatch explicitly naming type-check and build as scripts whose descriptions
needed checking against reality.
Why this outranks a normal doc nit: `tsc --noEmit` is precisely the invocation
that was broken here — with a root tsconfig holding only project references it
compiles zero files and passes unconditionally, which is the bug Task 4b
repaired. A README telling the next reader the command is "no emit" documents
the broken form and invites someone to simplify it straight back into a dead
gate. The fix requires a short note explaining WHY --build is needed, which is
the part that actually prevents recurrence.
Also required: add the missing test:coverage row and verify every remaining row
against package.json.
Cost if wrong: documentation only, no code touched.

