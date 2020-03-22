import React, { useState } from "react";
import styled from "@emotion/styled";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { SiteSiteMetadataMenuLinks } from "../graphqlTypes";

import useDocumentScroll from "../hooks/useDocumentScroll/useDocumentScroll";
import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";

interface NavbarProps {
  menuLinks: Array<SiteSiteMetadataMenuLinks>;
}

interface NavStyleProps {
  isHidden: boolean;
  hasShadow: boolean;
  isVertical: boolean;
}

const Nav = styled.nav<NavStyleProps>(
  {
    zIndex: 1,
    position: "fixed",
    top: "0",
    display: "flex",
    color: "#333",
    transition: "transform 0.3s ease",
    backgroundColor: "aliceblue",
    "& ul": {
      display: "flex",
      alignItems: "center"
    },
    "& ul a": {
      display: "inline-block",
      margin: "0 1rem 0 1rem",
      backgroundImage:
        "linear-gradient(180deg, transparent 65%,  rgb(250, 228, 216) 0)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "0 100%",
      transition: "background-size .4s ease",
      ":hover": { backgroundSize: "100% 100%", height: "1.25rem" }
    }
  },
  (props: NavStyleProps): {} => {
    const { isHidden, isVertical, hasShadow } = props;
    const verticalStyles = {
      flexDirection: "column",
      justifyContent: "center",
      width: "8rem",
      height: "100%",
      "& ul": {
        height: "16rem",
        flexDirection: "column",
        justifyContent: "space-between"
      }
    };

    const horizontalStyles = {
      justifyContent: "flex-end",
      width: "100%",
      height: "4rem",
      "& ul": {
        width: "1024px",
        justifyContent: "flex-end",
        margin: "0 auto"
      }
    };

    return {
      transform: isHidden ? "translateY(-110%)" : "translateY(0)",
      boxShadow: hasShadow && "0 9px 9px -9px rgba(0, 0, 0, 0.13)",
      ...(isVertical ? verticalStyles : horizontalStyles)
    };
  }
);

const Navbar: React.FC<NavbarProps> = ({ menuLinks }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const { width } = useWindowDimensions();
  const useVerticalNav = width < DEFAULT_MOBILE_WIDTH;

  const MINIMUM_SCROLL = 50;
  const TIMEOUT_DELAY = 400;

  useDocumentScroll(getScrollInformation => {
    const { previousScrollTop, currentScrollTop } = getScrollInformation;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setHasShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  function renderNav(): JSX.Element {
    return (
      <Nav
        isHidden={!useVerticalNav && shouldHideHeader}
        hasShadow={!useVerticalNav && hasShadow}
        isVertical={useVerticalNav}
      >
        <ul>
          {menuLinks.map(menuLink => (
            <li key={menuLink.name!}>
              <AniLink fade duration={0.3} to={menuLink.link!}>
                {menuLink.name}
              </AniLink>
            </li>
          ))}
        </ul>
      </Nav>
    );
  }
  return renderNav();
};

export default Navbar;
