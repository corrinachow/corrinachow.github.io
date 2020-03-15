import { graphql, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH
} from "./useWindowDimensions/useWindowDimensions";

interface Props {
  children: React.ReactNode;
}

interface ContentStyleProps {
  isVertical: boolean;
}

const ContentContainer = styled.div({
  position: "relative",
  width: "100%",
  margin: "auto"
});

const Content = styled.div<ContentStyleProps>(
  {
    maxWidth: "1024px"
  },
  (props: ContentStyleProps) => ({
    margin: props.isVertical ? "0 2rem 0 10rem" : "8rem 2rem 0 2rem"
  })
);

const Layout = ({ children }: Props): JSX.Element => {
  const { width } = useWindowDimensions();
  const useVerticalNav = width < DEFAULT_MOBILE_WIDTH;
  return (
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
              { name: "keywords", content: "sample, something" }
            ]}
          >
            <html lang="en" />
          </Helmet>
          <ContentContainer>
            <Navbar menuLinks={data.site.siteMetadata.menuLinks} />
            <Content isVertical={useVerticalNav}>{children}</Content>
          </ContentContainer>
        </>
      )}
    />
  );
};

export default Layout;
