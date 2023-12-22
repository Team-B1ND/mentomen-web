import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_KEY, REFRESH_KEY } from "../../constants/Auth/auth.constant";
import token from "../../lib/token/token";

export const useTokenCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = () => {
      const accessToken = token.getToken(ACCESS_KEY);
      const refreshToken = token.getToken(REFRESH_KEY);

      if (!accessToken || !refreshToken) {
        B1ndToast.showInfo("로그인이 필요한 서비스입니다.");
        navigate("/start");
      }
    };
    checkToken();
  }, []);
};
