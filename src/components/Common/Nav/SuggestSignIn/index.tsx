import lock from "@/public/icons/title/lock.png";
import handshake from "@/public/icons/logo/handshake.png";
import * as S from "./style";
import { Title } from "@/src/stories/ui";
import { redirectToDAuthLogin } from "@/src/stories/utils";

const SuggestSignIn = () => {
  return (
    <S.Container>
      <Title
        titleIcon={lock}
        titleText="아직 멘투멘에 로그인을 안했다면?"
        subTitleText="도담도담 계정으로 멘투멘을 시작해 보세요!"
      />

      <S.SuggestSignInBox>
        <button onClick={redirectToDAuthLogin}>
          <S.MenToMenIcon src={handshake} alt="멘투멘" />
          <S.MenToMenStartText>멘투멘 시작하기</S.MenToMenStartText>
        </button>
      </S.SuggestSignInBox>
    </S.Container>
  );
};

export default SuggestSignIn;
