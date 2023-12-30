import styled, { css } from "styled-components";
import flex from "../../../style/flex";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;

  width: 320px;
  height: 500px;

  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ddd;

  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  overflow: hidden;

  padding-bottom: 10px;
`;

export const NoticeText = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ddd;

  padding: 0 15px 0 18px;
  ${flex({ alignItems: "center", justifyContent: "space-between" })}

  p {
    font-size: 16px;
    font-family: "Pretendard-Bold" !important;
  }
`;

export const CloseIcon = styled(AiOutlineClose)`
  width: 23px;
  height: 23px;
  padding: 3px;
  cursor: pointer;

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
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 40px);
`;

export const NoticeBox = styled.ul`
  width: 100%;
  height: 100%;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  ${flex({ flexDirection: "column", rowGap: "10px" })}

  li {
    width: 100%;
    height: auto;
    padding: 10px 0 10px 5px;

    transition: all 0.2s ease-in-out;
    ${flex({ alignItems: "center", columnGap: "10px" })}
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
    &:active {
      background-color: #ddd;
    }
  }
`;

export const UserInfo = styled.div`
  white-space: nowrap;
  width: 96px;
  ${flex({ alignItems: "center", columnGap: "7px" })}

  img {
    width: 35px;
    height: 35px;
    border-radius: 4rem;
  }

  div {
    ${flex({ flexDirection: "column", rowGap: "5px" })}
  }
`;

export const NewIcon = styled.p`
  width: 10px;
  height: 100%;

  font-size: 25px;
  color: #316ae2;
  text-align: center;
`;

export const Name = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Bold" !important;
`;

export const NoticeDate = styled.p`
  font-size: 11px;
  color: gray;
`;

export const NoneNoticeText = styled.p`
  padding: 15px 0 15px 12px;
  font-size: 14px;
  font-weight: bold;
`;

export const Comment = styled.div`
  width: calc(100% - 96px);
  height: 100%;
  font-size: 14px;

  padding: 7px;
  line-height: 17px;

  ${flex({ alignItems: "center" })}
`;
