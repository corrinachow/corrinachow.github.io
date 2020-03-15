import React from "react";
import classNames from "classnames";
import styled from "@emotion/styled";
import useAboutContent from "./hooks/useAboutContent";

const Title = styled.span({
  fontWeight: 700
});

function renderShortBio(name: string, shortBio: string): JSX.Element {
  return (
    <div className={classNames("row", "margin-3", "large-font")}>
      <div className="col-xs-12">
        <Title>{name}</Title>
        <span>{shortBio}</span>
      </div>
    </div>
  );
}

function renderLongBio(html: string): JSX.Element {
  return (
    <div className="row">
      <div
        className={classNames("col-xs-12 col-sm-6")}
        dangerouslySetInnerHTML={{
          __html: html
        }}
      />
    </div>
  );
}

const About = (): JSX.Element => {
  const { aboutMe, name, shortBio } = useAboutContent();
  return (
    <>
      <div className={classNames("row", "padding-10")}>
        <div className={classNames("col-xs-12")}>
          {renderShortBio(name, shortBio)}
          {renderLongBio(aboutMe.childMarkdownRemark.html)}
        </div>
      </div>
    </>
  );
};

export default About;
