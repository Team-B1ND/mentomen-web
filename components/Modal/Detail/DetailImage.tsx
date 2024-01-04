/* eslint-disable @next/next/no-img-element */
import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideOptions } from "@/constants/Slide/slide.constant";
import { ItemImage, SlideWrapper, StyledSlider } from "@/style/slide";
import { useRef } from "react";

const DetailImage = ({ imgUrls }: { imgUrls: string[] }) => {
  const imageHeightRef = useRef<HTMLImageElement>(null);

  return (
    <S.ImageContainer>
      <S.ImageWrapper>
        {imgUrls !== null ? (
          <SlideWrapper imageHeight={imageHeightRef.current?.offsetHeight}>
            <StyledSlider cursorSize="28px" cursor="pointer" {...slideOptions}>
              {imgUrls.map((item, idx) => (
                <ItemImage
                  title="클릭하여 자세히보기"
                  ref={imageHeightRef}
                  key={idx}
                  src={item}
                  onClick={() => window.open(item, "_blank")}
                  alt="이미지 없음"
                />
              ))}
            </StyledSlider>
          </SlideWrapper>
        ) : (
          <S.NoneImage>이미지가 없습니다.</S.NoneImage>
        )}
      </S.ImageWrapper>
    </S.ImageContainer>
  );
};

export default DetailImage;
