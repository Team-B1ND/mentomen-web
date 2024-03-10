import React, { useState } from "react";
import styled, { CSSObject } from "styled-components";
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
        onLoad={() => setIsLoadImage(false)}
        {...rest}
      />
      {isLoadImage && <LoadImage />}
    </>
  );
};

export default ImageView;

const StyledImage = styled(Image)<{
  customstyle?: CSSObject;
}>`
  object-fit: contain;
  border: none;
  outline: none;
  ${({ customstyle }) => customstyle}
`;

const LoadImage = styled.div`
  width: 680px;
  height: 680px;
  border-radius: 10px;

  position: absolute;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;

  ${skeletonAnimation}
`;
