import React, { useEffect } from "react";
import { useGetMember } from "../../../querys/Member/member.query";
import * as S from "./style";
import aprofile from "../../../assets/images/aprofile.png";
import { FILEDITEM } from "../../../constants/Filed/filed";
import copy from "../../../assets/images/copy.svg";
import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../../hooks/Logout/useLogOut";
import { useSetRecoilState } from "recoil";
import { USERID, USERPROFILE } from "../../../recoil/User/UserAtom";

const Nav = () => {
  const { data } = useGetMember();
  const navigate = useNavigate();
  const { onLogOut } = useLogOut();
  const setUserId = useSetRecoilState<number>(USERID); //댓글 수정에 필요한 아이디가져오기
  const setUserProfile = useSetRecoilState<string>(USERPROFILE); // 게시글 수정에 필요한 프로필 정보가져오기

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
        {FILEDITEM.map((item) => (
          <li
            key={item.color}
            onClick={() => navigate(`/tag/${item.title.toUpperCase()}`)}
            style={{ cursor: "pointer" }}
          >
            <S.FiledItemWrap>
              <S.FiledImg src={item.image} />
              <S.FiledName>{item.title}</S.FiledName>
            </S.FiledItemWrap>
          </li>
        ))}
      </S.FiledUl>

      <S.MyInfoPathContainer>
        <S.MyInfoPathImg src={copy} />
        <S.MyInfoPathText onClick={() => navigate("/mypage")}>
          내가 쓴 멘토 요청글
        </S.MyInfoPathText>
      </S.MyInfoPathContainer>

      <S.LogoutText onClick={onLogOut}>로그아웃</S.LogoutText>
    </S.Container>
  );
};

export default Nav;
