import useHideHeaderOrNav from "@/src/hooks/common/useHideHeaderOrNav";
import flex from "@/src/style/flex";
import styled from "styled-components";

const NotFound = () => {
  useHideHeaderOrNav("Both");
  return <Container>404 - 존재하지 않는 페이지입니다.</Container>;
};

export default NotFound;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  ${flex({ alignItems: "center", justifyContent: "center" })}
`;
