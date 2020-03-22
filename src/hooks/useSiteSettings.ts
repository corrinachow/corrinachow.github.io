import { useStaticQuery, graphql } from "gatsby";
import { SiteSiteMetadata } from "../graphqlTypes";

const useSiteSettings = (): SiteSiteMetadata => {
  const data = useStaticQuery(graphql`
    query SiteMetalDataQuery {
      contentfulSiteMetadata {
        siteMetadata {
          menuLinks {
            link
            name
          }
          socialLinks {
            icon
            link
            name
          }
        }
      }
    }
  `);
  debugger;
  return data.contentfulSiteMetadata.siteMetadata;
};

export default useSiteSettings;
