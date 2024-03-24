import DetailCommentsInput from "./DetailCommentsInput";
import DetailCommentsList from "./DetailCommentsList";
import styled from "styled-components";
import { useGetCommentQuery } from "@/src/services/Comment/queries";
import { Flex } from "@/src/stories/layout";

const DetailComments = ({ postId }: { postId: number }) => {
  const { data: commentsData } = useGetCommentQuery(postId, { suspense: true });
  return (
    <Container>
      <InputWrap>
        <CommentCount>댓글 {commentsData?.data.length}개</CommentCount>
        <DetailCommentsInput postId={postId} />
      </InputWrap>
      <DetailCommentsList data={commentsData?.data!} />
    </Container>
  );
};

export default DetailComments;

export const Container = styled.div`
  width: 100%;
  ${Flex({ flexDirection: "column", rowGap: "15px" })};
`;

export const InputWrap = styled.div`
  background-color: #fff;
  padding: 20px 16px 25px 20px;
  border-radius: 5px;
  border: 1px solid #ddd;
  ${Flex({ flexDirection: "column", rowGap: "23px" })};
`;

const CommentCount = styled.p`
  font-size: 22px;
  font-family: "Pretendard-Bold" !important;
  font-weight: 400;
`;
