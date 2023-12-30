import * as S from "./style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  imgUrls: string[];
}

const PostEditorFormImage = ({ imgUrls }: Props) => {
  return (
    <S.Image sizeOfImgUrl={imgUrls.length}>
      <S.ImageWrapper>
        {imgUrls?.length > 0 ? (
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {imgUrls.map((img, idx) => {
              return <img key={idx} src={img} alt="이미지 없음" />;
            })}
          </Carousel>
        ) : (
          <S.ImageUploadText>이미지를 업로드 해주세요!</S.ImageUploadText>
        )}
      </S.ImageWrapper>
    </S.Image>
  );
};

export default PostEditorFormImage;
