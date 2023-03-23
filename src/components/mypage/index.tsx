import React, { Suspense } from "react";
import { useUserInfo } from "../../querys/User/user.query";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { MyPageModal } from "../../recoil/MyPage/mypageAtom";
import MypageModal from "./MyPageModal";
import ProfileBar from "../\bCommon/Profile";
import ErrorBoundary from "../\bCommon/errorboundary";
import FallbackSkeletonLists from "../\bCommon/fallbackskeleton/lists";
import MyPageList from "./MyPageList";

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
