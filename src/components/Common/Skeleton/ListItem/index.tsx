import { Column, Flex, Row } from "@/src/stories/layout";
import { skeletonAnimation, SkeletonBox } from "@/src/stories/ui";
import styled, { css } from "styled-components";

const ListItemSkeleton = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, idx) => (
        <Column
          key={idx}
          $rowGap={"10px"}
          $width={"100%"}
          $backgroundColor={"#fff"}
          $padding={"0 13px 10px"}
          $customStyle={css`
            border-radius: 5px;
            border: 1px solid #ddd;
          `}
        >
          <Row $columnGap={"12px"}>
            <TagSkeleton />
            <Column $rowGap={"4px"} $padding={"6px 0 0 0"}>
              <SkeletonBox $width="45px" $height="16px" />
              <SkeletonBox $width="75px" $height="13px" />
            </Column>
          </Row>

          <Column $width={"100%"} $rowGap={"8px"}>
            <SkeletonBox $width="400px" $height="22px" />
            <SkeletonBox $width="100%" $height="420px" />
          </Column>

          <Row
            $width={"100%"}
            $alignItems={"center"}
            $justifyContent={"space-between"}
          >
            <Row $columnGap={"5px"} $alignItems={"center"}>
              <SkeletonBox $width="26px" $height="26px" />
              <SkeletonBox $width="26px" $height="26px" />
              <SkeletonBox $width="26px" $height="26px" />
            </Row>

            <SkeletonBox $width="55px" $height="16px" />
          </Row>
        </Column>
      ))}
    </>
  );
};

export default ListItemSkeleton;

const TagSkeleton = styled.div`
  width: 28px;
  height: 43px;
  clip-path: polygon(50% 0%, 0% 0%, 0% 94%, 50% 78%, 100% 94%, 100% 0%);
  ${skeletonAnimation}
`;
