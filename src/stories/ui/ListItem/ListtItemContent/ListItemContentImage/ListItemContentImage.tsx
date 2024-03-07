import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideOptions } from "@/src/constants/Slide/slide.constant";
import styled from "styled-components";
import { Flex, SlideWrapper, StyledSlider } from "@/src/stories/layout";
import { ImageView } from "../../../Image";

export const ListItemContentImage = ({ imgUrls }: { imgUrls: string[] }) => {
  return (
    <ImageContainer sizeOfImages={imgUrls?.length}>
      <SlideWrapper>
        <StyledSlider {...SlideOptions}>
          {imgUrls.map((item, idx) => (
            <ImageView
              key={idx}
              src={item}
              width={520}
              height={520}
              alt="이미지"
            />
          ))}
        </StyledSlider>
      </SlideWrapper>
    </ImageContainer>
  );
};

const ImageContainer = styled.div<{ sizeOfImages: number }>`
  width: 100%;
  height: 100%;

  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;

  background-color: ${({ sizeOfImages }) =>
    sizeOfImages && sizeOfImages > 0 ? "#000" : "#eee"};
  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;
