import type { UserInfo } from "@/src/stories/core";
import { atom } from "recoil";

export const UserDataAtom = atom<UserInfo | null>({
  key: "userDataKey",
  default: null,
});
