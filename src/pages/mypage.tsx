import { NextSeo } from "next-seo";
import { dehydrate, QueryClient } from "react-query";
import post from "@/public/icons/title/post.png";
import { QUERY_KEYS } from "../stories/core";
import { useSeoConfig } from "../hooks/SEO";
import { UserApi } from "../services/User/user.api";
import { useTokenCheck } from "../hooks/Auth";
import * as S from "../stories/styles";
import { ListItem, Title } from "../stories/ui";
import { ErrorBoundary } from "../stories/layout";
import { NoneDataText } from "../stories/styles";
import { Suspense, useEffect } from "react";
import ListItemSkeleton from "../components/Common/Skeleton/ListItem";
import { useSetRecoilState } from "recoil";
import { CountOfPostAtom } from "../store/Post/post.store";
import { useGetMyPostQuery } from "../services/User/user.query";

const MyPagePage = () => {
  useTokenCheck();

  const { SeoNextConfigProps } = useSeoConfig({
    title: "멘투멘 | 내 정보 페이지",
    description: "멘투멘 내 정보 페이지입니다.",
  });

  return (
    <>
      <NextSeo {...SeoNextConfigProps} />
      <S.ListContainer>
        <S.TitleContainer>
          <Title
            titleIcon={post}
            titleText="내가 쓴 멘토 요청 글"
            subTitleText="자신이 포스팅한 모든 멘토 요청 글을 조회할 수 있어요!"
          />
        </S.TitleContainer>

        <S.ListWrapper>
          <ErrorBoundary
            fallback={
              <NoneDataText>리스트를 불러오지 못했습니다.</NoneDataText>
            }
          >
            <Suspense fallback={<ListItemSkeleton />}>
              <MyPageItem />
            </Suspense>
          </ErrorBoundary>
        </S.ListWrapper>
      </S.ListContainer>
    </>
  );
};

const MyPageItem = () => {
  const { data: myPost } = useGetMyPostQuery({ suspense: true });
  const setCountOfPost = useSetRecoilState(CountOfPostAtom);

  useEffect(() => {
    setCountOfPost(myPost?.data.length!);
  }, [myPost, setCountOfPost]);

  return (
    <>
      {myPost?.data.length!! > 0 ? (
        myPost?.data.map((item) => <ListItem key={item.postId} data={item} />)
      ) : (
        <NoneDataText>아직 자신이 작성한 멘토 요청 글이 없습니다.</NoneDataText>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(QUERY_KEYS.User.getMyPost, UserApi.getMyPost),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MyPagePage;
