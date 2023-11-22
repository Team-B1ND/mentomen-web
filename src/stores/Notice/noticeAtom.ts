import { atom } from "recoil";

export const NOTICE = atom<boolean>({
  key: "NOTICE",
  default: false,
});
