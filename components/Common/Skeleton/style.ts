import styled, { CSSObject } from "styled-components";

export const SkeletonBox = styled.div<{
  width?: string;
  height?: string;
  customStyle?: CSSObject;
}>`
  width: ${({ width }) => width || "550px"};
  height: ${({ height }) => height || "650px"};
  border-radius: 5px;
  border: 1px solid #ddd;

  ${({ customStyle }) => customStyle};

  //여기 스켈레톤
`;
