import { BsArrowUpShort } from "react-icons/bs";
import flex from "@/src/styles/flex";
import React from "react";
import styled from "styled-components";
import { palette } from "@/src/styles/palette";

const ScrollTopButton = () => {
  return (
    <Container
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="맨 위로 이동"
    >
      <BsArrowUpShort size={34} color={"#fff"} />
    </Container>
  );
};

export default ScrollTopButton;

const Container = styled.div`
  width: 55px;
  height: 55px;

  border-radius: 4rem;
  z-index: 3;

  background-color: ${palette.color};
  box-shadow: 0px 6px 16px 6px rgba(16, 19, 23, 0.22);
  cursor: pointer;

  position: fixed;
  right: 150px;
  bottom: 40px;

  p {
    font-size: 12px;
    color: #fff;
  }

  ${flex({
    justifyContent: "center",
    alignItems: "center",
  })}
`;
