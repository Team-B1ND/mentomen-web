import { stringEllipsis } from "@/util/Text/stringEllipsis";
import { useSetRecoilState } from "recoil";
import { PostIdAtom } from "../../../stores/common/common.store";
import { IsActiveDetailAtom } from "../../../stores/Detail/detail.store";
import { GetDateTime } from "../../../util/Date/getDateTime";
import { getTagIcon } from "../../../util/Tag/getTagIcon";
import * as S from "./style";

interface Props {
  updateDateTime: string;
  content: string;
  postId: number;
  imgUrls: string[];
  tag: string;
}

const ListItemContent = ({
  updateDateTime,
  content,
  postId,
  imgUrls,
  tag,
}: Props) => {
  const setIsActiveDetail = useSetRecoilState(IsActiveDetailAtom);
  const setPostId = useSetRecoilState(PostIdAtom);
  const getDateTime = new GetDateTime(new Date(updateDateTime));

  return (
    <S.Content>
      <S.CommentAndDate>
        <S.CommentIcon
          onClick={() => {
            setIsActiveDetail(true);
            setPostId(postId);
          }}
        />

        <S.DateAndTag>
          <S.Date>{getDateTime.uploadPostTimeAgo()}</S.Date>
          {imgUrls === null && (
            <S.TagIcon
              imgUrls={imgUrls}
              src={getTagIcon(tag)}
              alt="이미지 없음"
            />
          )}
        </S.DateAndTag>
      </S.CommentAndDate>
      <S.ContentBox>{stringEllipsis(content, 100)}</S.ContentBox>
    </S.Content>
  );
};

export default ListItemContent;
