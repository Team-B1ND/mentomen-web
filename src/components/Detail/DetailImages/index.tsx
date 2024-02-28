import { SlideOptions } from "@/src/constants/Slide/slide.constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import * as S from "./style";
import { Portal, SlideWrapper, StyledSlider } from "@/src/stories/layout";
import { ImageView, ReadMoreImage } from "@/src/stories/ui";

const DetailImages = ({ imgUrls }: { imgUrls: string[] }) => {
  const [isActiveDetailImage, setIsActiveDetailImage] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <S.ImageContainer>
        <SlideWrapper>
          <StyledSlider {...SlideOptions}>
            {imgUrls.map((item, idx) => (
              <ImageView
                title="클릭하여 자세히보기"
                key={idx}
                src={item}
                customstyle={{ cursor: "pointer" }}
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
          <ReadMoreImage
            imgUrl={imgUrl}
            setIsActiveDetailImage={setIsActiveDetailImage}
          />
        </Portal>
      )}
    </>
  );
};

export default DetailImages;
