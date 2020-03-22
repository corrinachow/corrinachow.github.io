import classNames from "classnames";
import Layout from "../components/Layout";
import ArticlePreview from "../components/ArticlePreview";
import useBlogPosts from "../hooks/useBlogPosts";
import { ContentfulBlogPostEdge } from "../graphqlTypes";

const WritingPage = (): JSX.Element => {
  const edges = useBlogPosts();
  return (
    <Layout>
      <div className={classNames("row")}>
        <div className={classNames("col-xs-12")}>
          <h1>Latest Articles</h1>
          {edges.map(({ node }: ContentfulBlogPostEdge, index: number) => (
            <ArticlePreview post={node} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WritingPage;
