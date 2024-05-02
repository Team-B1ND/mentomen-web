import { useEscCloseModal } from "@/src/hooks/Modal";
import { useLockScroll } from "@/src/hooks/Scroll";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Flex } from "@/src/stories/layout";

interface Props {
  imgUrl: string;
  setIsActiveDetailImage: Dispatch<SetStateAction<boolean>>;
}

const ReadMoreImage = ({ imgUrl, setIsActiveDetailImage }: Props) => {
  useEscCloseModal(() => setIsActiveDetailImage(false));
  useLockScroll();

  return (
    <Container onClick={() => setIsActiveDetailImage(false)}>
      <CloseIcon size={27} onClick={() => setIsActiveDetailImage(false)} />
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <ReadMoreImg
          src={imgUrl}
          width={1000}
          height={1000}
          style={{ height: "100vh" }}
          alt="전체보기"
        />
      </Wrapper>
    </Container>
  );
};

export default ReadMoreImage;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
  background-color: rgba(0, 0, 0, 0.8);
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

const CloseIcon = styled(AiOutlineClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
`;

const Wrapper = styled.div`
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;

const ReadMoreImg = styled(Image)`
  object-fit: contain;
  outline: none;
  border: none;
`;
