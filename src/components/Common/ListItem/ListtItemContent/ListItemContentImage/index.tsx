import * as S from "../../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideOptions } from "@/src/constants/Slide/slide.constant";
import { SlideWrapper, StyledSlider } from "@/src/styles/slide";
import ImageView from "../../../ImageView";

const ListItemContentImage = ({ imgUrls }: { imgUrls: string[] }) => {
  return (
    <S.ImageContainer sizeOfImages={imgUrls?.length}>
      <SlideWrapper>
        <StyledSlider {...slideOptions}>
          {imgUrls.map((item, idx) => (
            <ImageView key={idx} src={item} alt="이미지" />
          ))}
        </StyledSlider>
      </SlideWrapper>
    </S.ImageContainer>
  );
};

export default ListItemContentImage;
