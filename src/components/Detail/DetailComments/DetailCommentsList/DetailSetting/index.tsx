import useEscCloseModal from "@/src/hooks/Modal/useEscCloseModal";
import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface Props {
  setCommentId: Dispatch<SetStateAction<number>>;
  setIsEditComment: Dispatch<SetStateAction<boolean>>;
  handleDeleteComment: () => void;
}

const DetailSetting = ({ ...attr }: Props) => {
  useEscCloseModal(() => attr.setCommentId(0));
  return (
    <>
      <S.Button onClick={() => attr.setIsEditComment(true)}>
        <S.EditIcon />
        <p>수정</p>
      </S.Button>
      <S.Button onClick={attr.handleDeleteComment}>
        <S.DeleteIcon />
        <p>삭제</p>
      </S.Button>
    </>
  );
};

export default DetailSetting;
