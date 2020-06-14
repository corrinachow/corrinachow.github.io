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
    width: "100%",
    flexWrap: "wrap",
    backgroundColor: "aliceblue",
    "& p": {
      marginBottom: `${1.5 / 2}rem`
    },

    "& ul": {
      display: "flex",
      flexWrap: "wrap",

      margin: 0
    },
    "& ul li": {
      padding: "0 1.25rem 0 0"
    }
  },
  (props: any): {} => {
    const { isFullWidth } = props;
    const fullWidthStyles = {
      "& ul": {
        justifyContent: ""
      }
    };

    const mobileWidthStyles = {
      marginLeft: "8rem"
      // "& ul": {
      //   justifyContent: "flex-end",
      //   margin: "0 auto"
      // }
    };

    return {
      ...(isFullWidth ? fullWidthStyles : mobileWidthStyles),
      padding: props.isFullWidth ? "3rem 0 0 8rem" : "2.5rem"
    };
  }
);

const Footer: React.FC<Props> = ({ socialLinks, resumeLink, emailLink }) => {
  const { width } = useWindowDimensions();
  const useFullWidthFooter = width > DEFAULT_MOBILE_WIDTH;

  return (
    <StyledFooter isFullWidth={useFullWidthFooter}>
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
