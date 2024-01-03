import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideOptions } from "../../../constants/Slide/slide.constant";
import { ItemImage, SlideWrapper, StyledSlider } from "../../../style/slide";

interface Props {
  imgUrls: string[];
}

const DetailImage = ({ imgUrls }: Props) => {
  return (
    <S.ImageContainer>
      <S.ImageWrapper>
        {imgUrls !== null ? (
          <SlideWrapper>
            <StyledSlider cursorSize="28px" {...slideOptions}>
              {imgUrls.map((item, idx) => (
                <ItemImage
                  key={idx}
                  src={item}
                  onClick={() => window.open(item, "_blank")}
                  cursor={"pointer"}
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
