import { useGetCommentQuery } from "@/queries/Comment/comment.query";
import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";

interface Props {
  postId: number;
  profileUrl: string;
}

const DetailComments = ({ postId, profileUrl }: Props) => {
  const { data: commentsData } = useGetCommentQuery(postId, { suspense: true });
  return (
    <S.Container>
      <S.NumberOfComments>
        댓글 {commentsData?.data.length}개
      </S.NumberOfComments>
    </S.Container>
  );
};

export default DetailComments;
