import { useStaticQuery, graphql } from "gatsby";
import { ContentfulAbout } from "../../graphqlTypes";

const useAboutContent = (): ContentfulAbout => {
  const data = useStaticQuery(graphql`
    query aboutMeQuery {
      contentfulAbout {
        name
        techStack
        shortBio
        aboutMe {
          childMarkdownRemark {
            html
          }
        }
        aboutPage {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  `);

  return data.contentfulAbout;
};

export default useAboutContent;
