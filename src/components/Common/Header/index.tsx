import * as S from "./style";
import menTomen from "@/public/icons/logo/menTomen2.png";
import searchIcon from "@/public/icons/Search/HeaderSearch.png";
import notExistNotice from "@/public/icons/notice/notExistNotice.svg";
import existNotice from "@/public/icons/notice/existNotice.svg";
import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import token from "@/src/libs/token/token";
import profile from "@/public/icons/user/aprofile.png";
import Search from "@/src/components/Modal/Search";
import { useRouter } from "next/router";
import { UserDataAtom } from "@/src/store/User/user.store";
import { CustomLink } from "@/src/stories/styles";
import { useGetNoticeCheckQuery } from "@/src/services/Notification/queries";
import { useGetMyInfoQuery } from "@/src/services/User/queries";
import { Portal } from "@/src/stories/layout";
import { GoogleAnalyzer, redirectToDAuthLogin } from "@/src/stories/utils";

function Header() {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isHaveNotice, setIsHaveNotice] = useState(false);

  const setUserData = useSetRecoilState(UserDataAtom);
  const router = useRouter();
  const pageView = new GoogleAnalyzer().pageView;

  const { data: noticeCheck } = useGetNoticeCheckQuery();
  const { data: myInfo } = useGetMyInfoQuery();

  useEffect(() => {
    if (noticeCheck?.data.noticeStatus === "EXIST") {
      setIsHaveNotice(true);
    } else {
      setIsHaveNotice(false);
    }
  }, [noticeCheck?.data.noticeStatus]);

  useEffect(() => {
    setUserData(myInfo?.data!);
  }, [myInfo?.data]);

  return (
    <>
      <S.HeaderContainer>
        <S.Wrapper>
          <CustomLink href={"/"}>
            <S.Logo
              src={menTomen}
              onDragStart={(e) => e.preventDefault()}
              onClick={() => pageView("/")}
              alt="멘투멘 로고"
            />
          </CustomLink>

          <S.ItemContainer>
            <S.SearchIcon
              isactivesearch={isActiveSearch.toString()}
              src={searchIcon}
              onClick={() => {
                isActiveSearch
                  ? setIsActiveSearch(false)
                  : setIsActiveSearch(true);
              }}
              alt="검색"
            />
            {token.getCookie(ACCESS_TOKEN_KEY) ? (
              <>
                <CustomLink href={"/notification"}>
                  <S.NoticeIcon
                    isactivenotice={router.pathname}
                    src={isHaveNotice ? existNotice : notExistNotice}
                    onClick={() => {
                      isActiveSearch && setIsActiveSearch(false);
                      setIsHaveNotice(false);
                      pageView("/notification");
                    }}
                    alt="알림"
                  />
                </CustomLink>

                <CustomLink href={"/mypage"}>
                  <S.ProfileIcon
                    src={myInfo?.data.profileImage || profile}
                    width={40}
                    height={40}
                    isactivemypage={router.pathname}
                    onClick={() => {
                      isActiveSearch && setIsActiveSearch(false);
                      pageView("/mypage");
                    }}
                    alt="프로필"
                  />
                </CustomLink>

                <CustomLink href={"/request-mentor/write"}>
                  <S.MenToRequest
                    onClick={() => {
                      isActiveSearch && setIsActiveSearch(false);
                      pageView("/request-mentor/write");
                    }}
                  >
                    멘토 요청하기
                  </S.MenToRequest>
                </CustomLink>
              </>
            ) : (
              <S.StartMenToMen onClick={redirectToDAuthLogin}>
                멘투멘 시작하기
              </S.StartMenToMen>
            )}
          </S.ItemContainer>
        </S.Wrapper>
      </S.HeaderContainer>

      <Portal>
        {isActiveSearch && <Search setIsActiveSearch={setIsActiveSearch} />}
      </Portal>
    </>
  );
}

export default Header;
