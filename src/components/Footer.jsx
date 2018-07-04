import React from 'react'

const Footer = () => (
  <footer className="row">
    <div className="col-12">
      <h2>Find me online</h2>
      <div className="col-6">
        <h2>
          <a href="https://github.com/corrinachow/">
            <i title="Github" aria-hidden className="fab fa-github" />
          </a>{' '}
          <a href="https://www.linkedin.com/in/corrina-chow/">
            <i title="LinkedIn" aria-hidden className="fab fa-linkedin-in" />
          </a>
        </h2>
      </div>
      <div
        className="col-12"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <a href="mailto:hello@corrinachow.com">
          <span>hello@corrinachow.com</span>
        </a>
        <span>
          Made with <i className="fas fa-coffee" /> and{' '}
          <a href="https://www.gatsbyjs.com/">
            <span>Gatsby</span>
          </a>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
