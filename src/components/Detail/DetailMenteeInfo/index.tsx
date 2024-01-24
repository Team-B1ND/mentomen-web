import { PostItemType } from "@/src/types/Post/post.type";
import * as S from "./style";
import { GetDateTime } from "@/src/utils/Date/getDateTime";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserDataAtom } from "@/src/stores/User/user.store";
import { useState } from "react";
import Setting from "../../Modal/Setting";
import { useRegistPost } from "@/src/hooks/RequestMentor/useRegistPost";
import { ExistingPostDataAtom } from "@/src/stores/Post/post.store";
import { useRouter } from "next/router";
import { useOutSideClickCloseModal } from "@/src/hooks/Modal/useOutSideClickCloseModal";
import { DotsIcon, DotsIconContainer } from "@/src/styles/common.style";

const DetailMenteeInfo = ({ ...attr }: PostItemType) => {
  const setExistingPostData = useSetRecoilState(ExistingPostDataAtom);
  const [isActiveSetting, setIsActiveSetting] = useState(false);
  const { modalEl } = useOutSideClickCloseModal(() =>
    setIsActiveSetting(false)
  );

  const { handleDeletePostClick } = useRegistPost();
  const router = useRouter();

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
          {isActiveSetting && <DotsIcon />}
          {isActiveSetting ? (
            <Setting
              modalEl={modalEl}
              closeModalEvent={() => {
                setIsActiveSetting(false);
              }}
              modifyEvent={() => {
                setExistingPostData(attr);
                router.push("/request-mentor/modify");
              }}
              deleteEvent={() => handleDeletePostClick(attr.postId)}
            />
          ) : (
            <DotsIcon
              onClick={() => {
                setIsActiveSetting((prev) => !prev);
              }}
            />
          )}
        </DotsIconContainer>
      )}
    </S.Container>
  );
};

export default DetailMenteeInfo;
