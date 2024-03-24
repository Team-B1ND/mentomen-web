import { useEscCloseModal } from "@/src/hooks/Modal";
import { AiOutlineDelete } from "@react-icons/all-files/ai/AiOutlineDelete";
import { AiOutlineEdit } from "@react-icons/all-files/ai/AiOutlineEdit";
import styled, { CSSObject } from "styled-components";
import { Flex } from "../../layout";

interface Props {
  modalEl: React.RefObject<HTMLDivElement>;
  customStyle?: CSSObject;
  closeModalEvent: () => void;
  modifyEvent?: () => void;
  deleteEvent?: () => void;
}

export const Setting = ({ ...attr }: Props) => {
  useEscCloseModal(attr.closeModalEvent);
  return (
    <Container ref={attr.modalEl} customstyle={attr.customStyle}>
      <Button onClick={attr.modifyEvent} buttonType={"MODIFY"}>
        <EditIcon />
        <p>수정</p>
      </Button>
      <Button onClick={attr.deleteEvent} buttonType={"DELETE"}>
        <DeleteIcon />
        <p>삭제</p>
      </Button>
    </Container>
  );
};

const Container = styled.div<{ customstyle?: CSSObject }>`
  width: 115px;
  height: 85px;

  font-size: 15px;
  background-color: #fff;
  border-radius: 5px;

  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
  font-size: 15px;

  position: absolute;
  top: 32px;
  left: 10px;

  z-index: 2;

  ${Flex({ flexDirection: "column", justifyContent: "center" })}
  ${({ customstyle }) => customstyle};
`;

const Button = styled.button<{ buttonType: "MODIFY" | "DELETE" }>`
  width: 100%;
  height: 41.5%;

  cursor: pointer;
  color: #0f0f0f;
  font-size: 14px;

  outline: none;
  border: none;
  background-color: transparent;
  padding-left: 18px;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #ddd;
    color: ${({ buttonType }) =>
      buttonType === "MODIFY" ? "#007aff" : "#ff3b30"};
  }

  ${Flex({ alignItems: "center", columnGap: "10px" })};
`;

const EditIcon = styled(AiOutlineEdit)`
  width: 23px;
  height: 23px;
`;

const DeleteIcon = styled(AiOutlineDelete)`
  width: 22px;
  height: 22px;
`;
