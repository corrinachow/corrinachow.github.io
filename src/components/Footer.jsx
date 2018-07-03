import React from 'react'

const Footer = () => (
  <footer className="row">
    <div className="col-12">
      <div className="col-6">
        <h2>Find me online</h2>
        <a href="mailto:hello@corrinachow.com">
          <span>hello@corrinachow.com</span>
        </a>
        <br />
        <br />

        <a aria-label="github" href="https://github.com/corrinachow/">
          <i title="Github" aria-hidden className="fab fa-github fa-2x" />
        </a>
      </div>
      <div className="master-social-links col-6" />
    </div>
  </footer>
)

export default Footer
