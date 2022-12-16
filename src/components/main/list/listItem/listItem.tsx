import React, { useEffect } from "react";
import {
  ListStdInfo,
  ListUserInfo,
  ListUserName,
  MainListSection,
  MainProfileImg,
  MainProfileSection,
} from "./listItem.style";
import aprofile from "../../../../assets/images/aprofile.png";

function ListItem({ data }: any, idx: number) {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MainListSection>
      <MainProfileSection>
        <MainProfileImg
          src={data.profileUrl == null ? aprofile : data?.profileUrl}
        />
        <ListUserInfo>
          <ListUserName>{data?.userName}</ListUserName>
          <ListStdInfo>{`${data?.stdInfo.grade}학년 ${data?.stdInfo.room}반 ${data?.stdInfo.number}번`}</ListStdInfo>
        </ListUserInfo>
      </MainProfileSection>
    </MainListSection>
  );
}

export default ListItem;
