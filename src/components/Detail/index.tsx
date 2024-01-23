import useHideHeaderOrNav from "@/src/hooks/common/useHideHeaderOrNav";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary";
import ShowMoreContent from "../Common/ShowMoreContent";
import Title from "../Common/Title";
import DetailComments from "./DetailComments";
import DetailImages from "./DetailImages";
import DetailProfile from "./DetailProfile";
import hello from "@/public/icons/title/hello.png";
import * as S from "./style";
import DetailSkeleton from "../Common/Skeleton/Detail";
import DetailCommentSkeleton from "../Common/Skeleton/Detail/DetailComment";
import LikeInteraction from "../Common/PostInteraction/LikeInteraction";
import ShareInteraction from "../Common/PostInteraction/ShareInteraction";
import { useGetPostByIdQuery } from "@/src/services/Post/queries";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  useHideHeaderOrNav("Nav");
  return (
    <S.Container>
      <S.Wrapper>
        <Title
          titleIcon={hello}
          titleText="멘토 요청 글 상세보기"
          subTitleText="멘티가 올린 글을 자세하게 살펴보고 댓글을 달아 해결해 주세요!"
          customstyle={{ fontSize: "18px" }}
        />
        <ErrorBoundary fallback={<p>데이터를 불러오지 못했습니다.</p>}>
          <Suspense fallback={<DetailSkeleton />}>
            <DetailItem postId={Number(id)} />
          </Suspense>
        </ErrorBoundary>
      </S.Wrapper>
    </S.Container>
  );
};

const DetailItem = ({ postId }: { postId: number }) => {
  const { data: detailPost } = useGetPostByIdQuery(postId, { suspense: true });
  return (
    <S.DetailItemContainer>
      <S.PostArticle>
        <S.PostWrap>
          <DetailProfile {...detailPost?.data!} />

          <S.PostContent>
            <ShowMoreContent
              content={detailPost?.data.content!}
              customStyle={{ fontSize: "15px", lineHeight: "21px" }}
              maxHeight={86}
            />

            {detailPost?.data.imgUrls !== null && (
              <DetailImages imgUrls={detailPost?.data.imgUrls!} />
            )}

            <S.IconContainer>
              <LikeInteraction
                postId={postId}
                customStyle={S.InteractionStyle}
              />
              <ShareInteraction
                postId={postId}
                customStyle={S.InteractionStyle}
              />
            </S.IconContainer>
          </S.PostContent>
        </S.PostWrap>
      </S.PostArticle>

      <ErrorBoundary
        fallback={
          <S.NoneCommentDataText>
            댓글을 불러오지 못했습니다.
          </S.NoneCommentDataText>
        }
      >
        <Suspense fallback={<DetailCommentSkeleton />}>
          <DetailComments postId={postId} />
        </Suspense>
      </ErrorBoundary>
    </S.DetailItemContainer>
  );
};

export default Detail;
