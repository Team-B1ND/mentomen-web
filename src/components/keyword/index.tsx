import { Suspense } from "react";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../Common/ErrorBoundary";
import FallbackSkeletonLists from "../Common/FallbackSkelethon/Lists";
import ProfileBar from "../Common/Profile";
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
