import classnames from "classnames"
import { css } from "emotion"
import React from "react"

interface IProjectProps {
  project: IProject
  index: number
}

export interface IProject {
  name: string
  description: string
  projectUrl: string
  repositoryUrl: string
  techStack: string
  type: string
  logo: any
}

const projectContainer = css({
  display: "flex",
  maxWidth: "512px",
})

const numberContainer = css({
  display: "flex",
  maxWidth: "512px",
})

const imageContainer = css({
  display: "flex",
  position: "relative",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  maxHeight: "300px",
  maxWidth: "400px",
})
const image = css({
  width: "400px",
  transition: "all 0.5s",
  ":hover": { transform: "scale(1.05)" },
})

const projectDescription = css({
  maxWidth: "400px",
})

export const Project = (props: IProjectProps) => {
  const {
    name,
    description,
    projectUrl,
    repositoryUrl,
    techStack,
    type,
    logo,
  } = props.project

  return (
    <div className="col-xs">
      <div className={projectContainer}>
        <div className="highlight">
          {prependZeroToProjectNumber(props.index + 1)}
        </div>
        <div className={projectDescription}>
          <div className={classnames(imageContainer)}>
            <img className={image} src={logo.sizes.src} />
          </div>
          <p className="highlight">{type}</p>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

function prependZeroToProjectNumber(index: number): string {
  return index < 10 ? `0${index}` : index.toString()
}
