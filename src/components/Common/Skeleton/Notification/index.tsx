import { Flex } from "@/src/stories/layout";
import { SkeletonBox } from "@/src/stories/ui";
import styled from "styled-components";

const NotificationSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: 20 }).map((_, idx) => (
        <Box key={idx}>
          <SkeletonBox
            width="50px"
            height="50px"
            customStyle={{ borderRadius: "100%" }}
          />

          <ContentWrap>
            <SkeletonBox width="297px" height="22px" />
            <SkeletonBox width="150px" height="20px" />
            <SkeletonBox width="50px" height="14px" />
          </ContentWrap>
        </Box>
      ))}
    </Container>
  );
};

export default NotificationSkeleton;

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

const Box = styled.div`
  width: 100%;
  height: 95px;

  padding-top: 7px;
  padding-bottom: 15px;
  border-bottom: 1px solid #cbd5e1;
  ${Flex({ columnGap: "15px" })}
`;

const ContentWrap = styled.div`
  ${Flex({ flexDirection: "column", rowGap: "10px" })}
`;
