import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useRef } from "react";
import { useRecoilState } from "recoil";
import { useSlideSettings } from "../../../../../../hooks/Slide/useSlideSetting";
import { MyPostImg } from "../../../../../../recoil/MyPage/mypageAtom";
import uploadImg from "../../../../.././../assets/images/uploadImg.svg";
import * as S from "../../../../../Main/Home/HomeMentoRequest/style";

export default function EditImgShow() {
  const [myPostImg, SetMyPostImg] = useRecoilState<string[]>(MyPostImg);
  const imgRefEdit = useRef<any>();

  const saveEditImgFile = useCallback(() => {
    SetMyPostImg([...imgRefEdit.current.files]);
  }, []);

  return (
    <>
      <div style={{ width: "200px", height: "180px" }}>
        {myPostImg.length !== 0 ? (
          <Slider {...useSlideSettings}>
            {myPostImg.map((img: any, idx) => {
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
            이미지를 새로 추가해주세요.
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
        onChange={saveEditImgFile}
        ref={imgRefEdit}
        style={{ display: "none" }}
      />
    </>
  );
}
