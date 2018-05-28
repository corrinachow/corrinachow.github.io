import React from 'react'
import Link from 'gatsby-link'

const Navbar = ({ siteTitle }) => (
  <nav className="topnav collapse">
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

export default Navbar
