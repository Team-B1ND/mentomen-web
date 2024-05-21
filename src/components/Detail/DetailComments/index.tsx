import DetailCommentsInput from "./DetailCommentsInput";
import DetailCommentsList from "./DetailCommentsList";
import styled, { css } from "styled-components";
import { useGetCommentByPostIdQuery } from "@/src/services/Comment/comment.query";
import { Column } from "@/src/stories/layout";

const DetailComments = ({ postId }: { postId: number }) => {
  const { data: commentsData } = useGetCommentByPostIdQuery(postId, {
    suspense: true,
  });

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
        <CommentCount>댓글 {commentsData?.data.length}개</CommentCount>
        <DetailCommentsInput postId={postId} />
      </Column>
      <DetailCommentsList data={commentsData?.data!} />
    </Column>
  );
};

export default DetailComments;

const CommentCount = styled.p`
  font-size: 22px;
  font-family: "Pretendard-Bold" !important;
  font-weight: 400;
`;
