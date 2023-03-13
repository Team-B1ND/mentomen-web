import * as S from "../style";
import { useDetailCommentWrite } from "../../../hooks/detail/DetailComment/useDetailCommentWrite";

interface Props{
  postId:number;
}

export default function DetailCommentWrite({ postId }: Props) {
  const { onClick, onKeyPress, comment, onChange } = useDetailCommentWrite({
    postId,
  });
  return (
    <>
      <S.DetailComment
        autoComplete="off"
        value={comment}
        onChange={onChange}
        placeholder="댓글을 입력해주세요"
        onKeyPress={onKeyPress}
        type='text'
      />
      <S.DetailCommentSubmitContainer>
        <S.DetailCommentSubmit onClick={onClick} />
      </S.DetailCommentSubmitContainer>
    </>
  );
}
