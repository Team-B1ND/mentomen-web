import React from "react";
import {
  SecondSection,
  SecondSectionStrongText,
  SecondSectionText,
  SecondSectionWrap,
} from "./introMid.style";

function IntroMid() {
  return (
    <SecondSection>
      <SecondSectionWrap>
        <SecondSectionText>
          내가 프로젝트를 하면서 막혔던 것을
          <SecondSectionStrongText> 멘토에게 질문 </SecondSectionStrongText>
          해보세요.
        </SecondSectionText>
        <SecondSectionText>
          멘토들을 동해 프로젝트를 하며 막혔던 부분을 도움 받을 수 있습니다
        </SecondSectionText>
      </SecondSectionWrap>
    </SecondSection>
  );
}

export default IntroMid;
