import { atom } from "recoil";

export const Modal = atom<boolean>({
    key: "Modal",
    default: false,
})