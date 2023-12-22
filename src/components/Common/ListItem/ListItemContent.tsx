import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { useSetRecoilState } from "recoil";
import { PostIdAtom } from "../../../stores/common/common.store";
import { IsActiveDetailAtom } from "../../../stores/Detail/detail.store";
import * as S from "./style";

interface Props {
  updateDateTime: string;
  content: string;
  postId: number;
}

const ListItemContent = ({ updateDateTime, content, postId }: Props) => {
  const setIsActiveDetail = useSetRecoilState(IsActiveDetailAtom);
  const setPostId = useSetRecoilState(PostIdAtom);

  return (
    <S.Content>
      <S.CommentAndDate>
        <S.CommentIcon
          onClick={() => {
            setIsActiveDetail(true);
            setPostId(postId);
          }}
        />
        <S.Date>{getDateText(new Date(updateDateTime))}</S.Date>
      </S.CommentAndDate>
      <S.ContentBox>{stringEllipsis(content, 100)}</S.ContentBox>
    </S.Content>
  );
};

export default ListItemContent;
