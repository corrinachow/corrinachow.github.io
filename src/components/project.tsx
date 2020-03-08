import classnames from "classnames";
import classNames from "classnames";
import { css } from "@emotion/core";
import React from "react";

import styled from "@emotion/styled";
import { ResponsiveImage } from "./responsiveImage";
import { ContentfulProject } from "../graphqlTypes";

interface ProjectProps {
  project: ContentfulProject;
  index: number;
}

const projectType = css({
  fontSize: "0.8rem",
  color: "#e20f66",
  textTransform: "uppercase",
  fontFamily: "Source Code Pro, monospace",
});

const ProjectTitle = styled.h3({
  fontSize: "1rem",
  opacity: "0.55",
  fontWeight: "700",
  textTransform: "uppercase",
});

export const Project = (props: ProjectProps) => {
  const {
    name,
    description,
    projectUrl,
    repositoryUrl,
    type,
    logo,
  } = props.project;

  return (
    <div className={classnames("row", "middle-sm", "margin-10")}>
      <div className={classNames("col-sm-6", "col-xs-12")}>
        <ResponsiveImage imageSource={logo!.sizes!.src!} maxHeight="350px" />
      </div>
      <div className="col-sm-6 col-xs-12">
        <ProjectTitle>{name}</ProjectTitle>
        <span className={classNames(projectType)}>{type}</span>
        <p className="large-text">{description}</p>
        <div>
          <a className="label" href={repositoryUrl!}>
            Github
          </a>
          <span>&nbsp;</span>
          {projectUrl && (
            <a className="label" href={projectUrl}>
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
