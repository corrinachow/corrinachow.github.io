import classNames from "classnames"
import { css } from "emotion"
import { graphql, StaticQuery } from "gatsby"
import { url } from "inspector"
import React from "react"
import Helmet from "react-helmet"

import Header from "./header"

type Props = {
  children: React.ReactNode
}

const mainContainer = css({
  perspective: "1px",
  transformStyle: "preserve-3d",
  height: "100vh",
  overflowX: "hidden",
  overflowY: "scroll",
})

const parallaxContainer = css({
  display: "flex",
  flex: "1 0 auto",
  position: "relative",
  zIndex: -1,
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  transform: "translateZ(-1px) scale(2)",
  backgroundColor: "rgb(250,228, 216)",
})

const contentContainer = css({
  position: "relative",
  display: "block",
  // backgroundColor: "white",
  zIndex: 1,
  // maxWidth: "1024px",
  padding: "0 2rem",
  margin: "auto",
})

const content = css({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "75px 0",
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
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}

        <div className={mainContainer}>
          <div className={contentContainer}>
            <div className={content}>{children}</div>
          </div>
          <div className={parallaxContainer} />
        </div>
      </>
    )}
  />
)

export default Layout
