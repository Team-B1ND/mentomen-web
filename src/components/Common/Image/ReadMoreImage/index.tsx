import { useEscCloseModal } from "@/src/hooks/Modal";
import { useLockScroll } from "@/src/hooks/Scroll";
import { skeletonAnimation } from "@/src/stories/ui";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { Flex } from "../../../../stories/layout";

interface Props {
  imgUrl: string;
  setIsActiveDetailImage: Dispatch<SetStateAction<boolean>>;
}

const ReadMoreImage = ({ imgUrl, setIsActiveDetailImage }: Props) => {
  const [isLoadImage, setIsLoadImage] = useState(true);
  const [isLoadImage2, setIsLoadImage2] = useState(true); // 스켈레톤이 잠깐 나왔다가 없어지는 것을 방지하기 위함

  useEscCloseModal(() => setIsActiveDetailImage(false));
  useLockScroll();

  useEffect(() => {
    setTimeout(() => {
      setIsLoadImage(false);
    }, 500);
  }, []);

  return (
    <Container onClick={() => setIsActiveDetailImage(false)}>
      <CloseIcon size={27} onClick={() => setIsActiveDetailImage(false)} />
      <Wrapper onClick={(e) => e.stopPropagation()}>
        {isLoadImage ? (
          <SkeletonImage />
        ) : (
          <ReadMoreImg
            src={imgUrl}
            width={1000}
            height={1000}
            onLoad={() => setIsLoadImage2(false)}
            style={{ height: "100vh" }}
            alt="전체보기"
          />
        )}
        {isLoadImage2 && <SkeletonImage />}
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

const SkeletonImage = styled.div`
  width: 750px;
  height: 650px;
  border-radius: 10px;

  position: absolute;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;

  ${skeletonAnimation}
`;
