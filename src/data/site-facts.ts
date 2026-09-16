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

// Open question for the owner: BananaTalk ships in_app_purchase and
// google_mobile_ads and has a VIP tier, so the site no longer claims
// "free forever". Confirm the current model and set the wording.

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

// Verified against src/pages/Home.tsx, src/pages/LiveProjects.tsx, and
// src/pages/Projects.tsx on FACTS_VERIFIED_ON — these are the URLs that
// currently ship, not placeholders.
export const STORE_LINKS = {
  bananatalk: {
    ios: "https://apps.apple.com/kr/app/bananatalk-language-exchange/id6755862146?l=en-GB",
    android: "https://play.google.com/store/apps/details?id=com.bananatalk.app",
  },
  tezsell: {
    ios: "https://apps.apple.com/kr/app/tezsell/id6755512731?l=en-GB",
    android: "https://play.google.com/store/apps/details?id=uz.tezsell.app",
  },
} as const;
