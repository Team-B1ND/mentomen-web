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
      <ListItemProfile {...data} customStyle={{ paddingLeft: "3px" }} />
      <ListItemImages imgUrls={data.imgUrls} tag={data.tag} />
      <ListItemContent {...data} />
    </S.Container>
  );
};

export default ListItem;
