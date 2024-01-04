import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideWrapper, StyledSlider } from "@/style/slide";
import Image from "next/image";

interface Props {
  imgUrls: string[];
}

const PostEditorFormImage = ({ imgUrls }: Props) => {
  return (
    <S.ImageContainer sizeOfImgUrl={imgUrls.length}>
      <S.ImageWrapper>
        {imgUrls?.length > 0 ? (
          <SlideWrapper>
            <StyledSlider>
              {imgUrls.map((item, idx) => (
                <Image
                  key={idx}
                  src={item}
                  width={10}
                  height={10}
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
