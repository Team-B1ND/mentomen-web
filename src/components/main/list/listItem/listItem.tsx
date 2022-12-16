import React, { useEffect } from "react";
import {
  CommentImg,
  ListContent,
  ListStdInfo,
  ListUserInfo,
  ListUserName,
  MainListImg,
  MainListLeftSection,
  MainListSection,
  MainProfileImg,
  MainProfileSection,
} from "./listItem.style";
import aprofile from "../../../../assets/images/aprofile.png";
import Comment from "../../../../assets/images/CommentBt.png";

function ListItem({ data }: any) {
  return (
    <MainListSection>
      <MainListLeftSection>
        <MainProfileSection>
          <MainProfileImg
            src={data.profileUrl == null ? aprofile : data?.profileUrl}
          />
          <ListUserInfo>
            <ListUserName>{data?.userName}</ListUserName>
            <ListStdInfo>{`${data?.stdInfo.grade}학년 ${data?.stdInfo.room}반 ${data?.stdInfo.number}번`}</ListStdInfo>
          </ListUserInfo>
        </MainProfileSection>
        <ListContent>{data?.content}</ListContent>
        <CommentImg src={Comment} />
      </MainListLeftSection>
      <MainListImg src={data?.profileUrl ? data?.imgUrls : null} />
    </MainListSection>
  );
}

export default ListItem;
