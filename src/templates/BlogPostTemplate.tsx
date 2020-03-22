import { graphql } from "gatsby";
import React from "react";
import { ContentfulBlogPost, Query } from "../graphqlTypes";
import Layout from "../components/Layout";

interface Props {
  data: Query;
}

const BlogPostTemplate: React.FC<Props> = ({ data }: Props): JSX.Element => {
  const {
    title,
    createdAt,
    body: {
      childMarkdownRemark: { html }
    },
    heroImage
  }: ContentfulBlogPost = data.contentfulBlogPost;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{createdAt}</p>
      <img src={heroImage?.fluid.src} alt={heroImage?.description} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      createdAt(formatString: "MMMM Do, YYYY")
      title
      heroImage {
        fluid {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
// publishDate(formatString: "MMMM Do, YYYY")
// <Layout location={this.props.location}>
// <div style={{ background: "#fff" }}>
//   <Helmet title={`${post.title} | ${siteTitle}`} />
//   <div className={heroStyles.hero}>
//     <Img
//       className={heroStyles.heroImage}
//       alt={post.title}
//       fluid={post.heroImage.fluid}
//     />
//   </div>
//   <div className="wrapper">
//     <h1 className="section-headline">{post.title}</h1>
//     <p
//       style={{
//         display: "block"
//       }}
//     >
//       {post.publishDate}
//     </p>
//     <div
//       dangerouslySetInnerHTML={{
//         __html: post.body.childMarkdownRemark.html
//       }}
//     />
//   </div>
// </div>
// </Layout>
