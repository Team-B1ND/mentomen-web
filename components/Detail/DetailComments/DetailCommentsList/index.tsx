import { getCommentType } from "@/types/Comment/comment.type";
import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";
import { GetDateTime } from "@/util/Date/getDateTime";
import { useRecoilValue } from "recoil";
import { UserDataAtom } from "@/stores/User/user.store";
import { useState } from "react";
import DetailSetting from "./DetailSetting";
import { useOutSideClickCloseModal } from "@/hooks/Modal/useOutSideClickCloseModal";
import DetailCommentsInput from "../DetailCommentsInput";
import { useComment } from "@/hooks/Comment/useComment";

interface Props {
  commentsData: getCommentType[];
}

const DetailCommentsList = ({ commentsData }: Props) => {
  const userData = useRecoilValue(UserDataAtom);
  const [commentId, setCommentId] = useState(0);
  const [isEditComment, setIsEditComment] = useState(false);
  const [exisitComment, setExisitComment] = useState("");

  const { modalEl } = useOutSideClickCloseModal(() => setCommentId(0));
  const { handleDeleteComment } = useComment();

  return (
    <S.Container>
      {commentsData?.map((item) => {
        const { grade, room, number } = item.stdInfo;
        const commentUpdateTime = new GetDateTime(
          new Date(item.updateDateTime!)
        );
        return (
          <S.CommentsList key={item.commentId}>
            <S.ProfileImage
              src={item.profileUrl || profile}
              width={40}
              height={40}
              alt="멘토 프로필"
            />

            {isEditComment && commentId === item.commentId ? (
              <DetailCommentsInput
                postId={item.postId}
                commentId={commentId}
                exisitComment={exisitComment}
                closeCommentInput={() => setCommentId(0)}
              />
            ) : (
              <S.CommentContent>
                <S.CommenterInfoWrap>
                  <S.CommenterInfo>
                    <S.CommenterNameAndClass>
                      {`${grade}${room}${number > 10 ? number : `0${number}`} ${
                        item.userName
                      }`}
                    </S.CommenterNameAndClass>

                    <S.CommentUpadateTimeText>
                      {commentUpdateTime.uploadTimeAgo()}
                    </S.CommentUpadateTimeText>
                  </S.CommenterInfo>

                  <S.CommentText>{item.content}</S.CommentText>
                </S.CommenterInfoWrap>

                {userData?.userId === item.userId && (
                  <S.DotsIconContainer>
                    {commentId === item.commentId ? (
                      <DetailSetting
                        ref={modalEl}
                        setCommentId={setCommentId}
                        setIsEditComment={setIsEditComment}
                        handleDeleteComment={() =>
                          handleDeleteComment(item.commentId, item.postId)
                        }
                      />
                    ) : (
                      <S.DotsIcon
                        onClick={() => {
                          setCommentId(item.commentId);
                          setExisitComment(item.content);
                          setIsEditComment(false);
                        }}
                      />
                    )}
                  </S.DotsIconContainer>
                )}
              </S.CommentContent>
            )}
          </S.CommentsList>
        );
      })}
    </S.Container>
  );
};

export default DetailCommentsList;
