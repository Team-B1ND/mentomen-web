import ReadMoreImage from "@/src/components/Modal/ReadMoreImage";
import { slideOptions } from "@/src/constants/Slide/slide.constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideWrapper, StyledSlider } from "@/src/styles/slide";
import React, { useState } from "react";
import Portal from "../../Modal/Portal";
import * as S from "./style";
import ImageView from "../../common/ImageView";

const DetailImages = ({ imgUrls }: { imgUrls: string[] }) => {
  const [isActiveDetailImage, setIsActiveDetailImage] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <S.ImageContainer>
        <SlideWrapper>
          <StyledSlider {...slideOptions}>
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
