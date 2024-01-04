import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideWrapper, StyledSlider } from "@/style/slide";
import Image from "next/image";
import { useRef } from "react";

const PostEditorFormImage = ({ imgUrls }: { imgUrls: string[] }) => {
  const imageHeightRef = useRef<HTMLImageElement>(null);

  return (
    <S.ImageContainer sizeOfImgUrl={imgUrls.length}>
      <S.ImageWrapper>
        {imgUrls?.length > 0 ? (
          <SlideWrapper imageHeight={imageHeightRef.current?.offsetHeight}>
            <StyledSlider>
              {imgUrls.map((item, idx) => (
                <Image
                  ref={imageHeightRef}
                  key={idx}
                  src={item}
                  width={1000}
                  height={1000}
                  layout="responsive"
                  style={S.SlideImage}
                  alt="이미지 없음"
                />
              ))}
            </StyledSlider>
          </SlideWrapper>
        ) : (
          <S.ImageUploadText>이미지를 업로드 해주세요!</S.ImageUploadText>
        )}
      </S.ImageWrapper>
    </S.ImageContainer>
  );
};

export default PostEditorFormImage;
