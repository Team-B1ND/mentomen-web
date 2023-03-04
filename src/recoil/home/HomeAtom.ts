import { atom } from "recoil";

export const ImgList = atom<string[]>({
    key: "ImgList",
    default:[],
});

export const Text = atom<string>({
    key: "Text",
    default: "",
});

export const Tag = atom<string>({
    key: "Tag",
    default: "",
});

export const Cnt = atom<number>({
    key: "Cnt",
    default: 0,
});
