import { atom } from "recoil";

export const ImgModal = atom<boolean>({
    key: "ImgModal",
    default: false,
})

export const CommentModal = atom<boolean>({
    key:'CommentModal',
    default:false,
})

export const CommentPostId = atom<number>({
    key:'CommentPostId',
    default:0,
})

export const CommentContent = atom<string>({
    key:'CommentContent',
    default:''
})

export const CommentEdit = atom<boolean>({
    key:'CommentEdit',
    default:false,
})