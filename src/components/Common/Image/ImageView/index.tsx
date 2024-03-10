import React, { useState } from "react";
import styled, { css, CSSObject } from "styled-components";
import Image, { ImageProps } from "next/image";
import { skeletonAnimation } from "@/src/stories/ui";

interface Props extends ImageProps {
  customstyle?: CSSObject;
  width: number;
  height: number;
}

const ImageView = ({ ...attr }: Props) => {
  const { width, height, ...rest } = attr;
  const [isLoadImage, setIsLoadImage] = useState(true);

  return (
    <>
      <StyledImage
        width={width}
        height={height}
        isLoad={isLoadImage}
        onLoad={() => setIsLoadImage(false)}
        {...rest}
      />
    </>
  );
};

export default ImageView;

const StyledImage = styled(Image)<{
  customstyle?: CSSObject;
  isLoad: boolean;
}>`
  object-fit: contain;
  border: none;
  outline: none;

  ${({ isLoad }) =>
    isLoad &&
    css`
      ${skeletonAnimation}
    `}

  ${({ customstyle }) => customstyle}
`;
