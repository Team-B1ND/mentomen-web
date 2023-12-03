import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";
import flex from "../../../style/flex";

export const Container = styled.div`
  width: 500px;
  height: auto;

  border: 1px solid #ddd;
  border-radius: 5px;

  overflow: hidden;
  background-color: #fff;
`;

export const Profile = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;

  ${flex({ alignItems: "center", justifyContent: "space-between" })}
  padding: 0 12px 0 12px;
`;

export const UserInfo = styled.div`
  ${flex({ alignItems: "center", columnGap: "10px" })}
`;

export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const ClassInfo = styled.div`
  font-family: "Pretendard-Bold" !important;
  font-weight: 700;

  ${flex({ alignItems: "center", columnGap: "3px" })}
  font-size: 15px;
`;

export const TagIcon = styled.img`
  width: 40px;
  height: 40px;

  z-index: 3;

  position: absolute;
  top: 0;
  right: 0;
`;

export const DateTime = styled.p`
  font-size: 12px;
  font-weight: normal;
`;

export const ImageContainer = styled.div<{ sizeOfImages: number }>`
  width: 100%;
  height: auto;

  ${flex({ alignItems: "center", justifyContent: "center" })}

  position: relative;
  text-align: center;

  background-color: ${({ sizeOfImages }) =>
    sizeOfImages && sizeOfImages > 0 ? "#000" : "#eee"};
`;

export const NoneImage = styled.div`
  width: 100%;
  height: 430px;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: contain;
`;

export const Content = styled.div`
  width: 100%;
  height: 160px;
  border-top: 1px solid #ddd;
`;

export const CommentAndDate = styled.div`
  width: 100%;
  height: 40px;

  ${flex({ alignItems: "center", justifyContent: "space-between" })}
  padding: 0 10px 0 10px;
`;

export const CommentIcon = styled(AiOutlineComment)`
  width: 30px;
  height: 30px;
  color: #000;

  cursor: pointer;
  transition: all 0.1s ease-out;
  &:active {
    color: #737373;
  }
`;

export const Date = styled.p`
  color: #737373;
  font-size: 14px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 15px 10px 10px 10px;

  white-space: pre-wrap;
  line-height: 23px;
  font-size: 16px;
`;
