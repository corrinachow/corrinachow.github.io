import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO/SEO'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import './styles.css'
import './portfolio.css'

const Index = ({ children }) => (
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
    {children()}
    <Footer />
  </div>
)

Index.propTypes = {
  children: PropTypes.func,
}

export default Index
