import useLockScroll from "@/src/hooks/common/useLockScroll";
import useEscCloseModal from "@/src/hooks/Modal/useEscCloseModal";
import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface Props {
  imgUrl: string;
  setIsActiveDetailImage: Dispatch<SetStateAction<boolean>>;
}

const ViewImage = ({ imgUrl, setIsActiveDetailImage }: Props) => {
  useEscCloseModal(() => setIsActiveDetailImage(false));
  useLockScroll();

  return (
    <S.Container onClick={() => setIsActiveDetailImage(false)}>
      <S.CloseIcon size={27} onClick={() => setIsActiveDetailImage(false)} />
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <S.Image src={imgUrl} alt="이미지 없음" />
      </S.Wrapper>
    </S.Container>
  );
};

export default ViewImage;
