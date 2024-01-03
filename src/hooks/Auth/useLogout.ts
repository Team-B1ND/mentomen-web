import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer === true) {
      localStorage.clear();
      B1ndToast.showSuccess("로그아웃 되었습니다!");
      navigate("/start");
    }
  }, [navigate]);
  return { onLogout };
}
