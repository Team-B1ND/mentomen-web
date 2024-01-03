import styled from "styled-components";
import { skeletonAnimation } from "../style";

const DetailImageSkeleton = () => {
  return <Container />;
};

export default DetailImageSkeleton;

const Container = styled.div`
  width: 60%;
  height: 100%;
  ${skeletonAnimation};
`;
