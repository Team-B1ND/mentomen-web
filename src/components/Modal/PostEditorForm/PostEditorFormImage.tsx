import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideWrapper, StyledSlider } from "../../../style/slide";

interface Props {
  imgUrls: string[];
}

const PostEditorFormImage = ({ imgUrls }: Props) => {
  return (
    <S.Image sizeOfImgUrl={imgUrls.length}>
      <S.ImageWrapper>
        {imgUrls?.length > 0 ? (
          <SlideWrapper>
            <StyledSlider>
              {imgUrls.map((item, idx) => (
                <img key={idx} src={item} alt="이미지 없음" />
              ))}
            </StyledSlider>
          </SlideWrapper>
        ) : (
          <S.ImageUploadText>이미지를 업로드 해주세요!</S.ImageUploadText>
        )}
      </S.ImageWrapper>
    </S.Image>
  );
};

export default PostEditorFormImage;
