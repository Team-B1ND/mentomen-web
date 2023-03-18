import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useDelMyPost } from "../../../hooks/del/mypage/useDelMyPost";
import { MypageEditModal, MyPageModal, MyPagePostId } from "../../../recoil/mypage/mypageAtom";
import MyPageEditModal from "./mypageEditModal/indext";
import * as S from "./style";

export default function MypageModal() {
  const [myPageModal, SetMyPageModal] = useRecoilState<boolean>(MyPageModal);
  const [myPagePostId, SetMyPagePostId] = useRecoilState<number>(MyPagePostId);
  const [myPageEditModal,SetMyPageEditModal] = useRecoilState<boolean>(MypageEditModal);
  const { onMyPostDelete } = useDelMyPost();

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
    <>
    <S.MyPageModalContainer onClick={() => SetMyPageModal(false)}>
      <S.MyPageModalLayOut onClick={(e) => e.stopPropagation()}>
        <S.MyPageDeleteContainer>
          <S.MyPageDelete onClick={() => onMyPostDelete(myPagePostId)}>
            삭제하기
          </S.MyPageDelete>
        </S.MyPageDeleteContainer>
        <S.MyPageModalLine />
        <S.MyPageModifyContainer>
          <S.MyPageModify onClick={()=>SetMyPageEditModal(true)}>
            수정하기
          </S.MyPageModify>
        </S.MyPageModifyContainer>
      </S.MyPageModalLayOut>
    </S.MyPageModalContainer>
    {myPageEditModal && <MyPageEditModal />}
    </>
  );
}
