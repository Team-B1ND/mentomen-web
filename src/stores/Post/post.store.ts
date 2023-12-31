import { atom } from "recoil";
import { ListItemType } from "../../types/List/list.type";

export const ActiveEditPostFormAtom = atom<boolean>({
  key: "activeEditPostAtom",
  default: false,
});

export const EditPostDataAtom = atom<ListItemType | null>({
  key: "editPostDataAtom",
  default: null,
});
