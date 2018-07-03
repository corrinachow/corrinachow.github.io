import React from 'react'
import Helmet from 'react-helmet'

const Project = props => {
  const { slug } = props.pathContext
  const postNode = props.data.markdownRemark
  const project = postNode.frontmatter
  const imageURL = project.cover.childImageSharp.resize.src
  if (!project.id) {
    project.id = slug
  }
  return <div className="container project-container" />
}

export default Project

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        cover {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`
