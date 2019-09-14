import classnames from "classnames";
import classNames from "classnames";
import { css } from "emotion";
import React from "react";

import {
  useWindowDimensions,
  mobileWidth,
} from "./WindowDimensionsProvider/WindowsDimensionsProvider";

interface IProjectProps {
  project: IProject;
  index: number;
}

export interface IProject {
  name: string;
  description: string;
  projectUrl: string;
  repositoryUrl: string;
  techStack: string;
  type: string;
  logo: any;
}

const projectContainer = css({
  display: "flex",
  marginBottom: "12rem",
  maxHeight: "400px",
});

const imageContainer = css({
  display: "flex",
  position: "relative",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "350px",
});

const image = css({
  width: "100%",
  transition: "all 0.5s",
});

const projectDescriptionTitle = css({
  fontSize: "1.5rem",
  marginBottom: "1rem",
  display: "block",
  fontWeight: 600,
});

const projectType = css({
  fontSize: "0.8rem",
  color: "#e20f66",
  fontFamily: "Source Code Pro, monospace",
});

export const Project = (props: IProjectProps) => {
  const { width } = useWindowDimensions();

  return width > mobileWidth ? renderDesktop(props) : renderMobile(props);
};

function renderDesktop(props: IProjectProps) {
  const {
    name,
    description,
    projectUrl,
    repositoryUrl,
    techStack,
    type,
    logo,
  } = props.project;
  return (
    <div className={classnames(projectContainer, "col-xs-12")}>
      <div className={classnames(imageContainer, "col-xs-6")}>
        <img className={image} src={logo.sizes.src} />
      </div>
      <div className="row middle-xs">
        <div className="col-xs-10">
          <span className={projectDescriptionTitle}>{name}</span>
          <span className={classNames(projectType)}>{type}</span>
          <p>{description}</p>
          <a href={repositoryUrl}>Github</a>
          <span>&nbsp;</span>
          {projectUrl && <a href={projectUrl}>Live</a>}
        </div>
      </div>
    </div>
  );
}

function renderMobile(props: IProjectProps) {
  const {
    name,
    description,
    projectUrl,
    repositoryUrl,
    type,
    logo,
  } = props.project;

  return (
    <div className="col-xs-12">
      <div className={classnames(imageContainer)}>
        <img className={image} src={logo.sizes.src} />
      </div>
      <br />
      <div className={projectContainer}>
        <div className={classNames("start-xs")}>
          <span className={projectDescriptionTitle}>{name}</span>
          <span className={classNames(projectType)}>{type}</span>
          <p>{description}</p>
          <a href={repositoryUrl}>Github</a>
          <span>&nbsp;</span>
          {projectUrl && <a href={projectUrl}>Live</a>}
        </div>
      </div>
    </div>
  );
}
