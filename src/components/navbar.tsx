import React from "react";
import styled from "@emotion/styled";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { SiteSiteMetadataMenuLinks } from "../graphqlTypes";

interface NavbarProps {
  menuLinks: Array<SiteSiteMetadataMenuLinks>;
}

const Nav = styled.nav({
  zIndex: 1,
  position: "fixed",
  top: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "65px",
  color: "#333",
  transform: "translateY(0)",
  transition: "transform 0.3s ease",
  backgroundColor: "aliceblue",
});

const NavItems = styled.ul({
  display: "flex",
  padding: "1rem",
  justifyContent: "flex-end",
  maxWidth: "1024px",
});

const NavItem = styled.li({
  margin: "0 1rem 0 1rem",
  backgroundImage:
    "linear-gradient(180deg, transparent 65%,  rgb(250, 228, 216) 0)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "0 100%",
  transition: "background-size .4s ease",
  ":hover": { backgroundSize: "100% 100%" },
});

const NavLogo = styled.div({
  margin: "0 24px",
  fontSize: "28px",
  color: "#f59596",
});

const Navbar = ({ menuLinks }: NavbarProps): JSX.Element => {
  function renderNav(): JSX.Element {
    return (
      <Nav>
        <NavLogo>
          <span role="img" aria-label="logo">
            ✨
          </span>
        </NavLogo>
        <NavItems>
          {menuLinks.map(menuLink => (
            <NavItem key={menuLink.name!}>
              <AniLink fade to={menuLink.link!} duration={0.3}>
                {menuLink.name}
              </AniLink>
            </NavItem>
          ))}
        </NavItems>
      </Nav>
    );
  }
  return renderNav();
};

export default Navbar;
