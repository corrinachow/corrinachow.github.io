import classNames from "classnames";
import Layout from "../components/Layout";
import ArticlePreview from "../components/ArticlePreview";
import useBlogPosts from "../hooks/useBlogPosts";
import { ContentfulBlogPostEdge } from "../graphqlTypes";
import styled from "@emotion/styled";

const StyledH1 = styled.h1({
  fontFamily: "Inconsolata, monospace",
  fontWeight: 500,
  // TODO: Fix alignment in all Windows
  marginLeft: "-.75rem"
});

const WritingPage = (): JSX.Element => {
  const edges = useBlogPosts();
  return (
    <Layout>
      <div className={classNames("row")}>
        <div className={classNames("col-xs-12")}>
          <StyledH1>Latest Articles |</StyledH1>
          {edges.map(({ node }: ContentfulBlogPostEdge, index: number) => (
            <ArticlePreview post={node} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WritingPage;
