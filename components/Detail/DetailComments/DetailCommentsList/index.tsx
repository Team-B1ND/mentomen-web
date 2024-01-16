import { getCommentType } from "@/types/Comment/comment.type";
import * as S from "./style";

interface Props {
  commentsData: getCommentType[];
}

const DetailCommentsList = ({ commentsData }: Props) => {
  return (
    <S.Container>
      {commentsData?.map((item) => (
        <li key={item.commentId}>{item.content}</li>
      ))}
    </S.Container>
  );
};

export default DetailCommentsList;
