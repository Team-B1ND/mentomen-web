import { customAxios } from "../../lib/Axios/customAxios";
import {
  NoticeCheckResponse,
  NoticeListResponse,
} from "../../types/Notice/notice.type";

class NoticeRepository {
  public async getNoticeCheck(): Promise<NoticeCheckResponse> {
    const { data } = await customAxios.get("/notice/check");
    return data;
  }

  public async getNoticeList(): Promise<NoticeListResponse> {
    const { data } = await customAxios.get("/notice/list");
    return data;
  }
}

export default new NoticeRepository();
