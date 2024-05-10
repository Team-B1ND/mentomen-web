import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideOptions } from "@/src/constants/Slide/slide.constant";
import { styled } from "styled-components";
import { Flex, SlideWrapper, StyledSlider } from "@/src/stories/layout";
import dynamic from "next/dynamic";
const ImageView = dynamic(
  () => import("@/src/components/Common/Image/ImageView"),
  { ssr: false }
);

export const ListItemContentImage = ({ imgUrls }: { imgUrls: string[] }) => {
  return (
    <ImageContainer $sizeOfImages={imgUrls?.length}>
      <SlideWrapper>
        <StyledSlider {...SlideOptions}>
          {imgUrls.map((item, idx) => (
            <ImageView
              key={idx}
              src={item}
              width={470}
              height={470}
              alt="이미지"
            />
          ))}
        </StyledSlider>
      </SlideWrapper>
    </ImageContainer>
  );
};

const ImageContainer = styled.div<{ $sizeOfImages: number }>`
  width: 100%;
  height: 470px;

  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: ${({ $sizeOfImages }) =>
    $sizeOfImages && $sizeOfImages > 0 ? "#000" : "#eee"};

  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;
