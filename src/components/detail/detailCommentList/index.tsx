import * as S from "../style";
import aprofile from "../../.././assets/images/aprofile.png";
import { useGetComment } from "../../../querys/comment/comment.query";
import React, { useState } from "react";
import { USERID } from "../../../recoil/user/UserAtom";
import { useRecoilState } from "recoil";
import {
  CommentContent,
  CommentEdit,
  CommentModal,
  CommentId,
  ContentPrev,
} from "../../../recoil/detail/DetailAtom";

interface Props {
  postId: number;
}

function DetailCommentLists({ postId }: Props) {
  const { data: getComment } = useGetComment({ postId }, { suspense: true }); //댓글 불러오기
  const [userId, SetUserId] = useRecoilState<number>(USERID);
  const [commentModal, SetCommentModal] = useRecoilState<boolean>(CommentModal);
  const [commentId, SetCommentId] = useRecoilState<number>(CommentId);
  const [contentPrev, SetContentPrev] = useRecoilState<string>(ContentPrev);
  const [commentEdit, SetCommentEdit] = useRecoilState<boolean>(CommentEdit);

  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {getComment?.data.map((getComment) => (
        <div key={getComment.commentId}>
          <S.DetailCommentsContainer>
            <S.DetailCommentProfileContainer>
              <S.DetailCommentProfileImg
                src={getComment.profileUrl ? getComment.profileUrl : aprofile}
              />
              <S.DetailCommentProfileName>
                {getComment.userName}
              </S.DetailCommentProfileName>
            </S.DetailCommentProfileContainer>
            <S.DetailCommentAnswer>{getComment.content}</S.DetailCommentAnswer>
            <div>
              {userId === getComment.userId ? (
                <>
                  {commentEdit && contentPrev === getComment.content ? (
                    <S.DetailCommentEditCancel
                      onClick={() => SetCommentEdit(!commentEdit)}
                    >
                      취소
                    </S.DetailCommentEditCancel>
                  ) : (
                    <S.DetailCommentMoreBtn
                      onClick={() => {
                        SetCommentModal(!commentModal);
                        //수정을 위한 commentId와 content를 상태관리로 저장
                        SetCommentId(getComment.commentId);
                        SetContentPrev(getComment.content);
                      }}
                    />
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </S.DetailCommentsContainer>
        </div>
      ))}
    </div>
  );
}

export default React.memo(DetailCommentLists);
