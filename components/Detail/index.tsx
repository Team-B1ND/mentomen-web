import useHideHeaderOrNav from "@/hooks/common/useHideHeaderOrNav";
import { useGetApost } from "@/queries/Post/post.query";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary";
import DetailComments from "./DetailComments";
import DetailImages from "./DetailImages";
import * as S from "./style";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  useHideHeaderOrNav("Nav");
  return (
    <S.Container>
      <S.Wrapper>
        <ErrorBoundary fallback={<>Error</>}>
          <Suspense fallback={<>로딩중...</>}>
            <DetailItem postId={Number(id)} />
          </Suspense>
        </ErrorBoundary>
      </S.Wrapper>
    </S.Container>
  );
};

const DetailItem = ({ postId }: { postId: number }) => {
  const { data: detailPost } = useGetApost(postId, { suspense: true });
  return (
    <>
      <S.PostBox>
        <S.PostWrap>
          <S.Content>{detailPost?.data.content}</S.Content>
          {detailPost?.data.imgUrls !== null && (
            <DetailImages imgUrls={detailPost?.data.imgUrls!} />
          )}
        </S.PostWrap>
      </S.PostBox>

      <ErrorBoundary fallback={<>Error)</>}>
        <Suspense fallback={<>로딩 중...</>}>
          <DetailComments
            postId={postId}
            profileUrl={detailPost?.data.profileUrl!}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Detail;
