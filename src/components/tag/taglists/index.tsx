import { useGetTag } from "../../../querys/list/list.query";
import * as S from "../style";
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
import { useSlideSettings } from "../../../hooks/slide/useSlideSetting";
import { detailDate } from "../../date/useDate";

interface Props {
  tag: string;
}

export default function TagLists({ tag }: Props) {
  const { data: getTag } = useGetTag({ tag },{suspense:true});
  const navigate = useNavigate();

  return (
    <>
      {getTag?.data.length !==0 ? (
      getTag?.data.map((data) => (
        <S.TagListPostLists key={data.postId}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <S.TagListMiniProfileContainer>
              <div style={{ display: "flex" }}>
                <S.TagListMiniProfile
                  src={data?.profileUrl ? data?.profileUrl : aprofile}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <S.TagListAuthor>{data.userName}</S.TagListAuthor>
                  <S.TagListClassInfoContainer>
                    {data.stdInfo.grade}학년 {data.stdInfo.room}반{" "}
                    {data.stdInfo.number}번
                  </S.TagListClassInfoContainer>
                </div>
              </div>
            </S.TagListMiniProfileContainer>

            <S.TagListDevLogo
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
              <S.TagListContentContainer>
                {data.content}
              </S.TagListContentContainer>
              <div
                style={{
                  width: "240px",
                  height: "228px",
                  marginRight: "30px",
                  marginTop: "30px",
                }}
              >
                {data.imgUrls?.length >= 1 ? (
                  <Slider {...useSlideSettings}>
                    {data.imgUrls.map((imgs: string, idx: any) => {
                      return <S.TagListPostImage key={idx} src={imgs} alt="" />;
                    })}
                  </Slider>
                ) : (
                  <S.TagListPostImgNone>이미지 없음</S.TagListPostImgNone>
                )}
              </div>
            </div>

            <S.TagListCommentAndDate>
            <S.TagListComment
              src={commentBt}
              alt="코멘트"
              onClick={() => navigate(`/detail/${data.postId}`)}
            />
            <S.TagListDate>{detailDate(new Date(data.createDateTime))}</S.TagListDate>
            </S.TagListCommentAndDate>
          </div>
        </S.TagListPostLists>
      ))):(<div style={{fontSize:'25px'}}>
        {getTag?.data.map((data)=><div>{data.tag} 게시글이 없습니다</div>)}
      </div>)}
    </>
  );
}