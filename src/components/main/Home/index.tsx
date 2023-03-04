import { useNavigate } from "react-router-dom";
import React from "react";
import useTokenCheck from "../../../hooks/auth/useTokenCheck";
import * as S from './style';
import HomeMentoRequest from "./HomeMentoreqRuest";
import HomeList from "./HomeList";
import ProfileBar from "../../common/Profile";

const Home = () => {
  const { isAuthority } = useTokenCheck();
  const navigate = useNavigate();
  if (!isAuthority) {
    window.alert("유효한토큰");
    navigate("/start");
  }

  return (
    <div>
      <ProfileBar/>
      <S.HomeContainer>
        <div style={{margin: '0 auto'}}>
          <S.HomeMentoReguestContainer>
            <HomeMentoRequest />
          </S.HomeMentoReguestContainer>
        </div>
        <S.HomeWrap>
          <HomeList />
        </S.HomeWrap>
      </S.HomeContainer>
    </div>
  );
};

export default React.memo(Home);
