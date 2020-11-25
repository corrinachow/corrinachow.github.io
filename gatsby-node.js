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
      allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
        edges {
          node {
            relativeDirectory
            childMarkdownRemark {
              excerpt
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `);

  if (result.error) {
    return result.error;
  }

  const posts = result.data.allFile.edges;

  posts.forEach((post) => {
    const slug = `/${post.node.relativeDirectory}/`;

    return createPage({
      path: `/blog${slug}`,
      component: path.resolve("./src/templates/BlogPostTemplate.tsx"),
      context: {
        slug: slug
      }
    });
  });
  return null;
};
