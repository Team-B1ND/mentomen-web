import styled from "styled-components";
import { SkeletonBox } from "../style";

const DetailComentSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: 20 }).map((_, idx) => (
        <SkeletonBox key={idx} width="100%" height="50px" />
      ))}
    </Container>
  );
};

export default DetailComentSkeleton;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 12px 15px 0;

  display: flex;
  row-gap: 10px;
  flex-wrap: wrap;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
