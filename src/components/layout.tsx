import React, { useContext } from "react";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

import { ThemeContext, Theme } from "../Context/ThemeContext";

import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";
import useSiteSettings from "../hooks/useSiteSettings";

interface Props {
  children: React.ReactNode;
}

interface ContentStyleProps {
  isVertical: boolean;
}

const ContentContainer = styled.div<any>(
  {
    position: "relative",
    width: "100%",
    margin: "auto"
  },
  props => ({
    backgroundColor: themes[props.theme]?.background,
    color: props.theme === Theme.Dark ? "white" : "inherit"
  })
);

const Content = styled.div<ContentStyleProps>(
  {
    maxWidth: "1024px"
  },
  (props: ContentStyleProps) => ({
    padding: props.isVertical ? "3rem 0 0 8rem" : "8rem 4rem",
    margin: props.isVertical ? "4rem 2rem 0 2rem" : "0 4rem"
  })
);

const themes = {
  light: {
    foreground: "inherit",
    background: "inherit"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const Layout: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const { width } = useWindowDimensions();
  const { menuLinks, title } = useSiteSettings();
  const renderVerticalNav = width < DEFAULT_MOBILE_WIDTH;
  var { themeType } = useContext(ThemeContext);

  return (
    <>
      <ContentContainer theme={themeType}>
        <Helmet
          title={title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Navbar menuLinks={menuLinks} />
        <Content isVertical={renderVerticalNav}>{children}</Content>
      </ContentContainer>
    </>
  );
};

export default Layout;
