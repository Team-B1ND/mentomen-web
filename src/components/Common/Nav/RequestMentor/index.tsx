import handUp from "@/public/icons/title/handUp.png";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import profile from "@/public/icons/user/aprofile.png";
import { UserDataAtom } from "@/src/store/User/user.store";
import { useRouter } from "next/router";
import { Title } from "@/src/stories/ui";
import { Row } from "@/src/stories/layout";

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
      <Row
        $width={"100%"}
        $height={"80px"}
        $alignItems={"center"}
        $justifyContent={"center"}
        $columnGap={"10px"}
        $padding={"0 15px"}
        $backgroundColor={"#fff"}
        $customStyle={S.RequestMentoBox}
      >
        <S.Profile
          src={userData?.profileImage || profile}
          width={45}
          height={45}
          alt="프로필"
        />
        <Row
          $height={"50px"}
          $alignItems={"center"}
          $justifyContent={"center"}
          $backgroundColor={"#f8fbfc"}
          $customStyle={S.RequestButton}
          onClick={() => router.push("/request-mentor/write")}
        >
          멘토에게 요청할 내용이 무엇인가요?
        </Row>
      </Row>
    </S.Container>
  );
};

export default RequestMentor;
