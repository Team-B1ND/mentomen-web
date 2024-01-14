import { atom } from "recoil";
import { ListItemType } from "@/types/List/list.type";

export const ActivePostFormAtom = atom<boolean>({
  key: "activePostFormKey",
  default: false,
});

export const ActiveEditPostFormAtom = atom<boolean>({
  key: "activeEditPostKey",
  default: false,
});

export const EditPostDataAtom = atom<ListItemType | null>({
  key: "editPostDataKey",
  default: null,
});

export const CountOfPostAtom = atom<number>({
  key: "countOfPostKey",
  default: 0,
});
