import config from "../../../config/config.json";
import { BtnText, StartBtn } from "./StartButton.style";

function StartButton() {
  const authUrl = `http://dauth.b1nd.com/login?client_id=${config.CLIENTID}&redirect_uri=http://localhost:3000/callback`;
  return (
    <StartBtn onClick={() => (window.location.href = authUrl)}>
      <BtnText>멘투멘 시작하기</BtnText>
    </StartBtn>
  );
}

export default StartButton;
