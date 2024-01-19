import Title from "../../Title";
import handUp from "@/public/icons/title/handUp.png";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import profile from "@/public/icons/user/aprofile.png";
import { UserDataAtom } from "@/stores/User/user.store";
import { CustomLink } from "@/style/common.style";

const RequestMentor = () => {
  const userData = useRecoilValue(UserDataAtom);

  return (
    <S.Container>
      <Title
        titleIcon={handUp}
        titleText="멘토들에게 도움이 필요하다면?"
        subTitleText="멘토 요청 글을 작성하여 도움을 받아보세요!"
      />
      <S.RequestMentoBox>
        <S.Profile src={userData?.profileImage || profile} alt="프로필" />
        <CustomLink href={"/request-mentor"}>
          <S.RequestButton>멘토에게 요청할 내용이 무엇인가요?</S.RequestButton>
        </CustomLink>
      </S.RequestMentoBox>
    </S.Container>
  );
};

export default RequestMentor;
