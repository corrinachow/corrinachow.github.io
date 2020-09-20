import { graphql, useStaticQuery } from "gatsby";
import { MarkdownRemarkEdge } from "../graphqlTypes";

const useBlogPosts = (): Array<MarkdownRemarkEdge | undefined> => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { title: { ne: "" } } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
            id
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.edges;
};

export default useBlogPosts;
