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
import aprofile from "../../../assets/images/aprofile.png";
import { FILEDITEM } from "../../../constants/filed/filed";
import copy from "../../../assets/images/copy.svg";
import { useNavigate } from "react-router-dom";

const ProfileBar = () => {
  const { data } = useGetMember();
  const navigate = useNavigate();

  return (
    <ProfileBarContainer>
      <UserInfo>
        <UserProfile
          src={data?.data.profileImage ? data?.data.profileImage : aprofile}
        />
        {data?.data ? (
          <div>
            <UserName>{data?.data.name}</UserName>
            <UserGrade>{`${data?.data.stdInfo.grade}학년 ${data?.data.stdInfo.room}반 ${data?.data.stdInfo.number}번`}</UserGrade>
          </div>
        ) : (
          <div>학생정보가 없습니다.</div>
        )}
      </UserInfo>
      <FiledContainer>
        {FILEDITEM.map((item) => (
          <div
            key={item.color}
            onClick={() => navigate(`/${item.title}`)}
            style={{ cursor: "pointer" }}
          >
            <FiledItemWrap>
              <FiledImg src={item.image} />
              <FiledName>{item.title}</FiledName>
            </FiledItemWrap>
          </div>
        ))}
      </FiledContainer>
      <MyInfoPathContainer>
        <MyInfoPathImg src={copy} />
        <MyInfoPathText onClick={() => navigate("/mypage")}>
          내가 쓴 멘토 요청글
        </MyInfoPathText>
      </MyInfoPathContainer>
      <LogoutText>로그아웃</LogoutText>
    </ProfileBarContainer>
  );
};

export default ProfileBar;
