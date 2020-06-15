import styled from "@emotion/styled";
import React from "react";
import {
  ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks,
  ContentfulSiteMetadataSiteMetadataJsonNodeResumeLink,
  ContentfulSiteMetadataSiteMetadataJsonNodeEmail
} from "../graphqlTypes";
import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";
import { themes } from "./layout";

interface Props {
  socialLinks: Array<ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks>;
  resumeLink: ContentfulSiteMetadataSiteMetadataJsonNodeResumeLink;
  emailLink: ContentfulSiteMetadataSiteMetadataJsonNodeEmail;
}

const StyledFooter = styled.footer<any>(
  {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexWrap: "wrap",
    "& p": {
      marginBottom: `${1.5 / 2}rem`
    },
    "& ul": {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
      // margin: "0 -1.45rem"
    },
    "& ul li": {
      "& a": {
        display: "inline-block",
        width: "100%",
        margin: "0 0.5rem 0 1rem",
        padding: "0 0.5rem",
        backgroundSize: "0 100%",
        backgroundImage: "linear-gradient(180deg, transparent 65%,  #faed27 0)",
        backgroundRepeat: "no-repeat",
        transition: "background .4s ease",
        ":hover": {
          backgroundSize: "74% 100%",
          height: "1.25rem",
          backgroundColor: "transparent"
        }
      }
    }
  },
  (props: any): {} => {
    const { isMobile } = props;
    const fullWidthStyles = {
      padding: "3rem 0 2.5rem 0rem",
      margin: "0 2rem 0 2rem"
    };

    const mobileWidthStyles = {
      padding: "2.5rem 2.5rem",
      margin: "0 4rem"
    };

    return {
      ...(isMobile ? fullWidthStyles : mobileWidthStyles)
    };
  }
);

const ContactInfo = styled.div({
  fontSize: "3rem"
});

const Footer: React.FC<Props> = ({ socialLinks, resumeLink, emailLink }) => {
  const { width } = useWindowDimensions();
  const useMobileFooter = width < DEFAULT_MOBILE_WIDTH;

  return (
    <StyledFooter isMobile={useMobileFooter}>
      <ContactInfo className="margin-2">
        <p>
          <a target="_blank" href={resumeLink.link}>
            {resumeLink.name}
          </a>
        </p>
        <a target="_blank" href={`mailto:${emailLink.value}`}>
          {emailLink.value}
        </a>
      </ContactInfo>
      <div>
        <ul>
          {socialLinks.map(socialLink => (
            <li key={socialLink.name}>
              <a target="_blank" href={socialLink.link!}>
                {socialLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
