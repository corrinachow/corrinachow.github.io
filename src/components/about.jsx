import React from 'react'
import { StaticQuery, graphql } from 'gatsby'


const About = () => (
  <StaticQuery
    query={graphql`
      query aboutMeQuery {
        allContentfulAbout {
          edges {
            node {
              id
              name
              aboutMe {
                id
                aboutMe
              }
            }
          }
        }
      }
    `}
    render={data => <p>{data.allContentfulAbout.edges[0].node.aboutMe.aboutMe}</p>}
  />
)

export default About
