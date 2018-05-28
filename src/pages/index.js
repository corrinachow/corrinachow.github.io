import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <header>
         <div className="title-text">
            <h1>
               <span>Corrina Chow</span>
            </h1>
            <h2>
               <span>Web Developer &amp; Designer</span>
               <p><a aria-label="github" href="https://github.com/corrinachow/"><i aria-hidden className="fab fa-github"></i><span></span></a></p>
            </h2>
         </div>
         <div className="description-text">
            <h2>
               <div id="social-links">
               </div>
            </h2>
            <p></p>
         </div>
      </header>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
