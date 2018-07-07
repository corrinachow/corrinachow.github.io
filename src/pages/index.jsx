import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'

const IndexPage = props => {
  const projectEdges = props.data.allMarkdownRemark.edges
  return (
    <div>
      <Header />
      <div className="container">
        <About />
        <Portfolio projectEdges={projectEdges} />
        <Contact />
      </div>
    </div>
  )
}

export default IndexPage

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            service
            tech
            snippet
            repo
            live
            cover {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
