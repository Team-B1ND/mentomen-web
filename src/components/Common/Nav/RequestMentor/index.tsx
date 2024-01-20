import Title from "../../Title";
import handUp from "@/public/icons/title/handUp.png";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import profile from "@/public/icons/user/aprofile.png";
import { UserDataAtom } from "@/src/stores/User/user.store";
import { useRouter } from "next/router";

const RequestMentor = () => {
  const userData = useRecoilValue(UserDataAtom);
  const router = useRouter();

  return (
    <S.Container>
      <Title
        titleIcon={handUp}
        titleText="멘토들에게 도움이 필요하다면?"
        subTitleText="멘토 요청 글을 작성하여 도움을 받아보세요!"
      />
      <S.RequestMentoBox>
        <S.Profile src={userData?.profileImage || profile} alt="프로필" />
        <S.RequestButton onClick={() => router.push("/request-mentor")}>
          멘토에게 요청할 내용이 무엇인가요?
        </S.RequestButton>
      </S.RequestMentoBox>
    </S.Container>
  );
};

export default RequestMentor;
