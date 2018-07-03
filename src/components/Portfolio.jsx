import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import PortfolioEntry from '../components/portfolio-entry'

class Portfolio extends React.Component {
  getList() {
    console.log(this.props.projectEdges)
    const List = []
    this.props.projectEdges.forEach(projectEdge => {
      console.log(projectEdge.node)
      List.push({
        path: projectEdge.node.fields.slug,
        title: projectEdge.node.frontmatter.title,
        cover: projectEdge.node.frontmatter.cover.childImageSharp.sizes,
        repo: projectEdge.node.frontmatter.repo,
        service: projectEdge.node.frontmatter.service,
        snippet: projectEdge.node.frontmatter.snippet,
        tech: projectEdge.node.frontmatter.tech,
        imageURL: projectEdge.node.frontmatter.cover.childImageSharp.sizes.src,
      })
    })
    return List
  }

  render() {
    const List = this.getList()

    const imgStyle = {
      height: '100%',
      left: '0',
      position: 'absolute',
      top: '0',
      width: '100%',
    }

    return (
      <section id="portfolio">
        <div className="subheader">
          <h2>Featured projects</h2>
        </div>
        <div className="row portfolio-subsection gallery" />
        {List.map(project => (
          <div className="col-4">
            <a href={project.repo}>
              <div className="img-wrap portfolio-entry-4 small-project" >
                <Img sizes={project.cover} style={imgStyle} />
                <span className="img-description">See GitHub repo</span>
              </div>
            </a>
            <div className="small-project-desc">
              <span>{project.title}</span>
              <p>
                {project.snippet}{' Made using '}
                <span className="project-subheader">
                  {project.tech}
                </span>.
              </p>
              <a
                href="https://github.com/corrinachow/wiki-maps"
                className="lg-hide"
              >
                See Wiki-Map's Github Repo
              </a>
            </div>
          </div>
        ))}
      </section>
    )
  }
}

export default Portfolio
