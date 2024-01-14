import { GetDateTime } from "@/util/Date/getDateTime";
import * as S from "./style";
import { useRouter } from "next/router";
import ListItemImages from "./ListItemImages";
import { useState } from "react";
import { useSharePost } from "@/hooks/Post/useSharePost";
import { GetText } from "@/util/Text/getText";

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
  const { handleSharePostClick } = useSharePost();
  const [test, setTest] = useState(false);

  const getText = new GetText(attr.content);

  return (
    <S.Content>
      <S.ContentBox>{getText.stringEllipsis(100)}</S.ContentBox>

      {attr.imgUrls?.length > 0 && (
        <ListItemImages imgUrls={attr.imgUrls} tag={attr.tag} />
      )}

      <S.EtcContainer>
        <S.IconContainer>
          {test ? (
            <S.FillHeartIcon onClick={() => setTest(false)} />
          ) : (
            <S.UnFillHeartIcon onClick={() => setTest(true)} />
          )}

          <S.CommentIcon
            onClick={() => router.push(`/detail/${attr.postId}`)}
          />

          <S.ShareIcon onClick={() => handleSharePostClick(attr.postId)} />
        </S.IconContainer>
        <S.UploadDateTime>{getDateTime.uploadPostTimeAgo()}</S.UploadDateTime>
      </S.EtcContainer>
    </S.Content>
  );
};

export default ListItemContent;
