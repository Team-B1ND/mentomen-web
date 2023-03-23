import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ImgModal } from "../../../../recoil/Detail/DetailAtom";
import * as S from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSlideSettings } from "../../../../types/Slide/slide.type";

interface Props {
  Img: string[];
}
export default function DetailViewImg({ Img }: Props) {
  const [imgmodal, SetImgModal] = useRecoilState<boolean>(ImgModal);

  useEffect(() => {
    document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <S.DetailViewImgContainer onClick={() => SetImgModal(!imgmodal)}>
      <S.DetailViewImgLayOut onClick={(e) => e.stopPropagation()}>
        <Slider {...useSlideSettings}>
          {Img.map((imgs: string, idx) => {
            return (
              <S.DetailViewImg
                key={idx}
                src={imgs}
                onClick={() => window.open(imgs, "_blank")}
              />
            );
          })}
        </Slider>
      </S.DetailViewImgLayOut>
    </S.DetailViewImgContainer>
  );
}
