import * as S from "../style";
import { useDetailCommentWrite } from "../../../hooks/Detail/DetailComment/useDetailCommentWrite";
import { CommentEdit, CommentId } from "../../../recoil/Detail/DetailAtom";
import { useRecoilState } from "recoil";
import { useDeleteCommentEdit } from "../../../hooks/Detail/DetailComment/useDetailCommentEdit";
interface Props {
  postId: number;
}

export default function DetailCommentWrite({ postId }: Props) {
  const [commentEdit, SetCommentEdit] = useRecoilState<boolean>(CommentEdit);
  const { onRegisterClick, onRegisterKeyPress, comment, onRegisterChange } =
    useDetailCommentWrite(postId);
  const [commentId, SetCommentId] = useRecoilState<number>(CommentId);
  const { onEditChange, commentEditContent, onEditClick, onEditKeyPress } =
    useDeleteCommentEdit(commentId);
  return (
    <>
      {commentEdit ? (
        <S.DetailCommentEdit
          autoComplete="off"
          value={commentEditContent}
          onChange={onEditChange}
          placeholder="댓글을 수정해주세요"
          onKeyPress={onEditKeyPress}
          type="text"
        />
      ) : (
        <S.DetailComment
          autoComplete="off"
          value={comment}
          onChange={onRegisterChange}
          placeholder="댓글을 입력해주세요"
          onKeyPress={onRegisterKeyPress}
          type="text"
        />
      )}
      <S.DetailCommentSubmitContainer>
        {commentEdit ? (
          <S.DetailCommentSubmit onClick={onEditClick} />
        ) : (
          <S.DetailCommentSubmit onClick={onRegisterClick} />
        )}
      </S.DetailCommentSubmitContainer>
    </>
  );
}
