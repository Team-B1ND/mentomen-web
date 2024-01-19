import { ListItemType } from "@/types/List/list.type";
import ListItemProfile from "./ListItmeProfile";
import ListItemContent from "./ListtItemContent";
import * as S from "./style";

const ListItem = ({ data }: { data: ListItemType }) => {
  return (
    <S.ArticleContainer>
      <ListItemProfile {...data} />
      <ListItemContent {...data} />
    </S.ArticleContainer>
  );
};

export default ListItem;
