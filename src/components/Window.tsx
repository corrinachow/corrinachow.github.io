import styled from "@emotion/styled";
import classNames from "classnames";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { themes } from "./Layout";

const ProjectContainer = styled.div({
  position: "relative",
  padding: "2rem 0 5rem 0"
});

const ProjectWindow = styled.div<{
  isPrimary: boolean;
  topWindow: string;
  name: string;
  secondaryWindowPosition?: any;
  fullWidth: boolean;
}>(
  {
    border: "1px solid #fff"
  },
  props => {
    const {
      isPrimary,
      secondaryWindowPosition,
      topWindow,
      name,
      fullWidth
    } = props;

    const secondaryStyles = {
      ...secondaryWindowPosition,
      minWidth: "300px",
      transition: "z-index 0.3s ease"
    };
    return {
      zIndex: name === topWindow ? 1 : 0,
      position: isPrimary ? "relative" : "absolute",
      maxWidth: fullWidth ? "1024px" : "500px",
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
  "> div": {
    display: "flex",
    width: "85%"
  },
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

const Window: React.FC<any> = ({ children, name, fullWidth }) => {
  const [topWindow, setTopWindow] = useState<string>("");

  return (
    <Draggable handle=".handle">
      <ProjectContainer>
        <ProjectWindow
          onClick={() => setTopWindow(`${name}-description`)}
          topWindow={topWindow}
          name={`${name}-description`}
          fullWidth={fullWidth}
          isPrimary={true}
          className={classNames("row", "middle-sm", "margin-8")}
        >
          <TopBar className="handle">
            <div>
              <Dot backgroundColor={"#FF605C"} />
              <Dot backgroundColor={"#FFBD44"} />
              <Dot backgroundColor={"#00CA4E"} />
              <span>{name}</span>
            </div>
          </TopBar>
          <ProjectBody>
            <ProjectContent>{children}</ProjectContent>
          </ProjectBody>
        </ProjectWindow>
      </ProjectContainer>
    </Draggable>
  );
};

export default Window;
