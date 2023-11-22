import styled from "styled-components";
import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";

export const ListItemSkeletonBox = styled.div`
  width: 500px;
  height: 650px;
  border-radius: 5px;
  border: 1px solid #ddd;

  ${skeletonAnimation}
`;
