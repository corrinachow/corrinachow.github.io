import styled from "@emotion/styled";
import classNames from "classnames";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { themes } from "./Layout";

const Container = styled.div({
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
  (props) => {
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
      zIndex: name === topWindow ? 100 : 0,
      position: isPrimary ? "relative" : "absolute",
      maxWidth: fullWidth ? "1024px" : "500px",
      ...(!isPrimary && secondaryStyles)
    };
  }
);

const TopBar = styled.div({
  display: "flex",
  width: "100%",
  padding: "0.25rem 1rem",
  borderBottom: "1px solid #fff",
  background: themes.light.primaryColor,
  "> div": {
    display: "flex",
    alignItems: "center",
    width: "85%"
  },
  "& p": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.5rem",
    color: themes.light.invertedPrimary,
    margin: "0 auto"
  }
});

const Body = styled.div<any>({
  padding: "1rem",
  position: "relative",
  width: "100%",
  background: "black"
});

const Content = styled.div<{ isThin: boolean }>(
  {
    position: "relative",
    fontSize: "1rem"
  },
  (props) => ({ padding: props.isThin ? "0rem" : "3rem" })
);

const Dot = styled.div<any>(
  {
    minHeight: "0.5rem",
    minWidth: "0.5rem",
    marginRight: "0.75rem",
    borderRadius: "50%",
    display: "inline-block"
  },
  (props) => ({
    backgroundColor: props.backgroundColor
  })
);

const Window: React.FC<any> = ({
  children,
  name,
  fullWidth,
  isThin = true
}) => {
  const [topWindow, setTopWindow] = useState<string>("");

  return (
    <Draggable handle=".handle">
      <Container>
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
              <p>{name}</p>
            </div>
          </TopBar>
          <Body>
            <Content isThin={isThin}>{children}</Content>
          </Body>
        </ProjectWindow>
      </Container>
    </Draggable>
  );
};

export default Window;
