import React, { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";
import Image, { StaticImageData } from "next/image";
import { Flex } from "../../layout";

interface Props {
  titleText: ReactNode;
  titleIcon?: string | StaticImageData;
  subTitleText?: ReactNode;
  customstyle?: CSSObject;
}

export const Title = ({
  titleText,
  titleIcon,
  subTitleText,
  customstyle,
}: Props) => {
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

const TitleContainer = styled.div`
  font-size: 17px;
  padding-left: 3px;
  padding-bottom: 15px;
  ${Flex({ flexDirection: "column", rowGap: "5px" })}
`;

const MainTitle = styled.div`
  p {
    font-family: "Pretendard-Bold" !important;
  }
  ${Flex({ alignItems: "center", columnGap: "5px" })}
`;

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #334155;
`;
