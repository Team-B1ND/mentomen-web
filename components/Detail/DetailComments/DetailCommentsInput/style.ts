import flex from "@/style/flex";
import { palette } from "@/style/palette";
import Image from "next/image";
import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: auto;
  ${flex({ columnGap: "10px" })}
`;

export const MyProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const CommentInputForm = styled.form`
  width: calc(100% - 40px);
  height: auto;
`;

export const CommentTextBox = styled.div<{
  placeholder: string;
}>`
  width: 100%;
  height: auto;

  outline: none;
  border: none;

  padding-top: 1px;
  padding-bottom: 8px;

  font-size: 15px;
  background-color: transparent;
  border-bottom: 1px solid #d9d9d9;

  transition: all 0.2s ease-in-out;
  &:focus {
    border-bottom: 2px solid ${palette.color};
  }

  ${({ placeholder }) =>
    placeholder &&
    css`
      cursor: text;
      &:empty:before {
        content: attr(placeholder);
        color: gray;
      }
    `}
`;

export const CommentSubmitContainer = styled.div`
  width: 100%;
  height: 37px;
  margin-top: 10px;
  ${flex({ alignItems: "center", justifyContent: "end", columnGap: "5px" })}

  button {
    width: 65px;
    height: 37px;

    outline: none;
    border: none;
    font-size: 15px;

    border-radius: 18px;
    transition: all 0.2s ease-in-out;
    font-family: "Pretendard-Medium" !important;
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

export const RegistButton = styled.button<{ sizeOfComment: number }>`
  background-color: #0000000d;
  color: gray;

  ${({ sizeOfComment }) =>
    sizeOfComment > 0 &&
    css`
      cursor: pointer;
      color: #f0f0f0;
      background-color: ${palette.color};
    `}
`;
