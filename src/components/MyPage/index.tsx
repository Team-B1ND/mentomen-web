import { Suspense, useEffect } from "react";
import * as S from "@/src/stories/core";
import ListItemSkeleton from "../Common/ui/Skeleton/ListItem";
import post from "@/public/icons/title/post.png";
import { useSetRecoilState } from "recoil";
import { CountOfPostAtom } from "@/src/store/Post/post.store";
import { useGetMyPostQuery } from "@/src/services/User/queries";
import { useTokenCheck } from "@/src/stories/hooks";
import { ErrorBoundary } from "@/src/stories/layout";
import { ListItem, Title } from "@/src/stories/ui";

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
