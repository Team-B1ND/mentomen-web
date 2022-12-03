import React from "react";
import { LeftWrap, MainImg, MainText, MainWrap, MidText } from "./home.style";
import IOStest from "../../../assets/logo/IOStest.png";
import { StartButton } from "../../button/startButton/startButton";

function Home() {
  return (
    <>
      <MainWrap>
        <LeftWrap>
          <MainText>
            멘토 멘티 찾기 서비스
            <br />
            멘투멘을 만나보세요
          </MainText>
          <MidText>멘투멘은 멘토와 멘티를 서로 이어주는 서비스입니다.</MidText>
          <StartButton />
        </LeftWrap>
        <MainImg src={IOStest} />
      </MainWrap>
    </>
  );
}
export default Home;
