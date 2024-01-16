import { GetDateTime } from "@/util/Date/getDateTime";
import * as S from "./style";
import { useRouter } from "next/router";
import ListItemImages from "./ListItemImages";
import { useState } from "react";
import { useSharePost } from "@/hooks/Post/useSharePost";
import token from "@/lib/token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import ShowMoreContent from "../../ShowMoreContent";

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
  const [isLike, setIsLike] = useState(false);

  return (
    <S.ContentContainer>
      <ShowMoreContent content={attr.content} maxHeight={66} />
      {attr.imgUrls?.length > 0 && (
        <ListItemImages imgUrls={attr.imgUrls} tag={attr.tag} />
      )}

      <S.EtcContainer>
        <S.IconContainer>
          {token.getCookie(ACCESS_TOKEN_KEY) &&
            (isLike ? (
              <S.FillHeartIcon onClick={() => setIsLike(false)} />
            ) : (
              <S.UnFillHeartIcon onClick={() => setIsLike(true)} />
            ))}

          <S.CommentIcon
            onClick={() => router.push(`/detail/${attr.postId}`)}
          />

          <S.ShareIcon onClick={() => handleSharePostClick(attr.postId)} />
        </S.IconContainer>
        <S.UploadDateTime>{getDateTime.uploadPostTimeAgo()}</S.UploadDateTime>
      </S.EtcContainer>
    </S.ContentContainer>
  );
};

export default ListItemContent;
