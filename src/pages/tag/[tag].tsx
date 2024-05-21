import post from "@/public/icons/title/post.png";
import { QUERY_KEYS } from "../../stories/core";
import { useSeoConfig } from "../../hooks/SEO";
import { PostApi } from "../../services/Post/post.api";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";
import * as S from "../../stories/styles";
import { ErrorBoundary } from "../../stories/layout";
import { Suspense } from "react";
import ListItemSkeleton from "../../components/Common/Skeleton/ListItem";
import { styled } from "styled-components";
import { GetTag } from "../../stories/utils";
import { ListItem, Title } from "../../stories/ui";
import { useGetPostByTagQuery } from "../../services/Post/post.query";

const TagPage = ({ tag }: { tag: string }) => {
  const { SeoNextConfigProps } = useSeoConfig({
    title: `멘투멘 | ${tag} 태그 페이지`,
    description: `멘투멘 ${tag} 태그 페이지입니다.`,
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <S.ListContainer>
        <S.TitleContainer>
          <Title
            titleIcon={post}
            titleText={
              <>
                <TagText $tag={tag?.toString()!}>{tag}</TagText> 멘토 요청 글
              </>
            }
            subTitleText={`포스팅된 ${tag} 멘토 요청 글을 조회할 수 있어요!`}
          />
        </S.TitleContainer>

        <S.ListWrapper>
          <ErrorBoundary
            fallback={
              <S.NoneDataText>리스트를 불러오지 못했습니다.</S.NoneDataText>
            }
          >
            <Suspense fallback={<ListItemSkeleton />}>
              <TagItem tag={tag as string} />
            </Suspense>
          </ErrorBoundary>
        </S.ListWrapper>
      </S.ListContainer>
    </>
  );
};

const TagItem = ({ tag }: { tag: string }) => {
  const { data: tagList } = useGetPostByTagQuery(tag?.toUpperCase(), {
    suspense: true,
  });

  return (
    <>
      {tagList?.data.length!! > 0 ? (
        tagList?.data.map((item) => <ListItem key={item.postId} data={item} />)
      ) : (
        <S.NoneDataText>해당 태그 관련 멘토 요청 글이 없습니다.</S.NoneDataText>
      )}
    </>
  );
};

const TagText = styled.span<{ $tag: string }>`
  font-family: "Pretendard-Bold" !important;
  color: ${({ $tag }) => new GetTag().getTagColor($tag)};
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  const tag = context.params?.tag as string;

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.Post.getPostByTag(tag), () =>
      PostApi.getPostByTag(tag)
    ),
  ]);

  return {
    props: {
      tag,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default TagPage;
