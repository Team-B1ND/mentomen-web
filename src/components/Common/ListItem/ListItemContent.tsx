import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import * as S from "./style";

interface Props {
  updateDateTime: string;
  content: string;
}

const ListItemContent = ({ updateDateTime, content }: Props) => {
  return (
    <S.Content>
      <S.CommentAndDate>
        <S.CommentIcon />
        <S.Date>{getDateText(new Date(updateDateTime))}</S.Date>
      </S.CommentAndDate>

      <S.ContentBox>{stringEllipsis(content, 100)}</S.ContentBox>
    </S.Content>
  );
};

export default ListItemContent;
