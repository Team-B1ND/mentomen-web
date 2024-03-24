import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import token from "@/src/libs/token/token";
import profile from "@/public/icons/user/aprofile.png";
import { UserDataAtom } from "@/src/store/User/user.store";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import { redirectToDAuthLogin } from "@/src/stories/utils";
import { useComment } from "@/src/hooks/Comment";
import { useClipboardPaste } from "@/src/hooks/ClipboardPaste";

interface Props {
  postId: number;
  commentId?: number;
  exisitComment?: string;
  closeCommentInput?: () => void;
}

const DetailCommentsInput = ({ ...attr }: Props) => {
  const userData = useRecoilValue(UserDataAtom);
  const { ...hooks } = useComment(attr.exisitComment!);
  const { handlePasteFromClipboard } = useClipboardPaste();
  const [isActiveCommentInput, setIsActiveCommentInput] = useState(false);
  const accessToken = token.getCookie(ACCESS_TOKEN_KEY);

  useEffect(() => {
    // commentId가 있으면 댓글 수정
    if (attr.commentId) {
      // 댓글 수정이면 인풋이 렌더링될때 바로 취소, 등록 버튼이 활성화 할 수 있도록 한다.
      setIsActiveCommentInput(true);
    }
  }, [attr.commentId]);

  return (
    <S.InputContainer>
      {!attr.commentId && (
        <S.MyProfileImage
          src={userData?.profileImage || profile}
          width={40}
          height={40}
          alt="프로필"
        />
      )}
      <S.CommentInputForm>
        {!hooks.isSubmitComment && (
          <>
            <S.CommentTextInput
              placeholder={
                attr.commentId
                  ? "댓글을 수정해 주세요..."
                  : "댓글을 입력해 주세요..."
              }
              contentEditable={
                accessToken !== undefined || attr.commentId ? true : false
              }
              onInput={hooks.handleCommentChange}
              onPaste={handlePasteFromClipboard}
              onClick={() =>
                accessToken !== undefined
                  ? setIsActiveCommentInput(true)
                  : redirectToDAuthLogin()
              }
              suppressContentEditableWarning
            >
              {attr.commentId && attr.exisitComment}
            </S.CommentTextInput>

            {isActiveCommentInput && (
              <S.CommentSubmitContainer>
                <S.CancelButton
                  onClick={() => {
                    hooks.setComment("");
                    setIsActiveCommentInput(false);
                    hooks.handleRenderCommentInput();
                    // 댓글 수정할려다가 취소해서 댓글인풋 비활성화 하기 위해
                    attr.closeCommentInput && attr.closeCommentInput();
                  }}
                >
                  취소
                </S.CancelButton>
                <S.RegistButton
                  isSameComment={attr.exisitComment === hooks.comment.trim()}
                  onClick={(e) => {
                    hooks.handleCommentSubmit(
                      e,
                      attr.postId,
                      setIsActiveCommentInput,
                      // 댓글 수정에 필요한 매개변수
                      attr.commentId,
                      attr.closeCommentInput // 댓글을 작성하면 댓글인풋을 비활성화 해야함
                    );
                  }}
                  lengthOfComment={hooks.comment.trim().length}
                >
                  {attr.commentId ? "수정" : "등록"}
                </S.RegistButton>
              </S.CommentSubmitContainer>
            )}
          </>
        )}
      </S.CommentInputForm>
    </S.InputContainer>
  );
};

export default DetailCommentsInput;
