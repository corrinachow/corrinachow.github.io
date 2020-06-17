import React from "react";

import classNames from "classnames";
import Layout from "../components/Layout";
import Window from "../components/Window";
import useAboutContent from "../hooks/useAboutContent";
import styled from "@emotion/styled";

const StyledH1 = styled.h1({
  fontFamily: "Inconsolata, monospace",
  fontWeight: 500,
  // TODO: Fix alignment in all Windows
  marginLeft: "-.75rem"
});

const About = () => {
  const { aboutPage } = useAboutContent();

  return (
    <Layout>
      <Window name={`./about/corrina.md`} fullWidth={true}>
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
      </Window>
    </Layout>
  );
};

export default About;
