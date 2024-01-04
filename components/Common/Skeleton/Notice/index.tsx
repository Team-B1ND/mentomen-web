import styled from "styled-components";
import flex from "@/style/flex";
import { SkeletonBox } from "../style";

const NoticeSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: 20 }).map((_, idx) => (
        <NoticeItem key={idx}>
          <User>
            <SkeletonBox
              width="35px"
              height="35px"
              customStyle={{ borderRadius: "4rem" }}
            />
            <Name>
              <SkeletonBox width="80px" height="17px" />
              <SkeletonBox width="70px" height="15px" />
            </Name>
          </User>

          <SkeletonBox width="150px" height="25px" />
        </NoticeItem>
      ))}
    </Container>
  );
};

export default NoticeSkeleton;

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

const NoticeItem = styled.div`
  width: 100%;
  height: 60px;
  ${flex({ alignItems: "center", justifyContent: "center", columnGap: "15px" })}
`;

const User = styled.div`
  ${flex({ alignItems: "center", columnGap: "5px" })}
`;

const Name = styled.div`
  ${flex({ flexDirection: "column", rowGap: "5px" })}
`;
