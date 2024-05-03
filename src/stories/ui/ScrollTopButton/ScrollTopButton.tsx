import { BsArrowUpShort } from "@react-icons/all-files/bs/BsArrowUpShort";
import React from "react";
import { css } from "styled-components";
import { Row } from "../../layout";

export const ScrollTopButton = () => {
  return (
    <Row
      $width={"55px"}
      $height={"55px"}
      $backgroundColor={"#29275c"}
      $alignItems={"center"}
      $justifyContent={"center"}
      $customStyle={Container}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="맨 위로 이동"
    >
      <BsArrowUpShort size={34} color={"#fff"} />
    </Row>
  );
};

const Container = css`
  border-radius: 4rem;
  z-index: 3;

  box-shadow: 0px 6px 16px 6px rgba(16, 19, 23, 0.22);
  cursor: pointer;

  position: fixed;
  right: 150px;
  bottom: 40px;

  p {
    font-size: 12px;
    color: #fff;
  }
`;
