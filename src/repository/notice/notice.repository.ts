import { customAxios } from "../../lib/axios/customAxios";
import { NoticeCheckResponse, NoticeListResponse } from "../../types/notice/notice.type";

class noticeRepository{
    public async getNoticeCheck():Promise<NoticeCheckResponse>{
        const { data } = await customAxios.get('/notice/check');
        return data;
    }

    public async getNoticeList():Promise<NoticeListResponse>{
        const { data } = await customAxios.get('/notice/list');
        return data;
    }
}

export default new noticeRepository();