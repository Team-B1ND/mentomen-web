import React from "react";
import styled, { CSSObject } from "styled-components";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  customstyle?: CSSObject;
}

export const ImageView = ({ ...attr }: Props) => {
  const { width, height, ...rest } = attr;
  return <StyledImage width={width} height={height} {...rest} />;
};

const StyledImage = styled(Image)<{ customstyle?: CSSObject }>`
  object-fit: contain;
  border: none;
  outline: none;
  ${({ customstyle }) => customstyle}
`;
