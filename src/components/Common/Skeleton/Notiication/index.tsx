import styled from "styled-components";
import { SkeletonBox } from "../style";

const NotiicationSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: 20 }).map((_, idx) => (
        <SkeletonBox key={idx} width="100%" height="90px" />
      ))}
    </Container>
  );
};

export default NotiicationSkeleton;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
