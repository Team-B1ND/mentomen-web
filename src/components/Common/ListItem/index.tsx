import { ListItemType } from "../../../types/List/list.type";
import * as S from "./style";
import ListItemProfile from "./ListItemProfile";
import ListItemImages from "./ListItemImages";
import ListItemContent from "./ListItemContent";

interface Props {
  data: ListItemType;
}

export default function ListItem({ data }: Props) {
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
      />
    </S.Container>
  );
}
