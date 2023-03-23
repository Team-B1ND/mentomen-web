import * as S from "../style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { ImgList } from "../../../../../recoil/Home/HomeAtom";
import uploadImg from "../../.././../.././assets/images/uploadImg.svg";
import { useRef, useCallback } from "react";
import { useSlideSettings } from "../../../../../hooks/Slide/useSlideSetting";

export default function HomeImgShow() {
  const [imgList, SetImgList] = useRecoilState<string[]>(ImgList);
  const imgRef = useRef<any>();

  const saveImgFile = useCallback(() => {
    SetImgList([...imgRef.current.files]);
  }, []);

  return (
    <>
      <div style={{ width: "200px", height: "180px" }}>
        {imgList.length !== 0 ? (
          <Slider {...useSlideSettings}>
            {imgList.map((img: any, idx) => {
              return (
                <S.HomeMentoRequestUploadImg
                  key={idx}
                  src={URL.createObjectURL(img)}
                />
              );
            })}
          </Slider>
        ) : (
          <S.HomeMentoRequestUploadNoneImg>
            이미지가 없습니다.
          </S.HomeMentoRequestUploadNoneImg>
        )}
      </div>

      <label htmlFor="Img">
        <S.HomeMentoRequestUploadImgBtn src={uploadImg} alt="" />
      </label>
      <input
        type="file"
        id="Img"
        accept="image/*"
        multiple
        onChange={saveImgFile}
        ref={imgRef}
        style={{ display: "none" }}
      />
    </>
  );
}
