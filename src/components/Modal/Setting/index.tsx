import useEscCloseModal from "@/src/hooks/Modal/useEscCloseModal";
import { CSSObject } from "styled-components";
import * as S from "./style";

interface Props {
  modalEl: React.RefObject<HTMLDivElement>;
  customStyle?: CSSObject;
  closeModalEvent: () => void;
  modifyEvent?: () => void;
  deleteEvent?: () => void;
}

const Setting = ({ ...attr }: Props) => {
  useEscCloseModal(attr.closeModalEvent);
  return (
    <S.Container ref={attr.modalEl} customstyle={attr.customStyle}>
      <S.Button onClick={attr.modifyEvent} buttonType={"MODIFY"}>
        <S.EditIcon />
        <p>수정</p>
      </S.Button>
      <S.Button onClick={attr.deleteEvent} buttonType={"DELETE"}>
        <S.DeleteIcon />
        <p>삭제</p>
      </S.Button>
    </S.Container>
  );
};

export default Setting;
