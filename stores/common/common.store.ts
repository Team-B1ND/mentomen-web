import { atom } from "recoil";

export const HideHeaderAtom = atom<boolean>({
  key: "hideHeaderAtom",
  default: false,
});

export const HideNavAtom = atom<boolean>({
  key: "hideNavAtom",
  default: false,
});

export const PostIdAtom = atom<number>({
  key: "postIdAtom",
  default: 0,
});
