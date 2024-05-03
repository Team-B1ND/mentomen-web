import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const UserBox = css`
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const UserWrap = css`
  border-bottom: 1px solid #ddd;
`;

export const ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const ProfileContent = css`
  width: calc(100% - 50px);
`;

export const UserClassInfo = styled.p`
  color: #64748b;
  font-size: 14px;
`;

export const UserName = styled.p`
  font-size: 18px;
  color: #0f172a;
  font-family: "Pretendard-Bold" !important;

  span {
    font-size: 15px;
  }
`;

export const CountOfMyPostText = styled.p`
  font-size: 13px;
  color: #64748b;
  span {
    font-family: "Pretendard-Bold" !important;
  }
`;

export const MyRequestMentorArticleWrap = css`
  font-size: 13px;
`;

export const Logout = styled.p`
  color: #ff3742;
  text-align: left;

  cursor: pointer;
  font-family: "Pretendard-Bold" !important;

  transition: all 0.12s ease-in-out;
  &:active {
    opacity: 0.7;
  }
`;
