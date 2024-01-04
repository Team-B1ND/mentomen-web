import iPhone from "@/assets/images/iPhone.png";
import StartButton from "../../../Common/Button/StartButton";
import * as S from "./style";

function IntroBottom() {
  return (
    <S.ThirdSection>
      <S.ThirdSectionWrap>
        <S.ThirdSectionText>멘토찾기</S.ThirdSectionText>

        <S.ThirdSectionSubTextContainer>
          <S.ThirdSectionText1>도움이 필요할 때,</S.ThirdSectionText1>
          <S.ThirdSectionText1>도움을 줄 수 있는 멘토 찾기</S.ThirdSectionText1>
        </S.ThirdSectionSubTextContainer>

        <StartButton />
      </S.ThirdSectionWrap>

      <S.ThirdSectionImg src={iPhone} alt="이미지 없음" />
    </S.ThirdSection>
  );
}

export default IntroBottom;
