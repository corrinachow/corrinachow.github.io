import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";
import { ContentfulBlogPost } from "../graphqlTypes";
import Window from "./Window";

interface Props {
  post: ContentfulBlogPost;
  index: number;
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
    post: { title, slug, description, createdAt }
  } = props;
  return (
    <Window fullWidth={true} name={`~/blog/${slug}.md`}>
      <Article>
        <header>
          <h3>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h3>
          <small>{createdAt}</small>
        </header>
        <p>{description}</p>
      </Article>
    </Window>
  );
};

export default ArticlePreview;
