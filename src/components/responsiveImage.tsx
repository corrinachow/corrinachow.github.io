import { css } from "emotion";
import classNames from "classnames";
import React from "react";

const imageContainer = css({
  display: "flex",
  position: "relative",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
});

const image = css({
  width: "100%",
  transition: "all 0.5s",
});

interface IResponseImageProps {
  imageSource: string;
}

export const ResponsiveImage = ({ imageSource }: IResponseImageProps) => (
  <div className={classNames(imageContainer)}>
    <img className={image} src={imageSource} />
  </div>
);
