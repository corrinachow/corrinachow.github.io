import { css } from "emotion";
import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

type Props = {
  children: React.ReactNode;
};

const mainContainer = css({
  backgroundColor: "rgb(250,228, 216)",
  perspective: "1px",
  transformStyle: "preserve-3d",
  height: "100vh",
  overflowX: "hidden",
  overflowY: "scroll",
});

const parallaxContainer = css({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transform: "translateZ(-1px) scale(2.5)",
  zIndex: -1,
  backgroundColor: "#FFF",
});

const contentContainer = css({
  position: "relative",
  height: "100vh",
  padding: "0 2rem",
  margin: "auto",
});

const content = css({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "75px 0",
});

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
);

export default Layout;
