import Image from "next/image";
import styled, { CSSProperties } from "styled-components";
import flex from "@/style/flex";

export const Content = styled.div<{ imgurls: string[] }>`
  width: ${({ imgurls }) => (imgurls !== null ? "40%" : "100%")};
  height: 100%;
  border-left: 1px solid #ddd;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 7px 0px 12px;
`;

export const Comment = styled.div`
  width: 100%;
  height: calc(100% - 115px);
  border-top: 1px solid #ddd;
`;

export const CommentBox = styled.ul`
  width: 100%;
  height: 100%;

  overflow: auto;
  padding: 15px 0 15px 12px;

  ::-webkit-scrollbar {
    display: none;
  }

  ${flex({ flexDirection: "column", rowGap: "30px" })}

  li {
    width: 100%;
    height: auto;
    padding-right: 5px;

    ${flex({ alignItems: "center", columnGap: "10px" })}
  }
`;

export const UserProfileWrap = styled.div`
  width: 135px;
  height: 100%;
  ${flex({ alignItems: "flex-start" })}
`;

export const UserProfile = styled.div`
  ${flex({ alignItems: "center", columnGap: "15px" })}
  white-space: nowrap;
`;

export const ProfileImage: CSSProperties = {
  width: "35px",
  height: "35px",
  borderRadius: "4rem",
  objectFit: "cover",
  border: "1px solid #ddd",
};

export const ProfileWrap = styled.div`
  ${flex({ flexDirection: "column", rowGap: "5px" })}
`;

export const CommentEditAndDel = styled.div`
  height: 17px;
  font-size: 12px;
  color: gray;
  ${flex({ alignItems: "center", columnGap: "3px" })}

  p {
    cursor: pointer;
    transform: scale(1);
    &:hover {
      border-bottom: 1px solid gray;
    }
    &:active {
      color: #ddd;
      border-bottom: 1px solid #ddd;
    }
  }
`;

export const CommentText = styled.div`
  width: calc(100% - 150px);
  height: auto;

  font-size: 14px;
  line-height: 20px;
`;

export const CommentEditContainer = styled.div`
  width: calc(100% - 150px);
  ${flex({ columnGap: "5px" })}

  textarea {
    width: calc(100% - 30px);
    height: auto;

    font-size: 14px;
    line-height: 20px;

    padding: 4px 7px 4px 7px;
    outline: none;

    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const DelAndEditContainer = styled.div`
  ${flex({
    flexDirection: "column",
    rowGap: "5px",
  })}
`;

export const DelAndEditIcon = styled(Image)`
  width: 19px;
  height: 19px;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.14s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
  &:active {
    transform: scale(0.85);
  }
`;

export const InputCommentForm = styled.form`
  width: 100%;
  height: 55px;
  border-top: 1px solid #ddd;

  ${flex({ alignItems: "center", columnGap: "5px" })}

  input {
    width: calc(100% - 55px);
    height: 100%;

    outline: none;
    border: none;

    padding-left: 10px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    margin-right: 3px;
    background-color: transparent;

    ${flex({ alignItems: "center" })}

    outline: none;
    border: none;
    cursor: pointer;

    font-size: 15px;
    font-weight: bold;

    transform: scale(1);
    transition: all 0.2s ease-in-out;
    border-radius: 5px;

    &:hover {
      background-color: #ddd;
      transform: scale(0.93);
    }
    &:active {
      background-color: #eee;
      color: #ddd;
    }
  }
`;

export const NoneCommentText = styled.p`
  padding: 15px 0 15px 12px;
  font-size: 14px;
  font-weight: bold;
`;
