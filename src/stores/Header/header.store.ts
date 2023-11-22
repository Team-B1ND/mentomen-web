import { atom } from "recoil";

export const HideHeaderAtom = atom<boolean>({
  key: "hideHeaderAtom",
  default: false,
});
