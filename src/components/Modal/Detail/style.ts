import styled from "styled-components";
import flex from "../../../style/flex";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Wrapper = styled.div`
  width: 77%;
  height: 93%;
  background-color: #fff;

  border-radius: 5px;
  overflow: hidden;

  display: flex;
`;

export const ImageContainer = styled.div`
  width: 60%;
  height: auto;

  ${flex({ alignItems: "center", justifyContent: "center" })}
  background-color: #000;
`;

export const Content = styled.div`
  width: 40%;
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

  img {
    width: 35px;
    height: 35px;

    border-radius: 4rem;
    object-fit: cover;
    border: 1px solid #ddd;
  }
`;

export const UserComment = styled.div`
  width: calc(100% - 150px);
  height: auto;

  font-size: 14px;
  line-height: 20px;
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
