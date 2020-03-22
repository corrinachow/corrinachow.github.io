// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  if (result.error) {
    return result.error;
  }

  const posts = result.data.allContentfulBlogPost.edges;
  posts.forEach(post => {
    return createPage({
      path: `/blog/${post.node.slug}/`,
      component: path.resolve("./src/templates/BlogPostTemplate.tsx"),
      context: {
        slug: post.node.slug
      }
    });
  });
  return null;
};
