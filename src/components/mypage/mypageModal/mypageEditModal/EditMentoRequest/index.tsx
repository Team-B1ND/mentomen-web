import * as S from "../style";
import EditContent from "./EditContent";
import EditImgShow from "./EditImgShow";
import EditTagChoice from "./EditTagChoice";

export default function EditMentoRequest() {
  return (
    <div>
      <S.EditModalTextContainer>
        <S.EditModalText>멘토 요청 수정하기</S.EditModalText>
      </S.EditModalTextContainer>

      <S.EditModalContainer>
        <S.EditModalProfileTextAreaContainer>
          <S.EditModalContentAndTagContainer>
            <S.EditModalContentContainer>
              <EditContent />
            </S.EditModalContentContainer>

            <S.EditModalTagContainer>
              <EditTagChoice />
            </S.EditModalTagContainer>
          </S.EditModalContentAndTagContainer>
        </S.EditModalProfileTextAreaContainer>

        <S.EditModalImgContainer>
          <EditImgShow />
        </S.EditModalImgContainer>
      </S.EditModalContainer>
    </div>
  );
}
