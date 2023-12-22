import CONFIG from "../../../../config/config.json";
import { StartBtn } from "./style";

function StartButton() {
  const authUrl = `http://dauth.b1nd.com/login?client_id=${CONFIG.CLIENTID}&redirect_uri=http://localhost:3000/callback`;
  return (
    <StartBtn onClick={() => (window.location.href = authUrl)}>
      멘투멘 시작하기
    </StartBtn>
  );
}

export default StartButton;
