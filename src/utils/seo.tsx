// src/utils/seo.ts

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

export const SEO: React.FC<SEOProps> = ({
  title = "Firdavs Mutalipov (Davis) - Full-Stack Developer | BananaTalk | TezSell",
  description = "Firdavs Mutalipov (Davis) — Full-Stack Developer & Project Manager. Creator of BananaTalk and TezSell. 4+ years in React, Vue.js, Flutter, Node.js. Seoul, South Korea. | Фирдавс Муталипов — разработчик | Firdavs Mutalipov — dasturchi",
  keywords = "Firdavs Mutalipov, Davis, Firdavs, Mutalipov, Full-Stack Developer, React, Vue.js, Flutter, Node.js, TypeScript, Seoul, South Korea, Portfolio, Web Developer, Mobile Developer, Project Manager, BananaTalk, TezSell, Mahalla Bozori, language exchange, marketplace, Uzbekistan, uzbek developer, dasturchi, o'zbek dasturchi, veb dasturchi, mobil ilova, Фирдавс Муталипов, узбекский разработчик, разработчик приложений, фулл стек разработчик, программист, 개발자, 풀스택 개발자, HackSeoul, Sejong University",
  image = "https://firdavs.dev/og-image.jpg",
  url = "https://firdavs.dev",
  type = "website",
}) => {
  const fullTitle = title.includes("Davis") ? title : `${title} | Davis Portfolio`;

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
      <meta property="og:site_name" content="Firdavs Mutalipov Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="ko_KR" />
      <meta property="og:locale:alternate" content="uz_UZ" />
      <meta property="og:locale:alternate" content="ru_RU" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

