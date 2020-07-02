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
      <meta name="twitter:creator" content="@corrinachow" />
      <meta
        name="twitter:image"
        content="https://images.ctfassets.net/c3b73bxvesf2/69VBcFFCmyu4ufpNoCF8fO/7f035a6ec1cb2aca3f059ea939f696c4/profile-picture.png?h=250"
      />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
};

export default Seo;
