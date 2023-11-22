import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useGetKeyWord } from "../../queries/Post/post.query";
import * as S from "../../style/common.style";
import ErrorBoundary from "../Common/ErrorBoundary";
import ListItem from "../Common/ListItem";
import ListItemSkeleton from "../Common/Skeleton/ListItem";

interface Props {
  keyword: string;
}

const Search = () => {
  const { keyword } = useParams();
  return (
    <S.ListContainer>
      <S.ListWrapper>
        <ErrorBoundary fallback={<>리스트를 불러오지 못했습니다.</>}>
          <Suspense fallback={<ListItemSkeleton />}>
            <SearchItem keyword={keyword!!} />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

const SearchItem = ({ keyword }: Props) => {
  const { data: searchList } = useGetKeyWord({ keyword }, { suspense: true });
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
