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
  title = "Firdavs Mutalipov (Davis) - Full-Stack Developer for Hire | Seoul, Korea",
  description = "Hire Firdavs Mutalipov (Davis) — Full-Stack Developer in Seoul. 4+ years in React, Vue.js, Flutter, Node.js, Django. Creator of BananaTalk & TezSell. Available for freelance & full-time. | 풀스택 개발자 무탈리포프 피르다우스 | O'zbek dasturchi Firdavs Mutalipov",
  keywords = "Firdavs Mutalipov, Davis Mutalipov, hire developer Seoul, freelance developer Korea, full-stack developer for hire, React developer, Vue.js developer, Flutter developer, Node.js developer, web developer Seoul, mobile app developer, BananaTalk, TezSell, uzbek developer, 프리랜서 개발자, 풀스택 개발자 채용, 외국인 개발자 한국, o'zbek dasturchi, freelance dasturchi, Фирдавс Муталипов, разработчик Сеул, HackSeoul 2025",
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
      <meta property="og:site_name" content="Firdavs Mutalipov - Developer Portfolio" />
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

