// src/utils/seo.tsx

import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const DEFAULT_TITLE = "Firdavs Mutalipov (Davis) — Full-Stack Developer in Seoul";
const DEFAULT_DESCRIPTION =
  "Full-Stack Developer in Seoul. 4+ yrs React, Vue, Flutter, Node, Django. 1,200+ users on shipped apps. Available for hire.";
const DEFAULT_KEYWORDS =
  "Firdavs Mutalipov, Davis Mutalipov, hire developer Seoul, freelance developer Korea, full-stack developer for hire, React developer Seoul, Vue.js developer, Flutter developer, Node.js developer, TypeScript developer, Django developer, web developer Seoul, mobile app developer Korea, BananaTalk, TezSell, HackSeoul 2025, 풀스택 개발자 채용, 프리랜서 개발자 서울";

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image = "https://firdavs.dev/og-image.jpg",
  url = "https://firdavs.dev",
  type = "website",
}) => {
  const fullTitle = title.includes("Davis") || title.includes("Firdavs")
    ? title
    : `${title} | Davis Portfolio`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Firdavs Mutalipov — Developer Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ko_KR" />
      <meta property="og:locale:alternate" content="uz_UZ" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
