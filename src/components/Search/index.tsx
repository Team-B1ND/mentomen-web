import { useRouter } from "next/router";
import { Suspense } from "react";
import ListItemSkeleton from "../Common/Skeleton/ListItem";
import readingGlasses from "@/public/icons/title/readingGlasses.png";
import { useGetPostByKeyWordQuery } from "@/src/services/Post/post.query";
import styled from "styled-components";
import { ErrorBoundary } from "@/src/stories/layout";
import { ListItem, Title } from "@/src/stories/ui";
import { GetText } from "@/src/stories/utils";
import {
  ListContainer,
  ListWrapper,
  NoneDataText,
  TitleContainer,
} from "@/src/stories/styles";

const Search = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const keywordEllipsis =
    keyword?.length! > 20
      ? new GetText(keyword as string).stringEllipsis(20)
      : keyword;

  return (
    <ListContainer>
      <TitleContainer>
        <Title
          titleIcon={readingGlasses}
          titleText={
            <>
              <SearchText>{keywordEllipsis}</SearchText>에 관한 멘토 요청 글
            </>
          }
          subTitleText={`검색한 ${
            keywordEllipsis || ""
          }에 관한 멘토 요청 글을 조회할 수 있어요!`}
        />
      </TitleContainer>

      <ListWrapper>
        <ErrorBoundary
          fallback={<NoneDataText>리스트를 불러오지 못했습니다.</NoneDataText>}
        >
          <Suspense fallback={<ListItemSkeleton />}>
            <SearchItem keyword={keyword as string} />
          </Suspense>
        </ErrorBoundary>
      </ListWrapper>
    </ListContainer>
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
        <NoneDataText>검색한 멘토 요청 글이 없습니다.</NoneDataText>
      )}
    </>
  );
};

export default Search;

const SearchText = styled.span`
  font-family: "Pretendard-Bold" !important;
  color: #2749dc;
`;
