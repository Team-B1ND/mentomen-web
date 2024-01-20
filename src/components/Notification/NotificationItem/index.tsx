import profile from "@/public/icons/user/aprofile.png";
import * as S from "../style";
import { useRouter } from "next/router";
import { GetDateTime } from "@/src/util/Date/getDateTime";
import { NonePostText } from "@/src/style/common.style";
import { useGetNoticeListQuery } from "@/src/services/Notification/queries";

const NotificationItem = () => {
  const { data: noticeList } = useGetNoticeListQuery({ suspense: true });
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
              <S.SenderWrap>
                <S.SenderMessage>
                  <span>{item.senderName}</span> 님이 회원님의 게시글에 댓글을
                  남겼습니다.
                </S.SenderMessage>
              </S.SenderWrap>

              <S.SenderComment>{item.commentContent}</S.SenderComment>

              <S.CommentUpdateDate>
                {new GetDateTime().uploadTimeAgo(new Date(item.createDateTime))}
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
