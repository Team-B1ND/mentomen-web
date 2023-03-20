import android from "../../../assets/logo/Android.svg";
import design from "../../../assets/logo/Design.svg";
import ios from "../../../assets/logo/Ios.svg";
import server from "../../../assets/logo/Server.svg";
import web from "../../../assets/logo/Web1.svg";
import commentBt from "../../..//assets/images/CommentBt.png";
import aprofile from "../../../assets/images/aprofile.png";
import * as S from "../style";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListItem } from "../../../types/list/list.type";
import React from "react";
import { useMyPost } from "../../../querys/user/user.query";
import { useSlideSettings } from "../../../hooks/slide/useSlideSetting";
import { useRecoilState } from "recoil";
import {
  MyPageModal,
  MyPagePostId,
  MyPostContent,
  MyPostImg,
  MyPostTag,
  TagPrev,
} from "../../../recoil/mypage/mypageAtom";
import { ContentPrev } from "../../../recoil/detail/DetailAtom";
import { uploadDateTime } from "../../../hooks/date/uploadDateTime";

function MyPageList() {
  const navigate = useNavigate();
  const { data: MyPost } = useMyPost({ suspense: true });
  const [myPageModal, SetMyPageModal] = useRecoilState<boolean>(MyPageModal);
  const [myPagePostId, SetMyPagePostId] = useRecoilState<number>(MyPagePostId);
  const [myPostContent, SetMyPostContent] =
    useRecoilState<string>(MyPostContent);
  const [myPostTag, SetMyPostTag] = useRecoilState<string>(MyPostTag);
  const [contentPrev, SetContentPrev] = useRecoilState<string>(ContentPrev);
  const [tagPev, SetTagPev] = useRecoilState<string>(TagPrev);
  const [myPostImg, SetMyPostImg] = useRecoilState<string[]>(MyPostImg);

  return (
    <>
      {MyPost?.data.length !== 0 ? (
        MyPost?.data.map((data: ListItem) => (
          <S.MyPagePostLists key={data.postId}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.MyPageMiniProfileContainer>
                <div style={{ display: "flex" }}>
                  <S.MyPageMiniProfile
                    src={data?.profileUrl ? data?.profileUrl : aprofile}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <S.MyPageAuthor>{data.userName}</S.MyPageAuthor>
                    <S.MyPageClassInfoContainer>
                      {data.stdInfo.grade}학년 {data.stdInfo.room}반{" "}
                      {data.stdInfo.number}번
                    </S.MyPageClassInfoContainer>
                  </div>
                </div>
              </S.MyPageMiniProfileContainer>

              <S.MyPageDevLogo
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
                <S.MyPageContentContainer>
                  {data.content}
                </S.MyPageContentContainer>
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
                        return (
                          <S.MyPagePostImage key={idx} src={imgs} alt="" />
                        );
                      })}
                    </Slider>
                  ) : (
                    <S.MyPagePostImgNone>이미지 없음</S.MyPagePostImgNone>
                  )}
                </div>
              </div>

              <S.MyPageAbleContainer>
                <S.MyPageComment
                  src={commentBt}
                  alt="코멘트"
                  onClick={() => navigate(`/detail/${data.postId}`)}
                />
                <S.MyPageDelAndEditAndDateContainer>
                  <S.MyPageDate>{uploadDateTime(new Date(data.createDateTime))}</S.MyPageDate>
                  <S.MyPageDelAndEdit
                    onClick={() => {
                      SetMyPageModal(true);
                      SetMyPagePostId(data.postId);
                      SetMyPostContent(data.content);
                      SetMyPostTag(data.tag);
                      SetContentPrev(data.content);
                      SetTagPev(data.tag);
                      SetMyPostImg([]);
                    }}
                  />
                </S.MyPageDelAndEditAndDateContainer>
              </S.MyPageAbleContainer>
            </div>
          </S.MyPagePostLists>
        ))
      ) : (
        <div style={{ fontSize: "25px" }}>내 게시글이 없습니다</div>
      )}
    </>
  );
}

export default React.memo(MyPageList);
