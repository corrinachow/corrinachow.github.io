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
    render={data => (
      <div className="row">
        {data.allContentfulProject.edges.map((project: { node: any }) => (
          <Project project={project.node} />
        ))}
      </div>
    )}
  />
)

const image = css({
  width: "50px",
})

const projectContainer = css({
  width: "100px",
})

const Project = ({ project }: any) => {
  const {
    name,
    description,
    projectUrl,
    repositoryUrl,
    techStack,
    type,
    logo,
  } = project

  return (
    <div className={classNames(projectContainer, "col-xs")}>
      <img className={image} src={logo.sizes.src} />
      <p>{type}</p>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
export default Projects
