import * as S from "./style";
import { useGetApost } from "../../../querys/list/list.query";
import { ParamType } from "../../../types/param/param.type";
import aprofile from ".././../.././assets/images/aprofile.png";
import android from ".././../.././assets/logo/Android.svg";
import design from ".././../.././assets/logo/Design.svg";
import ios from ".././../.././assets/logo/Ios.svg";
import server from ".././../.././assets/logo/Server.svg";
import web from ".././../.././assets/logo/Web1.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailViewImg from "./detailViewImg";
import { useRecoilState } from "recoil";
import { ImgModal } from "../../../recoil/detail/DetailAtom";

export default function DetailViewMore({ postId }: ParamType) {
  const { data: getPost } = useGetApost({ postId },{suspense:true}); //게시글 정보 가져오기
  const [modal, SetModal] = useRecoilState<boolean>(ImgModal);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <S.DetailViewProfileDevLogoContainer>
        <S.DetailViewProfileContainer>
          <S.DetailViewProfileImg
            src={getPost?.data.profileUrl ? getPost?.data.profileUrl : aprofile}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "13px",
            }}
          >
            <S.DetailViewProfileName>
              {getPost?.data.userName}
            </S.DetailViewProfileName>
            <S.DetailViewClassInfo>
              {getPost?.data.stdInfo.grade}학년 {getPost?.data.stdInfo.room}반{" "}
              {getPost?.data.stdInfo.number}번
            </S.DetailViewClassInfo>
          </div>
        </S.DetailViewProfileContainer>

        <S.DetailViewDevLogo
          src={
            getPost?.data.tag === "WEB"
              ? web
              : getPost?.data.tag === "SERVER"
              ? server
              : getPost?.data.tag === "IOS"
              ? ios
              : getPost?.data.tag === "DESIGN"
              ? design
              : android
          }
          alt="개발"
        />
      </S.DetailViewProfileDevLogoContainer>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <S.DetailViewContentContainer>
          {getPost?.data.content}
        </S.DetailViewContentContainer>

        <div style={{ width: "240px", height: "228px", marginRight: "30px" }}>
          {getPost?.data.imgUrls && getPost?.data.imgUrls.length >= 1 ? (
            <div style={{ cursor: "pointer" }}>
              <Slider {...settings}>
                {getPost?.data.imgUrls.map((imgs: string, idx) => {
                  return (
                    <S.DetailViewImg
                      key={idx}
                      src={imgs}
                      onClick={() => SetModal(!modal)}
                    />
                  );
                })}
              </Slider>
            </div>
          ) : (
            <S.DetailViewNoneImg>이미지가 없음</S.DetailViewNoneImg>
          )}
        </div>
        {modal && <DetailViewImg Img={getPost?.data.imgUrls!!} />}
      </div>
    </div>
  );
}
