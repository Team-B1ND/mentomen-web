import React from "react";
import { useGetMember } from "../../../querys/member/member.query";
import {
  FiledContainer,
  FiledImg,
  FiledItemWrap,
  FiledName,
  LogoutText,
  MyInfoPathContainer,
  MyInfoPathImg,
  MyInfoPathText,
  ProfileBarContainer,
  UserGrade,
  UserInfo,
  UserName,
  UserProfile,
} from "./style";
import Lover from "../../../assets/images/haerin.jpeg";
import { FILEDITEM } from "../../../constants/filed/filed";
import copy from "../../../assets/images/copy.svg";
const ProfileBar = () => {
  const { data } = useGetMember();

  return (
    <ProfileBarContainer>
      <UserInfo>
        <UserProfile
          src={data?.data.profileImage ? data?.data.profileImage : Lover}
        />
        <UserName>{data?.data.name}</UserName>
        <UserGrade>{`${data?.data.stdInfo.grade}년 ${data?.data.stdInfo.room}반 ${data?.data.stdInfo.number}번`}</UserGrade>
      </UserInfo>
      <FiledContainer>
        {FILEDITEM.map((item) => (
          <>
            <FiledItemWrap>
              <FiledImg src={item.image} />
              <FiledName>{item.title}</FiledName>
            </FiledItemWrap>
          </>
        ))}
      </FiledContainer>
      <MyInfoPathContainer>
        <MyInfoPathImg src={copy} />
        <MyInfoPathText>내가 쓴 멘토 요청글</MyInfoPathText>
      </MyInfoPathContainer>
      <LogoutText>로그아웃</LogoutText>
    </ProfileBarContainer>
  );
};

export default ProfileBar;
