import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ImgModal } from "../../../../recoil/detail/DetailAtom";
import * as S from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  Img: string[];
}
export default function DetailViewImg({ Img }: Props) {
  const [modal, SetModal] = useRecoilState<boolean>(ImgModal);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

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
    <S.DetailViewImgContainer onClick={() => SetModal(!modal)}>
      <S.DetailViewImgLayOut onClick={(e) => e.stopPropagation()}>
        <Slider {...settings}>
          {Img.map((imgs: string, idx) => {
            return <S.DetailViewImg key={idx} src={imgs} />;
          })}
        </Slider>
      </S.DetailViewImgLayOut>
    </S.DetailViewImgContainer>
  );
}
