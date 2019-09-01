import { graphql, StaticQuery } from "gatsby"
import React from "react"

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
