import { useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import useTokenCheck from "../../../hooks/auth/useTokenCheck";
import * as S from "./style";
import HomeMentoRequest from "./HomeMentoRequest";
import HomeList from "./HomeList";
import ProfileBar from "../../common/profile";
import ErrorBoundary from "../../common/errorboundary";
import FallbackSkeletonLists from "../../common/fallbackskeleton/lists";
import MypageModal from "../../mypage/mypageModal";
import { MypageEditModal, MyPageModal } from "../../../recoil/mypage/mypageAtom";
import { useRecoilState } from "recoil";
import MyPageEditModal from "../../mypage/mypageModal/mypageEditModal/indext";

const Home = () => {
  const { isAuthority } = useTokenCheck();
  const [myPageModal,SetMyPageModal] = useRecoilState<boolean>(MyPageModal);
  const navigate = useNavigate();
  if (!isAuthority) {
    window.alert("유효한토큰");
    navigate("/start");
  }

  return (
    <div>
      <ProfileBar />
      <S.HomeContainer>
        <S.HomeWrap>
          <div>
            <S.HomeMentoRequestContainer>
              <HomeMentoRequest />
            </S.HomeMentoRequestContainer>
            <ErrorBoundary fallback={<>Error :)</>}>
              <Suspense fallback={<FallbackSkeletonLists />}>
                <HomeList />
              </Suspense>
            </ErrorBoundary>
          </div>
        </S.HomeWrap>
      </S.HomeContainer>
      {myPageModal && <MypageModal />}
    </div>
  );
};

export default React.memo(Home);
