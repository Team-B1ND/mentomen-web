import { useEffect } from "react";
import * as S from "./style";
import aprofile from "../../../assets/icons/user/aprofile.png";
import { NAV_TAGS_ITEMS } from "../../../constants/Tags/tags.constant";
import copy from "../../../assets/icons/post/copy.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/Auth/useLogout";
import { useSetRecoilState } from "recoil";
import { UserIdAtom, UserProfileAtom } from "../../../stores/User/user.store";
import { useGetMyInfo } from "../../../queries/User/user.query";

const Nav = () => {
  const { data } = useGetMyInfo();
  const navigate = useNavigate();
  const { onLogout } = useLogout();

  const { pathname } = useLocation();
  const tagName = pathname.replace("/tag/", "");

  const setUserId = useSetRecoilState(UserIdAtom); //댓글 수정에 필요한 아이디가져오기
  const setUserProfile = useSetRecoilState(UserProfileAtom); // 게시글 수정에 필요한 프로필 정보가져오기

  useEffect(() => {
    setUserId(data?.data.userId!!);
  }, [setUserId, data?.data.userId]);

  useEffect(() => {
    setUserProfile(data?.data.profileImage!!);
  }, [setUserProfile, data?.data.profileImage]);

  return (
    <S.Container>
      <S.UserInfoContainer>
        <S.UserProfile src={data?.data.profileImage || aprofile} />
        {data?.data ? (
          <S.UserInfoWrapper>
            <S.UserName>{data?.data.name}</S.UserName>
            <S.UserGrade>{`${data?.data.stdInfo.grade}학년 ${data?.data.stdInfo.room}반 ${data?.data.stdInfo.number}번`}</S.UserGrade>
          </S.UserInfoWrapper>
        ) : (
          <p>학생정보가 없습니다.</p>
        )}
      </S.UserInfoContainer>

      <S.FiledUl>
        {NAV_TAGS_ITEMS.map((item) => (
          <li key={item.color} onClick={() => navigate(`/tag/${item.title}`)}>
            <S.FiledItemWrap>
              <div>
                <S.FiledImg src={item.image} />
                <S.FiledName
                  isSelectTag={item.title === tagName}
                  selectTag={tagName}
                >
                  {item.title}
                </S.FiledName>
              </div>
            </S.FiledItemWrap>
          </li>
        ))}
      </S.FiledUl>

      <S.MyInfoPathContainer>
        <div>
          <S.MyInfoPathImg src={copy} />
          <S.MyInfoPathText onClick={() => navigate("/mypage")}>
            내가 쓴 멘토 요청글
          </S.MyInfoPathText>
        </div>
      </S.MyInfoPathContainer>

      <S.LogoutText onClick={onLogout}>로그아웃</S.LogoutText>
    </S.Container>
  );
};

export default Nav;
