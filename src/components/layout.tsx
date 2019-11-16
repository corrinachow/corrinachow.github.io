import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Navbar from "./navbar";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const MainContainer = styled.div({
  backgroundColor: "rgb(250,228, 216)",
  perspective: "1px",
  transformStyle: "preserve-3d",
  height: "100vh",
  width: "100%",
  overflowX: "hidden",
  overflowY: "scroll",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    width: "0 !important",
    background: "transparent",
    display: "none",
  },
});

const ParallaxContainer = styled.div({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  transform: "translateZ(-1px) scale(2.5)",
  zIndex: -1,
  backgroundColor: "#FFF",
});

const ContentContainer = styled.div({
  position: "relative",
  height: "100vh",
  padding: "0 2rem",
  margin: "auto",
});

const Content = styled.div({
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
            menuLinks {
              name
              link
            }
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
        <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
        <MainContainer>
          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
          <ParallaxContainer />
        </MainContainer>
      </>
    )}
  />
);

export default Layout;
