import useLockScroll from "@/hooks/common/useLockScroll";
import useEscCloseModal from "@/hooks/common/useEscCloseModal";
import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

const DetailImageModal = ({
  imgUrl,
  setIsActiveDetailImage,
}: {
  imgUrl: string;
  setIsActiveDetailImage: Dispatch<SetStateAction<boolean>>;
}) => {
  useEscCloseModal(setIsActiveDetailImage);
  useLockScroll();

  return (
    <S.DetailImageModalContainer onClick={() => setIsActiveDetailImage(false)}>
      <S.CloseIcon size={27} onClick={() => setIsActiveDetailImage(false)} />
      <S.DetailImageModalWrapper onClick={(e) => e.stopPropagation()}>
        <S.DetailImage src={imgUrl} alt="이미지 없음" />
      </S.DetailImageModalWrapper>
    </S.DetailImageModalContainer>
  );
};

export default DetailImageModal;
