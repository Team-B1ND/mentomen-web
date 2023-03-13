import { atom } from "recoil";

export const USERID = atom<number>({
    key: "USERID",
    default: 0,
});