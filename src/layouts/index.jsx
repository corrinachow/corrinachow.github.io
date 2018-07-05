import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../../config/SiteConfig'

import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
// import './index.css'
import './styles.css'
import './portfolio.css'

const Index = ({ children, data }) => (
  <div>
    <Helmet />
    {/* ad favicon, apple-touch-icon*/}
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
