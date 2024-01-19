import { atom } from "recoil";

export const IsEditCommentAtom = atom<{ isEdit: boolean; commentId: number }>({
  key: "isEditCommentKey",
  default: { isEdit: false, commentId: -1 },
});
