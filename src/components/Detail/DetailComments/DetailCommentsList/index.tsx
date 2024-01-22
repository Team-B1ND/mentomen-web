import { CommentType } from "@/src/types/Comment/comment.type";
import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";
import { GetDateTime } from "@/src/utils/Date/getDateTime";
import { useRecoilValue } from "recoil";
import { UserDataAtom } from "@/src/stores/User/user.store";
import { useState } from "react";
import { useOutSideClickCloseModal } from "@/src/hooks/Modal/useOutSideClickCloseModal";
import DetailCommentsInput from "../DetailCommentsInput";
import { useComment } from "@/src/hooks/Comment/useComment";
import Setting from "@/src/components/Modal/Setting";
import { DotsIcon, DotsIconContainer } from "@/src/styles/common.style";

interface Props {
  commentsData: CommentType[];
}

const DetailCommentsList = ({ commentsData }: Props) => {
  const userData = useRecoilValue(UserDataAtom);
  const [commentId, setCommentId] = useState(0);
  const [isEditComment, setIsEditComment] = useState(false);
  const [exisitComment, setExisitComment] = useState("");

  const { modalEl } = useOutSideClickCloseModal(() => setCommentId(0));
  const { handleDeleteComment } = useComment();
  const dateTime = new GetDateTime();
  const reverseCommentData = commentsData.slice(0).reverse();

  return (
    <S.Container>
      {reverseCommentData.map((item) => {
        const { grade, room, number } = item.stdInfo;
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
                      {dateTime.uploadTimeAgo(new Date(item.updateDateTime!))}
                      {dateTime.compareDate(
                        new Date(item.createDateTime),
                        new Date(item.updateDateTime!)
                      )}
                    </S.CommentUpadateTimeText>
                  </S.CommenterInfo>
                  <S.CommentText>{item.content}</S.CommentText>
                </S.CommenterInfoWrap>

                {userData?.userId === item.userId && (
                  <DotsIconContainer>
                    {commentId === item.commentId ? (
                      <Setting
                        modalEl={modalEl}
                        closeModalEvent={() => setCommentId(0)}
                        modifyEvent={() => setIsEditComment(true)}
                        deleteEvent={() =>
                          handleDeleteComment(item.commentId, item.postId)
                        }
                        customStyle={S.DotsStyle}
                      />
                    ) : (
                      <DotsIcon
                        onClick={() => {
                          setCommentId(item.commentId);
                          setExisitComment(item.content);
                          setIsEditComment(false);
                        }}
                      />
                    )}
                  </DotsIconContainer>
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
