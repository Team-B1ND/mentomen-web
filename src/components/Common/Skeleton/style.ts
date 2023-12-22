import styled from "styled-components";
import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";

export const SkeletonBox = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "550px"};
  height: ${({ height }) => height || "650px"};
  border-radius: 5px;
  border: 1px solid #ddd;

  ${skeletonAnimation}
`;
