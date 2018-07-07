import React from 'react'
import Helmet from 'react-helmet'
import config from '../../../config/SiteConfig'

const SEO = () => (
  <Helmet>
    <html lang={config.siteLanguage} />
    <title>{config.siteTitle}</title>
    <meta name="description" content={config.siteDescription} />
    <meta property="og:locale" content={config.ogLanguage} />
    <meta property="og:site_name" content={config.siteTitle} />
    <meta property="og:title" content={config.siteTitle} />
    <meta property="og:description" content={config.siteDescription} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={config.siteTitle} />
    <meta name="twitter:url" content={config.siteUrl} />
    <meta name="twitter:description" content={config.siteDescription} />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
      integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:400,700,900|Source+Code+Pro"
      rel="stylesheet"
    />
  </Helmet>
)

export default SEO
