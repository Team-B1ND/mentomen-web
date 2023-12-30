import styled from "styled-components";
import flex from "../../../../style/flex";
import DetailImageSkeleton from "./DetailImage";
import DetailContentSkeleton from "./DetailContent";

const DetailSkeleton = () => {
  return (
    <Container>
      <DetailImageSkeleton />
      <DetailContentSkeleton />
    </Container>
  );
};

export default DetailSkeleton;

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex({ alignItems: "center" })}
`;
