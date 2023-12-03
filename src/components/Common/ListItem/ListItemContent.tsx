import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { useState } from "react";
import Detail from "../../Detail";
import * as S from "./style";

interface Props {
  updateDateTime: string;
  content: string;
  postId: number;
}

const ListItemContent = ({ updateDateTime, content, postId }: Props) => {
  const [isClickCommentIcon, setIsClickCommentIcon] = useState(false);
  return (
    <>
      <S.Content>
        <S.CommentAndDate>
          <S.CommentIcon onClick={() => setIsClickCommentIcon(true)} />
          <S.Date>{getDateText(new Date(updateDateTime))}</S.Date>
        </S.CommentAndDate>
        <S.ContentBox>{stringEllipsis(content, 100)}</S.ContentBox>
      </S.Content>
      {isClickCommentIcon && (
        <Detail postId={postId} setIsClickCommentIcon={setIsClickCommentIcon} />
      )}
    </>
  );
};

export default ListItemContent;
