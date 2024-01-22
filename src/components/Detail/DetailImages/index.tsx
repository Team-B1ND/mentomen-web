import ViewImage from "@/src/components/Modal/ViewImage";
import { slideOptions } from "@/src/constants/Slide/slide.constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemImage, SlideWrapper, StyledSlider } from "@/src/styles/slide";
import React, { useState } from "react";
import Portal from "../../Modal/Portal";
import * as S from "./style";

const DetailImages = ({ imgUrls }: { imgUrls: string[] }) => {
  const [isActiveDetailImage, setIsActiveDetailImage] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <S.ImageContainer>
        <SlideWrapper>
          <StyledSlider cursorSize="28px" cursor="pointer" {...slideOptions}>
            {imgUrls.map((item, idx) => (
              <ItemImage
                title="클릭하여 자세히보기"
                key={idx}
                src={item}
                onClick={() => {
                  setIsActiveDetailImage(true);
                  setImgUrl(item);
                }}
                alt="이미지"
              />
            ))}
          </StyledSlider>
        </SlideWrapper>
      </S.ImageContainer>

      {isActiveDetailImage && (
        <Portal>
          <ViewImage
            imgUrl={imgUrl}
            setIsActiveDetailImage={setIsActiveDetailImage}
          />
        </Portal>
      )}
    </>
  );
};

export default DetailImages;
