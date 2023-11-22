import { Suspense } from "react";
import { useGetMyPost } from "../../queries/User/user.query";
import * as S from "../../style/common.style";
import ErrorBoundary from "../Common/ErrorBoundary";
import ListItem from "../Common/ListItem";
import ListItemSkeleton from "../Common/Skeleton/ListItem";

const MyPage = () => {
  return (
    <S.ListContainer>
      <S.ListWrapper>
        <ErrorBoundary fallback={<>리스트를 불러오지 못했습니다.</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <MyPageItem />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

const MyPageItem = () => {
  const { data: myPost } = useGetMyPost({ suspense: true });
  return (
    <>
      {myPost?.data.length!! > 0 ? (
        myPost?.data.map((item) => <ListItem key={item.postId} data={item} />)
      ) : (
        <p>내가 등록한 게시글이 없습니다.</p>
      )}
    </>
  );
};

export default MyPage;
