import React from "react";

import classNames from "classnames";
import Layout from "../components/Layout";
import useAboutContent from "../hooks/useAboutContent";

const About = () => {
  const { aboutPage } = useAboutContent();

  return (
    <Layout>
      <div className={classNames("row", "padding-10")}>
        <div className={classNames("col-xs-12")}>
          <div className="row">
            <div
              className={classNames("col-xs-12")}
              dangerouslySetInnerHTML={{
                __html: aboutPage.childMarkdownRemark.html
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
