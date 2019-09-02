import { css } from "emotion"
import React from "react"

const image = css({
  width: "250px",
})

const projectContainer = css({
  width: "100px",
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
      <img className={image} src={logo.sizes.src} />
      <p>{type}</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
