# Portfolio Redesign — Design Spec

**Date:** 2026-09-16
**Repo:** `updated_react_portfolio` (firdavs.dev)
**Status:** Approved, ready for implementation planning

---

## 1. Why

The portfolio works but reads as a template: a blue→purple gradient headline, glass
pills, and a centred stack that look like a thousand other developer sites. Three
routes overlap, content is welded into components, and two of the three languages are
invisible to search engines.

This round does three things: refresh stale facts, replace the visual language, and add
content types the site has no home for (case studies, writing, services).

**Explicitly not in scope:** migrating off Vite, a general-purpose refactor, testimonials,
a CMS, and any analytics work.

## 2. Audience

The site serves three audiences, in this order:

1. **Korean tech companies** — hiring full-stack developers in Seoul
2. **Global / remote teams** — hiring remotely or relocating
3. **Freelance clients** — people who want an app built

Serving all three without going mushy is a structural problem, solved by the dual CTA
in §6: one hero everyone reads, then an explicit fork.

**Positioning:** employed at **3R Innovation**, quietly open to better offers. The loud
green "Open to Work" pill comes down. Availability lives behind the hiring CTA, where
people who care will look for it.

**Searchability is a stated goal**, which raises SEO from hygiene to a driver of the
architecture (§7).

## 3. Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | **Stay on Vite + React Router** | No Next.js migration. Prerendering closes the SEO gap without a rewrite. |
| Visual direction | **Editorial × Product** | Editorial typography as the system; product-forward hero with real screenshots. |
| Design system | **Warm Paper** | Fraunces + Inter, warm neutrals, terracotta accent. Best reading surface for long-form; flatters colourful screenshots. |
| Information architecture | **Consolidated, 5 nav items** | `/work` absorbs `/projects` + `/live-projects`; experience and certificates become `/about` sections. |
| URL structure | **`/{locale}/` prefix on every route** | Three languages get three real URLs. Highest-impact SEO change in the plan. |
| Rendering | **`vite-react-ssg` build-time prerender** | Real HTML per route; `deploy` script and nginx config unchanged. |
| Content model | **Typed TS for structured, MDX for prose** | Fixed-shape content renders consistently; narrative content needs MDX. |
| Content i18n | **Per-post locales, no fallback** | Write in the language that suits the topic. No machine translation, no mixed-language pages. |
| Product depth | **Product showcase only, no code** | BananaTalk and TezSell are private codebases. |

## 4. Product privacy constraint

BananaTalk and TezSell are private. Case studies are **product stories**, not engineering
deep-dives.

**Permitted:** store screenshots, feature descriptions, user counts, store links, and
stack chips naming technologies (already public on the current site).

**Not permitted:** source snippets, architecture diagrams of internals, API shapes,
schema detail, repository links.

**Consequence, and how it's handled:** case studies therefore carry less weight as
*engineering* evidence. The blog absorbs that load — written from general experience,
never from private code. Products prove shipping; writing proves thinking.

## 5. Design system

### Typography

Latin display serifs ship no Korean glyphs. A single display family would silently fall
back to a system font on the Korean site and lose its identity. The system therefore
pairs two display faces, swapped by locale.

| Role | Latin (EN / UZ) | Korean (KO) |
|---|---|---|
| Display — h1, h2 | Fraunces 600 | Noto Serif KR 600 |
| Body, UI, data | Inter 400/500/600 | Inter + Korean fallback |

Uzbek uses Latin script and rides with English. Scale is 1.25 modular, mobile-first.
Long-form body copy is 17–18px at 1.7 line-height — below that the blog is unreadable.

### Colour tokens

Defined as semantic names in `tailwind.config.ts`, not hardcoded hex. The current
palette is inlined across ~5,678 lines of JSX, which is why it reads inconsistently.

| Token | Light | Role |
|---|---|---|
| `surface` | `#FBFAF8` | Page ground |
| `ink` | `#1C1917` | Primary text |
| `muted` | `#78716C` | Secondary text |
| `accent` | `#C2410C` | Terracotta — rules, links, emphasis |
| `line` | `#E7E5E4` | Hairlines, borders |

Dark mode is **designed, not auto-derived** — inverting a warm palette programmatically
turns it muddy. Both themes ship.

**Restraint is the point:** chrome stays near-monochrome so screenshots carry the
colour. One accent, used sparingly. No gradients.

## 6. Information architecture

```
/{locale}/                    Home
/{locale}/work                Project index, filterable
/{locale}/work/{slug}         Case studies
/{locale}/writing             Blog index
/{locale}/writing/{slug}      Posts
/{locale}/services            Freelance offer + inquiry
/{locale}/about               Bio · experience · certificates · languages
/{locale}/contact             Contact
```

`/` redirects by `Accept-Language`; a manual language choice persists.

**Retired:** `/projects` and `/live-projects` (merged into `/work`), `/certificates` and
`/experience` (now `/about` sections). All retired paths 301 to their replacements so
existing links and any accumulated ranking survive.

### Home — five zones

1. **Hero** — a claim ("I build and run products people use"), not a job title. Real
   device shots. Title demoted to the sub-line.
2. **Proof strip** — four hairline cells with serif numerals: users, live apps, years
   shipping, HackSeoul 2025.
3. **Featured work** — BananaTalk and TezSell, stacked full-width. Each gets room to
   make its case and links to its case study.
4. **Latest writing** — three most recent posts. **Hidden until three posts exist** —
   an empty blog is worse than no blog.
5. **Dual CTA** — "Hiring?" and "Need something built?". This is how three audiences
   are served without diluting the message.

### Case study template

Title + metadata (role, live since, platforms, users) → problem / product / result prose
(~150 words each) → captioned screenshot gallery with lightbox → stack chips + store
links.

## 7. Content model

| Content | Location | Format |
|---|---|---|
| Projects, experience, certificates | `src/data/` | Typed TS |
| Case studies | `src/content/work/{slug}.{locale}.mdx` | Typed frontmatter + MDX |
| Blog posts | `src/content/writing/{slug}.{locale}.mdx` | Typed frontmatter + MDX |

`@mdx-js/rollup` handles MDX; `vite-react-ssg` prerenders the output. Neither requires a
framework change.

Each MDX file declares its locale in the filename. The index for a locale lists only
content that exists in it; `hreflang` points only at real translations. No fallback
rendering, no machine translation.

**Consequence:** `Projects.tsx` drops from 1,138 lines to roughly 150 of layout reading
from `src/data/`. This is not refactoring for its own sake — extracting content *is* the
content model.

## 8. SEO and performance

### Rendering and metadata

- `vite-react-ssg` emits static HTML per route. 6 static routes × 3 locales = 18 pages
  at launch, plus one page per case study and post per locale. `dist/` is still static
  files for nginx.
- Per-page title, description, canonical, and OG tags generated from content, not
  hand-maintained.
- `hreflang` for every existing locale variant plus `x-default`, reciprocal in both
  directions.
- Sitemap generated at build time, listing every locale variant.

### Structured data

Moves out of the hand-maintained blob in `index.html` into per-page generation so it
cannot drift from the content:

- `Person` on `/about`
- `SoftwareApplication` on each case study — the schema that can win rich results for
  app-related searches
- `BlogPosting` on posts
- `BreadcrumbList` sitewide

### Images

The BananaTalk store screenshots are 1320×2868 PNGs. Ten unoptimized is roughly
15–25 MB, which would destroy the Core Web Vitals scores the SEO effort depends on.

The build gains an image step: AVIF + WebP at three widths, `<picture>` with explicit
`width`/`height` to prevent layout shift, lazy-loading below the fold. Non-negotiable.

## 9. Content corrections

Factual problems found during design, to be fixed as part of Phase 2:

| Issue | Detail |
|---|---|
| **Stale employer** | `src/data/experience.ts` lists Quintet Systems as current. Current employer is **3R Innovation**. |
| **Missing locale** | `experience.ts` has `en` and `ko` only — no `uz`, despite a three-language toggle. |
| **Monetization claim** | Site says BananaTalk is "free forever"; the app ships `in_app_purchase`, `google_mobile_ads`, and a VIP/limits implementation. **Verify against the live app and correct the claim.** |
| **User count** | "1,200+ users" — confirm current before publishing. |
| **Stock README** | `README.md` is still the Vite template. |
| **Dead files** | `src/components/sections/{Hero,Projects,Experience,Contact}.tsx` are 0 bytes. Delete. |

## 10. Assets

| Asset | Status |
|---|---|
| BananaTalk screenshots | **Available** — 10 store-quality shots at 1320×2868 in `bananatalk_app/assets/images/1–10.png` |
| BananaTalk logo | Available in the same directory |
| TezSell logo | Available — `tezsell_app_front/assets/logo/` |
| **TezSell screenshots** | **Missing.** Only logos exist. Must be captured from the simulator or pulled from the Play Store listing. |
| Profile photo | `public/photo_6237927307653878104_y.jpg` — review whether it suits the new direction |

The case study template must degrade gracefully when a screenshot set is absent, so
TezSell's page can ship text-first and gain its gallery later.

## 11. Verification

"It builds" is not evidence. Each phase verifies against these:

- `curl` built HTML and grep for rendered content — catches prerendering silently
  emitting empty shells
- Assert every route has a unique title, description, and canonical
- Assert `hreflang` sets are reciprocal across locales
- Build all three locales and check for untranslated string leaks (a Korean translation
  previously leaked English — fixed in `b0a7a72`)
- Lighthouse on Home, one case study, one post — budget ≥95 SEO, ≥90 performance
- `npm run type-check` and `npm run lint` clean
- Manual pass at 375px, 768px, 1440px in both themes

## 12. Phasing

Six phases, each independently shippable.

| # | Phase | Contents | Blocked by |
|---|---|---|---|
| 1 | Foundation | Design tokens, typography, dark theme, delete dead files | — |
| 2 | Content extraction | Move content to `src/data/`, fix all §9 corrections | — |
| 3 | Routing + SEO | Locale prefixes, prerendering, hreflang, sitemap, JSON-LD, image pipeline, 301s | 1 |
| 4 | Core pages | Home, `/work`, `/about` rebuilt | 1, 2, 3 |
| 5 | Case studies | Template + BananaTalk + TezSell | 4, **TezSell screenshots** |
| 6 | New surfaces | `/writing`, `/services` | 4 |

Phase 3 lands before there are twenty pages to migrate. Phase 5 is the only phase gated
on a missing asset; phases 1–4 and 6 proceed regardless, so nothing stalls — but
BananaTalk's case study will ship before TezSell's unless the screenshots arrive.

## 13. Risks

| Risk | Mitigation |
|---|---|
| Prerendering breaks on browser-only APIs (`window`, `localStorage` in theme/language hooks) | Guard access during SSG; verify in Phase 3 rather than discovering it in Phase 4 |
| Warm palette reads "personal blog" rather than "senior engineer" | Fix structurally — tighter grid, hard metric blocks, real screenshots — not by cooling the palette |
| Blog launches and then goes quiet | Writing zone hidden until three posts exist; `/writing` ships last |
| TezSell page looks thin beside BananaTalk | Template degrades text-first; capture screenshots before Phase 5 if possible |
| Retired URLs lose accumulated ranking | 301 redirects for every retired path, verified in Phase 3 |
