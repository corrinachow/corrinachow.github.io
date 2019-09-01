import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const About = () => (
  <StaticQuery
    query={graphql`
      query getAboutMe {
        contentfulAboutAboutMeTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    `}
    render={data => (
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulAboutAboutMeTextNode.childMarkdownRemark.html,
        }}
      />
    )}
  />
)

export default About
