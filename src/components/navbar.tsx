import React, { useState, useEffect } from "react";
import { SiteSiteMetadataMenuLinks } from "../graphqlTypes";
import styled from "@emotion/styled";

interface INavbarProps {
  menuLinks: Array<SiteSiteMetadataMenuLinks>;
}

const Nav = styled.nav({
  position: "fixed",
  top: "0",
  zIndex: 1,
  transition: "top 0.3s",
  backgroundColor: "rgb(250,228, 216)",
  width: "100%",
});

const NavItems = styled.ul({
  display: "flex",
  margin: "0 auto",
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

// const navbarItem = css({
//   margin: "0 1rem 0 1rem",
//   backgroundImage:
//     "linear-gradient(180deg, transparent 65%,  rgb(250, 228, 216) 0)",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "0 100%",
//   transition: "background-size .4s ease",
//   ":hover": { backgroundSize: "100% 100%" },
// });

const Navbar = ({ menuLinks }: INavbarProps) => {
  // const [isHidden, setIsHidden] = useState<boolean>(false);
  // const [position, setPosition] = useState<number>();
  // const { width } = useWindowDimensions();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let temp = window.pageYOffset;
  //     console.log(temp);
  //     setIsHidden(position! > temp);
  //     setPosition(temp);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return renderNav();

  function renderNav(): JSX.Element {
    return (
      <Nav>
        <NavItems>
          {menuLinks.map(menuLink => (
            <NavItem key={menuLink.name!}>
              <a href={menuLink.link!}>{menuLink.name}</a>
            </NavItem>
          ))}
        </NavItems>
      </Nav>
    );
  }
};

export default Navbar;
