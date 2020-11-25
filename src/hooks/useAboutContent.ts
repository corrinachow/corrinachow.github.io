import { graphql, useStaticQuery } from "gatsby";
import { File } from "../graphqlTypes";

const useAboutContent = (): File => {
  const data = useStaticQuery(graphql`
    {
      file(relativeDirectory: { eq: "summary" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return data.file;
};

export default useAboutContent;
