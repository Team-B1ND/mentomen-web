import { ACCESS_TOKEN_KEY, DAUTH_URL } from "@/constants/Auth/auth.constant";
import { useComment } from "@/hooks/Comment/useComment";
import token from "@/lib/token/token";
import profile from "@/public/icons/user/aprofile.png";
import { UserDataAtom } from "@/stores/User/user.store";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import * as S from "./style";

const DetailCommentsInput = ({ postId }: { postId: number }) => {
  const userData = useRecoilValue(UserDataAtom);
  const { comment, setComment, handleCommentChange, handleCommentSubmit } =
    useComment();
  const [isActiveCommentInput, setIsActiveCommentInput] = useState(false);
  const accessToken = token.getCookie(ACCESS_TOKEN_KEY);

  return (
    <S.InputContainer>
      <S.MyProfileImage src={userData?.profileImage || profile} alt="프로필" />
      <S.CommentInputForm
        onSubmit={(e) =>
          handleCommentSubmit(e, postId, setIsActiveCommentInput)
        }
      >
        <S.CommentTextBox
          placeholder="댓글을 입력해주세요..."
          contentEditable={accessToken !== undefined && true}
          onInput={handleCommentChange}
          onClick={() =>
            accessToken !== undefined
              ? setIsActiveCommentInput(true)
              : (window.location.href = DAUTH_URL)
          }
        >
          {!isActiveCommentInput && comment}
        </S.CommentTextBox>

        {isActiveCommentInput && (
          <S.CommentSubmitContainer>
            <S.CancelButton
              onClick={() => {
                setComment("");
                setIsActiveCommentInput(false);
              }}
            >
              취소
            </S.CancelButton>
            <S.RegistButton sizeOfComment={comment.trim().length} type="submit">
              등록
            </S.RegistButton>
          </S.CommentSubmitContainer>
        )}
      </S.CommentInputForm>
    </S.InputContainer>
  );
};

export default DetailCommentsInput;
