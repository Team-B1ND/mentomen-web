import React from "react";
import {
  ListProfileContainer,
  MainProfile,
  MainTag,
  MainUserGrade,
  MainUserInfo,
  MainUserName,
} from "./listProfile.style";

function ListProfile() {
  return (
    <ListProfileContainer>
      <MainUserInfo>
        <MainProfile />
        <MainUserInfo>
          <MainUserName>백승하</MainUserName>
          <MainUserGrade>1학년 3반 10번 백승하</MainUserGrade>
        </MainUserInfo>
      </MainUserInfo>
      <MainTag>
        <Line>
          <img />
        </Line>
      </MainTag>
    </ListProfileContainer>
  );
}

export default ListProfile;
