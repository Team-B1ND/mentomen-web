import { ListItemType } from "@/types/List/list.type";
import * as S from "./style";
import ListItemProfile from "./ListItemProfile";
import ListItemImages from "./ListItemImages";
import ListItemContent from "./ListItemContent";

const ListItem = ({ data }: { data: ListItemType }) => {
  return (
    <S.ArticleContainer>
      <ListItemProfile {...data} />
      {data.imgUrls?.length > 0 && (
        <ListItemImages imgUrls={data.imgUrls} tag={data.tag} />
      )}
      <ListItemContent {...data} />
    </S.ArticleContainer>
  );
};

export default ListItem;
