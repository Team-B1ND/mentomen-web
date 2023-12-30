import { Portal } from "@stubee2/stubee2-rolling-ui";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { CSSObject } from "styled-components";
import profile from "../../../assets/images/aprofile.png";
import { USERID } from "../../../stores/User/user.store";
import { StdInfoType } from "../../../types/List/list.type";
import SetUp from "../Button/SetUp";
import { StudentInfo } from "../StudentInfo";
import * as S from "./style";

interface Props {
  profileUrl: string;
  stdInfo: StdInfoType;
  userName: string;
  author: number;
  postId: number;
  customStyle?: CSSObject;
}

const ListItemProfile = ({ ...attr }: Props) => {
  const userId = useRecoilValue(USERID);
  const [isActiveSetUp, setIsActiveSetUp] = useState(false);

  return (
    <>
      <S.Profile customStyle={attr.customStyle}>
        <S.UserInfo>
          <S.ProfileImg src={attr.profileUrl || profile} alt="이미지 없음" />
          <StudentInfo stdInfo={attr.stdInfo} userName={attr.userName} />
        </S.UserInfo>

        {userId === attr.author && (
          <BiDotsHorizontalRounded
            size={27}
            cursor="pointer"
            color="#000"
            onClick={() => setIsActiveSetUp(true)}
          />
        )}
      </S.Profile>

      {isActiveSetUp && (
        <Portal id="modal">
          <SetUp postId={attr.postId} setIsActiveSetUp={setIsActiveSetUp} />
        </Portal>
      )}
    </>
  );
};

export default ListItemProfile;
