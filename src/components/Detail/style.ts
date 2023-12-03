import styled from "styled-components";
import flex from "../../style/flex";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);

  ${flex({ alignItems: "center", justifyContent: "center" })}
`;

export const Wrapper = styled.div`
  width: 77%;
  height: 93%;
  background-color: #fff;

  border-radius: 0 5px 5px 0;
  overflow: hidden;

  display: flex;
`;

export const ImageContainer = styled.div`
  width: 60%;
  height: auto;

  ${flex({ alignItems: "center" })}
  background-color: #000;
`;

export const Content = styled.div`
  width: 40%;
  height: 100%;
  background-color: red;
`;
