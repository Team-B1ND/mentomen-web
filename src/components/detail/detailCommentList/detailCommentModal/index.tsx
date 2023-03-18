import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useDetailCommentDelete } from "../../../../hooks/detail/detailComment/useDetailCommentDelete";
import {
  CommentEdit,
  CommentModal,
  CommentId,
  CommentContent,
  ContentPrev,
} from "../../../../recoil/detail/DetailAtom";
import * as S from "./style";
export default function DetailCommentModal() {
  const [commentModal, SetCommentModal] = useRecoilState<boolean>(CommentModal);
  const [commentId, SetCommentId] = useRecoilState<number>(CommentId);
  const [commentEdit, SetCommentEdit] = useRecoilState(CommentEdit);
  const { onCommentDelete } = useDetailCommentDelete();
  const [contentPrev, SetContentPrev] = useRecoilState<string>(ContentPrev);
  const [commentContent, SetCommentContent] =
    useRecoilState<string>(CommentContent);
  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <S.CommentModalContainer
      onClick={() => {
        SetCommentModal(!commentModal);
        SetCommentEdit(false);
      }}
    >
      <S.CommentModalLayOut onClick={(e) => e.stopPropagation()}>
        <S.CommentDeleteContainer>
          <S.CommentDelete onClick={() => onCommentDelete(commentId)}>
            삭제하기
          </S.CommentDelete>
        </S.CommentDeleteContainer>
        <S.CommentModalLine />
        <S.CommentModifyContainer>
          <S.CommentModify
            onClick={() => {
              SetCommentModal(!commentModal);
              SetCommentEdit(true);
              SetCommentContent(contentPrev);
            }}
          >
            수정하기
          </S.CommentModify>
        </S.CommentModifyContainer>
      </S.CommentModalLayOut>
    </S.CommentModalContainer>
  );
}
