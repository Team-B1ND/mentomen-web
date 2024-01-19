import { ACCESS_TOKEN_KEY } from "@/constants/Auth/auth.constant";
import { customAxios } from "@/lib/Axios/customAxios";
import token from "@/lib/token/token";
import {
  NoticeCheckResponse,
  NoticeListResponse,
} from "@/types/Notice/notice.type";

class NoticeRepository {
  public async getNoticeCheck(): Promise<NoticeCheckResponse | void> {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await customAxios.get("/notice/check");
      return data;
    }
    return;
  }

  public async getNoticeList(): Promise<NoticeListResponse> {
    const { data } = await customAxios.get("/notice/list");
    return data;
  }
}

export default new NoticeRepository();
