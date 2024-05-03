import { Column, Row } from "@/src/stories/layout";
import { SkeletonBox } from "@/src/stories/ui";
import { css, CSSObject } from "styled-components";

const DetailCommentSkeleton = () => {
  return (
    <Column $width={"100%"} $rowGap={"15px"}>
      <Column
        $width={"100%"}
        $backgroundColor={"#fff"}
        $padding={"20px 16px 25px 20px"}
        $rowGap={"23px"}
        $customStyle={css`
          border-radius: 5px;
          border: 1px solid #ddd;
        `}
      >
        <SkeletonBox width="85px" height="25px" />
        <Row $width={"100%"} $columnGap={"10px"} $alignItems={"center"}>
          <SkeletonBox customStyle={ProfileSkeletonStyle} />
          <SkeletonBox width="100%" height="35px" />
        </Row>
      </Column>

      <Column
        $width={"100%"}
        $backgroundColor={"#fff"}
        $customStyle={CommentBox}
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <Row
            key={idx}
            $width={"100%"}
            $height={"106px"}
            $padding={"20px 16px 10px 20px"}
            $customStyle={Item(idx === 7)}
            $columnGap={"6px"}
          >
            <SkeletonBox customStyle={ProfileSkeletonStyle} />

            <Column $width={"100%"} $rowGap={"15px"}>
              <Column $rowGap={"7px"}>
                <Row $alignItems={"flex-end"} $columnGap={"7px"}>
                  <SkeletonBox width="36px" height="14px" />
                  <SkeletonBox width="48px" height="12px" />
                </Row>
                <SkeletonBox width="85px" height="13px" />
              </Column>
              <SkeletonBox width="80%" height="18px" />
            </Column>
          </Row>
        ))}
      </Column>
    </Column>
  );
};

export default DetailCommentSkeleton;

const ProfileSkeletonStyle: CSSObject = {
  width: "45px",
  height: "45px",
  borderRadius: "100%",
};

const CommentBox = css`
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Item = (isLastIndex: boolean) => css`
  border-bottom: ${!isLastIndex && "1px solid #ddd"};
`;
