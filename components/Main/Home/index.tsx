import { Suspense } from "react";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import { useGetList } from "@/queries/Post/post.query";
import * as S from "@/style/common.style";
import ErrorBoundary from "../../Common/ErrorBoundary";
import ListItem from "../../Common/ListItem";
import ListItemSkeleton from "../../Common/Skeleton/ListItem";
import Title from "@/components/Common/Title";
import post from "@/public/icons/title/post.png";

const Home = () => {
  useTokenCheck();
  return (
    <S.ListContainer>
      <S.TitleContainer>
        <Title
          titleIcon={post}
          titleText="모든 멘토 요청 글"
          subTitleText="포스팅된 모든 멘토 요청 글을 조회할 수 있어요!"
        />
      </S.TitleContainer>

      <S.ListWrapper>
        <ErrorBoundary fallback={<>리스트를 불러오지 못했습니다.</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <HomeItem />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

const HomeItem = () => {
  const { data: allList } = useGetList({ suspense: true });
  return (
    <>
      {allList?.data.length!! > 0 ? (
        allList?.data.map((item) => <ListItem key={item.postId} data={item} />)
      ) : (
        <S.NonePostText>멘토 요청 글이 없습니다.</S.NonePostText>
      )}
    </>
  );
};

export default Home;
