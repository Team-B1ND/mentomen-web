import { useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import * as S from "./style";
import MypageModal from "../../MyPage/MyPageModal";
import {
  MypageEditModal,
  MyPageModal,
} from "../../../recoil/MyPage/mypageAtom";
import { useRecoilState } from "recoil";
import useTokenCheck from "../../../hooks/\bAuth/useTokenCheck";
import ProfileBar from "../../\bCommon/Profile";
import HomeMentoRequest from "./HomeMentoRequest";
import HomeList from "./HomeList";
import ErrorBoundary from "../../\bCommon/errorboundary";
import FallbackSkeletonLists from "../../\bCommon/fallbackskeleton/lists";

const Home = () => {
  const { isAuthority } = useTokenCheck();
  const [myPageModal, SetMyPageModal] = useRecoilState<boolean>(MyPageModal);
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
              <Suspense fallback={<FallbackSkeletonLists len={6} />}>
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
