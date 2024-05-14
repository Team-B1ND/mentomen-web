import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled, { css } from "styled-components";

export const MyProfileImage = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 4rem;
  border: 1px solid #ddd;
`;

export const CommentInputForm = styled.div`
  width: 100%;
`;

export const CommentTextInput = styled.span<{
  placeholder: string;
}>`
  width: 100%;
  display: block;

  outline: none;
  border: none;
  padding: 0 3px 8px;

  font-size: 15px;
  line-height: 18px;
  background-color: transparent;

  white-space: pre-wrap;
  word-break: break-word;
  transition: all 0.2s ease-in-out;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:focus {
    border-bottom: 2px solid #29275c;
  }

  ${({ placeholder }) =>
    placeholder &&
    css`
      cursor: text;
      &:empty:before {
        content: attr(placeholder);
        color: gray;
      }
    `};
`;

export const CommentSubmitContainer = styled.div`
  width: 100%;
  height: 37px;
  margin-top: 10px;
  ${Flex({ alignItems: "center", justifyContent: "end", columnGap: "5px" })}

  button {
    width: 65px;
    height: 37px;

    outline: none;
    border: none;
    font-size: 15px;
    cursor: pointer;

    border-radius: 18px;
    transition: all 0.2s ease-in-out;
    font-family: "Pretendard-Medium" !important;
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  &:hover {
    background-color: #ddd;
  }
`;

export const RegistButton = styled.button<{
  $lengthOfComment: number;
  $isSameComment?: boolean;
}>`
  background-color: #0000000d;
  color: gray;
  ${({ $lengthOfComment, $isSameComment }) =>
    $lengthOfComment > 0 &&
    !$isSameComment &&
    css`
      cursor: pointer;
      color: #f2f2f2;
      background-color: #2749dc;
    `}
`;
