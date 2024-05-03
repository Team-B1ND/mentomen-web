import { Column, Flex, Row } from "@/src/stories/layout";
import { SkeletonBox } from "@/src/stories/ui";
import styled, { css } from "styled-components";

const NotificationSkeleton = () => {
  return (
    <Container>
      {Array.from({ length: 20 }).map((_, idx) => (
        <Row
          key={idx}
          $columnGap={"15px"}
          $width={"100%"}
          $height={"95px"}
          $padding={"7px 0 15px 0"}
          $customStyle={css`
            border-bottom: 1px solid #cbd5e1;
          `}
        >
          <SkeletonBox
            width="50px"
            height="50px"
            customStyle={{ borderRadius: "100%" }}
          />

          <Column $rowGap={"10px"}>
            <SkeletonBox width="297px" height="22px" />
            <SkeletonBox width="150px" height="20px" />
            <SkeletonBox width="50px" height="14px" />
          </Column>
        </Row>
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
