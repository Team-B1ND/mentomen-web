import { atom } from "recoil";

export const IsActiveDetailAtom = atom<boolean>({
  key: "isActiveDetailKey",
  default: false,
});
