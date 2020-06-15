import { useStaticQuery, graphql } from "gatsby";
import { ContentfulBlogPostEdge } from "../graphqlTypes";

const useBlogPosts = (): Array<ContentfulBlogPostEdge> => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            description
            createdAt(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  return data.allContentfulBlogPost.edges;
};

export default useBlogPosts;
