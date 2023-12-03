import { ListItemType } from "../../../types/List/list.type";
import * as S from "./style";
import ListItemProfile from "./ListItemProfile";
import ListItemImages from "./ListItemImages";
import ListItemContent from "./ListItemContent";
import React from "react";

interface Props {
  data: ListItemType;
}

const ListItem = ({ data }: Props) => {
  return (
    <S.Container>
      <ListItemProfile
        userName={data.userName}
        stdInfo={data.stdInfo}
        profileUrl={data.profileUrl}
        author={data.author}
      />
      <ListItemImages imgUrls={data.imgUrls} tag={data.tag} />
      <ListItemContent
        updateDateTime={data.updateDateTime}
        content={data.content}
        postId={data.postId}
      />
    </S.Container>
  );
};

export default React.memo(ListItem);
