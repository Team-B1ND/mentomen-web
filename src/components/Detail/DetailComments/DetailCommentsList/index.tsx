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
import ShowMoreContent from "@/src/components/common/ShowMoreContent";

const DetailCommentsList = ({ data }: { data: CommentType[] }) => {
  const reverseCommentData = data.slice(0).reverse();
  return (
    <S.Container>
      {reverseCommentData.map((item) => (
        <DetailCommentsListItem key={item.commentId} {...item} />
      ))}
    </S.Container>
  );
};

const DetailCommentsListItem = ({ ...attr }: CommentType) => {
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
    <S.CommentsList key={attr.commentId}>
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
              <S.CommenterNameAndClass>
                {`${grade}${room}${number > 10 ? number : `0${number}`} ${
                  attr.userName
                }`}
              </S.CommenterNameAndClass>
              <S.CommentUpadateTimeText>
                {dateTime.uploadTimeAgo(new Date(attr.updateDateTime!))}
                {dateTime.compareDate(
                  new Date(attr.createDateTime),
                  new Date(attr.updateDateTime!)
                )}
              </S.CommentUpadateTimeText>
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
