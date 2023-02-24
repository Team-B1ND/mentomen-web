import * as S from '../style';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from 'recoil';
import { ImgList } from '../../../../../recoil/HomeAtom';
import uploadImg from '../../.././../.././assets/images/uploadImg.svg';
import { useRef,useCallback } from 'react';

export default function HomeImgShow(){
    const [imgList,SetImgList] = useRecoilState(ImgList);
    const imgRef = useRef<any>();

    const saveImgFile = useCallback(() => {
        SetImgList([...imgRef.current.files]);
    },[]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <>
            <div style={{width:'200px',height:'180px'}}>
                {imgList.length !== 0 ? (
                    <Slider {...settings}>
                        {imgList.map((img:any,idx) => {
                            return(<S.HomeMentoReguestUploadImg key={idx} src={URL.createObjectURL(img)} />);
                        })}
                    </Slider>)
                    :
                    (   <S.HomeMentoReguestUploadNoneImg>
                            이미지가 없습니다.
                        </S.HomeMentoReguestUploadNoneImg>
                    )
                }
            </div>

            <label htmlFor='Img'> 
                <S.HomeMentoReguestUploadImgBtn 
                    src={uploadImg} 
                    alt='' 
                />
            </label>
            <input 
                type="file"
                id="Img"
                accept="image/*"
                multiple
                onChange={saveImgFile}
                ref={imgRef}
                style={{display:'none'}}
            />
        </>
    );
}