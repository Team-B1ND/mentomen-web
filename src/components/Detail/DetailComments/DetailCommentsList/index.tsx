import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { UserDataAtom } from "@/src/store/User/user.store";
import { useState } from "react";
import DetailCommentsInput from "../DetailCommentsInput";
import { DotsIcon, DotsIconContainer } from "@/src/stories/styles";
import { ShowMoreContent } from "@/src/stories/ui";
import { Setting } from "@/src/stories/ui";
import { GetDateTime } from "@/src/stories/utils";
import { CommentType } from "@/src/stories/core";
import { useOutSideClickCloseModal } from "@/src/hooks/Modal";
import { useComment } from "@/src/hooks/Comment";
import { Column } from "@/src/stories/layout";

const DetailCommentsList = ({ data }: { data: CommentType[] }) => {
  const reverseCommentData = data.slice(0).reverse();
  return (
    <S.Container commentLenght={reverseCommentData.length}>
      {reverseCommentData.map((item, idx) => (
        <DetailCommentsListItem
          key={item.commentId}
          {...item}
          isLast={idx === reverseCommentData.length - 1}
        />
      ))}
    </S.Container>
  );
};

const DetailCommentsListItem = ({
  isLast,
  ...attr
}: CommentType & { isLast: boolean }) => {
  const { grade, room, number } = attr.stdInfo;

  const userData = useRecoilValue(UserDataAtom);
  const [isEditComment, setIsEditComment] = useState(false);
  const [exisitComment, setExisitComment] = useState("");
  const [isActiveSetting, setIsActiveSetting] = useState(false);

  const { modalEl } = useOutSideClickCloseModal(() =>
    setIsActiveSetting(false)
  );
  const { handleDeleteComment } = useComment();
  const dateTime = new GetDateTime();

  return (
    <S.CommentsList key={attr.commentId} isLast={isLast}>
      <S.ProfileImage
        src={attr.profileUrl || profile}
        width={40}
        height={40}
        alt="멘토 프로필"
      />

      {isEditComment && isActiveSetting ? (
        <DetailCommentsInput
          postId={attr.postId}
          commentId={attr.commentId}
          exisitComment={exisitComment}
          closeCommentInput={() => setIsActiveSetting(false)}
        />
      ) : (
        <S.CommentContent>
          <S.CommenterInfoWrap>
            <S.CommenterInfo>
              <div>
                <S.CommenterName>{attr.userName}</S.CommenterName>
                <S.CommentUpadateTimeText>
                  {dateTime.uploadTimeAgo(new Date(attr.updateDateTime!))}
                  {dateTime.compareDate(
                    new Date(attr.createDateTime),
                    new Date(attr.updateDateTime!)
                  )}
                </S.CommentUpadateTimeText>
              </div>

              <S.CommenterClassInfo>
                {grade}학년 {room}반 {number}번
              </S.CommenterClassInfo>
            </S.CommenterInfo>

            <ShowMoreContent content={attr.content} maxHeight={55} />
          </S.CommenterInfoWrap>

          <DotsIconContainer>
            {userData?.userId === attr.userId && (
              <>
                {isActiveSetting ? (
                  <>
                    <DotsIcon />
                    <Setting
                      modalEl={modalEl}
                      closeModalEvent={() => setIsActiveSetting(false)}
                      modifyEvent={() => setIsEditComment(true)}
                      deleteEvent={() =>
                        handleDeleteComment(attr.commentId, attr.postId)
                      }
                      customStyle={S.SettingStyle}
                    />
                  </>
                ) : (
                  <DotsIcon
                    onClick={() => {
                      setExisitComment(attr.content);
                      isEditComment && setIsEditComment(false);
                      setIsActiveSetting(true);
                    }}
                  />
                )}
              </>
            )}
          </DotsIconContainer>
        </S.CommentContent>
      )}
    </S.CommentsList>
  );
};

export default DetailCommentsList;
