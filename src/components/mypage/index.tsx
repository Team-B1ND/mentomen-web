import * as S from "./style";
import React, { Suspense } from "react";
import { useUserInfo } from "../../querys/user/user.query";
import ProfileBar from "../common/Profile";
import MyPageList from "./myPageList";
import ErrorBoundary from "../common/errorboundary";
import FallbackSkeletonLists from "../common/fallbackskeleton/lists";
import { useRecoilState } from "recoil";
import { MyPageModal } from "../../recoil/mypage/mypageAtom";
import MypageModal from "./mypageModal";

function Mypage() {
  const { data: UserInfo } = useUserInfo();
  const [myPageModal, SetMyPageModal] = useRecoilState<boolean>(MyPageModal);
  return (
    <>
      <ProfileBar />
      <S.MyPageContainer>
        <S.MyPageWrap>
          <ErrorBoundary fallback={<>Error :)</>}>
            <Suspense fallback={<FallbackSkeletonLists len={6} />}>
              <MyPageList />
            </Suspense>
          </ErrorBoundary>
        </S.MyPageWrap>
      </S.MyPageContainer>
      {myPageModal && <MypageModal />}
    </>
  );
}

export default React.memo(Mypage);
