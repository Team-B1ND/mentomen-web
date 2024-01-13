import { Suspense } from "react";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import { useGetList } from "@/queries/Post/post.query";
import * as S from "@/style/common.style";
import ErrorBoundary from "../../Common/ErrorBoundary";
import ListItem from "../../Common/ListItem";
import ListItemSkeleton from "../../Common/Skeleton/ListItem";

const Home = () => {
  useTokenCheck();
  return (
    <S.ListContainer>
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
        <p>게시글이 없습니다.</p>
      )}
    </>
  );
};

export default Home;
