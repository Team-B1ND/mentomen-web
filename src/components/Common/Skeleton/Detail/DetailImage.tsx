import { skeletonAnimation } from "@stubee2/stubee2-rolling-styled-components-util";
import styled from "styled-components";

const DetailImageSkeleton = () => {
  return <Container />;
};

export default DetailImageSkeleton;

const Container = styled.div`
  width: 60%;
  height: 100%;
  ${skeletonAnimation}
`;
