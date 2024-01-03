import * as S from "./style";
import menTomen from "../../../assets/icons/logo/menTomen.png";
import Search from "../../../assets/images/Search.png";
import notExistNotice from "../../../assets/icons/notice/notExistNotice.png";
import existNotice from "../../../assets/icons/notice/existNotice.png";
import { useKeyWordSearch } from "../../../hooks/Search/useKeyWordSearch";
import { ACCESS_KEY, DAUTH_URL } from "../../../constants/Auth/auth.constant";
import Notice from "../../Modal/Notice";
import { useState } from "react";
import { useGetNoticeCheck } from "../../../queries/Notice/notice.query";
import { useRecoilState } from "recoil";
import { ActivePostFormAtom } from "../../../stores/Post/post.store";
import token from "@/lib/token/token";

function Header() {
  const [isActiveNotice, setIsActiveNotice] = useState(false);
  const [isActivePostForm, setIsActivePostForm] =
    useRecoilState(ActivePostFormAtom);

  const { handleSerachChange, handleSearchSubmit, search } = useKeyWordSearch();
  const { data: noticeCheck } = useGetNoticeCheck();

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Logo
            src={menTomen}
            onClick={() => (window.location.href = "/")}
            alt="이미지 없음"
          />

          {token.getCookie(ACCESS_KEY) && (
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
            {token.getCookie(ACCESS_KEY) ? (
              <>
                <S.NoticeIcon
                  isactivenotice={isActiveNotice.toString()}
                  src={
                    noticeCheck?.data.noticeStatus === "EXIST"
                      ? existNotice
                      : notExistNotice
                  }
                  onClick={() => setIsActiveNotice(true)}
                  alt="이미지 없음"
                />
                <S.WrtieText
                  isActivePostForm={isActivePostForm}
                  onClick={() => setIsActivePostForm(true)}
                >
                  글 작성하기
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
      </S.Container>

      {isActiveNotice && <Notice setIsActiveNotice={setIsActiveNotice} />}
    </>
  );
}

export default Header;
