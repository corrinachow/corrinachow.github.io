import { graphql, StaticQuery } from "gatsby";
import React from "react";

import { Project } from "./project";
import { ContentfulProject } from "../graphqlTypes";
import styled from "@emotion/styled";

const H2 = styled.h2({
  marginBottom: "5rem",
  visibility: "hidden",
});

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
              type
              techStack
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
        <>
          <H2 id="projects" />
          <div className="row">
            <div className="col-xs-12">
              {data.allContentfulProject.edges.map(
                (project: { node: ContentfulProject }, index: number) => (
                  <Project project={project.node} index={index} />
                )
              )}
            </div>
          </div>
        </>
      );
    }}
  />
);

export default Projects;
