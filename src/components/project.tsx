import { css } from "emotion"
import React from "react"

const image = css({
  width: "250px",
})

const projectContainer = css({
  display: "flex",
  maxWidth: "512px",
})

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
        <div>
          <img className={image} src={logo.sizes.src} />
          <p>{type}</p>
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
