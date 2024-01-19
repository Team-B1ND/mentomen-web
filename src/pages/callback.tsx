import flex from "@/style/flex";
import Image from "next/image";
import styled from "styled-components";
import { useDAtuhLogin } from "../hooks/Auth/useDAtuhLogin";
import useHideHeaderOrNav from "../hooks/common/useHideHeaderOrNav";
import b1nd from "@/public/icons/logo/b1nd.png";

function AuthLoadingPage() {
  useDAtuhLogin();
  useHideHeaderOrNav("Both");
  return (
    <Container>
      <B1ndLogo src={b1nd} alt="" />
      <p>도담도담 계정으로 로그인 중...</p>
    </Container>
  );
}

export default AuthLoadingPage;

const Container = styled.div`
  width: 100%;
  height: 95vh;
  ${flex({
    flexDirection: "column",
    rowGap: "10px",
    alignItems: "center",
    justifyContent: "center",
  })}

  p {
    font-family: "Pretendard-Bold" !important;
  }
`;

const B1ndLogo = styled(Image)`
  width: 100px;
  height: 100px;
`;
