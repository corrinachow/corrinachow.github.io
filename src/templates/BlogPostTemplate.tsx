import { graphql } from "gatsby";
import { kebabCase } from "lodash";
import React from "react";
import Layout from "../components/Layout";
import Window from "../components/Window";
import { Query } from "../graphqlTypes";
import useWindowDimensions, {
  DEFAULT_SMALL_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";

interface Props {
  data: Query;
}

const BlogPostTemplate: React.FC<Props> = ({ data }: Props): JSX.Element => {
  const { frontmatter, html } = data.markdownRemark;
  const { width } = useWindowDimensions();
  const isMobile = width < DEFAULT_SMALL_MOBILE_WIDTH;

  const { title, date } = frontmatter;

  return (
    <Layout>
      <Window
        fullWidth={true}
        isThin={isMobile}
        name={`~/blog${kebabCase(title)}.md`}
      >
        <h1>{title}</h1>
        <p>{date}</p>
        {/* <img src={heroImage?.fluid.src} alt={heroImage?.description} /> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Window>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
