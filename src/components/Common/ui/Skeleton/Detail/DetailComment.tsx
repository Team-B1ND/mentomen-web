import { InputContainer } from "@/src/components/Detail/DetailComments/DetailCommentsInput/style";
import { Flex } from "@/src/stories/layout";
import { SkeletonBox } from "@/src/stories/ui";
import styled from "styled-components";

const DetailCommentSkeleton = () => {
  return (
    <Container>
      <SkeletonBox width="120px" height="35px" />

      <InputContainer>
        <SkeletonBox
          width="40px"
          height="40px"
          customStyle={{ borderRadius: "4rem" }}
        />
        <SkeletonBox width="100%" height="40px" />
      </InputContainer>

      <CommentBox>
        {Array.from({ length: 15 }).map((_, idx) => (
          <Comment key={idx}>
            <SkeletonBox
              width="40px"
              height="40px"
              customStyle={{ borderRadius: "4rem" }}
            />
            <SkeletonBox width="100%" height="100%" />
          </Comment>
        ))}
      </CommentBox>
    </Container>
  );
};

export default DetailCommentSkeleton;

const Container = styled.div`
  width: 100%;
  padding: 25px 16px 36px 16px;
  ${Flex({ flexDirection: "column", rowGap: "23px" })}
`;

const CommentBox = styled.div`
  width: 100%;
  padding-top: 10px;
  ${Flex({ flexDirection: "column", rowGap: "20px" })}
`;

const Comment = styled.div`
  width: 100%;
  height: 100px;
  ${Flex({ columnGap: "15px" })}
`;
