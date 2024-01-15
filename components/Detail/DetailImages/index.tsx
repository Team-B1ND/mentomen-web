import { slideOptions } from "@/constants/Slide/slide.constant";
import { ItemImage, SlideWrapper, StyledSlider } from "@/style/slide";
import React, { useState } from "react";
import Portal from "../../Modal/Portal";
import DetailImageModal from "./DetailImageModal";
import * as S from "./style";

const DetailImages = ({ imgUrls }: { imgUrls: string[] }) => {
  const [isActiveDetailImage, setIsActiveDetailImage] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <S.ImageContainer>
        <S.ImageWrapper>
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
        </S.ImageWrapper>
      </S.ImageContainer>

      {isActiveDetailImage && (
        <Portal>
          <DetailImageModal
            imgUrl={imgUrl}
            setIsActiveDetailImage={setIsActiveDetailImage}
          />
        </Portal>
      )}
    </>
  );
};

export default DetailImages;