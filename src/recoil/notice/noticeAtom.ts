import { atom } from "recoil";

export const NOTICE = atom<boolean>({
    key: "NOTICE",
    default:false,
});

export const NOTICECHK = atom<string>({
    key: "NOTICECHK",
    default:'NONE',
});