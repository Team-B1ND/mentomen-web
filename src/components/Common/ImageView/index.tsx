import React from "react";
import styled, { CSSObject } from "styled-components";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  customstyle?: CSSObject;
}

const ImageView = ({ ...attr }: Props) => {
  const { width, height, ...rest } = attr;
  return (
    <StyledImage width={width || 1000} height={height || 1000} {...rest} />
  );
};

export default ImageView;

const StyledImage = styled(Image)<{ customstyle?: CSSObject }>`
  width: 100%;
  height: 100%;

  object-fit: contain;
  border: none;
  outline: none;

  ${({ customstyle }) => customstyle}
`;
