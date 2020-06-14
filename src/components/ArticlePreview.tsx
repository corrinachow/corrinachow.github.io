import React from "react";
import styled from "@emotion/styled";
import { ContentfulBlogPost } from "../graphqlTypes";
import { Link } from "gatsby";

interface Props {
  post: ContentfulBlogPost;
  index: number;
}
const Article = styled.article({
  display: "flex",
  flexDirection: "column",
  "& h3": {
    fontSize: "1.5rem",
    marginBottom: "0.5rem"
  },
  "& p": {
    margin: "0 0 1.5rem 0",
    padding: 0
  }
});
const ArticlePreview: React.FC<Props> = (props: Props) => {
  const {
    post: { title, slug, description, createdAt }
  } = props;
  return (
    <Article>
      <header>
        <h3>
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        <small>{createdAt}</small>
      </header>
      <p>{description}</p>
    </Article>
  );
};

export default ArticlePreview;
