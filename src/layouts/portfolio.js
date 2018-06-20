import React from 'react'
import Link from 'gatsby-link'
import PortfolioEntry from '../components/portfolio-entry.js'

const Portfolio = () => (
  <section id="portfolio">
    <div class="subheader">
      <h2>Featured projects</h2>
    </div>
    <div class="row portfolio-subsection gallery">
    <PortfolioEntry/>
    </div>
  </section>
)

export default Portfolio
