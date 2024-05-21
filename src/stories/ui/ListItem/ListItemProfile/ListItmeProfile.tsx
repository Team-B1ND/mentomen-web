import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { ExistingPostDataAtom } from "@/src/store/Post/post.store";
import { useState } from "react";
import styled, { css, CSSObject } from "styled-components";
import { Column, Row } from "@/src/stories/layout";
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
    <Row
      $width={"100%"}
      $alignItems={"flex-start"}
      $justifyContent={"space-between"}
      $columnGap={"4px"}
    >
      <TagIcon src={new GetTag().getTagIcon(attr.tag)} alt="태그" />

      <Row
        $alignItems={"center"}
        $columnGap={"10px"}
        $justifyContent={"space-between"}
        $padding={"7px 0 0 0"}
        $customStyle={css`
          width: calc(100% - 40px);
        `}
      >
        <Column $rowGap={"4px"}>
          <StudentName>{attr.userName}</StudentName>
          <GradeClassNumber>
            {grade}학년 {room}반 {number}번
          </GradeClassNumber>
        </Column>
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
                      router.push(`/detail/${attr.postId}/modify`);
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
      </Row>
    </Row>
  );
};

const TagIcon = styled(Image)`
  width: 32px;
  height: 42px;
`;

const StudentName = styled.p`
  font-size: 16px;
`;

const GradeClassNumber = styled.p`
  color: #858585;
  font-size: 13px;
`;

const SettingStyle: CSSObject = {
  top: "26px",
  left: "9px",
};

const DotsStyle: CSSObject = {
  width: "23px",
  height: "23px",
  padding: "3px",
  marginLeft: "2px",
};
