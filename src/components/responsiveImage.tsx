import classNames from "classnames";
import React from "react";
import { css } from "@emotion/core";

const imageContainer = css({
  display: "flex",
  position: "relative",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
});

interface IResponseImageProps {
  imageSource: string;
  maxHeight: string;
}

export const ResponsiveImage = ({
  imageSource,
  maxHeight,
}: IResponseImageProps) => (
  <div className={classNames(imageContainer, css({ maxHeight: maxHeight }))}>
    <img css={{ width: "100%", transition: "all 0.5s" }} src={imageSource} />
  </div>
);
