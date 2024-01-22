import { PostItemType } from "@/src/types/Post/post.type";
import profile from "@/public/icons/user/aprofile.png";
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

const DetailProfile = ({ ...attr }: PostItemType) => {
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
        <S.ProfileImage
          src={attr.profileUrl || profile}
          width={45}
          height={45}
          alt="프로필"
        />

        <S.PosterInfo>
          <div>
            <S.PosterName>{attr.userName}</S.PosterName>
            <S.UploadPostTime>
              {getDate.uploadTimeAgo(new Date(attr.updateDateTime))}
              {updatePostStatus === "UPDATE" && " (수정됨)"}
            </S.UploadPostTime>
          </div>
          <S.ClassInfo>
            {grade}학년 {room}반 {number}번
          </S.ClassInfo>
        </S.PosterInfo>
      </S.ProfileBox>

      {userData?.userId === attr.author && (
        <DotsIconContainer>
          {isActiveSetting ? (
            <Setting
              modalEl={modalEl}
              closeModalEvent={() => setIsActiveSetting(false)}
              modifyEvent={() => {
                setExistingPostData(attr);
                router.push("/request-mentor/modify");
              }}
              deleteEvent={() => handleDeletePostClick(attr.postId)}
            />
          ) : (
            <DotsIcon onClick={() => setIsActiveSetting(true)} />
          )}
        </DotsIconContainer>
      )}
    </S.Container>
  );
};

export default DetailProfile;
