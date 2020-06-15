import classNames from "classnames";
import { css } from "@emotion/core";
import React, { useRef, useState, useEffect } from "react";

import styled from "@emotion/styled";
import { ContentfulProject } from "../graphqlTypes";
import { themes } from "./Layout";
import useWindowDimensions, {
  DEFAULT_MOBILE_WIDTH
} from "../hooks/useWindowDimensions/useWindowDimensions";
import { snakeCase } from "lodash";

interface Props {
  project: ContentfulProject;
  index: number;
}

const ProjectContainer = styled.div({
  position: "relative",
  padding: "5rem 0"
});

const ProjectWindow = styled.div<{
  isPrimary: boolean;
  topWindow: string;
  name: string;
  secondaryWindowPosition?: any;
}>(
  {
    // margin: "0 auto",
    border: "1px solid #fff"
  },
  props => {
    const { isPrimary, secondaryWindowPosition, topWindow, name } = props;

    const secondaryStyles = {
      ...secondaryWindowPosition,
      minWidth: "300px",
      transition: "z-index 0.3s ease"
    };

    return {
      zIndex: name === topWindow ? 1 : 0,
      position: isPrimary ? "relative" : "absolute",
      maxWidth: isPrimary && "500px",
      ...(!isPrimary && secondaryStyles)
    };
  }
);

const TopBar = styled.div({
  display: "flex",
  width: "100%",
  padding: "0.4rem 1rem",
  borderBottom: "1px solid #fff",
  background: themes.light.primaryColor,
  "& span": {
    fontSize: "0.5rem",
    color: themes.light.invertedPrimary,
    display: "inline-block",
    margin: "0 auto"
  }
});

const ProjectBody = styled.div<any>({
  padding: "1rem",
  position: "relative",
  width: "100%",
  background: "black"
});

const PreviewImage = styled.div<any>(
  {
    padding: "1rem",
    position: "relative",
    width: "100%",
    minHeight: "20rem"
  },
  props => ({
    "::before": {
      content: '""',
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundImage: `url(${props.backgroundUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  })
);

const ProjectContent = styled.div({
  position: "relative",
  fontSize: "1rem"
});

const Dot = styled.div<any>(
  {
    height: "0.65rem",
    width: "0.65rem",
    marginRight: "0.5rem",
    borderRadius: "50%",
    display: "inline-block"
  },
  props => ({
    backgroundColor: props.backgroundColor
  })
);

const ProjectTitle = styled.h3({
  fontWeight: 500,
  margin: "1.5rem 0"
});

const TechStack = styled.p({
  color: "#faed27"
});

const ProjectLinks = styled.div({
  display: "flex",
  flexDirection: "column",
  "& p": {
    padding: 0,
    margin: 0
  }
});

const Project: React.FC<Props> = (props: Props) => {
  const [topWindow, setTopWindow] = useState<string>("");
  const [secondaryWindowPosition, setSecondaryWindowPosition] = useState({
    top: "",
    right: "",
    left: ""
  });

  const {
    project: {
      name,
      description,
      projectUrl,
      repositoryUrl,
      type,
      logo,
      techStack = []
    }
  } = props;

  const { width } = useWindowDimensions();
  const isMobile = width < DEFAULT_MOBILE_WIDTH;

  const imageExtension = useRef(Math.random() < 0.5 ? ".png" : ".jpg");

  useEffect(() => {
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;

    const secondaryWindowPosition = {
      top: `${Math.random() * 0.3 * plusOrMinus}rem`,
      right: `${!isMobile && Math.random() * 2 * plusOrMinus}rem`,
      left: `${isMobile && Math.random() * 5}rem`
    };

    setSecondaryWindowPosition(secondaryWindowPosition);
  }, [isMobile]);

  return (
    <ProjectContainer>
      <ProjectWindow
        onClick={() => setTopWindow(`${name}-img`)}
        name={`${name}-img`}
        topWindow={topWindow}
        isPrimary={false}
        secondaryWindowPosition={secondaryWindowPosition}
        className={classNames("row", "middle-sm")}
      >
        <TopBar>
          <Dot backgroundColor={"#FF605C"} />
          <Dot backgroundColor={"#FFBD44"} />
          <Dot backgroundColor={"#00CA4E"} />
          <span>{`${snakeCase(name)}${imageExtension.current}`}</span>
          <Dot backgroundColor={themes.light.primaryColor} />
          <Dot backgroundColor={themes.light.primaryColor} />
        </TopBar>
        <PreviewImage backgroundUrl={logo.sizes.src}></PreviewImage>
      </ProjectWindow>
      <ProjectWindow
        onClick={() => setTopWindow(`${name}-description`)}
        topWindow={topWindow}
        name={`${name}-description`}
        isPrimary={true}
        className={classNames("row", "middle-sm", "margin-8")}
      >
        <TopBar>
          <Dot backgroundColor={"#FF605C"} />
          <Dot backgroundColor={"#FFBD44"} />
          <Dot backgroundColor={"#00CA4E"} />
          <span>{`~/select-projects/${snakeCase(name)}.md`}</span>
          <Dot backgroundColor={themes.light.primaryColor} />
          <Dot backgroundColor={themes.light.primaryColor} />
        </TopBar>
        <ProjectBody backgroundUrl={logo.sizes.src}>
          <ProjectContent>
            <span>{`${type}`}</span>
            <ProjectTitle>{name}</ProjectTitle>
            <div>
              <p>{description}</p>
              <TechStack>{techStack && techStack.join(", ")}</TechStack>
              <ProjectLinks>
                <p>
                  <a target="_blank" href={repositoryUrl!}>
                    Github →
                  </a>
                </p>
                {projectUrl && (
                  <p>
                    <a target="_blank" href={projectUrl}>
                      View Online →
                    </a>
                  </p>
                )}
              </ProjectLinks>
            </div>
          </ProjectContent>
        </ProjectBody>
      </ProjectWindow>
    </ProjectContainer>
  );
};

export default Project;
