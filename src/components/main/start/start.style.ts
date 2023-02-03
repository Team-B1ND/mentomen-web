import styled from "styled-components";
import { palette } from "../../../style/palette";

export const MainWrap = styled.div`
  display: flex;
  color: ${palette.color};
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 180px;
  padding-top: 150px;
`;

export const MainText = styled.p`
  font-weight: 700;
  font-size: 50px;
  line-height: 90px;
`;

export const MidText = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 90px;

  margin-top: 90px;
`;

export const MainImg = styled.img`
  width: 482px;
  height: 700px;

  margin-top: 100px;
  margin-left: 150px;
`;
