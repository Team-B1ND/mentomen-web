import { useNavigate } from "react-router-dom";
import React from "react";
import useTokenCheck from "../../../hooks/auth/useTokenCheck";
import * as S from "./style";
import HomeMentoRequest from "./HomeMentoRequest";
import HomeList from "./HomeList";
import ProfileBar from "../../common/profile";
const Home = () => {
  const { isAuthority } = useTokenCheck();

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
            <S.HomeMentoReguestContainer>
              <HomeMentoRequest />
            </S.HomeMentoReguestContainer>
            <HomeList />
          </div>
        </S.HomeWrap>
      </S.HomeContainer>
    </div>
  );
};

export default React.memo(Home);
