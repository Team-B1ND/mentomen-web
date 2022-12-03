import React from "react";
import { StartButton } from "../../../button/startButton/startButton";
import {
  ThirdSection,
  ThirdSectionImg,
  ThirdSectionText,
  ThirdSectionText1,
  ThirdSectionTextWrap,
  ThirdSectionWrap,
} from "./introBottom.style";
import IOStest from "../../../../assets/logo/IOStest.png";

function IntroBottom() {
  return (
    <ThirdSection>
      <ThirdSectionWrap>
        <ThirdSectionTextWrap>
          <ThirdSectionText>멘토찾기</ThirdSectionText>
          <ThirdSectionText1>
            도움이 필요할 때<br /> 나에게 도움을 줄 수 있는 멘토 찾기
          </ThirdSectionText1>
        </ThirdSectionTextWrap>
        <StartButton />
      </ThirdSectionWrap>
      <ThirdSectionImg src={IOStest} />
    </ThirdSection>
  );
}

export default IntroBottom;
