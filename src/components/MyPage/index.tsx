import { Suspense, useEffect } from "react";
import ListItemSkeleton from "../Common/Skeleton/ListItem";
import post from "@/public/icons/title/post.png";
import { useSetRecoilState } from "recoil";
import { CountOfPostAtom } from "@/src/store/Post/post.store";
import { useGetMyPostQuery } from "@/src/services/User/queries";
import { useTokenCheck } from "@/src/hooks/Auth";
import { ErrorBoundary } from "@/src/stories/layout";
import { ListItem, Title } from "@/src/stories/ui";
import {
  ListContainer,
  NoneDataText,
  TitleContainer,
  ListWrapper,
} from "@/src/stories/styles";

const MyPage = () => {
  useTokenCheck();
  return (
    <ListContainer>
      <TitleContainer>
        <Title
          titleIcon={post}
          titleText="내가 쓴 멘토 요청 글"
          subTitleText="자신이 포스팅한 모든 멘토 요청 글을 조회할 수 있어요!"
        />
      </TitleContainer>

      <ListWrapper>
        <ErrorBoundary
          fallback={<NoneDataText>리스트를 불러오지 못했습니다.</NoneDataText>}
        >
          <Suspense fallback={<ListItemSkeleton />}>
            <MyPageItem />
          </Suspense>
        </ErrorBoundary>
      </ListWrapper>
    </ListContainer>
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

export default MyPage;
