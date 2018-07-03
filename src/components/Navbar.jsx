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
