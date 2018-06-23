import React from 'react'
import Link from 'gatsby-link'
import PortfolioEntry from '../components/portfolio-entry'

const Portfolio = ({ data }) => (
  <section id="portfolio">
    <div className="subheader">
      <h2>Featured projects</h2>
    </div>
    <div className="row portfolio-subsection gallery">
    <PortfolioEntry/>
    </div>
  </section>
)

export default Portfolio