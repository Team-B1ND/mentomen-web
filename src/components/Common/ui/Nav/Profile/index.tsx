import { UserDataAtom } from "@/src/store/User/user.store";
import { useRecoilValue } from "recoil";
import Title from "../../Title";
import * as S from "./style";
import profile from "@/public/icons/user/aprofile.png";
import developer from "@/public/icons/title/developer.png";
import { CountOfPostAtom } from "@/src/store/Post/post.store";
import { useLogout } from "@/src/hooks/Auth/useLogout";

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
      <S.UserBox>
        <S.UserWrap>
          <S.ProfileImage
            src={userData?.profileImage || profile}
            alt="프로필"
          />

          <S.ProfileContent>
            <div>
              <S.UserClassInfo>
                {userData?.stdInfo.grade}학년 {userData?.stdInfo.room}반{" "}
                {userData?.stdInfo.number}번
              </S.UserClassInfo>

              <S.UserName>
                {userData?.name}
                <span> 님, 환영합니다!</span>
              </S.UserName>
            </div>
          </S.ProfileContent>
        </S.UserWrap>

        <S.Test>
          <S.CountOfMyPostText>
            내가 쓴 멘토 요청 글 <span>{countOfPost}개</span>
          </S.CountOfMyPostText>
          <S.Logout onClick={handleLogoutClick}>로그아웃</S.Logout>
        </S.Test>
      </S.UserBox>
    </S.Container>
  );
};

export default Profile;
