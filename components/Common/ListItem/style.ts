import styled, { css } from "styled-components";
import { AiOutlineComment } from "react-icons/ai";
import flex from "@/style/flex";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Image from "next/image";

export const ArticleContainer = styled.article`
  width: 550px;
  height: auto;

  overflow: hidden;
  background-color: #fff;
`;

export const Profile = styled.div`
  width: 100%;
  height: 60px;

  ${flex({
    alignItems: "center",
    justifyContent: "space-between",
  })}
`;

export const UserInfo = styled.div`
  ${flex({ alignItems: "center", columnGap: "10px" })}
`;

export const ProfileImage = {
  width: "35px",
  height: "35px",
  borderRadius: "4rem",
  border: "1px solid #ddd",
};

export const StudentInfoContainer = styled.div`
  font-family: "Pretendard-Bold" !important;
  font-weight: 700;
  font-size: 15px;

  ${flex({ alignItems: "center", columnGap: "3px" })}
`;

export const DotsIcon = styled(BiDotsVerticalRounded)<{
  postsetting: string;
}>`
  width: 30px;
  height: 30px;

  border-radius: 5px;
  padding: 3px;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  background-color: ${({ postsetting }) => postsetting === "true" && "#ddd"};

  &:hover {
    background-color: #ddd;
    transform: scale(0.93);
  }
  &:active {
    background-color: #eee;
  }
`;

export const TagIcon = styled(Image)<{ imgurls?: string }>`
  z-index: 2;

  ${({ imgurls }) =>
    imgurls !== null
      ? css`
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          right: 0;
        `
      : css`
          width: 25px;
          height: 25px;
        `}
`;

export const DateTime = styled.p`
  font-size: 12px;
  font-weight: normal;
`;

export const ImageContainer = styled.div<{ sizeOfImages: number }>`
  width: 100%;
  height: auto;
  min-height: 300px;

  border-radius: 5px;
  border: 1px solid #ddd;

  ${flex({ alignItems: "center", justifyContent: "center" })}

  position: relative;
  overflow: hidden;

  background-color: ${({ sizeOfImages }) =>
    sizeOfImages && sizeOfImages > 0 ? "#000" : "#eee"};
`;

export const Content = styled.div`
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #ddd;
`;

export const CommentAndDate = styled.div`
  width: 100%;
  height: 40px;

  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const CommentIcon = styled(AiOutlineComment)`
  width: 35px;
  height: 35px;
  color: #000;

  cursor: pointer;
  transition: all 0.1s ease-out;
  transform: scale(1);
  padding: 3px;

  &:hover {
    background-color: #ddd;
    border-radius: 5px;
  }

  &:active {
    background-color: #eee;
    transform: scale(0.95);
    color: #737373;
  }
`;

export const DateAndTag = styled.div`
  ${flex({ alignItems: "center", columnGap: "5px" })}
`;

export const Date = styled.p`
  color: #737373;
  font-size: 14px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 15px 10px 10px 5px;

  white-space: pre-wrap;
  line-height: 21px;
  font-size: 16px;
`;
