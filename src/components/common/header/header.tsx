import {
  HeaderContainer,
  HeaderSearchBox,
  HeaderSearchImg,
  HeaderSearchInput,
  HeaderTitle,
  HeaderIntro,
  HeaderNoticeImg,
  HeaderAbleContainer,
} from "./header.style";
import Logo from "../../../assets/logo/Logo.png";
import Search from "../../../assets/images/Search.png";
import Nonotice from "../../../assets/images/notice.png";
import notice from "../../../assets/images/noticeImg.png";
import { useNavigate } from "react-router-dom";
import { useKeyWordSearch } from "../../../hooks/header/Search/useKeyWordSearch";
import { ACCESS_KEY } from "../../../constants/auth/auth.constant";
import { useGetNoticeCheck } from "../../../querys/notice/notice.query";
import { useNotice } from "../../../hooks/header/notice/useNotice";
import { NOTICECHK } from "../../../recoil/notice/noticeAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const { onKeyPress, onChange, search } = useKeyWordSearch();
  const { data: getNoticeCheck } = useGetNoticeCheck();
  const { onNoticeModal } = useNotice();
  const [NoticeChk,SetNoticeChk] = useRecoilState<string>(NOTICECHK);

  useEffect(()=>{
    if (getNoticeCheck?.data.noticeStatus!! === 'EXIST') SetNoticeChk(getNoticeCheck?.data.noticeStatus!!);
  },[getNoticeCheck?.data.noticeStatus,SetNoticeChk]);

  return (
    <>
      <HeaderContainer>
        <HeaderTitle onClick={() => navigate("/")} src={Logo} />
        {localStorage.getItem(ACCESS_KEY) ? (
          <HeaderSearchBox>
            <HeaderSearchImg src={Search} />
            <HeaderSearchInput
              placeholder="키워드를 입력하세요"
              type="text"
              value={search}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </HeaderSearchBox>
        ) : (
          ""
        )}
        <HeaderAbleContainer>
          {localStorage.getItem(ACCESS_KEY) ? (
            <HeaderNoticeImg
              src={
                NoticeChk === "EXIST"
                  ? notice
                  : Nonotice
              }
              onClick={onNoticeModal}
              alt=""
            />
          ) : (
            ""
          )}
          <HeaderIntro onClick={() => navigate("/intro")}>
            서비스 소개
          </HeaderIntro>
        </HeaderAbleContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
