import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useGetNoticeList } from "../../querys/notice/notice.query";
import { NOTICE, NOTICECHK } from "../../recoil/notice/noticeAtom";
import * as S from "./style";
import aprofile from "../.././assets/images/aprofile.png";
import { useNavigate } from "react-router-dom";

export default function Notice() {
  const [NoticeModal, SetNoticeModal] = useRecoilState(NOTICE);
  const [NoticeChk, SetNoticeChk] = useRecoilState(NOTICECHK);
  const navigate = useNavigate();
  const { data: getNoticeList } = useGetNoticeList();
  
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
  useEffect(() => {
    if (NoticeChk === "EXIST") SetNoticeChk("NONE");
  }, [SetNoticeChk, NoticeChk]);

  return (
    <S.NoitceContainer onClick={() => SetNoticeModal(!NoticeModal)}>
      <S.NoitceLayOut onClick={(e) => e.stopPropagation()}>
        <S.NoticeWrap>
          {getNoticeList?.data.length!! !== 0 ? (
            getNoticeList?.data.map((lists, idx) => (
              <S.NoticeLists
                key={idx}
                onClick={() => {
                  navigate(`/detail/${lists?.postId}`);
                  SetNoticeModal(!NoticeModal);
                }}
              >
                <S.NoticeAbleContaienr>
                  <S.NoticeProfileContainer>
                    <S.NoticeProfileImg
                      src={
                        lists.senderProfileImage
                          ? lists.senderProfileImage
                          : aprofile
                      }
                      alt=""
                    />
                    <S.NoticeProfileName>
                      {lists.senderName}
                    </S.NoticeProfileName>
                  </S.NoticeProfileContainer>

                  <S.NoticeCommentContainer>
                    <div>댓글이 달렸습니다!</div>
                    <S.NoticeComment>{lists.commentContent}</S.NoticeComment>
                  </S.NoticeCommentContainer>
                </S.NoticeAbleContaienr>
              </S.NoticeLists>
            ))
          ) : (
            <S.NoneNotice>알람이 없쓰껄</S.NoneNotice>
          )}
        </S.NoticeWrap>
      </S.NoitceLayOut>
    </S.NoitceContainer>
  );
}
