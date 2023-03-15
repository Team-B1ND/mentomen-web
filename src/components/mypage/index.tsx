import * as S from "./style";
import React, { Suspense } from "react";
import { useUserInfo } from "../../querys/user/user.query";
import ProfileBar from "../common/profile";
import MyPageList from "./myPageList";
import ErrorBoundary from "../common/errorboundary";
import FallbackSkeletonLists from "../common/fallbackskeleton/lists";

function Mypage() {
  const { data: UserInfo } = useUserInfo();
  return (
    <>
      <ProfileBar />
      <S.MyPageContainer>
        <S.MyPageWrap>
          <ErrorBoundary fallback={<>Error :)</>}>
            <Suspense fallback={<FallbackSkeletonLists />}>
              <MyPageList />
            </Suspense>
          </ErrorBoundary>
        </S.MyPageWrap>
      </S.MyPageContainer>
    </>
  );
}

export default React.memo(Mypage);
