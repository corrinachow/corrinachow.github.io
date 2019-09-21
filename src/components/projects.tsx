import classNames from "classnames";
import { graphql, StaticQuery } from "gatsby";
import React from "react";

import { IProject, Project } from "./project";

const Projects = () => (
  <StaticQuery
    query={graphql`
      query getProjects {
        allContentfulProject(sort: { fields: createdAt, order: DESC }) {
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
          <div className={classNames("col-xs-12")}>
            {data.allContentfulProject.edges.map(
              (project: { node: IProject }, index: number) => (
                <Project project={project.node} index={index} />
              )
            )}
          </div>
        </div>
      );
    }}
  />
);

export default Projects;
