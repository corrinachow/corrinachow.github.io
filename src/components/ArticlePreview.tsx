import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import { File } from "../graphqlTypes";
import Window from "./Window";

interface Props {
  post: File;
}
const Article = styled.article({
  display: "flex",
  flexDirection: "column",
  "& h3": {
    fontSize: "1.5rem",
    margin: "0.5rem 0 0.5rem 0"
  },

  "& p": {
    margin: "0.75rem 0 0.5rem 0",
    padding: 0
  }
});

const ArticlePreview: React.FC<Props> = (props: Props) => {
  const { post } = props;
  const { childMarkdownRemark } = post;
  const { frontmatter } = childMarkdownRemark;

  const slug = `/${post.relativeDirectory}`;

  return (
    <Window fullWidth={true} name={`~/blog${slug}.md`}>
      <Article>
        <header>
          <h3>
            <Link to={`/blog${slug}`}>{frontmatter.title}</Link>
          </h3>
          <small>{frontmatter.date}</small>
        </header>
        <p>{frontmatter.description}</p>
      </Article>
    </Window>
  );
};

export default ArticlePreview;
