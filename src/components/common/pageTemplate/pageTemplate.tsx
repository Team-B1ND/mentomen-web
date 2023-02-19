import { ReactNode } from "react";
import App from "../../../App";
import GlobalStyle from "../../../style/Global";
import Header from "../Header/Header";
import ProfileBar from "../Profile";
interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProfileBar/>
      {children}
    </>
  );
}

export default PageTemplate;
