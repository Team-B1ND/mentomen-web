import { ReactNode } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { HideHeaderAtom, HideNavAtom } from "@/stores/common/common.store";
import {
  ActiveEditPostFormAtom,
  ActivePostFormAtom,
} from "@/stores/Post/post.store";
import GlobalStyle from "@/style/globalStyle";
import PostEditorForm from "../../Modal/PostEditorForm";
import Header from "../Header";
import Nav from "../Nav";
import Portal from "@/components/Modal/Portal";
import ScrollTopButton from "../Button/ScrollTop";
import * as S from "./style";
import { useRouter } from "next/router";
import ProgressBar from "../ProgressBar";

const Proivder = ({ children }: { children: ReactNode }) => {
  const hideHeader = useRecoilValue(HideHeaderAtom);
  const hideNav = useRecoilValue(HideNavAtom);
  const router = useRouter();

  const [isActivePostForm, setIsActivePostForm] =
    useRecoilState(ActivePostFormAtom);
  const [isActiveEditForm, setIsActiveEditForm] = useRecoilState(
    ActiveEditPostFormAtom
  );

  return (
    <>
      <GlobalStyle />
      {router.pathname !== "/callback" && <ScrollTopButton />}
      <S.Container>
        <ProgressBar />
        {!hideHeader && <Header />}
        <S.Wrapper hideHeader={hideHeader}>
          <>{children}</>
          {!hideNav && <Nav />}
        </S.Wrapper>
      </S.Container>
      <Portal>
        {(isActivePostForm || isActiveEditForm) && (
          <PostEditorForm
            isActivePostForm={isActivePostForm} // 글 등록인지 수정인지 판단하기 위해 Props로 넘겨줌
            setIsActivePostEditForm={
              isActivePostForm ? setIsActivePostForm : setIsActiveEditForm
            }
          />
        )}
      </Portal>
    </>
  );
};

export default Proivder;
