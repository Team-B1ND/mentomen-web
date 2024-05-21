import type { PostItemType } from "@/src/stories/core";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const ExistingPostDataAtom = atom<PostItemType | null>({
  key: "existingPostDataKey",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const CountOfPostAtom = atom<number>({
  key: "countOfPostKey",
  default: 0,
});
