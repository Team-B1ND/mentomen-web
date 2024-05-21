import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";
import { QUERY_KEYS } from "../stories/core";
import { PostApi } from "../services/Post/post.api";
import { useSeoConfig } from "../hooks/SEO";
import * as S from "../stories/styles";
import { ErrorBoundary } from "../stories/layout";
import { ListItem, Title } from "../stories/ui";
import post from "@/public/icons/title/post.png";
import { Suspense } from "react";
import ListItemSkeleton from "../components/Common/Skeleton/ListItem";
import { useGetAllPostQuery } from "../services/Post/post.query";

const HomePage = () => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 멘토와 멘티를 잇다",
    description: "멘토에게 궁금하거나 알고 싶었던 전공지식에 관해 물어보세요!",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <S.ListContainer>
        <S.TitleContainer>
          <Title
            titleIcon={post}
            titleText="모든 멘토 요청 글"
            subTitleText="포스팅된 모든 멘토 요청 글을 조회할 수 있어요!"
          />
        </S.TitleContainer>

        <S.ListWrapper>
          <ErrorBoundary
            fallback={
              <S.NoneDataText>리스트를 불러오지 못했습니다.</S.NoneDataText>
            }
          >
            <Suspense fallback={<ListItemSkeleton />}>
              <HomeItem />
            </Suspense>
          </ErrorBoundary>
        </S.ListWrapper>
      </S.ListContainer>
    </>
  );
};

const HomeItem = () => {
  const { data: allList } = useGetAllPostQuery({ suspense: true });
  return (
    <>
      {allList?.data.length!! > 0 ? (
        allList?.data.map((item) => <ListItem key={item.postId} data={item} />)
      ) : (
        <S.NoneDataText>멘토 요청 글이 없습니다.</S.NoneDataText>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getAllPost, PostApi.getAllPost),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;
