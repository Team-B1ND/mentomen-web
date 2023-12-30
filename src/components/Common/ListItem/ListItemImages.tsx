import * as S from "./style";
import { getTagIcon } from "../../../util/Tag/getTagIcon";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  imgUrls: string[];
  tag: string;
}

const ListItemImages = ({ imgUrls, tag }: Props) => {
  return (
    <S.ImageContainer sizeOfImages={imgUrls?.length}>
      <S.TagIcon src={getTagIcon(tag)} alt="이미지 없음" />
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={imgUrls?.length > 1 && true}
      >
        {imgUrls.map((img, idx) => {
          return <S.ItemImage key={idx} src={img} alt="이미지 없음" />;
        })}
      </Carousel>
    </S.ImageContainer>
  );
};

export default ListItemImages;
