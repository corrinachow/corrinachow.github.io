import classNames from "classnames";
import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Window from "../components/Window";
import { Query } from "../graphqlTypes";

interface Props {
  data: Query;
}

const About = ({ data }: Props) => {
  const { file } = data;

  return (
    <Layout>
      <Window name={`./about/corrina.md`} fullWidth={true}>
        <div className={classNames("row", "padding-10")}>
          <div className={classNames("col-xs-12")}>
            <div className="row">
              <div
                className={classNames("col-xs-12")}
                dangerouslySetInnerHTML={{
                  __html: file.childMarkdownRemark.html
                }}
              />
            </div>
          </div>
        </div>
      </Window>
    </Layout>
  );
};

export default About;

export const pageQuery = graphql`
  {
    file(childMarkdownRemark: { frontmatter: { title: { eq: "About" } } }) {
      childMarkdownRemark {
        html
      }
    }
  }
`;
