import styled, { css } from "styled-components";
import flex from "../../../style/flex";
import { palette } from "../../../style/palette";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);

  z-index: 4;

  ${flex({ alignItems: "center", justifyContent: "center" })};
`;

export const Wrapper = styled.div`
  width: 63%;
  height: 75%;
  background-color: #fff;

  border-radius: 5px;
  overflow: hidden;

  ${flex({ flexDirection: "column" })}
`;

export const Title = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
  padding: 0 18px 0 18px;

  ${flex({ alignItems: "center", justifyContent: "space-between" })}

  p {
    font-size: 16px;
    font-family: "Pretendard-Bold" !important;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
`;

export const Image = styled.div<{ sizeOfImgUrl: number }>`
  width: calc(100% - 347px);
  height: auto;

  overflow: hidden;
  background-color: ${({ sizeOfImgUrl }) =>
    sizeOfImgUrl > 0 ? "#000" : "#fff"};
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;

  ${flex({ alignItems: "center", justifyContent: "center" })}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const UploadImgIcon = styled.img`
  width: 300px;
  height: 300px;
`;

export const Content = styled.div`
  width: 347px;
  height: 100%;
  border-left: 1px solid #ddd;
`;

export const TagUl = styled.ul`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
  padding: 0 10px 0 10px;

  ${flex({
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: "5px",
  })}
`;

export const TagLi = styled.li`
  cursor: pointer;
  ${flex({ alignItems: "center" })}

  img {
    width: 60px;
    height: 30px;
  }
`;

export const ContentTextArea = styled.textarea`
  width: 100%;
  height: calc(100% - 110px);
  padding: 10px;

  resize: none;
  border: none;
  outline: none;
`;

export const Submit = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 18px 0 12px;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

const HoverAnimation = css`
  border-radius: 5px;
  padding: 7px;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;

export const Upload = styled.div`
  ${flex({ alignItems: "center", columnGap: "5px" })};
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;

  input {
    display: none;
  }

  ${HoverAnimation}
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-family: "Pretendard-Bold" !important;

  cursor: pointer;
  font-size: 15px;
  color: ${palette.color};

  ${HoverAnimation}
`;
