import { BsArrowUpShort } from "@react-icons/all-files/bs/BsArrowUpShort";
import React from "react";
import { styled } from "styled-components";
import { Flex } from "../../layout";

export const ScrollTopButton = () => {
  return (
    <Container
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="맨 위로 이동"
    >
      <BsArrowUpShort size={34} color={"#fff"} />
    </Container>
  );
};

const Container = styled.div`
  width: 55px;
  height: 55px;
  background-color: #29275c;

  border-radius: 4rem;
  z-index: 3;

  box-shadow: 0px 6px 16px 6px rgba(16, 19, 23, 0.22);
  cursor: pointer;

  position: fixed;
  right: 150px;
  bottom: 40px;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  p {
    font-size: 12px;
    color: #fff;
  }
`;
