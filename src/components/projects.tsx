import classNames from "classnames"
import { css } from "emotion"
import { graphql, StaticQuery } from "gatsby"
import React from "react"

import { IProject, Project } from "./project"

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

export default Projects
