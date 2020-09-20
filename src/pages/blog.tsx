import styled from "@emotion/styled";
import classNames from "classnames";
import ArticlePreview from "../components/ArticlePreview";
import Layout from "../components/Layout";
import useBlogPosts from "../hooks/useBlogPosts";

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
          {edges.map(({ node }) => (
            <ArticlePreview post={node} key={node.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WritingPage;
