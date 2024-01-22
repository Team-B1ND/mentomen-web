import { PostItemType } from "@/src/types/Post/post.type";
import * as S from "./style";
import getTag from "@/src/utils/Tag/getTag";
import { useRouter } from "next/router";
import { DotsIcon, DotsIconContainer } from "@/src/styles/common.style";
import { useSetRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/src/stores/Post/post.store";
import { useState } from "react";
import { useOutSideClickCloseModal } from "@/src/hooks/Modal/useOutSideClickCloseModal";
import { useRegistPost } from "@/src/hooks/RequestMentor/useRegistPost";
import Setting from "@/src/components/Modal/Setting";

const ListItemProfile = ({ ...attr }: PostItemType) => {
  const router = useRouter();
  const { asPath } = router;
  const { grade, room, number } = attr.stdInfo;

  const setExistingPostData = useSetRecoilState(ExistingPostDataAtom);
  const [isActiveSetting, setIsActiveSetting] = useState(false);
  const { modalEl } = useOutSideClickCloseModal(() =>
    setIsActiveSetting(false)
  );
  const { handleDeletePostClick } = useRegistPost();

  return (
    <S.Profile>
      <S.TagIcon src={getTag.getTagIcon(attr.tag)} alt="태그" />

      <S.UserInfo>
        <S.StudentInfoWrap>
          <S.StudentName>{attr.userName}</S.StudentName>
          <S.GradeClassNumber>
            {grade}학년 {room}반 {number}번
          </S.GradeClassNumber>
        </S.StudentInfoWrap>

        {asPath === "/mypage" && (
          <DotsIconContainer style={{ width: "23px" }}>
            {isActiveSetting ? (
              <Setting
                modalEl={modalEl}
                closeModalEvent={() => setIsActiveSetting(false)}
                modifyEvent={() => {
                  setExistingPostData(attr);
                  router.push("/request-mentor/modify");
                }}
                deleteEvent={() => handleDeletePostClick(attr.postId)}
                customStyle={S.SettingStyle}
              />
            ) : (
              <DotsIcon
                customstyle={S.DotsStyle}
                onClick={() => setIsActiveSetting(true)}
              />
            )}
          </DotsIconContainer>
        )}
      </S.UserInfo>
    </S.Profile>
  );
};

export default ListItemProfile;
