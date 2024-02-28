import { DAUTH_URL } from "@/src/constants/Auth/auth.constant";

export const redirectToDAuthLogin = () => {
  return (window.location.href = DAUTH_URL);
};
