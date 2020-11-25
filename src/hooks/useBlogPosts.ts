import { graphql, useStaticQuery } from "gatsby";
import { FileConnection, FileEdge, MarkdownRemarkEdge } from "../graphqlTypes";

const useBlogPosts = (): Array<FileEdge | undefined> => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "blog" } }
        sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            relativeDirectory
            childMarkdownRemark {
              excerpt
              fields {
                slug
              }
              frontmatter {
                title
                description
                date(formatString: "MMMM DD, YYYY")
              }
              id
            }
          }
        }
      }
    }
  `);
  return data.allFile.edges;
};

export default useBlogPosts;
