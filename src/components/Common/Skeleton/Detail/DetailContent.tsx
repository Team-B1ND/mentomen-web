import styled from "styled-components";
import flex from "../../../../style/flex";
import { SkeletonBox } from "../style";
import DetailComentSkeleton from "./DetailComent";

const DetailContentSkeleton = () => {
  return (
    <Container>
      <Profile>
        <SkeletonBox
          width="35px"
          height="35px"
          customStyle={{ borderRadius: "4rem" }}
        />
        <SkeletonBox width="150px" height="25px" />
      </Profile>

      <Content>
        <DetailComentSkeleton />
      </Content>

      <Comment />
    </Container>
  );
};

export default DetailContentSkeleton;

const Container = styled.div`
  width: 40%;
  height: 100%;
  background-color: #fff;

  ${flex({ flexDirection: "column", alignItems: "center" })}
`;

const Profile = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;
  padding-left: 12px;

  ${flex({ alignItems: "center", columnGap: "10px" })}
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 115px);
  padding-left: 12px;
`;

const Comment = styled.div`
  width: 100%;
  height: 55px;
  border-top: 1px solid #ddd;
  background-color: #fff;
`;
