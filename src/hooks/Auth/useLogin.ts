import { useLocation, useNavigate } from "react-router-dom";
import { ACCESS_KEY, REFRESH_KEY } from "../../constants/Auth/auth.constant";
import authRepository from "../../repositories/Auth/auth.repository";
import { useEffect } from "react";
import queryString from "query-string";

export const useLogin = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      console.log(code);
      const request = async () => {
        try {
          const { data } = await authRepository.login({
            code: code.toString(),
          });

          localStorage.setItem(ACCESS_KEY, data.accessToken);
          localStorage.setItem(REFRESH_KEY, data.refreshToken);
          navigate("/");
        } catch (e) {
          console.log(e);
        }
      };
      request();
    }
  }, [code]);
};
