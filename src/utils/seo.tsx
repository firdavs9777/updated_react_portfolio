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
  title = "Davis - Full-Stack Developer & Project Manager Portfolio",
  description = "Professional portfolio of Davis, a passionate full-stack developer with 4+ years of experience in React, Vue.js, Flutter, and Node.js. Based in Seoul, South Korea.",
  keywords = "Davis, Full-Stack Developer, React, Vue.js, Flutter, Node.js, TypeScript, Seoul, South Korea, Portfolio, Web Developer, Mobile Developer, Project Manager",
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
      <meta property="og:site_name" content="Davis Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

