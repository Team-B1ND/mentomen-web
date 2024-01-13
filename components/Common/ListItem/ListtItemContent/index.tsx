import { stringEllipsis } from "@/util/Text/stringEllipsis";
import { GetDateTime } from "@/util/Date/getDateTime";
import * as S from "./style";
import { useRouter } from "next/router";
import ListItemImages from "./ListItemImages";

interface Props {
  updateDateTime: string;
  content: string;
  postId: number;
  imgUrls: string[];
  tag: string;
}

const ListItemContent = ({ ...attr }: Props) => {
  const getDateTime = new GetDateTime(new Date(attr.updateDateTime));
  const router = useRouter();

  return (
    <S.Content>
      <S.ContentBox>{stringEllipsis(attr.content, 100)}</S.ContentBox>

      {attr.imgUrls?.length > 0 && (
        <ListItemImages imgUrls={attr.imgUrls} tag={attr.tag} />
      )}

      <S.EtcContainer>
        <S.CommentIcon onClick={() => router.push(`/detail/${attr.postId}`)} />
        <S.UploadDateTime>{getDateTime.uploadPostTimeAgo()}</S.UploadDateTime>
      </S.EtcContainer>
    </S.Content>
  );
};

export default ListItemContent;
