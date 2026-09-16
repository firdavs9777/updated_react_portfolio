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

  // One-directional by design: every digit run in the English string must also
  // appear in Korean and Uzbek. The reverse is NOT required, because Korean
  // writes digits where English writes words (제3자 / "third party", 3월 /
  // "March", 1인 / "solo"). A symmetric set-equality check was tried and
  // deleted — it produced only false positives and drove four content
  // regressions.
  it("carries every figure from the English string into the other locales", () => {
    const missing = texts
      .map(({ where, text }) => {
        const enFigures = [...text.en.matchAll(/\d[\d,]*/g)].map((m) => m[0]);
        const absent = enFigures.filter(
          (fig) => !text.ko.includes(fig) || !text.uz.includes(fig),
        );
        return absent.length ? `${where}: missing ${absent.join(", ")}` : null;
      })
      .filter(Boolean);
    expect(missing).toEqual([]);
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
