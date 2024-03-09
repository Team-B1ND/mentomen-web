import React from "react";
import styled, { CSSObject } from "styled-components";
import Image, { ImageProps } from "next/image";

interface Props extends ImageProps {
  customstyle?: CSSObject;
}

export const ImageView = ({ ...attr }: Props) => {
  const { width, height, ...rest } = attr;
  return (
    <StyledImage width={width || 1000} height={height || 1000} {...rest} />
  );
};

const StyledImage = styled(Image)<{ customstyle?: CSSObject }>`
  object-fit: contain;
  border: none;
  outline: none;
  ${({ customstyle }) => customstyle}
`;
