import flex from "@/src/styles/flex";
import Image from "next/image";
import styled, { css } from "styled-components";

export const TagUl = styled.div`
  width: 100%;
  height: auto;

  list-style: none;
  padding: 5px 0 35px 0;
  ${flex({ columnGap: "13px" })}
  li {
    cursor: pointer;
  }
`;

export const TagIcon = styled(Image)`
  width: 68px;
  height: 30px;
`;

export const ContentInputContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 35px;
`;

export const ContentInput = styled.span<{ placeholder: string }>`
  width: 100%;
  height: 100%;
  min-height: 100px;

  display: block;

  outline: none;
  border: none;

  font-size: 16px;
  line-height: 18px;
  white-space: pre-wrap;
  word-break: break-word;

  ${({ placeholder }) =>
    placeholder &&
    css`
      cursor: text;
      &:empty:before {
        content: attr(placeholder);
        color: #64748b;
        line-height: 20px;
        font-family: "Pretendard-Light" !important;
      }
    `};
`;

export const AttachImageBox = styled.div`
  width: 100%;
  height: auto;

  ${flex({ flexDirection: "column", rowGap: "15px" })}
`;

export const AttachImageWrap = styled.div<{ isDrop: boolean }>`
  width: 100%;
  height: 130px;

  border-radius: 7px;
  transition: all 0.2s ease-in-out;
  border: 1.7px dashed #ddd;

  ${({ isDrop }) =>
    isDrop &&
    css`
      transform: scale(0.97);
      background-color: #f2f2f2;
      border: 1.5px dashed #2745f2;
    `};

  ${flex({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: "15px",
  })};

  input {
    display: none;
  }

  button {
    padding: 6px 7px;
    border-radius: 5px;
    background-color: transparent;

    cursor: pointer;
    outline: none;
    border: 1px solid #000;

    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ddd;
    }

    p {
      font-size: 14px;
      font-family: "Pretendard-Medium" !important;
    }

    ${flex({ alignItems: "center", columnGap: "5px" })}
  }
`;

export const AttachImageText = styled.p`
  font-size: 14px;
  color: #64748b;
`;

export const UploadIcon = styled(Image)`
  width: 22px;
  height: 22px;
`;

export const PreviewAttachImageBox = styled.div`
  width: 100%;
  height: auto;
  padding-left: 2px;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PreviewImageWrap = styled.div`
  width: 205px;
  height: 140px;

  border-radius: 5px;
  border: 1px solid #ddd;
  overflow: hidden;

  position: relative;
`;

export const CancelPreviewImage = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 0 0 0 5px;

  position: absolute;
  top: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;

  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 55, 66, 0.89);
  }
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const CancelIcon = styled(Image)`
  width: 25px;
  height: 25px;
  margin: 1px 0 0 1px;
  cursor: pointer;
`;

export const PreviewImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.07);
  }
`;
