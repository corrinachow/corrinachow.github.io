import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Navbar from "./Navbar";

import { ThemeContext, Theme } from "../Context/ThemeContext";

import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH,
  DEFAULT_SMALL_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";
import useSiteSettings from "../hooks/useSiteSettings";
import Footer from "./Footer";
import Seo from "./Seo";

interface Props {
  children: React.ReactNode;
}

interface ContentStyleProps {
  width: number;
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
  (props: ContentStyleProps) => {
    const { width } = props;

    if (width > DEFAULT_MOBILE_WIDTH) {
      return {
        padding: "8rem 2.5rem 5rem",
        margin: "0 auto"
      };
    }
    if (width <= DEFAULT_MOBILE_WIDTH && width > DEFAULT_SMALL_MOBILE_WIDTH) {
      return {
        padding: "8rem 2.5rem",
        margin: "0 0rem"
      };
    }

    return {
      padding: "7.5rem 2.5rem",
      margin: "0 auto"
    };
  }
);

export const themes = {
  light: {
    fontColor: "white",
    linkColor: "#e20f66",
    foreground: "inherit",
    background: "#001489",
    primaryColor: "#001489",
    invertedPrimary: "#FFF"
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

  const { menuLinks, socialLinks, email, resumeLink } = useSiteSettings();
  var { themeType } = useContext(ThemeContext);

  return (
    <>
      <ContentContainer themeVariation={themeType} isMobile={true}>
        <Seo />
        <Navbar menuLinks={menuLinks} />
        <Content width={width}>
          {children}
          <Footer
            socialLinks={socialLinks}
            emailLink={email}
            resumeLink={resumeLink}
          />
        </Content>
      </ContentContainer>
    </>
  );
};

export default Layout;
