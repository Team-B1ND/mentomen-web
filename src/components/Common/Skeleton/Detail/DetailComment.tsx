import { InputWrap, Container } from "@/src/components/Detail/DetailComments";
import { Flex } from "@/src/stories/layout";
import { SkeletonBox } from "@/src/stories/ui";
import styled, { CSSObject } from "styled-components";

const DetailCommentSkeleton = () => {
  return (
    <Container>
      <InputWrap>
        <SkeletonBox width="85px" height="25px" />
        <CommentInput>
          <SkeletonBox customStyle={ProfileSkeletonStyle} />
          <SkeletonBox width="100%" height="35px" />
        </CommentInput>
      </InputWrap>

      <CommentBox>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Item key={idx} isLastIndex={idx === 7}>
            <SkeletonBox customStyle={ProfileSkeletonStyle} />
            <ContentWrap>
              <UserInfo>
                <div>
                  <SkeletonBox width="36px" height="14px" />
                  <SkeletonBox width="48px" height="12px" />
                </div>
                <SkeletonBox width="85px" height="13px" />
              </UserInfo>
              <SkeletonBox width="80%" height="18px" />
            </ContentWrap>
          </Item>
        ))}
      </CommentBox>
    </Container>
  );
};

export default DetailCommentSkeleton;

const CommentInput = styled.div`
  ${Flex({ columnGap: "10px", alignItems: "center" })}
`;

const ProfileSkeletonStyle: CSSObject = {
  width: "45px",
  height: "45px",
  borderRadius: "100%",
};

const CommentBox = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  ${Flex({ flexDirection: "column" })}
`;

const Item = styled.div<{ isLastIndex: boolean }>`
  width: 100%;
  height: 106px;
  border-bottom: ${({ isLastIndex }) => !isLastIndex && "1px solid #ddd"};
  padding: 20px 16px 10px 20px;
  ${Flex({ columnGap: "20px" })};
`;

const ContentWrap = styled.div`
  width: 100%;
  ${Flex({ flexDirection: "column", rowGap: "15px" })};
`;

const UserInfo = styled.div`
  div {
    ${Flex({ columnGap: "7px", alignItems: "flex-end" })};
  }
  ${Flex({ flexDirection: "column", rowGap: "7px" })};
`;
