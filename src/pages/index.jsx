import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const IndexPage = props => {
  const projectEdges = props.data.allMarkdownRemark.edges
  return (
    <div>
      <Helmet>
        <title>{config.siteTitle}</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
          integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      <div className="container">
        <About />
        <Portfolio projectEdges={projectEdges} />
        <Contact />
      </div>
      <Footer />
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
