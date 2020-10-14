// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // TODO: Remove node.frontmatter.title filter once Contentful is removed
  if (node.internal.type === `MarkdownRemark` && node.frontmatter.title) {
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
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { title: { ne: "" } } }
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

  posts.forEach((post) => {
    return createPage({
      path: `/blog${post.node.fields.slug}`,
      component: path.resolve("./src/templates/BlogPostTemplate.tsx"),
      context: {
        slug: post.node.fields.slug
      }
    });
  });
  return null;
};
