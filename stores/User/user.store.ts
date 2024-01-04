import { atom } from "recoil";

export const UserIdAtom = atom<number>({
  key: "userIdKey",
  default: 0,
});

export const UserProfileAtom = atom<string>({
  key: "userProfileKey",
  default: "",
});
