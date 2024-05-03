import { UserDataAtom } from "@/src/store/User/user.store";
import { useRecoilValue } from "recoil";
import * as S from "./style";
import profile from "@/public/icons/user/aprofile.png";
import developer from "@/public/icons/title/developer.png";
import { CountOfPostAtom } from "@/src/store/Post/post.store";
import { useLogout } from "@/src/hooks/Auth";
import { Title } from "@/src/stories/ui";
import { Column, Row } from "@/src/stories/layout";

const Profile = () => {
  const userData = useRecoilValue(UserDataAtom);
  const countOfPost = useRecoilValue(CountOfPostAtom);

  const { handleLogoutClick } = useLogout();
  return (
    <S.Container>
      <Title
        titleIcon={developer}
        titleText="내 정보 조회하기"
        subTitleText="멘투멘에서 내 정보를 조회할 수 있어요!"
      />

      <Column
        $width={"100%"}
        $rowGap={"7px"}
        $padding={"14px 12px"}
        $backgroundColor={"#fff"}
        $customStyle={S.UserBox}
      >
        <Row
          $width={"100%"}
          $alignItems={"center"}
          $columnGap={"10px"}
          $padding={"0 0 15px 0"}
          $customStyle={S.UserWrap}
        >
          <S.ProfileImage
            width={50}
            height={50}
            src={userData?.profileImage || profile}
            alt="프로필"
          />

          <Column
            $height={"100%"}
            $rowGap={"13px"}
            $customStyle={S.ProfileContent}
          >
            <Column $rowGap={"7px"}>
              <S.UserClassInfo>
                {userData?.stdInfo.grade}학년 {userData?.stdInfo.room}반{" "}
                {userData?.stdInfo.number}번
              </S.UserClassInfo>

              <S.UserName>
                {userData?.name}
                <span> 님, 환영합니다!</span>
              </S.UserName>
            </Column>
          </Column>
        </Row>

        <Row
          $alignItems={"center"}
          $justifyContent={"space-between"}
          $padding={"6px 3px 0 3px"}
          $customStyle={S.MyRequestMentorArticleWrap}
        >
          <S.CountOfMyPostText>
            내가 쓴 멘토 요청 글 <span>{countOfPost}개</span>
          </S.CountOfMyPostText>
          <S.Logout onClick={handleLogoutClick}>로그아웃</S.Logout>
        </Row>
      </Column>
    </S.Container>
  );
};

export default Profile;
