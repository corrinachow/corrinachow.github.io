import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import config from '../../config/SiteConfig'

const IndexPage = props => {
  console.log(props)
  const projectEdges = props.data.allMarkdownRemark.edges;
  return (
    <div>
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <header>
        <div className="title-text">
          <h1>
            <span>Corrina Chow</span>
          </h1>
          <h2>
            <span>Web Developer &amp; Designer</span>
            <p>
              <a href="https://github.com/corrinachow/">
                <i title="github" aria-hidden className="fab fa-github" />
              </a>
            </p>
          </h2>
        </div>
        <div className="description-text">
          <h2>
            <div id="social-links" />
          </h2>
        </div>
      </header>
      <div className="container">
        <About />
        <Portfolio />
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
            cover {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
