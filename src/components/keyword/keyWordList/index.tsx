import { useGetKeyWord } from "../../../querys/list/list.query";
import * as S from '../style';
import android from "../.././../assets/logo/Android.svg";
import design from "../.././../assets/logo/Design.svg";
import ios from "../.././../assets/logo/Ios.svg";
import server from "../.././../assets/logo/Server.svg";
import web from "../.././../assets/logo/Web1.svg";
import commentBt from "../.././../assets/images/CommentBt.png";
import aprofile from "../.././../assets/images/aprofile.png";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  keyword: string;
}

export default function KeyWordList({ keyword }: Props) {
  const { data: getKeyWord } = useGetKeyWord({ keyword });
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
        {getKeyWord?.data.length!! !== 0 ? (
        getKeyWord?.data.map((data) => (
        <S.KeyWordPostLists key={data.postId}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <S.KeyWordMiniProfileContainer>
              <div style={{ display: "flex" }}>
                <S.KeyWordMiniProfile
                  src={data?.profileUrl ? data?.profileUrl : aprofile}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <S.KeyWordAuthor>{data.userName}</S.KeyWordAuthor>
                  <S.KeyWordClassInfoContainer>
                    {data.stdInfo.grade}학년 {data.stdInfo.room}반{" "}
                    {data.stdInfo.number}번
                  </S.KeyWordClassInfoContainer>
                </div>
              </div>
            </S.KeyWordMiniProfileContainer>

            <S.KeyWordDevLogo
              src={
                data.tag === "WEB"
                  ? web
                  : data.tag === "SERVER"
                  ? server
                  : data.tag === "IOS"
                  ? ios
                  : data.tag === "DESIGN"
                  ? design
                  : android
              }
              alt="개발분야"
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <S.KeyWordContentContainer>
                {data.content}
              </S.KeyWordContentContainer>
              <div
                style={{
                  width: "240px",
                  height: "228px",
                  marginRight: "30px",
                  marginTop: "30px",
                }}
              >
                {data.imgUrls?.length >= 1 ? (
                  <Slider {...settings}>
                    {data.imgUrls.map((imgs: string, idx: any) => {
                      return <S.KeyWordPostImage key={idx} src={imgs} alt="" />;
                    })}
                  </Slider>
                ) : (
                  <S.KeyWordPostImgNone>이미지 없음</S.KeyWordPostImgNone>
                )}
              </div>
            </div>

            <S.KeyWordComment
              src={commentBt}
              alt="코멘트"
              onClick={() => navigate(`/detail/${data.postId}`)}
            />
          </div>
        </S.KeyWordPostLists>
        ))):(<div style={{fontSize:'25px'}}>데이터가 없습니다</div>)}
    </>
  );
}
