import { useRouter } from "next/router";
import { Suspense } from "react";
import { useGetTag } from "@/src/queries/Post/post.query";
import * as S from "@/src/style/common.style";
import ErrorBoundary from "../Common/ErrorBoundary";
import ListItem from "../Common/ListItem";
import ListItemSkeleton from "../Common/Skeleton/ListItem";
import Title from "../Common/Title";
import post from "@/public/icons/title/post.png";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <S.ListContainer>
      <S.TitleContainer>
        <Title
          titleIcon={post}
          titleText={`${tag} 멘토 요청 글`}
          subTitleText={`포스팅된 ${tag} 멘토 요청 글을 조회할 수 있어요!`}
        />
      </S.TitleContainer>

      <S.ListWrapper>
        <ErrorBoundary fallback={<>리스트를 불러오지 못했습니다.</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <TagItem tag={tag as string} />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

const TagItem = ({ tag }: { tag: string }) => {
  const { data: tagList } = useGetTag(tag?.toUpperCase(), { suspense: true });
  return (
    <>
      {tagList?.data.length!! > 0 ? (
        tagList?.data.map((item) => <ListItem key={item.postId} data={item} />)
      ) : (
        <S.NonePostText>해당 태그 관련 멘토 요청 글이 없습니다.</S.NonePostText>
      )}
    </>
  );
};

export default Tag;
