import { useRouter } from "next/router";
import { Suspense } from "react";
import * as S from "@/src/stories/core";
import ListItemSkeleton from "../Common/Skeleton/ListItem";
import post from "@/public/icons/title/post.png";
import { useGetPostByTagQuery } from "@/src/services/Post/queries";
import styled from "styled-components";
import { ErrorBoundary } from "@/src/stories/layout";
import { ListItem, Title } from "@/src/stories/ui";
import { GetTag } from "@/src/stories/utils";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;

  return (
    <S.ListContainer>
      <S.TitleContainer>
        <Title
          titleIcon={post}
          titleText={
            <>
              <TagText tag={tag?.toString()!}>{tag}</TagText> 멘토 요청 글
            </>
          }
          subTitleText={`포스팅된 ${tag} 멘토 요청 글을 조회할 수 있어요!`}
        />
      </S.TitleContainer>

      <S.ListWrapper>
        <ErrorBoundary
          fallback={
            <S.NoneDataText>리스트를 불러오지 못했습니다.</S.NoneDataText>
          }
        >
          <Suspense fallback={<ListItemSkeleton />}>
            <TagItem tag={tag as string} />
          </Suspense>
        </ErrorBoundary>
      </S.ListWrapper>
    </S.ListContainer>
  );
};

const TagItem = ({ tag }: { tag: string }) => {
  const { data: tagList } = useGetPostByTagQuery(tag?.toUpperCase(), {
    suspense: true,
  });

  return (
    <>
      {tagList?.data.length!! > 0 ? (
        tagList?.data.map((item) => <ListItem key={item.postId} data={item} />)
      ) : (
        <S.NoneDataText>해당 태그 관련 멘토 요청 글이 없습니다.</S.NoneDataText>
      )}
    </>
  );
};

export default Tag;

const TagText = styled.span<{ tag: string }>`
  font-family: "Pretendard-Bold" !important;
  color: ${({ tag }) => new GetTag().getTagColor(tag)};
`;
