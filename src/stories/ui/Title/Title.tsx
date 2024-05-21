import React, { type ReactNode } from "react";
import styled, { css, CSSObject } from "styled-components";
import Image, { StaticImageData } from "next/image";
import { Column, Row } from "../../layout";

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
    <Column
      $padding={"0 0 15px 3px"}
      $rowGap={"5px"}
      $customStyle={css`
        font-size: 17px;
      `}
    >
      <Row $alignItems={"center"} $columnGap={"5px"}>
        {titleIcon && <Icon src={titleIcon} alt="아이콘" />}
        <Text $customStyle={customstyle!}>{titleText}</Text>
      </Row>

      <SubTitle>{subTitleText}</SubTitle>
    </Column>
  );
};

const Text = styled.p<{ $customStyle: CSSObject }>`
  font-family: "Pretendard-Bold" !important;
  ${({ $customStyle }) => $customStyle};
`;

const Icon = styled(Image)`
  width: 25px;
  height: 25px;
`;

const SubTitle = styled.p`
  font-size: 14px;
  color: #334155;
`;
