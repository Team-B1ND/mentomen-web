import leftArrow from "@/public/icons/RequestMentor/leftArrow.svg";
import flex from "@/style/flex";
import Image from "next/image";
import styled, { css } from "styled-components";

interface Props {
  isRequiredPostData: boolean;
  handlePageOutEvent: () => void;
  handlePostSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RequestMentorNavigation = ({
  isRequiredPostData,
  handlePageOutEvent,
  handlePostSubmit,
}: Props) => {
  return (
    <NavigationBox isRequiredPostData={isRequiredPostData}>
      <PrevArrowIcon
        src={leftArrow}
        onClick={handlePageOutEvent}
        alt="이전 페이지로 이동"
      />
      <button onClick={handlePostSubmit}>멘토 요청하기</button>
    </NavigationBox>
  );
};

export default RequestMentorNavigation;

export const NavigationBox = styled.div<{ isRequiredPostData: boolean }>`
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
