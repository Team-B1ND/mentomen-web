import * as S from "./style";
import HomeTagChoice from "./HomeTagChoice";
import HomeContent from "./HomeContent";
import HomeImgShow from "./HomeImgShow";

export default function HomeMentoRequest() {
  return (
    <div>
      <S.HomeMentoRequestTextContainer>
        <S.HomeMentoRequestText>멘토 요청하기</S.HomeMentoRequestText>
      </S.HomeMentoRequestTextContainer>

      <S.HomeMentoRequestContainer>
        <S.HomeMentoRequestProfileTextAreaContainer>
          <S.HomeMentoRequestContentAndTagContainer>
            <S.HomeMentoRequestContentContainer>
              <HomeContent />
            </S.HomeMentoRequestContentContainer>

            <S.HomeMentoRequestTagContainer>
              <HomeTagChoice />
            </S.HomeMentoRequestTagContainer>
          </S.HomeMentoRequestContentAndTagContainer>
        </S.HomeMentoRequestProfileTextAreaContainer>

        <S.HomeMentoRequestImgContainer>
          <HomeImgShow />
        </S.HomeMentoRequestImgContainer>
      </S.HomeMentoRequestContainer>
    </div>
  );
}
