import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const RequestMentoBox = css`
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Profile = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 4rem;
  border: 1px solid #e2e8f0;
`;

export const RequestButton = css`
  width: calc(100% - 40px);
  border-radius: 7px;
  border: 1px solid #e2e8f0;
  color: #94a3b8;
  font-size: 13px;
  cursor: pointer;
`;
