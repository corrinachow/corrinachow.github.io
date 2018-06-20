import React from 'react'
import Link from 'gatsby-link'

const PortfolioEntry = () => (
  <div class="col-4">
    <a href="https://github.com/corrinachow/wiki-maps">
       <div className="img-wrap portfolio-entry-4 small-project">
          <img src="assets/img/wiki-maps.png" alt="wiki-maps"/>
          <span className="img-description">See GitHub repo</span>
       </div>
    </a>
    <div className="small-project-desc">
       <span>Wiki-Maps</span>
       <p>Full-stack web app that allows users to create themed maps made using the <span className="project-subheader">Google Maps API, Google Geocode API, PostgreSQL, Knex, Node.JS, Express, jQuery, &amp; Bootstrap 4</span>.</p>
       <a href="https://github.com/corrinachow/wiki-maps" className="lg-hide">See Wiki-Map's Github Repo</a>
    </div>
 </div>
)

export default PortfolioEntry
