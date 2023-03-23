import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../Common/errorboundary";
import FallbackSkeletonLists from "../Common/fallbackskeleton/lists";
import ProfileBar from "../Common/Profile";
import * as S from "./style";
import TagLists from "./taglists";

export default function TagList() {
  const { tag } = useParams();

  return (
    <>
      <ProfileBar />
      <S.TagListContainer>
        <S.TagWrap>
          <ErrorBoundary fallback={<>Error :)</>}>
            <Suspense fallback={<FallbackSkeletonLists len={6} />}>
              <TagLists tag={tag!!} />
            </Suspense>
          </ErrorBoundary>
        </S.TagWrap>
      </S.TagListContainer>
    </>
  );
}
