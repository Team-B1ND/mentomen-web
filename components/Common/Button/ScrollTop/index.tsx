import { BiUpArrowAlt } from "react-icons/bi";
import flex from "@/style/flex";
import React from "react";
import styled from "styled-components";
import { palette } from "@/style/palette";

const ScrollTopButton = () => {
  return (
    <Container
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="맨 위로 이동"
    >
      <BiUpArrowAlt size={30} color={"#fff"} />
    </Container>
  );
};

export default ScrollTopButton;

const Container = styled.div`
  width: 50px;
  height: 50px;

  border-radius: 4rem;
  z-index: 3;

  background-color: ${palette.color};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  position: fixed;
  right: 150px;
  bottom: 40px;

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
