import { css } from "emotion"
import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

import Header from "./header"

type Props = {
  children: React.ReactNode
}

const mainContainer = css({
  maxWidth: "1024px",
})

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className={mainContainer}>{children}</div>
      </>
    )}
  />
)

export default Layout
