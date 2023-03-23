import { useLocation, useNavigate } from "react-router-dom";
import { ACCESS_KEY, REFRESH_KEY } from "../../constants/Auth/auth.constant";
import authRepository from "../../repository/auth/auth.repository";
import { useCallback, useEffect } from "react";
import QueryString from "query-string";

function useLogin() {
  const { search } = useLocation();
  const query = QueryString.parse(search);
  const navigate = useNavigate();
  const request = useCallback(async () => {
    try {
      const { data } = await authRepository.login({
        code: query.code as string,
      });
      localStorage.setItem(ACCESS_KEY, data.accessToken);
      localStorage.setItem(REFRESH_KEY, data.refreshToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (query) {
      request();
    }
  }, [query]);

  return {
    request,
  };
}

export default useLogin;
