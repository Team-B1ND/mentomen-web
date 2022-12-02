import { useNavigate } from "react-router-dom";
import CONFIG from "../../config.json";
import { ACCESS_KEY, REFRESH_KEY } from "../../constants/auth/auth.constant";
import axios from "axios";
import { useEffect } from "react";

const useSignup = () => {
  const navigate = useNavigate();
  const request = async (code: string) => {
    try {
      const { data } = await axios.post(`${CONFIG.server}/auth/code`, {
        code,
      });
      localStorage.setItem(ACCESS_KEY, data.data.accessToken);
      localStorage.setItem(REFRESH_KEY, data.data.refreshToken);
      navigate("/list");
      window.location.reload();
    } catch (error) {}
  };

  //   useEffect(() => {
  //     if (query) {
  //     }
  //   });
  return {
    request,
  };
};

export default useSignup;
