import { atom } from "recoil";

export const ImgModal = atom<boolean>({
    key: "ImgModal",
    default: false,
})

export const CommentModal = atom<boolean>({
    key:'CommentModal',
    default:false,
})

export const CommentId = atom<number>({
    key:'CommentId',
    default:0,
})

export const CommentContent = atom<string>({
    key:'CommentContent',
    default:''
})

export const ContentPrev = atom<string>({
    key:'ContentPrev',
    default:'',
})

//댓글 수정인지 아닌지 판단해주는 상태관리 로직
export const CommentEdit = atom<boolean>({
    key:'CommentEdit',
    default:false,
})

