import leftArrow from "@/public/icons/RequestMentor/leftArrow.svg";
import flex from "@/src/styles/flex";
import Image from "next/image";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

interface Props {
  isRequiredPostData: boolean;
  isCoincidePostData: boolean;
  handlePageOutEvent: () => void;
  handlePostSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RequestMentorNavigation = ({ ...hooks }: Props) => {
  const router = useRouter();

  return (
    <NavigationBox
      isRequiredPostData={hooks.isRequiredPostData}
      isCoincidePostData={hooks.isCoincidePostData}
    >
      <PrevArrowIcon
        src={leftArrow}
        onClick={hooks.handlePageOutEvent}
        alt="이전 페이지로 이동"
      />
      <button onClick={hooks.handlePostSubmit}>
        {router.pathname === "/request-mentor/modify"
          ? "멘토 요청 수정하기"
          : "멘토 요청하기"}
      </button>
    </NavigationBox>
  );
};

export default RequestMentorNavigation;

export const NavigationBox = styled.div<{
  isRequiredPostData: boolean;
  isCoincidePostData: boolean;
}>`
  width: 100%;
  height: 60px;

  border-bottom: 1px solid #ddd;
  padding: 0 15px 0 10px;

  button {
    padding: 10px;
    font-family: "Pretendard-Medium" !important;

    outline: none;
    border: none;
    cursor: pointer;

    border-radius: 7px;
    border: 1px solid #ddd;
    background-color: #0000000d;
    color: gray;

    transition: all 0.3s ease-in-out;
    ${({ isRequiredPostData }) =>
      isRequiredPostData &&
      css`
        background-color: #2749dc;
        color: #f2f2f2;
      `}
    ${({ isCoincidePostData }) =>
      isCoincidePostData &&
      css`
        background-color: #0000000d;
        color: gray;
      `}
  }

  ${flex({ alignItems: "center", justifyContent: "space-between" })}
`;

export const PrevArrowIcon = styled(Image)`
  width: 35px;
  height: 35px;

  cursor: pointer;
  padding: 3px;
  border-radius: 7px;

  transition: all 0.3s ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(0.91);
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;
