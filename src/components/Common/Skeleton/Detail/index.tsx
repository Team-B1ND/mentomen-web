import { Column, Row } from "@/src/stories/layout";
import { SkeletonBox } from "@/src/stories/ui";
import { css } from "styled-components";
import DetailCommentSkeleton from "./DetailComment";

const DetailSkeleton = () => {
  return (
    <Column $alignItems={"center"} $rowGap={"15px"}>
      <Row
        $width={"100%"}
        $columnGap={"15px"}
        $padding={"16px"}
        $backgroundColor={"#fff"}
        $customStyle={css`
          border-radius: 5px;
          border: 1px solid #ddd;
        `}
      >
        <SkeletonBox
          width="45px"
          height="45px"
          customStyle={{ borderRadius: "100%" }}
        />

        <Column $rowGap={"15px"}>
          <Column $padding={"5px"} $rowGap={"7px"}>
            <Row $columnGap={"5px"} $alignItems={"flex-end"}>
              <SkeletonBox width="38px" height="15px" />
              <SkeletonBox width="71px" height="12px" />
            </Row>
            <SkeletonBox width="77px" height="14px" />
          </Column>

          <Column $rowGap={"20px"} $padding={"5px 0 0 0"}>
            <SkeletonBox width="460px" height="21px" />
            <SkeletonBox width="491px" height="491px" />
          </Column>

          <Row $columnGap={"5px"} $alignItems={"center"}>
            <SkeletonBox width="26px" height="26px" />
            <SkeletonBox width="26px" height="26px" />
          </Row>
        </Column>
      </Row>

      <DetailCommentSkeleton />
    </Column>
  );
};

export default DetailSkeleton;
