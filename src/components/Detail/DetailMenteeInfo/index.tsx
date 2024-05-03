import * as S from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserDataAtom } from "@/src/store/User/user.store";
import { useState } from "react";
import { ExistingPostDataAtom } from "@/src/store/Post/post.store";
import { useRouter } from "next/router";
import { PostItemType } from "@/src/stories/core";
import { Setting } from "@/src/stories/ui";
import { GetDateTime, GoogleAnalyzer } from "@/src/stories/utils";
import { DotsIcon, DotsIconContainer } from "@/src/stories/styles";
import { useOutSideClickCloseModal } from "@/src/hooks/Modal";
import { useRegistPost } from "@/src/hooks/RequestMentor";
import { Column, Row } from "@/src/stories/layout";
import { css } from "styled-components";

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
    <Row $width={"100%"} $height={"45px"} $justifyContent={"space-between"}>
      <Row $alignItems={"center"} $columnGap={"18px"}>
        <Column $rowGap={"5px"}>
          <Row
            $alignItems={"flex-end"}
            $columnGap={"6px"}
            $customStyle={css`
              font-size: 15px;
            `}
          >
            <S.MenteeName>{attr.userName}</S.MenteeName>
            <S.UploadPostTime>
              {getDate.uploadTimeAgo(new Date(attr.updateDateTime))}
              {updatePostStatus === "UPDATE" && " (수정됨)"}
            </S.UploadPostTime>
          </Row>
          <S.ClassInfo>
            {grade}학년 {room}반 {number}번
          </S.ClassInfo>
        </Column>
      </Row>

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
    </Row>
  );
};

export default DetailMenteeInfo;
