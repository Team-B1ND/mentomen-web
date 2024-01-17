import { useGetCommentQuery } from "@/queries/Comment/comment.query";
import DetailCommentsInput from "./DetailCommentsInput";
import DetailCommentsList from "./DetailCommentsList";
import styled from "styled-components";
import flex from "@/style/flex";

const DetailComments = ({ postId }: { postId: number }) => {
  const { data: commentsData } = useGetCommentQuery(postId, { suspense: true });
  return (
    <Container sizeOfCommentsData={commentsData?.data.length!}>
      <CommentCount>댓글 {commentsData?.data.length}개</CommentCount>
      <DetailCommentsInput postId={postId} />
      <DetailCommentsList commentsData={commentsData?.data.reverse()!} />
    </Container>
  );
};

export default DetailComments;

const Container = styled.div<{ sizeOfCommentsData: number }>`
  width: 100%;
  height: auto;
  padding: 25px 16px 36px 16px;

  border-bottom: ${({ sizeOfCommentsData }) =>
    sizeOfCommentsData && "1px solid #ddd"};
  ${flex({ flexDirection: "column", rowGap: "23px" })}
`;

const CommentCount = styled.p`
  font-size: 22px;
  font-family: "Pretendard-Bold" !important;
  font-weight: 400;
`;
