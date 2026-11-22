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

const DEFAULT_TITLE = "Firdavs Mutalipov (Davis) — Backend-focused Full-Stack Developer in Seoul";
const DEFAULT_DESCRIPTION =
  "Backend-focused Full-Stack Developer in Seoul. 5+ yrs shipping web & mobile products; REST APIs, data modeling & business logic in Node.js and Django — now Java & Spring Boot. Open to new roles.";
const DEFAULT_KEYWORDS =
  "Firdavs Mutalipov, Davis Mutalipov, backend developer Korea, backend developer Seoul, Spring Boot developer, Java backend developer, Node.js developer, Django developer, full-stack developer Seoul, TypeScript developer, React developer Seoul, Vue.js developer, Flutter developer, mobile app developer Korea, BananaTalk, TezSell, AngelHack HackSeoul 2025, 백엔드 개발자, 스프링 백엔드 개발자, 풀스택 개발자 채용";

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
