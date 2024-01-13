import { useRouter } from "next/router";
import { Suspense } from "react";
import useTokenCheck from "@/hooks/Auth/useTokenCheck";
import { useGetKeyWord } from "@/queries/Post/post.query";
import * as S from "@/style/common.style";
import ErrorBoundary from "../Common/ErrorBoundary";
import ListItem from "../Common/ListItem";
import ListItemSkeleton from "../Common/Skeleton/ListItem";

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;

  useTokenCheck();

  return (
    <S.ListContainer>
      <S.ListWrapper>
        <ErrorBoundary fallback={<>리스트를 불러오지 못했습니다.</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <SearchItem keyword={keyword as string} />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

const SearchItem = ({ keyword }: { keyword: string }) => {
  const { data: searchList } = useGetKeyWord(keyword, { suspense: true });
  return (
    <>
      {searchList?.data.length!! > 0 ? (
        searchList?.data.map((item) => (
          <ListItem key={item.postId} data={item} />
        ))
      ) : (
        <p>검색한 게시글이 없습니다.</p>
      )}
    </>
  );
};

export default Search;
