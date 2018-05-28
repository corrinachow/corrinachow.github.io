import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'
import './index.css'
import './styles.css'
import './portfolio.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar siteTitle={data.site.siteMetadata.title} />
    <Sidebar text="Web development and design portfolio" alignment="sidebar left"/>
    <Sidebar text={`© ${new Date().getFullYear()}, Corrina Chow`} alignment="sidebar right"/>
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
