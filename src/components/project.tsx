import classNames from "classnames"
import { css } from "emotion"
import { graphql, StaticQuery } from "gatsby"
import React from "react"

const Projects = () => (
  <StaticQuery
    query={graphql`
      query getProjects {
        allContentfulProject {
          edges {
            node {
              name
              projectUrl
              repositoryUrl
              techStack
              type
              description
              logo {
                sizes {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <div className="row">
          {data.allContentfulProject.edges.map(
            (project: { node: IProject }, index: number) => (
              <Project project={project.node} index={index} />
            )
          )}
        </div>
      )
    }}
  />
)

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

interface IProject {
  name: string
  description: string
  projectUrl: string
  repositoryUrl: string
  techStack: string
  type: string
  logo: any
}

const Project = (props: IProjectProps) => {
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
export default Projects
