import { useRouter } from "next/router";
import { Suspense } from "react";
import * as S from "@/src/styles/common.style";
import ErrorBoundary from "../Common/ErrorBoundary";
import ListItem from "../Common/ListItem";
import ListItemSkeleton from "../Common/Skeleton/ListItem";
import Title from "../Common/Title";
import readingGlasses from "@/public/icons/title/readingGlasses.png";
import { GetText } from "@/src/utils/Text/getText";
import { useGetPostByKeyWordQuery } from "@/src/services/Post/queries";
import styled from "styled-components";

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
          titleIcon={readingGlasses}
          titleText={
            <>
              <SearchText>{keywordEllipsis}</SearchText>에 관한 멘토 요청 글
            </>
          }
          subTitleText={`검색한 ${keywordEllipsis}에 관한 멘토 요청 글을 조회할 수 있어요!`}
        />
      </S.TitleContainer>

      <S.ListWrapper>
        <ErrorBoundary
          fallback={
            <S.NoneDataText>리스트를 불러오지 못했습니다.</S.NoneDataText>
          }
        >
          <Suspense fallback={<ListItemSkeleton />}>
            <SearchItem keyword={keyword as string} />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

const SearchItem = ({ keyword }: { keyword: string }) => {
  const { data: searchList } = useGetPostByKeyWordQuery(keyword, {
    suspense: true,
  });

  return (
    <>
      {searchList?.data.length!! > 0 ? (
        searchList?.data.map((item) => (
          <ListItem key={item.postId} data={item} />
        ))
      ) : (
        <S.NoneDataText>검색한 멘토 요청 글이 없습니다.</S.NoneDataText>
      )}
    </>
  );
};

export default Search;

const SearchText = styled.span`
  font-family: "Pretendard-Bold" !important;
  color: #2749dc;
`;
