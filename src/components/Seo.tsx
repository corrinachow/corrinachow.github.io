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
      <meta
        property="og:image"
        content="https://images.ctfassets.net/c3b73bxvesf2/48tUeOHJOMltJw3r8RLSXk/a8ac826675e23408893564532c94631e/Untitled-1.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@corrinachow" />
      <meta
        name="twitter:image"
        content="https://images.ctfassets.net/c3b73bxvesf2/3vvkZFfbldqfCWT6AXNx82/cbae170549b786775ddd953be01eb142/favicon.png?w=300&h=300&fm=png&fit=thumb&f=face"
      />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
};

export default Seo;
