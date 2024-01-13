import * as S from "./style";
import menTomen from "@/public/icons/logo/menTomen.png";
import Search from "@/public/images/Search.png";
import notExistNotice from "@/public/icons/notice/notExistNotice.png";
import existNotice from "@/public/icons/notice/existNotice.png";
import { useKeyWordSearch } from "@/hooks/Search/useKeyWordSearch";
import { ACCESS_TOKEN_KEY, DAUTH_URL } from "@/constants/Auth/auth.constant";
import Notice from "../../Modal/Notice";
import { useEffect, useState } from "react";
import { useGetNoticeCheck } from "@/queries/Notice/notice.query";
import { useRecoilState } from "recoil";
import { ActivePostFormAtom } from "@/stores/Post/post.store";
import token from "@/lib/token/token";
import Portal from "@/components/Modal/Portal";

function Header() {
  const [isActiveNotice, setIsActiveNotice] = useState(false);
  const [isActivePostForm, setIsActivePostForm] =
    useRecoilState(ActivePostFormAtom);

  const { handleSerachChange, handleSearchSubmit, search } = useKeyWordSearch();
  const { data: noticeCheck } = useGetNoticeCheck();

  const [isHaveNotice, setIsHaveNotice] = useState(false);

  useEffect(() => {
    if (noticeCheck?.data.noticeStatus === "EXIST") {
      setIsHaveNotice(true);
    } else {
      setIsHaveNotice(false);
    }
  }, [noticeCheck?.data.noticeStatus]);

  return (
    <>
      <S.HeaderContainer>
        <S.Wrapper>
          <S.Logo
            src={menTomen}
            onClick={() => (window.location.href = "/")}
            alt="이미지 없음"
          />

          {token.getCookie(ACCESS_TOKEN_KEY) && (
            <S.SearchForm onSubmit={(e) => handleSearchSubmit(e)}>
              <S.SearchButton type="submit">
                <S.SearchIcon src={Search} alt="이미지 없음" />
              </S.SearchButton>

              <S.SearchInput
                placeholder="키워드를 입력하세요"
                type="text"
                value={search}
                onChange={handleSerachChange}
              />
            </S.SearchForm>
          )}

          <S.HeaderAbleContainer>
            {token.getCookie(ACCESS_TOKEN_KEY) ? (
              <>
                <S.NoticeIcon
                  isactivenotice={isActiveNotice.toString()}
                  src={isHaveNotice ? existNotice : notExistNotice}
                  onClick={() => {
                    setIsActiveNotice(true);
                    setIsHaveNotice(false);
                  }}
                  alt="이미지 없음"
                />
                <S.WrtieText
                  isActivePostForm={isActivePostForm}
                  onClick={() => setIsActivePostForm(true)}
                >
                  멘토 요청하기
                </S.WrtieText>
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
        {isActiveNotice && <Notice setIsActiveNotice={setIsActiveNotice} />}
      </Portal>
    </>
  );
}

export default Header;
