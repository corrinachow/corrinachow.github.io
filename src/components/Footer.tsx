import styled from "@emotion/styled";
import React from "react";
import {
  ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks,
  ContentfulSiteMetadataSiteMetadataJsonNodeResumeLink,
  ContentfulSiteMetadataSiteMetadataJsonNodeEmail
} from "../graphqlTypes";
import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH,
  DEFAULT_SMALL_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";
import { themes } from "./Layout";

interface Props {
  socialLinks: Array<ContentfulSiteMetadataSiteMetadataJsonNodeSocialLinks>;
  resumeLink: ContentfulSiteMetadataSiteMetadataJsonNodeResumeLink;
  emailLink: ContentfulSiteMetadataSiteMetadataJsonNodeEmail;
}

const StyledFooter = styled.footer<any>(
  {
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingRight: "inherit",
    flexWrap: "wrap",
    "& p": {
      marginBottom: `${1.5 / 2}rem`
    },
    "& ul": {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    "& ul li": {
      "& a": {
        display: "inline-block",
        width: "100%",
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
    const { width } = props;

    if (width > DEFAULT_MOBILE_WIDTH) {
      return {
        // padding: "3rem 0 2.5rem 0rem",
        // margin: "0 2rem 0 2rem"
      };
    }
    if (width <= DEFAULT_MOBILE_WIDTH && width > DEFAULT_SMALL_MOBILE_WIDTH) {
      return {
        padding: "2.5rem 2.5rem"
        // margin: "0 4rem"
      };
    }
    return {};
  }
);

const ContactInfo = styled.div({
  padding: 0,
  fontSize: "3rem"
});

const SocialInfo = styled.div({
  "& ul": {
    margin: 0
  }
});

const Footer: React.FC<Props> = ({ socialLinks, resumeLink, emailLink }) => {
  const { width } = useWindowDimensions();

  return (
    <StyledFooter width={width} className="row margin-5">
      <ContactInfo className="margin-2 col-xs-12">
        <p>
          <a target="_blank" href={resumeLink.link}>
            {resumeLink.name}
          </a>
        </p>
        <p>
          <a target="_blank" href={`mailto:${emailLink.value}`}>
            {emailLink.value}
          </a>
        </p>
      </ContactInfo>
      <SocialInfo>
        <ul>
          {socialLinks.map(socialLink => (
            <li key={socialLink.name}>
              <a target="_blank" href={socialLink.link!}>
                {socialLink.name}
              </a>
            </li>
          ))}
        </ul>
      </SocialInfo>
    </StyledFooter>
  );
};

export default Footer;
