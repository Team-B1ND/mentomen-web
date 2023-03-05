import * as S from '../style';
import aprofile from '../../.././assets/images/aprofile.png';
import { useGetComment } from '../../../querys/comment/comment.query';
import React from 'react';

interface Props{
  postId:number;
}

function DetailCommentLists({postId}:Props){
    const { data: getComment } = useGetComment({postId}); //댓글 불러오기
    return(
        <div style={{ display: "flex", flexDirection: "column" }}>
            {getComment?.data.map((getComment) => (
            <div key={getComment.commentId}>
              <S.DetailCommentsContainer>
                <S.DetailCommentProfileContainer>
                  <S.DetailCommentProfileImg src={aprofile} />
                  <S.DetailCommentProfileName>
                    {getComment.userName}
                  </S.DetailCommentProfileName>
                </S.DetailCommentProfileContainer>

                <S.DetailCommentAnswer>
                  {getComment.content}
                </S.DetailCommentAnswer>
              </S.DetailCommentsContainer>
            </div>
          ))}
        </div>
    );
}

export default React.memo(DetailCommentLists);