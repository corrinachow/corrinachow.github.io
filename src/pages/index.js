import React from 'react'
import Link from 'gatsby-link'
import About from '../components/about.js'

const IndexPage = () => (
  <div>
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
    </div>
  </div>
)

export default IndexPage
