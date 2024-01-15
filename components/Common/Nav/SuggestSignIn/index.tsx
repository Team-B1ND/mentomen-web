import Title from "../../Title";
import handUp from "@/public/icons/title/handUp.png";
import handshake from "@/public/icons/logo/handshake.png";
import * as S from "./style";
import { DAUTH_URL } from "@/constants/Auth/auth.constant";

const SuggestSignIn = () => {
  return (
    <S.Container>
      <Title
        titleIcon={handUp}
        titleText="아직 멘투멘에 로그인을 안했다면?"
        subTitleText="도담도담 계정으로 멘투멘을 시작해 보세요!"
      />

      <S.SuggestSignInBox>
        <button onClick={() => (window.location.href = DAUTH_URL)}>
          <S.MenToMenIcon src={handshake} alt="멘투멘" />
          <S.MenToMenStartText>멘투멘 시작하기</S.MenToMenStartText>
        </button>
      </S.SuggestSignInBox>
    </S.Container>
  );
};

export default SuggestSignIn;
