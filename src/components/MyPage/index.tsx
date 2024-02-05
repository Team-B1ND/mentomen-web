import { Suspense, useEffect } from "react";
import useTokenCheck from "@/src/hooks/Auth/useTokenCheck";
import * as S from "@/src/styles/common.style";
import ErrorBoundary from "../common/ErrorBoundary";
import ListItem from "../common/ListItem";
import ListItemSkeleton from "../common/Skeleton/ListItem";
import Title from "../common/Title";
import post from "@/public/icons/title/post.png";
import { useSetRecoilState } from "recoil";
import { CountOfPostAtom } from "@/src/stores/Post/post.store";
import { useGetMyPostQuery } from "@/src/services/User/queries";

const MyPage = () => {
  useTokenCheck();
  return (
    <S.ListContainer>
      <S.TitleContainer>
        <Title
          titleIcon={post}
          titleText="내가 쓴 멘토 요청 글"
          subTitleText="자신이 포스팅한 모든 멘토 요청 글을 조회할 수 있어요!"
        />
      </S.TitleContainer>

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
        <S.NoneDataText>
          아직 자신이 작성한 멘토 요청 글이 없습니다.
        </S.NoneDataText>
      )}
    </>
  );
};

export default MyPage;
