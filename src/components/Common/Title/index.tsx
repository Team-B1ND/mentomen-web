import flex from "@/style/flex";
import React from "react";
import styled, { CSSObject } from "styled-components";
import Image, { StaticImageData } from "next/image";

interface Props {
  titleText: string;
  titleIcon?: string | StaticImageData;
  subTitleText?: string;
  customstyle?: CSSObject;
}

const Title = ({ titleText, titleIcon, subTitleText, customstyle }: Props) => {
  return (
    <TitleContainer>
      <MainTitle>
        {titleIcon && <Icon src={titleIcon} alt="아이콘" />}
        <p style={customstyle}>{titleText}</p>
      </MainTitle>
      <SubTitle>{subTitleText}</SubTitle>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  font-size: 17px;
  padding-left: 3px;
  padding-bottom: 15px;
  ${flex({ flexDirection: "column", rowGap: "5px" })}
`;

const MainTitle = styled.div`
  p {
    font-family: "Pretendard-Bold" !important;
  }
  ${flex({ alignItems: "center", columnGap: "5px" })}
`;

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #334155;
`;
