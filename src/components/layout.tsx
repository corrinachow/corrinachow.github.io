import React, { useContext } from "react";
import Helmet from "react-helmet";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

import { ThemeContext, Theme } from "../Context/ThemeContext";

import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";
import useSiteSettings from "../hooks/useSiteSettings";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

interface ContentStyleProps {
  isVertical: boolean;
}

const ContentContainer = styled.div<{
  themeVariation: Theme;
  isMobile: boolean;
}>(
  {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    margin: "auto"
  },
  props => ({
    backgroundColor: themes[props.themeVariation].background,
    color: themes[props.themeVariation].fontColor,
    paddingBottom: props.isMobile ? "18rem" : "10rem",
    "& a": {
      color: themes[props.themeVariation].linkColor
    }
  })
);

const Content = styled.div<ContentStyleProps>(
  {
    maxWidth: "1024px"
  },
  (props: ContentStyleProps) => ({
    padding: props.isVertical ? "3rem 0 0 6rem" : "8rem 2.5rem",
    margin: props.isVertical ? "0 2rem 0 2rem" : "0 4rem"
  })
);

const themes = {
  light: {
    fontColor: "white",
    linkColor: "#e20f66",
    foreground: "inherit",
    background: "#001489"
  },
  dark: {
    fontColor: "white",
    linkColor: "#e20f66",
    foreground: "#ffffff",
    background: "#222222"
  }
};

const Layout: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const { width } = useWindowDimensions();
  const {
    menuLinks,
    title,
    socialLinks,
    email,
    resumeLink
  } = useSiteSettings();
  const renderVerticalNav = width < DEFAULT_MOBILE_WIDTH;
  var { themeType } = useContext(ThemeContext);

  return (
    <>
      <ContentContainer themeVariation={themeType} isMobile={renderVerticalNav}>
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
        <Footer
          socialLinks={socialLinks}
          emailLink={email}
          resumeLink={resumeLink}
        />
      </ContentContainer>
    </>
  );
};

export default Layout;
