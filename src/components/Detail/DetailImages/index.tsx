import { SlideOptions } from "@/src/constants/Slide/slide.constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import { Portal, Row, SlideWrapper, StyledSlider } from "@/src/stories/layout";
import { css } from "styled-components";
import dynamic from "next/dynamic";
const ImageView = dynamic(() => import("../../Common/Image/ImageView"), {
  ssr: false,
});
const ReadMoreImage = dynamic(
  () => import("../../Common/Image/ReadMoreImage"),
  { ssr: false }
);

const DetailImages = ({ imgUrls }: { imgUrls: string[] }) => {
  const [isActiveDetailImage, setIsActiveDetailImage] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  return (
    <>
      <Row
        $width={"400px"}
        $height={"400px"}
        $backgroundColor={"#000"}
        $alignItems={"center"}
        $justifyContent={"center"}
        $customStyle={css`
          border-radius: 5px;
          overflow: hidden;
          border: 1px solid #ddd;
        `}
      >
        <SlideWrapper>
          <StyledSlider {...SlideOptions}>
            {imgUrls.map((item, idx) => (
              <ImageView
                title="클릭하여 자세히보기"
                key={idx}
                src={item}
                width={400}
                height={400}
                customstyle={{ cursor: "pointer" }}
                onClick={() => {
                  setIsActiveDetailImage(true);
                  setImgUrl(item);
                }}
                alt="이미지"
              />
            ))}
          </StyledSlider>
        </SlideWrapper>
      </Row>

      {isActiveDetailImage && (
        <Portal>
          <ReadMoreImage
            imgUrl={imgUrl}
            setIsActiveDetailImage={setIsActiveDetailImage}
          />
        </Portal>
      )}
    </>
  );
};

export default DetailImages;
