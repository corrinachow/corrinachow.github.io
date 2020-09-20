import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import { MarkdownRemark } from "../graphqlTypes";
import Window from "./Window";

interface Props {
  post: MarkdownRemark;
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
  const {
    post: { fields, frontmatter }
  } = props;

  const slug = fields.slug;

  return (
    <Window fullWidth={true} name={`~/blog${slug.slice(0, -1)}.md`}>
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
