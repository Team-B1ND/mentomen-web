import Title from "../../Title";
import request from "@/public/icons/title/request.png";
import * as S from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ActivePostFormAtom } from "@/stores/Post/post.store";
import profile from "@/public/icons/user/aprofile.png";
import { UserDataAtom } from "@/stores/User/user.store";

const RequestMento = () => {
  const userData = useRecoilValue(UserDataAtom);
  const setIsActivePostForm = useSetRecoilState(ActivePostFormAtom);

  return (
    <S.Container>
      <Title
        titleIcon={request}
        titleText="멘토들에게 도움이 필요하다면?"
        subTitleText="멘토 요청 글을 작성하여 도움을 받아보세요!"
      />
      <S.RequestMentoBox>
        <S.Profile src={userData?.profileImage || profile} alt="프로필" />
        <S.RequestButton onClick={() => setIsActivePostForm(true)}>
          멘토에게 요청할 내용이 무엇인가요?
        </S.RequestButton>
      </S.RequestMentoBox>
    </S.Container>
  );
};

export default RequestMento;
