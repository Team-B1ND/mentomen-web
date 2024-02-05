import useLockScroll from "@/src/hooks/common/useLockScroll";
import useEscCloseModal from "@/src/hooks/Modal/useEscCloseModal";
import { Dispatch, SetStateAction } from "react";
import ImageView from "../../Common/ImageView";
import * as S from "./style";

interface Props {
  imgUrl: string;
  setIsActiveDetailImage: Dispatch<SetStateAction<boolean>>;
}

const ReadMoreImage = ({ imgUrl, setIsActiveDetailImage }: Props) => {
  useEscCloseModal(() => setIsActiveDetailImage(false));
  useLockScroll();

  return (
    <S.Container onClick={() => setIsActiveDetailImage(false)}>
      <S.CloseIcon size={27} onClick={() => setIsActiveDetailImage(false)} />
      <S.Wrapper onClick={(e) => e.stopPropagation()}>
        <ImageView
          src={imgUrl}
          customstyle={{ height: "100vh" }}
          alt="전체보기"
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default ReadMoreImage;
