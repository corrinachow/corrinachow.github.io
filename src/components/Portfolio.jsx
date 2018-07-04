import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Portfolio extends React.Component {
  getList() {
    const List = []
    this.props.projectEdges.forEach(projectEdge => {
      List.push({
        path: projectEdge.node.fields.slug,
        title: projectEdge.node.frontmatter.title,
        cover: projectEdge.node.frontmatter.cover.childImageSharp.sizes,
        repo: projectEdge.node.frontmatter.repo,
        live: projectEdge.node.frontmatter.live,
        service: projectEdge.node.frontmatter.service,
        snippet: projectEdge.node.frontmatter.snippet,
        tech: projectEdge.node.frontmatter.tech,
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
        <div className="row portfolio-subsection gallery">
          {List.map(project => (
            <div key={project.path} className="col-4">
              <a href={project.repo}>
                <div className="img-wrap portfolio-entry-4 small-project">
                  <Img sizes={project.cover} style={imgStyle} />
                  <span className="img-description">See GitHub repo</span>
                </div>
              </a>
              <div className="small-project-desc">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <span>{project.title}</span>
                  <span>
                    {project.live && (
                      <a href={project.live}>
                        <i title={`Click to see ${project.title} live`} className="fas fa-seedling" /> Live
                      </a>
                    )}
                  </span>
                </div>
                <p>
                  {project.snippet}
                  {' Made using '}
                  <span className="project-subheader">{project.tech}</span>
                </p>
                <p>
                  <a href={project.repo} className="lg-hide">
                    {project.title}'s GitHub Repo
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default Portfolio
