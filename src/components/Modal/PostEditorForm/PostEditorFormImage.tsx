import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemImage, SlideWrapper, StyledSlider } from "@/style/slide";
import { slideOptions } from "@/constants/Slide/slide.constant";

const PostEditorFormImage = ({ imgUrls }: { imgUrls: string[] }) => {
  return (
    <S.ImageContainer sizeOfImgUrl={imgUrls.length}>
      <S.ImageWrapper>
        {imgUrls?.length > 0 ? (
          <SlideWrapper>
            <StyledSlider {...slideOptions}>
              {imgUrls.map((item, idx) => (
                <ItemImage key={idx} src={item} alt="이미지 없음" />
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
