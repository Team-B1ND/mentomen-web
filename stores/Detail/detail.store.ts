import { atom } from "recoil";

export const IsActiveDetailAtom = atom<boolean>({
  key: "isActiveDetailAtom",
  default: false,
});
