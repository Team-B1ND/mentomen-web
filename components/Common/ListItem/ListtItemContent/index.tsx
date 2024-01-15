import { GetDateTime } from "@/util/Date/getDateTime";
import * as S from "./style";
import { useRouter } from "next/router";
import ListItemImages from "./ListItemImages";
import { useEffect, useRef, useState } from "react";
import { useSharePost } from "@/hooks/Post/useSharePost";
import token from "@/lib/token/token";
import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";

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
  const [isShowMoreContent, setIsShowMoreContent] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(contentRef.current?.offsetHeight!);
  }, []);

  return (
    <S.ContentContainer>
      <S.ContentBox>
        <S.ContentText ref={contentRef} isShowMoreContent={isShowMoreContent}>
          {attr.content}
        </S.ContentText>

        {contentHeight === 66 && (
          <S.ShowMoreText onClick={() => setIsShowMoreContent((prev) => !prev)}>
            {isShowMoreContent ? "... 간략히 보기" : "... 더 보기"}
          </S.ShowMoreText>
        )}
      </S.ContentBox>

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
