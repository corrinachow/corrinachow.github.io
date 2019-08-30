import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'

import Layout from '../components/layout'
import About from '../components/about'

const header = css({
  color: '#0505',
})

const IndexPage = props => (
  <Layout>
    <About></About>
    <h1 className={header}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
