import React from 'react'
import Fade from 'react-reveal/Fade'
import styles from './Header.module.scss'

const Header = () => (
  <Fade>
    <header className={styles.header}>
      <div className={styles.title}>
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
    </header>
  </Fade>
)

export default Header
