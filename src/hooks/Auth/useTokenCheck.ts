import { useEffect, useState } from "react";
import { ACCESS_KEY } from "../../constants/Auth/auth.constant";

const useTokenCheck = () => {
  const [isAuthority, setIsAuthority] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(ACCESS_KEY) === null) {
      setIsAuthority(false);
    } else {
      setIsAuthority(true);
    }
  }, []);

  return { isAuthority };
};

export default useTokenCheck;
