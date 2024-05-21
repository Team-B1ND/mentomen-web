import profile from "@/public/icons/user/aprofile.png";
import * as S from "../style";
import { useRouter } from "next/router";
import { NoneDataText } from "@/src/stories/styles";
import { useGetNoticeListQuery } from "@/src/services/Notification/notification.query";
import { GetDateTime, GetText } from "@/src/stories/utils";
import { Pagination } from "@/src/stories/ui";
import { Column } from "@/src/stories/layout";
import { useState } from "react";
import { css } from "styled-components";

const NotificationItem = () => {
  const { data: noticeList } = useGetNoticeListQuery({ suspense: true });
  const router = useRouter();

  const limit = 8;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <>
      <Column $width={"100%"} $justifyContent={"center"} $rowGap={"13px"}>
        {noticeList?.data.length! > 0 ? (
          noticeList?.data.slice(offset, offset + limit).map((item, idx) => (
            <S.NoticeItemBox key={idx}>
              <S.ProfileImage
                src={item.senderProfileImage || profile}
                width={50}
                height={50}
                alt="프로필"
              />

              <Column
                $height={"100%"}
                $rowGap={"10px"}
                $customStyle={css`
                  width: calc(100% - 50px);
                  cursor: pointer;
                `}
                onClick={() => router.push(`/detail/${item.postId}`)}
              >
                <S.SenderWrap>
                  <S.SenderMessage>
                    <span>{item.senderName}</span> 님이 회원님의 게시글에 댓글을
                    남겼습니다.
                  </S.SenderMessage>
                </S.SenderWrap>

                <S.SenderComment>
                  {new GetText(item.commentContent).stringEllipsis(135)}
                </S.SenderComment>

                <S.CommentUpdateDate>
                  {new GetDateTime().uploadTimeAgo(
                    new Date(item.createDateTime)
                  )}
                </S.CommentUpdateDate>
              </Column>
            </S.NoticeItemBox>
          ))
        ) : (
          <NoneDataText>알림이 없습니다.</NoneDataText>
        )}
      </Column>

      {noticeList?.data.length! > 0 && (
        <Pagination
          total={noticeList?.data.length!}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default NotificationItem;
