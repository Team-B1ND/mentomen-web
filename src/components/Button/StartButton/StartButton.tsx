import { useNavigate } from "react-router-dom";
import config from "../../../config/config.json";
import { ACCESS_KEY } from "../../../constants/auth/auth.constant";
import { StartBtn, BtnText } from "./startButton.style";

export function StartButton() {
  const navigate = useNavigate();
  const authUrl = `http://dauth.b1nd.com/login?client_id=${config.CLIENTID}&redirect_uri=http://localhost:3000/callback`;
  return (
    <StartBtn onClick={() => (window.location.href = authUrl)}>
      <BtnText>멘투멘 시작하기</BtnText>
    </StartBtn>
  );
}
