import * as S from "./style";
import React, { Suspense } from "react";
import { useUserInfo } from "../../querys/User/user.query";
import ProfileBar from "../Common/Profile";
import MyPageList from "./MyPageList";
import ErrorBoundary from "../Common/errorboundary";
import FallbackSkeletonLists from "../Common/fallbackskeleton/lists";
import { useRecoilState } from "recoil";
import { MyPageModal } from "../../recoil/MyPage/mypageAtom";
import MypageModal from "./MyPageModal";

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
