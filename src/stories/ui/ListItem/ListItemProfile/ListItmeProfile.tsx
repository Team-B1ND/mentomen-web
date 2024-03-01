import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/src/store/Post/post.store";
import { useState } from "react";
import styled, { CSSObject } from "styled-components";
import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import { PostItemType } from "@/src/stories/core";
import { GetTag } from "@/src/stories/utils";
import { Setting } from "../../Setting";
import { DotsIcon, DotsIconContainer } from "@/src/stories/styles";
import { useOutSideClickCloseModal } from "@/src/hooks/Modal";
import { useRegistPost } from "@/src/hooks/RequestMentor";

export const ListItemProfile = ({ ...attr }: PostItemType) => {
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
    <Profile>
      <TagIcon src={new GetTag().getTagIcon(attr.tag)} alt="태그" />

      <UserInfo>
        <StudentInfoWrap>
          <StudentName>{attr.userName}</StudentName>
          <GradeClassNumber>
            {grade}학년 {room}반 {number}번
          </GradeClassNumber>
        </StudentInfoWrap>
        {asPath === "/mypage" && (
          <DotsIconContainer style={{ width: "23px" }}>
            <>
              {isActiveSetting ? (
                <>
                  <DotsIcon customstyle={DotsStyle} />
                  <Setting
                    modalEl={modalEl}
                    closeModalEvent={() => setIsActiveSetting(false)}
                    modifyEvent={() => {
                      setExistingPostData(attr);
                      router.push("/request-mentor/modify");
                    }}
                    deleteEvent={() => handleDeletePostClick(attr.postId)}
                    customStyle={SettingStyle}
                  />
                </>
              ) : (
                <DotsIcon
                  customstyle={DotsStyle}
                  onClick={() => setIsActiveSetting((prev) => !prev)}
                />
              )}
            </>
          </DotsIconContainer>
        )}
      </UserInfo>
    </Profile>
  );
};

const Profile = styled.div`
  width: 100%;

  ${Flex({
    alignItems: "flex-start",
    justifyContent: "space-between",
    columnGap: "4px",
  })}
`;

const TagIcon = styled(Image)`
  width: 32px;
  height: 42px;
`;

const UserInfo = styled.div`
  width: calc(100% - 40px);
  padding-top: 7px;
  ${Flex({
    alignItems: "center",
    columnGap: "10px",
    justifyContent: "space-between",
  })};
`;

const StudentInfoWrap = styled.div`
  ${Flex({ flexDirection: "column", rowGap: "4px" })}
`;

const StudentName = styled.p`
  font-size: 16px;
`;

const GradeClassNumber = styled.p`
  color: #858585;
  font-size: 13px;
`;

export const StudentInfoContainer = styled.div`
  font-family: "Pretendard-Bold" !important;
  font-weight: 700;
  font-size: 15px;
  ${Flex({ alignItems: "center", columnGap: "3px" })}
`;

const SettingStyle: CSSObject = {
  top: "26px",
  left: "9px",
};

const DotsStyle: CSSObject = {
  width: "21px",
  height: "21px",
  padding: "3px",
  marginLeft: "2px",
};
