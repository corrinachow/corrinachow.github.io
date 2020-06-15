import { useStaticQuery, graphql } from "gatsby";
import { ContentfulSiteMetadataSiteMetadataJsonNode } from "../graphqlTypes";

const useSiteSettings = (): ContentfulSiteMetadataSiteMetadataJsonNode => {
  const data = useStaticQuery(graphql`
    query SiteMetaDataQuery {
      contentfulSiteMetadata {
        siteMetadata {
          title
          pathPrefix
          siteTitle
          siteTitleAlt
          siteUrl
          siteLanguage
          siteDescription
          ogLanguage
          menuLinks {
            link
            name
          }
          socialLinks {
            icon
            link
            name
          }
          resumeLink {
            link
            name
          }
          email {
            value
          }
        }
      }
    }
  `);
  return data.contentfulSiteMetadata.siteMetadata;
};

export default useSiteSettings;
