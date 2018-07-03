import React from 'react'

const Header = () => (
  <header>
    <div className="title-text">
      <h1>
        <span>Corrina Chow</span>
      </h1>
      <h2>
        <span>Web Developer &amp; Designer</span>
      </h2>
      <h2>
        <a href="https://github.com/corrinachow/">
          <i title="Github" aria-hidden className="fab fa-github" />
        </a>{' '}
        <a href="https://www.linkedin.com/in/corrina-chow/">
          <i title="LinkedIn" aria-hidden className="fab fa-linkedin-in" />
        </a>
      </h2>
    </div>
    <div className="description-text">
      <h2>
        <div id="social-links" />
      </h2>
    </div>
  </header>
)

export default Header
