import { atom } from "recoil";

export const HideNavAtom = atom<boolean>({
  key: "hideNavAtom",
  default: false,
});
