import { Flex } from "@/src/stories/layout";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
`;

export const RequestMentoBox = styled.div`
  width: 100%;
  height: 80px;

  padding: 0 15px;
  background-color: #fff;

  border: 1px solid #ddd;
  border-radius: 5px;

  ${Flex({ alignItems: "center", justifyContent: "center", columnGap: "10px" })}
`;

export const Profile = styled(Image)`
  width: 45px;
  height: 45px;
  border-radius: 4rem;
  border: 1px solid #e2e8f0;
`;

export const RequestButton = styled.div`
  width: calc(100% - 40px);
  height: 50px;

  border-radius: 7px;
  background-color: #f8fbfc;
  border: 1px solid #e2e8f0;

  color: #94a3b8;
  font-size: 13px;
  cursor: pointer;

  ${Flex({ alignItems: "center", justifyContent: "center" })}
`;
