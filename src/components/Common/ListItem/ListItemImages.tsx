import * as S from "./style";
import { getTagIcon } from "../../../util/Tag/getTagIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideOptions } from "../../../constants/Slide/slide.constant";
import { ItemImage, SlideWrapper, StyledSlider } from "../../../style/slide";

interface Props {
  imgUrls: string[];
  tag: string;
}

const ListItemImages = ({ imgUrls, tag }: Props) => {
  return (
    <S.ImageContainer sizeOfImages={imgUrls?.length}>
      <S.TagIcon src={getTagIcon(tag)} alt="이미지 없음" />
      <SlideWrapper>
        <StyledSlider {...slideOptions}>
          {imgUrls.map((item, idx) => (
            <ItemImage key={idx} src={item} alt="이미지 없음" />
          ))}
        </StyledSlider>
      </SlideWrapper>
    </S.ImageContainer>
  );
};

export default ListItemImages;
