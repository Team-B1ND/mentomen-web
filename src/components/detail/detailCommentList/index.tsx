import * as S from "../style";
import aprofile from "../../.././assets/images/aprofile.png";
import { useGetComment } from "../../../querys/comment/comment.query";
import React from "react";
import { useCommentModify } from "../../../hooks/detail/DetailComment/useDetailModify";
import { USERID } from "../../../recoil/user/UserAtom";
import { useRecoilState } from "recoil";

interface Props {
  postId: number;
}

function DetailCommentLists({ postId }: Props) {
  const { data: getComment } = useGetComment({ postId }); //댓글 불러오기
  const { onCommentDelete } = useCommentModify();
  const [userId, SetUserId] = useRecoilState(USERID);

  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {getComment?.data.map((getComment) => (
        <div key={getComment.commentId}>
          <S.DetailCommentsContainer>
            <S.DetailCommentProfileContainer>
              <S.DetailCommentProfileImg src={aprofile} />
              <S.DetailCommentProfileName>
                {getComment.userName}
              </S.DetailCommentProfileName>
            </S.DetailCommentProfileContainer>

            <S.DetailCommentAnswer>{getComment.content}</S.DetailCommentAnswer>

            <S.DetailCommentBtnContainer>
              {userId === getComment.userId ? (
                <S.DetailCommentMoreBtn
                  onClick={() => onCommentDelete(getComment.commentId)}
                />
              ) : (
                ""
              )}
            </S.DetailCommentBtnContainer>
          </S.DetailCommentsContainer>
        </div>
      ))}
    </div>
  );
}

export default React.memo(DetailCommentLists);
