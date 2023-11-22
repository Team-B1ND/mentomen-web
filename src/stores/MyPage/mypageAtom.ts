import { atom } from "recoil";

export const MyPageModal = atom<boolean>({
    key: "MyPageModal",
    default: false,
})

export const MyPagePostId = atom<number>({
    key: "MyPagePostId",
    default: 0,
});

export const MypageEditModal = atom<boolean>({
    key: "MyPageEditModal",
    default: false,
});

export const MyPostContent = atom<string>({
    key:"MyPostContent",
    default: "",
})

export const MyPostTag = atom<string>({
    key:"MyPostTag",
    default: "",
});

export const MyPostImg = atom<string[]>({
    key:"MyPostimg",
    default: [],
});

export const ContentPrev = atom<string>({
    key:"ContentPrev",
    default: "",
});

export const TagPrev = atom<string>({
    key:"TagPrev",
    default:'',
})