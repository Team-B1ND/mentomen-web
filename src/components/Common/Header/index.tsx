import * as S from "./style";
import Logo from "../../../assets/logo/Logo.png";
import Search from "../../../assets/images/Search.png";
import NoneNoticeIcon from "../../../assets/images/notice.png";
import noticeIcon from "../../../assets/images/noticeImg.png";
import { useNavigate } from "react-router-dom";
import { useKeyWordSearch } from "../../../hooks/Search/useKeyWordSearch";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";
import Notice from "../../Modal/Notice";
import { useState } from "react";
import { useGetNoticeCheck } from "../../../queries/Notice/notice.query";
import { Portal } from "@stubee2/stubee2-rolling-ui";
import PostEditorForm from "../../Modal/PostEditorForm";
import { TurnOnOffModal } from "../../../util/Modal/turnOffOnModal";

function Header() {
  const navigate = useNavigate();
  const [isActiveNotice, setIsActiveNotice] = useState(false);
  const [isActivePostForm, setIsActivePostForm] = useState(false);
  const { handleSerachChange, handleSearchSubmit, search } = useKeyWordSearch();
  const turnOnOffModal = new TurnOnOffModal(setIsActiveNotice);

  const { data: noticeCheck } = useGetNoticeCheck();

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.Logo src={Logo} onClick={() => (window.location.href = "/")} />

          {localStorage.getItem(ACCESS_KEY) && (
            <S.HeaderSearchForm onSubmit={(e) => handleSearchSubmit(e)}>
              <S.SearchButton type="submit">
                <S.HeaderSearchImg src={Search} />
              </S.SearchButton>

              <S.HeaderSearchInput
                placeholder="키워드를 입력하세요"
                type="text"
                value={search}
                onChange={handleSerachChange}
              />
            </S.HeaderSearchForm>
          )}

          <S.HeaderAbleContainer>
            {localStorage.getItem(ACCESS_KEY) ? (
              <>
                <S.HeaderNoticeImg
                  src={
                    noticeCheck?.data.noticeStatus === "EXIST"
                      ? noticeIcon
                      : NoneNoticeIcon
                  }
                  onClick={turnOnOffModal.turnOnModal}
                  alt="이미지 없음"
                />
                <S.RegistText onClick={() => setIsActivePostForm(true)}>
                  글 등록하기
                </S.RegistText>
              </>
            ) : (
              <S.Introduce onClick={() => navigate("/intro")}>
                서비스 소개
              </S.Introduce>
            )}
          </S.HeaderAbleContainer>
        </S.HeaderWrapper>
      </S.HeaderContainer>

      <Portal id="modal">
        {isActiveNotice && <Notice setIsActiveNotice={setIsActiveNotice} />}
        {isActivePostForm && (
          <PostEditorForm setIsActivePostForm={setIsActivePostForm} />
        )}
      </Portal>
    </>
  );
}

export default Header;
