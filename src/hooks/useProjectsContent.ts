import { useStaticQuery, graphql } from "gatsby";
import { ContentfulProjectEdge } from "../graphqlTypes";

const useProjectsContent = (): Array<ContentfulProjectEdge> => {
  const data = useStaticQuery(graphql`
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
  `);

  return data.allContentfulProject.edges;
};

export default useProjectsContent;
