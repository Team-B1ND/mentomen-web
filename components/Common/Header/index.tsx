import * as S from "./style";
import menTomen from "@/public/icons/logo/menTomen.png";
import searchIcon from "@/public/images/Search.png";
import notExistNotice from "@/public/icons/notice/notExistNotice.svg";
import existNotice from "@/public/icons/notice/existNotice.svg";
import { ACCESS_TOKEN_KEY, DAUTH_URL } from "@/constants/Auth/auth.constant";
import { useEffect, useState } from "react";
import { useGetNoticeCheck } from "@/queries/Notice/notice.query";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ActivePostFormAtom } from "@/stores/Post/post.store";
import token from "@/lib/token/token";
import profile from "@/public/icons/user/aprofile.png";
import { useGetMyInfo } from "@/queries/User/user.query";
import Portal from "@/components/Modal/Portal";
import Search from "@/components/Modal/Search";
import { useRouter } from "next/router";
import { UserDataAtom } from "@/stores/User/user.store";
import { CustomLink } from "@/style/common.style";

function Header() {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isHaveNotice, setIsHaveNotice] = useState(false);

  const setIsActivePostForm = useSetRecoilState(ActivePostFormAtom);
  const setUserData = useSetRecoilState(UserDataAtom);
  const router = useRouter();

  const { data: noticeCheck } = useGetNoticeCheck();
  const { data: myInfo } = useGetMyInfo();

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
          <S.Logo
            src={menTomen}
            onClick={() => (window.location.href = "/")}
            alt="멘투멘 로고"
          />

          <S.HeaderAbleContainer>
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
                    }}
                    alt="알림"
                  />
                </CustomLink>

                <CustomLink href={"/mypage"}>
                  <S.ProfileIcon
                    src={myInfo?.data.profileImage || profile}
                    isactivemypage={router.pathname}
                    onClick={() => isActiveSearch && setIsActiveSearch(false)}
                    alt="프로필"
                  />
                </CustomLink>

                <S.MenToRequest
                  onClick={() => {
                    isActiveSearch && setIsActiveSearch(false);
                    setIsActivePostForm(true);
                  }}
                >
                  멘토 요청하기
                </S.MenToRequest>
              </>
            ) : (
              <S.StartMenToMen
                onClick={() => (window.location.href = DAUTH_URL)}
              >
                멘투멘 시작하기
              </S.StartMenToMen>
            )}
          </S.HeaderAbleContainer>
        </S.Wrapper>
      </S.HeaderContainer>

      <Portal>
        {isActiveSearch && <Search setIsActiveSearch={setIsActiveSearch} />}
      </Portal>
    </>
  );
}

export default Header;
