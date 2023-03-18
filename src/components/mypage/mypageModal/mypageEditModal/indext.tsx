import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MypageEditModal } from "../../../../recoil/mypage/mypageAtom";
import { MyPageModalContainer } from "../style";
import EditMentoRequest from "./EditMentoRequest";
import * as S from "./style";

export default function MyPageEditModal() {
  const [myPageEditModal, SetMyPageEditModal] =
    useRecoilState<boolean>(MypageEditModal);
  useEffect(() => {
    document.body.style.cssText = `
              position: fixed; 
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <MyPageModalContainer onClick={() => SetMyPageEditModal(false)}>
      <S.EditModalLayOut onClick={(e) => e.stopPropagation()}>
        <S.EditMentoRequestContainer>
          <EditMentoRequest />
        </S.EditMentoRequestContainer>
      </S.EditModalLayOut>
    </MyPageModalContainer>
  );
}
