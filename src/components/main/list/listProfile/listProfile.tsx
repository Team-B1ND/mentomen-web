import React, { useEffect } from "react";
import { FILED } from "../../../../constants/filed/filed";
import {
  FieldLine,
  ListProfileContainer,
  LogOutText,
  MainProfile,
  MainTag,
  MainUserGrade,
  MainUserInfo,
  MainUserName,
  PathContainer,
  PathMyList,
  PathText,
} from "./listProfile.style";
import aprofile from "../../../../assets/images/aprofile.png";
import copy from "../../../../assets/images/copy.png";
import { useGetMember } from "../../../../querys/member/member.query";
import {
  ACCESS_KEY,
  REFRESH_KEY,
} from "../../../../constants/auth/auth.constant";
import { useNavigate } from "react-router-dom";

function ListProfile() {
  const { data } = useGetMember();
  const navigate = useNavigate();
  return (
    <ListProfileContainer>
      <MainUserInfo>
        <MainProfile src={aprofile} />
        <MainUserName>{data?.data.name}</MainUserName>
        <MainUserGrade>{`${data?.data.stdInfo.grade}학년 ${data?.data.stdInfo.room}반 ${data?.data.stdInfo.number}번`}</MainUserGrade>
      </MainUserInfo>
      <MainTag>
        {FILED.map((item) => (
          <FieldLine>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </FieldLine>
        ))}
      </MainTag>
      <PathContainer>
        <PathMyList src={copy} alt="" />
        <PathText onClick={() => navigate("/myprofile")}>
          내가 쓴 멘토 요청글
        </PathText>
      </PathContainer>
      <LogOutText
        onClick={() => {
          localStorage.removeItem(ACCESS_KEY);
          localStorage.removeItem(REFRESH_KEY);
          navigate("/");
          window.location.reload();
        }}
      >
        로그아웃
      </LogOutText>
    </ListProfileContainer>
  );
}

export default ListProfile;
