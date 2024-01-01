import { atom } from "recoil";

export const UserIdAtom = atom<number>({
  key: "userIdAtom",
  default: 0,
});

export const UserProfileAtom = atom<string>({
  key: "userProfileAtom",
  default: "",
});
