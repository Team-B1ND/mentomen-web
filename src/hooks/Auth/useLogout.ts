import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "@/constants/Auth/auth.constant";
import token from "@/lib/token/token";
import { MenToMenToast } from "@/util/Toast/menToMenToast";
import { useRouter } from "next/router";

export function useLogout() {
  const router = useRouter();

  const handleLogoutClick = () => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer === true) {
      token.removeCookie(ACCESS_TOKEN_KEY);
      token.removeCookie(REFRESH_TOKEN_KEY);

      MenToMenToast.showSuccess("로그아웃 되었습니다!");
      router.push("/");
    }
  };

  return { handleLogoutClick };
}
