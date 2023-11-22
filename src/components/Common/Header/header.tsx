import * as S from "./style";
import Logo from "../../../assets/logo/Logo.png";
import Search from "../../../assets/images/Search.png";
import Nonotice from "../../../assets/images/notice.png";
import notice from "../../../assets/images/noticeImg.png";
import { useNavigate } from "react-router-dom";
import { useKeyWordSearch } from "../../../hooks/Header/Search/useKeyWordSearch";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";
import { useGetNoticeCheck } from "../../../querys/Notice/notice.query";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { NOTICE } from "../../../recoil/Notice/noticeAtom";

function Header() {
  const navigate = useNavigate();
  const { onKeyPress, onChange, search } = useKeyWordSearch();
  const { data: getNoticeCheck } = useGetNoticeCheck();
  const [noticeChk, setNoticeChk] = useState<string>("NONE");
  const setNoticeModal = useSetRecoilState(NOTICE);

  useEffect(() => {
    if (getNoticeCheck?.data.noticeStatus!! === "EXIST")
      setNoticeChk(getNoticeCheck?.data.noticeStatus!!);
  }, [getNoticeCheck?.data.noticeStatus, setNoticeChk]);

  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.Logo src={Logo} onClick={() => navigate("/")} />

        {localStorage.getItem(ACCESS_KEY) && (
          <S.HeaderSearchBox>
            <S.HeaderSearchImg src={Search} />
            <S.HeaderSearchInput
              placeholder="키워드를 입력하세요"
              type="text"
              value={search}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </S.HeaderSearchBox>
        )}

        <S.HeaderAbleContainer>
          {localStorage.getItem(ACCESS_KEY) && (
            <S.HeaderNoticeImg
              src={noticeChk === "EXIST" ? notice : Nonotice}
              onClick={() => {
                setNoticeChk("NONE");
                setNoticeModal(true);
              }}
              alt=""
            />
          )}
          <S.HeaderIntro onClick={() => navigate("/intro")}>
            서비스 소개
          </S.HeaderIntro>
        </S.HeaderAbleContainer>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
