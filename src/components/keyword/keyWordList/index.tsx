import { useGetKeyWord } from "../../../querys/list/list.query";
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
  keyword: string;
}

export default function KeyWordList({ keyword }: Props) {
  const { data: getKeyWord } = useGetKeyWord({ keyword },{suspense:true});
  const navigate = useNavigate();

  return (
    <>
      {getKeyWord?.data.length!! !== 0 ? (
        getKeyWord?.data.map((data) => (
          <S.KeyWordPostLists key={data.postId}>
            <S.KeyWordAbleContainer>
              <S.KeyWordMiniProfileContainer>
                <S.KeyWordProfileContainer>
                  <S.KeyWordMiniProfile
                    src={data?.profileUrl ? data?.profileUrl : aprofile}
                  />
                  <S.KeyWordMyInfoContainer>
                    <S.KeyWordAuthor>{data.userName}</S.KeyWordAuthor>
                    <S.KeyWordClassInfoContainer>
                      {data.stdInfo.grade}학년 {data.stdInfo.room}반{" "}
                      {data.stdInfo.number}번
                    </S.KeyWordClassInfoContainer>
                  </S.KeyWordMyInfoContainer>
                </S.KeyWordProfileContainer>
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
            </S.KeyWordAbleContainer>

            <S.KeyWordModContainer>
              <S.KeyWordModAbleContainer>
                <S.KeyWordContentContainer>
                  {data.content}
                </S.KeyWordContentContainer>
                <S.KeyWordImgContainer>
                  {data.imgUrls?.length >= 1 ? (
                    <Slider {...useSlideSettings}>
                      {data.imgUrls.map((imgs: string, idx: any) => {
                        return (
                          <S.KeyWordPostImage key={idx} src={imgs} alt="" />
                        );
                      })}
                    </Slider>
                  ) : (
                    <S.KeyWordPostImgNone>이미지 없음</S.KeyWordPostImgNone>
                  )}
                </S.KeyWordImgContainer>
              </S.KeyWordModAbleContainer>

              <S.KeyWordCommentAndDate>
              <S.KeyWordComment
                src={commentBt}
                alt="코멘트"
                onClick={() => navigate(`/detail/${data.postId}`)}
              />
              <S.KeyWordDate>{detailDate(new Date(data.createDateTime))}</S.KeyWordDate>
              </S.KeyWordCommentAndDate>
            </S.KeyWordModContainer>
          </S.KeyWordPostLists>
        ))
      ) : (
        <S.KeyWordNoneKeyWord>알맞지 않는 키워드입니다</S.KeyWordNoneKeyWord>
      )}
    </>
  );
}
