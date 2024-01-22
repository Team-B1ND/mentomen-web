import { PostItemType } from "@/src/types/Post/post.type";
import ListItemProfile from "./ListItmeProfile";
import ListItemContent from "./ListtItemContent";
import * as S from "./style";

const ListItem = ({ data }: { data: PostItemType }) => {
  return (
    <S.ArticleContainer>
      <ListItemProfile {...data} />
      <ListItemContent {...data} />
    </S.ArticleContainer>
  );
};

export default ListItem;
