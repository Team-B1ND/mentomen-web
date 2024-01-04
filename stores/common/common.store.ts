import { atom } from "recoil";

export const HideHeaderAtom = atom<boolean>({
  key: "hideHeaderKey",
  default: false,
});

export const HideNavAtom = atom<boolean>({
  key: "hideNavKey",
  default: false,
});

export const PostIdAtom = atom<number>({
  key: "postIdKey",
  default: 0,
});
