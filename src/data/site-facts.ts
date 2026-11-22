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

/** Combined iOS + Android active users for BananaTalk. */
export const BANANATALK_USERS = 1500;

/** How the user count is written in prose. Derived from BANANATALK_USERS. */
export const BANANATALK_USERS_DISPLAY = "1,500+";

/**
 * Combined iOS + Google Play downloads for BananaTalk. This is a distinct
 * claim from BANANATALK_USERS (active users) — a download is not the same
 * as an active user, and the two figures must never be conflated in copy.
 */
export const BANANATALK_DOWNLOADS = 3000;

/** How the download count is written in prose. Derived from BANANATALK_DOWNLOADS. */
export const BANANATALK_DOWNLOADS_DISPLAY = "3,000+";

// Open question for the owner: BananaTalk ships in_app_purchase and
// google_mobile_ads and has a VIP tier, so the site no longer claims
// "free forever". Confirm the current model and set the wording.

/** Approximate TezSell users, as reported by the owner on 2026-11-22. */
export const TEZSELL_USERS = 500;

/** How the TezSell user count is written in prose. Derived from TEZSELL_USERS. */
export const TEZSELL_USERS_DISPLAY = "~500";

/**
 * HackSeoul 2025 result. Second place — not a win.
 * The Korean term for first place is 우승; second place is written 2위.
 */
export const HACKSEOUL_PLACEMENT: {
  place: 2;
  year: 2025;
  label: LocaleText;
} = {
  place: 2,
  year: 2025,
  label: {
    en: "Coupang AngelHack HackSeoul 2025, 2nd Prize",
    ko: "쿠팡 주최 AngelHack HackSeoul 2025, 2위",
    uz: "Coupang AngelHack HackSeoul 2025, 2-o'rin",
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
