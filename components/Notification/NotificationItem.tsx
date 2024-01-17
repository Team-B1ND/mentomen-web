import { useGetNoticeList } from "@/queries/Notice/notice.query";
import profile from "@/public/icons/user/aprofile.png";
import * as S from "./style";
import { useRouter } from "next/router";
import { GetDateTime } from "@/util/Date/getDateTime";
import { NonePostText } from "@/style/common.style";

const NotificationItem = () => {
  const { data: noticeList } = useGetNoticeList({ suspense: true });
  const router = useRouter();

  return (
    <S.NoticeItemContainer>
      {noticeList?.data.length! > 0 ? (
        noticeList?.data.map((item, idx) => (
          <S.NoticeItemBox
            key={idx}
            onClick={() => router.push(`/detail/${item.postId}`)}
          >
            <S.ProfileImage
              src={item.senderProfileImage || profile}
              width={50}
              height={50}
              alt="프로필"
            />

            <S.NoticeContent>
              <S.SenderText>
                <span>{item.senderName}</span> 님이 회원님의 게시글에 댓글을
                남겼습니다.
              </S.SenderText>
              <S.SenderComment>{item.commentContent}</S.SenderComment>
              <S.CommentUpdateDate>
                {new GetDateTime(
                  new Date(item.createDateTime)
                ).uploadTimeAgo()}
              </S.CommentUpdateDate>
            </S.NoticeContent>
          </S.NoticeItemBox>
        ))
      ) : (
        <NonePostText>알림이 없습니다.</NonePostText>
      )}
    </S.NoticeItemContainer>
  );
};

export default NotificationItem;
