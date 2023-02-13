import React from "react";
import IOStest from "../../../assets/logo/IOStest.png";
import { StartButton } from ".././../Button/StartButton/StartButton";
import {
  StartContainer,
  StartImg,
  StartLeftWrap,
  StartMidText,
  StartText,
} from "./start.style";

function Start() {
  return (
    <>
      <StartContainer>
        <StartLeftWrap>
          <StartText>
            멘토 멘티 찾기 서비스
            <br />
            멘투멘을 만나보세요
          </StartText>
          <StartMidText>
            멘투멘은 멘토와 멘티를 서로 이어주는 서비스입니다.
          </StartMidText>
          <StartButton />
        </StartLeftWrap>
        <StartImg src={IOStest} />
      </StartContainer>
    </>
  );
}
export default Start;
