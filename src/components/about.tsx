import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { ContentfulAbout } from "../graphqlTypes";
import classNames from "classnames";
import styled from "@emotion/styled";

const Title = styled.span({
  fontWeight: 700,
});

const H2 = styled.h2({
  marginBottom: "5rem",
  visibility: "hidden",
});

const About = () => (
  <StaticQuery
    query={graphql`
      query aboutMeQuery {
        contentfulAbout {
          name
          techStack
          shortBio
          aboutMe {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <>
          <H2 id="about" />
          <div className={classNames("row", "padding-10")}>
            <div className={classNames("col-xs-12")}>
              {renderShortBio(data.contentfulAbout)}
              {renderLongBio(
                data.contentfulAbout.aboutMe.childMarkdownRemark.html
              )}
            </div>
          </div>
        </>
      );
    }}
  />
);

function renderShortBio({ name, shortBio }: ContentfulAbout) {
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
          __html: html,
        }}
      />
    </div>
  );
}

export default About;
