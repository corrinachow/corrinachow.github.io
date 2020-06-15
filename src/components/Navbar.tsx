import React, { useState } from "react";
import styled from "@emotion/styled";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinks } from "../graphqlTypes";

import useDocumentScroll from "../hooks/useDocumentScroll/useDocumentScroll";
import useWindowDimensions, {
  DEFAULT_TABLET_WIDTH,
  DEFAULT_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";

interface NavbarProps {
  menuLinks: Array<ContentfulSiteMetadataSiteMetadataJsonNodeMenuLinks>;
}

interface NavStyleProps {
  isHidden: boolean;
  hasShadow: boolean;
  width: number;
}

const Nav = styled.nav<NavStyleProps>(
  {
    fontSize: "3rem",
    fontWeight: 500,
    zIndex: 2,
    position: "fixed",
    top: "0",
    display: "flex",
    transition: "transform 0.3s ease",
    "& ul": {
      display: "flex",
      alignItems: "center"
    },
    "& ul li": {
      margin: "1.25rem"
    },
    "& ul a": {
      display: "inline-block",
      width: "100%",
      margin: "0 1rem 0 1rem",
      padding: "0 0.5rem",
      backgroundSize: "0 100%",
      backgroundImage: "linear-gradient(180deg, transparent 65%,  #faed27 0)",
      backgroundRepeat: "no-repeat",
      transition: "background .4s ease",
      height: "2rem",
      ":hover": {
        backgroundSize: "77% 100%",
        height: "2rem",
        backgroundColor: "transparent"
      }
    }
  },
  (props: NavStyleProps): {} => {
    const { isHidden, width } = props;

    const narrowStyles = {
      justifyContent: "center",
      "& ul": {
        justifyContent: "center",
        margin: "0 auto"
      },
      "& ul li a": {
        margin: 0,
        fontSize: "1.5rem",
        ":hover": {
          backgroundSize: "100% 100%"
        }
      }
    };

    const mediumStyles = {
      justifyContent: "center",
      "& ul": {
        justifyContent: "center",
        margin: "0 auto"
      },
      "& ul li a": {
        fontSize: "2.5rem"
      }
    };

    const fullWidthStyles = {
      justifyContent: "flex-end",
      "& ul": {
        justifyContent: "flex-end"
      }
    };

    return {
      width: "100%",
      height: "4rem",
      marginTop: "2rem",
      transform: isHidden ? "translateY(-120%)" : "translateY(0)",
      "& ul": {
        width: "1024px",
        margin: "0 auto"
      },
      ...(width < DEFAULT_TABLET_WIDTH && width > DEFAULT_MOBILE_WIDTH
        ? mediumStyles
        : width > DEFAULT_TABLET_WIDTH
        ? fullWidthStyles
        : narrowStyles)
    };
  }
);

const Navbar: React.FC<NavbarProps> = ({ menuLinks }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const { width } = useWindowDimensions();

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
      <Nav width={width} isHidden={shouldHideHeader} hasShadow={hasShadow}>
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
