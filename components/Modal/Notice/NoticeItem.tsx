import { Dispatch, SetStateAction, useState } from "react";
import { useGetNoticeList } from "@/queries/Notice/notice.query";
import * as S from "./style";
import profile from "@/public/icons/user/aprofile.png";
import { GetDateTime } from "@/util/Date/getDateTime";
import { useRouter } from "next/router";

interface Props {
  setIsActiveNotice: Dispatch<SetStateAction<boolean>>;
}

const NoticeItem = ({ setIsActiveNotice }: Props) => {
  const { data: noticeList } = useGetNoticeList({ suspense: true });
  const router = useRouter();

  return (
    <>
      {noticeList?.data.length!! > 0 ? (
        <S.NoticeBox>
          {noticeList?.data.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setIsActiveNotice(false);
                router.push(`/detail/${item.postId}`);
              }}
            >
              <S.UserInfo>
                <S.NewIcon>{item.noticeStatus === "EXIST" && "·"}</S.NewIcon>
                <S.UserProfile
                  src={profile || item.senderProfileImage}
                  alt="이미지 없음"
                />
                <div>
                  <S.Name>{item.senderName}</S.Name>
                  <S.NoticeDate>
                    {new GetDateTime(
                      new Date(item.createDateTime)
                    ).uploadPostTimeAgo()}
                  </S.NoticeDate>
                </div>
              </S.UserInfo>

              <S.Comment>{item.commentContent}</S.Comment>
            </li>
          ))}
        </S.NoticeBox>
      ) : (
        <S.NoneNoticeText>알림이 없습니다.</S.NoneNoticeText>
      )}
    </>
  );
};

export default NoticeItem;
