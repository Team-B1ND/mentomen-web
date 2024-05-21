import readingGlasses from "@/public/icons/title/readingGlasses.png";
import { QUERY_KEYS } from "../../stories/core";
import { useSeoConfig } from "../../hooks/SEO";
import { PostApi } from "../../services/Post/post.api";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";
import { GetText } from "../../stories/utils";
import * as S from "../../stories/styles";
import { ListItem, Title } from "../../stories/ui";
import { ErrorBoundary } from "../../stories/layout";
import { Suspense } from "react";
import ListItemSkeleton from "../../components/Common/Skeleton/ListItem";
import { styled } from "styled-components";
import { useGetPostByKeyWordQuery } from "../../services/Post/post.query";

const SerachPage = ({ keyword }: { keyword: string }) => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: `멘투멘 | ${keyword} 검색`,
    description: `멘투멘 ${keyword}를 검색하셨습니다.`,
  });

  const keywordEllipsis =
    keyword?.length! > 20
      ? new GetText(keyword as string).stringEllipsis(20)
      : keyword;

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <S.ListContainer>
        <S.TitleContainer>
          <Title
            titleIcon={readingGlasses}
            titleText={
              <>
                <SearchText>{keywordEllipsis}</SearchText>에 관한 멘토 요청 글
              </>
            }
            subTitleText={`검색한 ${
              keywordEllipsis || ""
            }에 관한 멘토 요청 글을 조회할 수 있어요!`}
          />
        </S.TitleContainer>

        <S.ListWrapper>
          <ErrorBoundary
            fallback={
              <S.NoneDataText>리스트를 불러오지 못했습니다.</S.NoneDataText>
            }
          >
            <Suspense fallback={<ListItemSkeleton />}>
              <SearchItem keyword={keyword as string} />
            </Suspense>
          </ErrorBoundary>
        </S.ListWrapper>
      </S.ListContainer>
    </>
  );
};

const SearchItem = ({ keyword }: { keyword: string }) => {
  const { data: searchList } = useGetPostByKeyWordQuery(keyword, {
    suspense: true,
  });

  return (
    <>
      {searchList?.data.length!! > 0 ? (
        searchList?.data.map((item) => (
          <ListItem key={item.postId} data={item} />
        ))
      ) : (
        <S.NoneDataText>검색한 멘토 요청 글이 없습니다.</S.NoneDataText>
      )}
    </>
  );
};

const SearchText = styled.span`
  font-family: "Pretendard-Bold" !important;
  color: #2749dc;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const keyword = context.params?.keyword as string;

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getPostByKeyWord(keyword), () =>
      PostApi.getPostByKeyWord(keyword)
    ),
  ]);

  return {
    props: {
      keyword,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SerachPage;
