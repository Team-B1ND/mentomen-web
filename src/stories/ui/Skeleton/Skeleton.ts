import styled, { CSSObject, css, keyframes } from "styled-components";

const shimmerAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 0 100%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

export const skeletonAnimation = css`
  background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 1.5s linear infinite;
`;

export const SkeletonBox = styled.div<{
  $width?: string;
  $height?: string;
  $customStyle?: CSSObject;
}>`
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "350px"};
  border-radius: 5px;
  border: 1px solid #ddd;

  ${({ $customStyle }) => $customStyle};
  ${skeletonAnimation};
`;
