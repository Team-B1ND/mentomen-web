import * as S from '../style';
import aprofile from '../../.././assets/images/aprofile.png';
import { useGetComment } from '../../../querys/comment/comment.query';
import { ParamType } from '../../../types/param/param.type';
export default function DetailCommentLists({postId}:ParamType){
    const { data: getComment } = useGetComment({postId}); //댓글 불러오기
    return(
        <div>
            {getComment?.data.map((getComment) => (
            <div
              key={getComment.commentId}
              style={{ display: "flex", flexDirection: "column-reverse" }}
            >
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