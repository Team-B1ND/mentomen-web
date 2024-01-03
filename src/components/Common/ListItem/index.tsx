import { ListItemType } from "../../../types/List/list.type";
import * as S from "./style";
import ListItemProfile from "./ListItemProfile";
import ListItemImages from "./ListItemImages";
import ListItemContent from "./ListItemContent";

interface Props {
  data: ListItemType;
}

const ListItem = ({ data }: Props) => {
  return (
    <S.Container>
      <ListItemProfile {...data} />
      {data.imgUrls?.length > 0 && (
        <ListItemImages imgUrls={data.imgUrls} tag={data.tag} />
      )}
      <ListItemContent {...data} />
    </S.Container>
  );
};

export default ListItem;
