import { ACCESS_KEY, REFRESH_KEY } from "@/constants/Auth/auth.constant";
import token from "@/lib/token/token";
import { useRouter } from "next/router";
import { useCallback } from "react";

export function useLogout() {
  const router = useRouter();

  const onLogout = useCallback(() => {
    const answer = window.confirm("로그아웃 하시겠습니까?");
    if (answer === true) {
      token.removeCookie(ACCESS_KEY);
      token.removeCookie(REFRESH_KEY);

      window.alert("로그아웃 되었습니다!");
      router.push("/start");
    }
  }, [router]);
  return { onLogout };
}
