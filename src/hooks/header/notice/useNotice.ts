import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { NOTICE } from "../../../recoil/notice/noticeAtom";

export function useNotice(){
    const [NoticeModal,SetNoticeModal] = useRecoilState(NOTICE);

    const onNoticeModal = useCallback(()=>{
        SetNoticeModal(true);
    },[SetNoticeModal]);

    return {onNoticeModal};
}