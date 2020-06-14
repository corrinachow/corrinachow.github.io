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
      flexWrap: "wrap",
      margin: 0
    },
    "& ul li": {
      padding: "0 1.25rem 0 0",
      ":hover": {
        background: "white"
      }
    }
  },
  (props: any): {} => {
    const { isMobile } = props;
    const fullWidthStyles = {
      padding: "3rem 0 2.5rem 8rem",
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

const Footer: React.FC<Props> = ({ socialLinks, resumeLink, emailLink }) => {
  const { width } = useWindowDimensions();
  const useMobileFooter = width < DEFAULT_MOBILE_WIDTH;

  return (
    <StyledFooter isMobile={useMobileFooter}>
      <div className="margin-2">
        <p>
          <a target="_blank" href={resumeLink.link}>
            {resumeLink.name}
          </a>
        </p>
        <a target="_blank" href={emailLink.value}>
          {emailLink.value}
        </a>
      </div>
      <div>
        <h3>Find me online</h3>
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
