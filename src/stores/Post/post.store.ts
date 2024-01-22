import { atom } from "recoil";
import { ListItemType } from "@/src/types/List/list.type";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const ExistingPostDataAtom = atom<ListItemType | null>({
  key: "existingPostDataKey",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const CountOfPostAtom = atom<number>({
  key: "countOfPostKey",
  default: 0,
});
