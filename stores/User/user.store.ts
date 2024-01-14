import { UserInfo } from "@/types/User/user.type";
import { atom } from "recoil";

export const UserDataAtom = atom<UserInfo | null>({
  key: "userDataKey",
  default: null,
});
