import React from "react";
import useProjectsContent from "../hooks/useProjectsContent";

import Project from "./Project";
import { ContentfulProject } from "../graphqlTypes";

const Projects: React.FC = () => {
  const edges = useProjectsContent();
  return (
    <>
      <div className="row">
        <div className="col-xs-12">
          {edges.map((project: { node: ContentfulProject }, index: number) => (
            <Project project={project.node} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
