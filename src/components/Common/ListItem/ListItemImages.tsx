import * as S from "./style";
import { getTagIcon } from "../../../util/Tag/getTagIcon";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Props {
  imgUrls: string[];
  tag: string;
}

const ListItemImages = ({ imgUrls, tag }: Props) => {
  return (
    <S.ImageContainer sizeOfImages={imgUrls?.length}>
      <S.TagIcon src={getTagIcon(tag)} alt="이미지 없음" />
      {imgUrls?.length > 0 ? (
        <Carousel showStatus={false} showThumbs={false}>
          {imgUrls.map((img, idx) => {
            return <S.ItemImage key={idx} src={img} alt="이미지 없음" />;
          })}
        </Carousel>
      ) : (
        <S.NoneImage>이미지가 없습니다.</S.NoneImage>
      )}
    </S.ImageContainer>
  );
};

export default ListItemImages;
