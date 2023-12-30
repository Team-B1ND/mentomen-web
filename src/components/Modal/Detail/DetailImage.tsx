import * as S from "./style";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ItemImage, NoneImage } from "../../Common/ListItem/style";

interface Props {
  imgUrls: string[];
}

const DetailImage = ({ imgUrls }: Props) => {
  return (
    <S.ImageContainer>
      {imgUrls !== null ? (
        <Carousel
          showStatus={false}
          showThumbs={false}
          showIndicators={imgUrls?.length > 1 && true}
        >
          {imgUrls.map((img, idx) => {
            return <ItemImage key={idx} src={img} alt="이미지 없음" />;
          })}
        </Carousel>
      ) : (
        <NoneImage>이미지가 없습니다.</NoneImage>
      )}
    </S.ImageContainer>
  );
};

export default DetailImage;
