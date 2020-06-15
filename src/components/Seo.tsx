import React from "react";
import Helmet from "react-helmet";
import useSiteSettings from "../hooks/useSiteSettings";

const Seo = () => {
  const {
    title,
    pathPrefix,
    siteTitle,
    siteTitleAlt,
    siteUrl,
    siteLanguage,
    siteDescription,
    ogLanguage
  } = useSiteSettings();
  return (
    <Helmet>
      <html lang={siteLanguage} />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:locale" content={ogLanguage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
};

export default Seo;
