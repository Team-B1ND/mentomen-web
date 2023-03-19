import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useGetNoticeList } from "../../../querys/notice/notice.query";
import { NOTICE } from "../../../recoil/notice/noticeAtom";
import * as S from "../style";
import aprofile from '../../../assets/images/aprofile.png';

export default function NoticeLists() {
  const navigate = useNavigate();
  const { data: getNoticeList } = useGetNoticeList({suspense:true});
  const [NoticeModal,SetNoticeModal] = useRecoilState<boolean>(NOTICE);
  return (
    <>
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
                <S.NoticeProfileName>{lists.senderName}</S.NoticeProfileName>
              </S.NoticeProfileContainer>

              <S.NoticeCommentContainer>
                <S.NoticeCommentAbleContainer>
                  <div>댓글이 달렸습니다!</div>
                  <div style={{marginRight:'20px'}}>{new Date(lists.createDateTime).toLocaleString()}</div>
                </S.NoticeCommentAbleContainer>
                <S.NoticeComment>{lists.commentContent}</S.NoticeComment>
              </S.NoticeCommentContainer>
            </S.NoticeAbleContaienr>
          </S.NoticeLists>
        ))
      ) : (
        <S.NoneNotice>알람이 없쓰껄</S.NoneNotice>
      )}
    </>
  );
}
