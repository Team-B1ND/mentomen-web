import React from "react";
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
function ListProfile() {
  return (
    <ListProfileContainer>
      <MainUserInfo>
        <MainProfile src={aprofile} />
        <MainUserName>백승하</MainUserName>
        <MainUserGrade>1학년 3반 10번</MainUserGrade>
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
        <PathText>내가 쓴 멘토 요청글</PathText>
      </PathContainer>
      <LogOutText>로그아웃</LogOutText>
    </ListProfileContainer>
  );
}

export default ListProfile;
