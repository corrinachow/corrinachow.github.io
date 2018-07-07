import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO/SEO'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import './styles.css'
import './portfolio.css'

const Index = ({ children, data }) => (
  <div>
    <SEO />
    <Navbar />
    <Sidebar
      text="Web development and design portfolio"
      alignment="sidebar left"
    />
    <Sidebar
      text={`© ${new Date().getFullYear()}, Corrina Chow`}
      alignment="sidebar right"
    />
    <div>{children()}</div>
  </div>
)

Index.propTypes = {
  children: PropTypes.func,
}

export default Index
