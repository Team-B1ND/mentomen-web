import * as S from "./style";

function IntroTop() {
  return (
    <S.FirstSection>
      <S.FirstSectionTitle>
        멘토와 멘티를 이어주다, 멘투멘입니다.
      </S.FirstSectionTitle>

      <S.SecondSectionWrap>
        <S.SecondSectionText>
          프로젝트를 하면서 막혔던 것을
          <S.SecondSectionStrongText> 멘토에게 질문 </S.SecondSectionStrongText>
          해보세요.
        </S.SecondSectionText>
        <S.SecondSectionText>
          멘토들을 통해 프로젝트를 하며 막혔던 부분을 도움 받을 수 있습니다.
        </S.SecondSectionText>
      </S.SecondSectionWrap>
    </S.FirstSection>
  );
}

export default IntroTop;
