import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../common/errorboundary";
import FallbackSkeletonLists from "../common/fallbackskeleton/lists";
import ProfileBar from "../common/Profile";
import KeyWordList from "./keyWordList";
import * as S from "./style";

export default function KeyWord() {
  const { keyword } = useParams();
  return (
    <>
      <ProfileBar />
      <S.KeyWordContainer>
        <S.KeyWordWrap>
          <ErrorBoundary fallback={<>Error :)</>}>
            <Suspense fallback={<FallbackSkeletonLists len={6} />}>
              <KeyWordList keyword={keyword!!} />
            </Suspense>
          </ErrorBoundary>
        </S.KeyWordWrap>
      </S.KeyWordContainer>
    </>
  );
}
