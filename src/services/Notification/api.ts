import { ACCESS_TOKEN_KEY } from "@/src/constants/Auth/auth.constant";
import { customAxios } from "@/src/lib/Axios/customAxios";
import token from "@/src/lib/token/token";
import {
  NoticeCheckResponse,
  NoticeListResponse,
} from "@/src/types/Notice/notice.type";

class NotificationApi {
  public async getNoticeCheckApi(): Promise<NoticeCheckResponse | void> {
    if (token.getCookie(ACCESS_TOKEN_KEY) !== undefined) {
      const { data } = await customAxios.get("/notice/check");
      return data;
    }
    return;
  }

  public async getNoticeListApi(): Promise<NoticeListResponse> {
    const { data } = await customAxios.get("/notice/list");
    return data;
  }
}

export default new NotificationApi();
