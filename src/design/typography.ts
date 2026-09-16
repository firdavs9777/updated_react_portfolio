// src/design/typography.ts
//
// Latin display serifs ship no Korean glyphs. Picking a display face by
// locale keeps the Korean site on a designed serif instead of whatever the
// browser substitutes. Uzbek is written in Latin script, so it shares the
// English stack.

import type { Language } from "../types";

const LATIN_DISPLAY = "'Fraunces', Georgia, 'Times New Roman', serif";
const KOREAN_DISPLAY = "'Noto Serif KR', 'Apple SD Gothic Neo', 'Nanum Myeongjo', serif";

export const BODY_FONT_FAMILY =
  "'Inter', system-ui, -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif";

export const GOOGLE_FONTS_HREF =
  "https://fonts.googleapis.com/css2" +
  "?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700" +
  "&family=Inter:wght@400;500;600;700" +
  "&family=Noto+Serif+KR:wght@400;600" +
  "&display=swap";

export function displayFontFamily(locale: Language): string {
  return locale === "ko" ? KOREAN_DISPLAY : LATIN_DISPLAY;
}
