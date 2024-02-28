import * as S from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserDataAtom } from "@/src/store/User/user.store";
import { useState } from "react";
import { ExistingPostDataAtom } from "@/src/store/Post/post.store";
import { useRouter } from "next/router";
import { DotsIcon, DotsIconContainer, PostItemType } from "@/src/stories/core";
import { useOutSideClickCloseModal, useRegistPost } from "@/src/stories/hooks";
import { Setting } from "@/src/stories/ui";
import { GetDateTime, GoogleAnalyzer } from "@/src/stories/utils";

const DetailMenteeInfo = ({ ...attr }: PostItemType) => {
  const setExistingPostData = useSetRecoilState(ExistingPostDataAtom);
  const [isActiveSetting, setIsActiveSetting] = useState(false);
  const { modalEl } = useOutSideClickCloseModal(() =>
    setIsActiveSetting(false)
  );

  const { handleDeletePostClick } = useRegistPost();
  const router = useRouter();
  const pageView = new GoogleAnalyzer().pageView;

  const { grade, room, number } = attr.stdInfo;
  const userData = useRecoilValue(UserDataAtom);
  const getDate = new GetDateTime();
  const updatePostStatus = attr.updateStatus;

  return (
    <S.Container>
      <S.ProfileBox>
        <S.MenteeInfo>
          <div>
            <S.MenteeName>{attr.userName}</S.MenteeName>
            <S.UploadPostTime>
              {getDate.uploadTimeAgo(new Date(attr.updateDateTime))}
              {updatePostStatus === "UPDATE" && " (수정됨)"}
            </S.UploadPostTime>
          </div>
          <S.ClassInfo>
            {grade}학년 {room}반 {number}번
          </S.ClassInfo>
        </S.MenteeInfo>
      </S.ProfileBox>

      {userData?.userId === attr.author && (
        <DotsIconContainer>
          <>
            {isActiveSetting ? (
              <>
                <DotsIcon />
                <Setting
                  modalEl={modalEl}
                  closeModalEvent={() => {
                    setIsActiveSetting(false);
                  }}
                  modifyEvent={() => {
                    setExistingPostData(attr);
                    pageView(`/request-mentor/modify`);
                    router.push("/request-mentor/modify");
                  }}
                  deleteEvent={() => handleDeletePostClick(attr.postId)}
                />
              </>
            ) : (
              <DotsIcon
                onClick={() => {
                  setIsActiveSetting((prev) => !prev);
                }}
              />
            )}
          </>
        </DotsIconContainer>
      )}
    </S.Container>
  );
};

export default DetailMenteeInfo;
