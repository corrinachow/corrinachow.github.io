// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.error) {
    return result.error;
  }

  const posts = result.data.allMarkdownRemark.edges;
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
