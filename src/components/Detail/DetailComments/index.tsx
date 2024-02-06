import DetailCommentsInput from "./DetailCommentsInput";
import DetailCommentsList from "./DetailCommentsList";
import styled from "styled-components";
import flex from "@/src/styles/flex";
import { useGetCommentQuery } from "@/src/services/Comment/queries";

const DetailComments = ({ postId }: { postId: number }) => {
  const { data: commentsData } = useGetCommentQuery(postId, { suspense: true });
  return (
    <Container>
      <CommentCount>댓글 {commentsData?.data.length}개</CommentCount>
      <DetailCommentsInput postId={postId} />
      <DetailCommentsList data={commentsData?.data!} />
    </Container>
  );
};

export default DetailComments;

const Container = styled.div`
  width: 100%;

  padding: 25px 16px 36px 16px;
  ${flex({ flexDirection: "column", rowGap: "23px" })}
`;

const CommentCount = styled.p`
  font-size: 22px;
  font-family: "Pretendard-Bold" !important;
  font-weight: 400;
`;
