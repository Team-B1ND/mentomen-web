import { useRouter } from "next/router";
import { Suspense } from "react";
import { useGetKeyWord } from "@/queries/Post/post.query";
import * as S from "@/style/common.style";
import ErrorBoundary from "../Common/ErrorBoundary";
import ListItem from "../Common/ListItem";
import ListItemSkeleton from "../Common/Skeleton/ListItem";
import Title from "../Common/Title";
import post from "@/public/icons/title/post.png";
import { GetText } from "@/util/Text/getText";

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const keywordEllipsis =
    keyword?.length! > 20
      ? new GetText(keyword as string).stringEllipsis(20)
      : keyword;

  return (
    <S.ListContainer>
      <S.TitleContainer>
        <Title
          titleIcon={post}
          titleText={`${keywordEllipsis}에 관한 멘토 요청 글`}
          subTitleText={`검색한 ${keywordEllipsis}에 관한 멘토 요청 글을 조회할 수 있어요!`}
        />
      </S.TitleContainer>

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
        <S.NonePostText>검색한 멘토 요청 글이 없습니다.</S.NonePostText>
      )}
    </>
  );
};

export default Search;
