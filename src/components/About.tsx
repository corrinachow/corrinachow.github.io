import React from "react";
import classNames from "classnames";
import styled from "@emotion/styled";
import useAboutContent from "../hooks/useAboutContent";
import Window from "./Window";

const Title = styled.span({
  fontSize: "2rem",
  color: "#e20f66"
});

function renderShortBio(name: string, shortBio: string): JSX.Element {
  return (
    <div className={classNames("row", "margin-2")}>
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
        className={classNames("col-xs-12")}
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
          <Window name={`~/home/corrina.md`} fullWidth={true}>
            {renderShortBio(name, shortBio)}
            {renderLongBio(aboutMe.childMarkdownRemark.html)}
          </Window>
        </div>
      </div>
    </>
  );
};

export default About;
