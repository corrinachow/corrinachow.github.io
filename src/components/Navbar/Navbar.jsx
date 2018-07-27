import React from 'react'
import Link from 'gatsby-link'

class Navbar extends React.Component {
  constructor(props) {
    super()

    this.state = {
      isCollapsed: true,
    }

    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  componentDidMount = () => {
    const nav = document.querySelector('.topnav')
    let topOfNav = nav.offsetTop

    window.addEventListener('scroll', () => {
      if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        document.body.classList.add('fixed-nav')
      } else {
        document.body.classList.remove('fixed-nav')
      }
      document.body.style.padding = 0
    })
  }

  toggleNavbar() {
    const { isCollapsed } = this.state
    this.setState({ isCollapsed: !isCollapsed })
  }

  render() {
    return (
      <nav
        className={this.state.isCollapsed ? 'topnav collapse' : 'topnav'}
        onClick={this.toggleNavbar}
      >
        <Link to aria-label="open navigation" className="hamburger">
          &#9776;
        </Link>
        <ul className="navigation">
          <li className="logo">
            <Link to="#" aria-label="return to home" />
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li className="logo">
            <Link to aria-label="return to home" href="#" />
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
