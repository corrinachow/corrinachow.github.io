import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { ContentfulAbout } from "../graphqlTypes";
import classNames from "classnames";
import { css } from "emotion";

const aboutContainer = css({
  marginBottom: "12rem",
});

const bioContainer = css({
  alignSelf: "center",
});

const title = css({
  fontWeight: 700,
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
        <div className={classNames("row", aboutContainer)}>
          <div className={classNames(bioContainer, "col-xs-12 col-sm-12")}>
            {renderShortBio(data.contentfulAbout)}
            {renderLongBio(
              data.contentfulAbout.aboutMe.childMarkdownRemark.html
            )}
          </div>
        </div>
      );
    }}
  />
);

function renderShortBio({ name, shortBio }: ContentfulAbout) {
  return (
    <div className={classNames("margin-3", "col-sm-10", "large-font")}>
      <span className={classNames(title)}>{name}</span>
      <span className={classNames()}>{shortBio}</span>
    </div>
  );
}

function renderLongBio(html: string): JSX.Element {
  return (
    <div>
      <div
        className={classNames("col-sm-6")}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}

export default About;
