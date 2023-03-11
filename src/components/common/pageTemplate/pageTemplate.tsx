import { ReactNode } from "react";
import App from "../../../App";
import GlobalStyle from "../../../style/Global";
import Header from "../header/header";
interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
}

export default PageTemplate;
