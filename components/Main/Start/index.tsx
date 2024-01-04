import iPhone from "@/public/images/iPhone.png";
import useHideHeaderOrNav from "@/hooks/common/useHideHeaderOrNav";
import StartButton from "../../Common/Button/StartButton";

import * as S from "./style";

function Start() {
  useHideHeaderOrNav("Nav");
  return (
    <S.Container>
      <S.Wrapper>
        <S.Introduce>
          <S.TextWrap>
            <S.Text>멘토 멘티 찾기 서비스</S.Text>
            <S.Text>멘투멘을 만나보세요!</S.Text>
          </S.TextWrap>

          <S.MidText>
            멘투멘은 멘토와 멘티를 서로 이어주는 서비스입니다.
          </S.MidText>

          <StartButton />
        </S.Introduce>

        <S.iPhoneImage src={iPhone} alt="이미지 없음" />
      </S.Wrapper>
    </S.Container>
  );
}
export default Start;
