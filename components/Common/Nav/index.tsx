import { useEffect } from "react";
import * as S from "./style";
import aprofile from "@/public/icons/user/aprofile.png";
import { NAV_TAGS_ITEMS } from "@/constants/Tags/tags.constant";
import copy from "@/public/icons/post/copy.svg";
import { useLogout } from "@/hooks/Auth/useLogout";
import { useSetRecoilState } from "recoil";
import { UserIdAtom, UserProfileAtom } from "@/stores/User/user.store";
import { useGetMyInfo } from "@/queries/User/user.query";
import { useRouter } from "next/router";
import Image from "next/image";

const Nav = () => {
  const { data } = useGetMyInfo();
  const router = useRouter();
  const { tag } = router.query;
  const { onLogout } = useLogout();

  const setUserId = useSetRecoilState(UserIdAtom); //댓글 수정에 필요한 아이디가져오기
  const setUserProfile = useSetRecoilState(UserProfileAtom); // 게시글 수정에 필요한 프로필 정보가져오기

  useEffect(() => {
    setUserId(data?.data.userId!!);
  }, [setUserId, data?.data.userId]);

  useEffect(() => {
    setUserProfile(data?.data.profileImage!!);
  }, [setUserProfile, data?.data.profileImage]);

  return (
    <S.AsideContainer>
      <S.UserInfoContainer>
        <S.UserProfile src={data?.data.profileImage || aprofile} alt="" />
        {data?.data ? (
          <S.UserInfoWrapper>
            <S.UserName>{data?.data.name}</S.UserName>
            <S.UserGrade>{`${data?.data.stdInfo.grade}학년 ${data?.data.stdInfo.room}반 ${data?.data.stdInfo.number}번`}</S.UserGrade>
          </S.UserInfoWrapper>
        ) : (
          <p>학생정보가 없습니다.</p>
        )}
      </S.UserInfoContainer>

      <S.FiledNav>
        {NAV_TAGS_ITEMS.map((item) => (
          <li
            key={item.color}
            onClick={() => router.push(`/tag/${item.title}`)}
          >
            <S.FiledItemWrap>
              <div>
                <Image
                  src={item.image}
                  width={1000}
                  height={1000}
                  style={S.FiledImg}
                  alt=""
                />
                <S.FiledName
                  isSelectTag={item.title === tag}
                  selectTag={tag as string}
                >
                  {item.title}
                </S.FiledName>
              </div>
            </S.FiledItemWrap>
          </li>
        ))}
      </S.FiledNav>

      <S.MyInfoPathContainer>
        <div>
          <S.MyInfoPathImg src={copy} alt="이미지 없음" />
          <S.MyInfoPathText onClick={() => router.push("/mypage")}>
            내가 쓴 멘토 요청글
          </S.MyInfoPathText>
        </div>
      </S.MyInfoPathContainer>

      <S.LogoutText onClick={onLogout}>로그아웃</S.LogoutText>
    </S.AsideContainer>
  );
};

export default Nav;
