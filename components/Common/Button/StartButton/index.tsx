import { DAUTH_URL } from "../../../../constants/Auth/auth.constant";
import { StartBtn } from "./style";

function StartButton() {
  return (
    <StartBtn onClick={() => (window.location.href = DAUTH_URL)}>
      멘투멘 시작하기
    </StartBtn>
  );
}

export default StartButton;
