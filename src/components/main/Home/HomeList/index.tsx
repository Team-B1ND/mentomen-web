import * as S from "../style";
import android from ".././.././../.././assets/logo/Android.svg";
import design from ".././.././../.././assets/logo/Design.svg";
import ios from ".././.././../.././assets/logo/Ios.svg";
import server from ".././.././../.././assets/logo/Server.svg";
import web from ".././.././../.././assets/logo/Web1.svg";
import commentBt from ".././.././../.././assets/images/CommentBt.png";
import aprofile from ".././.././../.././assets/images/aprofile.png";
import { useGetList } from "../../../../querys/List/list.query";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { useSlideSettings } from "../../../../hooks/Slide/useSlideSetting";
import { uploadDateTime } from "../../../../types/Util/date/uploadDateTime";

function HomeList() {
  const navigate = useNavigate();
  const { data: allList } = useGetList({ suspense: true }); //모든 게시글 불러오기
  return (
    <>
      {allList?.data.map((data) => (
        <S.HomePostLists key={data.postId}>
          <S.HomeListContainer>
            <S.HomeMiniProfileContainer>
              <div style={{ display: "flex" }}>
                <S.HomeMiniProfile
                  src={data?.profileUrl ? data?.profileUrl : aprofile}
                />
                <S.HomeProfileContainer>
                  <S.HomeAuthor>{data.userName}</S.HomeAuthor>
                  <S.HomeClassInfoContainer>
                    {data.stdInfo.grade}학년 {data.stdInfo.room}반{" "}
                    {data.stdInfo.number}번
                  </S.HomeClassInfoContainer>
                </S.HomeProfileContainer>
              </div>
            </S.HomeMiniProfileContainer>

            <S.HomeDevLogo
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
          </S.HomeListContainer>

          <S.HomeAbleContainer>
            <S.HomeAble>
              <S.HomeContentContainer>{data.content}</S.HomeContentContainer>
              <S.HomeContentAndImgContainer>
                {data.imgUrls?.length >= 1 ? (
                  <Slider {...useSlideSettings}>
                    {data.imgUrls.map((imgs: string, idx) => {
                      return <S.HomePostImage key={idx} src={imgs} alt="" />;
                    })}
                  </Slider>
                ) : (
                  <S.HomePostImgNone>이미지 없음</S.HomePostImgNone>
                )}
              </S.HomeContentAndImgContainer>
            </S.HomeAble>
            <S.HomeCommentAndDate>
              <S.HomeComment
                src={commentBt}
                alt="코멘트"
                onClick={() => navigate(`/detail/${data.postId}`)}
              />
              <S.HomeDate>
                {uploadDateTime(new Date(data.createDateTime))}
              </S.HomeDate>
            </S.HomeCommentAndDate>
          </S.HomeAbleContainer>
        </S.HomePostLists>
      ))}
    </>
  );
}

export default React.memo(HomeList);
