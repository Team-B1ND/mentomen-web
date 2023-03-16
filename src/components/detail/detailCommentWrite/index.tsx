import * as S from "../style";
import { useDetailCommentWrite } from "../../../hooks/detail/detailComment/useDetailCommentWrite";
import { CommentEdit, CommentPostId } from "../../../recoil/detail/DetailAtom";
import { useRecoilState } from "recoil";
import { useDeleteCommentEdit } from "../../../hooks/detail/detailComment/useDetailCommentEdit";

interface Props {
  postId: number;
}

export default function DetailCommentWrite({ postId }: Props) {
  const [commentEdit, SetCommentEdit] = useRecoilState<boolean>(CommentEdit);
  const { onRegisterClick, onRegisterKeyPress, comment, onRegisterChange } =useDetailCommentWrite(postId);
  const [commentPostId, SetCommentPostId] = useRecoilState<number>(CommentPostId);
  const { onEditChange, commentEditContent, onEditClick, onEditKeyPress } = useDeleteCommentEdit(commentPostId);
  return (
    <>
      {commentEdit ? (
        <S.DetailCommentEdit
          autoComplete="off"
          value={commentEditContent}
          onChange={onEditChange}
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
