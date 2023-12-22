import IOStest from "../../../assets/logo/IOStest.png";
import useHideHeaderOrNav from "../../../hooks/common/useHideHeaderOrNav";
import StartButton from "../../Common/Button/StartButton";
import * as S from "./style";

function Start() {
  useHideHeaderOrNav("Nav");
  return (
    <S.StartContainer>
      <S.StartLeftWrap>
        <S.StartTextWrap>
          <S.StartText>멘토 멘티 찾기 서비스</S.StartText>
          <S.StartText>멘투멘을 만나보세요</S.StartText>
        </S.StartTextWrap>

        <S.StartMidText>
          멘투멘은 멘토와 멘티를 서로 이어주는 서비스입니다.
        </S.StartMidText>

        <StartButton />
      </S.StartLeftWrap>

      <S.StartImg src={IOStest} />
    </S.StartContainer>
  );
}
export default Start;
