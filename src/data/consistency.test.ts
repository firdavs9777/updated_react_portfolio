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

  // experiences.3r-innovation.duration is deliberately exempted: en/uz spell
  // the current role's start month ("January"/"Yanvar") while ko writes it
  // numerically ("01월"), so the figure walker sees an extra "01" token in
  // Korean alone. The date itself is correct and identical (January 2025) in
  // all three locales, and that exact literal string is pinned by
  // src/data/factual-claims.test.ts as the regression guard for the real bug
  // this suite exists to catch (ko once said "2026년 01월" against en's
  // "January 2025"). The year-consistency test above already re-verifies the
  // year on every run; this is a locale notation difference, not a figure
  // mismatch.
  const FIGURE_CHECK_EXEMPT = new Set(["experiences.3r-innovation.duration"]);

  it("uses the same set of numeric figures in every locale", () => {
    const mismatched = texts
      .filter(({ where }) => !FIGURE_CHECK_EXEMPT.has(where))
      .filter(({ text }) => {
        const figuresPer = LOCALES.map((l) =>
          [...text[l].matchAll(/\d[\d,]*/g)].map((m) => m[0]).sort().join(","),
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
