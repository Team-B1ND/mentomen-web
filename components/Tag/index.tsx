import { useRouter } from "next/router";
import { Suspense } from "react";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import { useGetTag } from "@/queries/Post/post.query";
import * as S from "@/style/common.style";
import ErrorBoundary from "../Common/ErrorBoundary";
import ListItem from "../Common/ListItem";
import ListItemSkeleton from "../Common/Skeleton/ListItem";

const Tag = () => {
  useTokenCheck();
  const router = useRouter();
  const { tag } = router.query;

  return (
    <S.ListContainer>
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
        <p>해당 태그 관련 게시글이 없습니다.</p>
      )}
    </>
  );
};

export default Tag;
